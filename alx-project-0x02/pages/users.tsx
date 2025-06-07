import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="space-y-4">
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
