import { useEffect, useState } from 'react';
import UserCard from '@/components/common/UserCard';

const [users, setUsers] = useState([]);
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(setUsers);
}, []);

return users.map(user => (
  <UserCard key={user.id} {...user} />
));
