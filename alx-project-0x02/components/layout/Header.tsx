import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link href="/home" className="mr-4">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts" className="mr-4">Posts</Link>
    </nav>
  );
}
