import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import Button from '../atoms/Button';
import { Heading4, BodyText, SmallText } from '../atoms/Typography';
import { Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  const handleReadMore = async () => {
    try {
      // Increment views count in Firebase
      const postRef = doc(db, 'posts', post.id);
      await updateDoc(postRef, {
        views: increment(1)
      });
      console.log('✅ Views incremented for post:', post.id);
    } catch (error) {
      console.error('❌ Error incrementing views:', error);
    }
    
    // Navigate to post detail page
    navigate(`/post/${post.id}`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border border-border">
      {post.image && (
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags?.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Heading4 className="group-hover:text-primary transition-colors duration-200">
          {post.title}
        </Heading4>
      </CardHeader>
      <CardContent className="pt-0">
        <BodyText className="mb-4 line-clamp-3">
          {post.excerpt}
        </BodyText>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          {/* <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div> */}
        </div>
        <Button 
          onClick={handleReadMore}
          className="w-full"
          variant="outline"
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;