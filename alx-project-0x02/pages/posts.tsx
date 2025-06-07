import { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';

const [posts, setPosts] = useState([]);
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(setPosts);
}, []);

return posts.map(post => (
  <PostCard key={post.id} {...post} />
));
