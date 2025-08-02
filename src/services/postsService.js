import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

// Function to fetch all posts from Firebase and format them
export const fetchPosts = async () => {
  try {
    console.log('Fetching posts from Firebase...');
    
    const postsCollection = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsCollection);
    
    const posts = [];
    postsSnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Format the data to match the current UI structure
      const formattedPost = {
        id: doc.id,
        title: data.title || '',
        content: data.content || '',
        excerpt: data.content ? data.content.substring(0, 150) + '...' : '',
        image: data.image || '',
        tags: data.category ? [data.category] : [], // Use category as tags
        date: data.createdAt ? formatDate(data.createdAt) : '',
        readTime: data.content ? Math.ceil(data.content.split(' ').length / 200) : 5
      };
      
      posts.push(formattedPost);
    });
    
    console.log('Posts fetched from Firebase:', posts);
    console.log('Total posts:', posts.length);
    
    return posts;
  } catch (error) {
    console.error('Error fetching posts from Firebase:', error);
    throw error;
  }
};

// Helper function to format date
const formatDate = (timestamp) => {
  if (!timestamp) return '';
  
  // If it's a Firestore timestamp
  if (timestamp.toDate) {
    return timestamp.toDate().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  // If it's a regular date object or string
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Test function to immediately fetch and log posts
export const testFetchPosts = () => {
  console.log('Testing Firebase posts fetch...');
  fetchPosts()
    .then(posts => {
      console.log('✅ Successfully fetched posts:', posts);
    })
    .catch(error => {
      console.error('❌ Error in test fetch:', error);
    });
}; 