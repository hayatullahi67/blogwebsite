import React, { useState, useEffect } from 'react';
import BlogCard from '../molecules/BlogCard';
import AdsenseAd from '../AdsenseAd';

const BlogGrid = ({ posts }) => {
  const [adPositions, setAdPositions] = useState(new Set());
  const AD_FREQUENCY = 4;

  // Check if an ad should be shown at a specific position
  const shouldShowAd = (position) => {
    return adPositions.has(position);
  };

  // Function to add an ad position when ad is loaded
  const onAdLoaded = (position) => {
    setAdPositions(prev => new Set([...prev, position]));
  };

  // Build items array with dynamic ad insertion
  const items = [];
  posts.forEach((post, idx) => {
    items.push(<BlogCard key={post.id} post={post} />);
    
    // Check if we should insert an ad after this post
    const adPosition = Math.floor((idx + 1) / AD_FREQUENCY);
    if ((idx + 1) % AD_FREQUENCY === 0) {
      // Create a placeholder that will be replaced if ad loads
      items.push(
        <AdsenseAd 
          key={`ad-${idx}`} 
          position={adPosition}
          onAdLoaded={() => onAdLoaded(adPosition)}
        />
      );
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items}
    </div>
  );
};

export default BlogGrid;