import { PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border p-4 mb-2">
      <h2>{title}</h2>
      <p>{body}</p>
      <small>User ID: {userId}</small>
    </div>
  );
}
