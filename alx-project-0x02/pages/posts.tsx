import { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';

export default function Posts() {
  return (
    <>
      <Header />
      <h1>Posts Page</h1>
      const [posts, setPosts] = useState([]);
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(setPosts);
      }, []);
      
      return posts.map(post => (
        <PostCard key={post.id} {...post} />
      ));
    </>
  );
}
