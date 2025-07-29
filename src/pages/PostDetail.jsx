import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../templates/MainLayout';
import { Heading1, BodyText, SmallText } from '../components/atoms/Typography';
import { Badge } from '../components/ui/badge';
import Button from '../components/atoms/Button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Separator } from '../components/ui/separator';
import postsData from '../data/posts.json';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const foundPost = postsData.find(p => p.id === parseInt(id));
    setPost(foundPost);

    if (foundPost) {
      // Find related posts by matching tags
      const related = postsData
        .filter(p => p.id !== foundPost.id)
        .filter(p => p.tags?.some(tag => foundPost.tags?.includes(tag)))
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!post) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <BodyText>Post not found.</BodyText>
            <Link to="/" className="inline-block mt-4">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-accent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Heading1 className="mb-4 leading-tight">
            {post.title}
          </Heading1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <SmallText>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</SmallText>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <SmallText>{post.readTime}</SmallText>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleShare}
              className="p-0 h-auto hover:bg-transparent hover:text-primary"
            >
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </Button>
          </div>

          <Separator className="mb-8" />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <BodyText key={index} className="mb-6 leading-relaxed text-foreground">
              {paragraph}
            </BodyText>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-semibold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/post/${relatedPost.id}`}
                  className="group block"
                >
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {relatedPost.tags?.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <SmallText className="line-clamp-2">
                      {relatedPost.excerpt}
                    </SmallText>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </MainLayout>
  );
};

export default PostDetail;