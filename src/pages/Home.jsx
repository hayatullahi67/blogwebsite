import React, { useState, useEffect } from 'react';
import MainLayout from '../templates/MainLayout';
import BlogGrid from '../components/organisms/BlogGrid';
import { Heading1, Heading2, BodyText } from '../components/atoms/Typography';
import { Badge } from '../components/ui/badge';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import postsData from '../data/posts.json';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    setPosts(postsData);
  }, []);

  // Get all unique tags
  const allTags = [...new Set(posts.flatMap(post => post.tags || []))];

  // Filter posts based on search and tag
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || (post.tags && post.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading1 className="mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Mind of Amin
          </Heading1>
          <BodyText className="max-w-2xl mx-auto mb-8 text-lg">
            A personal blog exploring philosophy, technology, and the art of thoughtful living. 
            Join me on a journey through ideas that shape our modern world.
          </BodyText>
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.slice(0, 6).map((tag) => (
              <Badge key={tag} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Heading2 className="mb-8 text-center">Latest Thoughts</Heading2>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={selectedTag === '' ? 'default' : 'outline'}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedTag('')}
                >
                  All
                </Badge>
                {allTags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <BlogGrid posts={filteredPosts} />
          ) : (
            <div className="text-center py-12">
              <BodyText>No articles found matching your criteria.</BodyText>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;