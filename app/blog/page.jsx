import Link from "next/link";
import { posts } from "./data";

export default function BlogHome() {
  return (
    <div>
      <h1>Blog Home</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
