"use client"
import useFetch from "./useFetch";

type Post = { id: number; title: string; body: string };

function PostsList() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostsList;
