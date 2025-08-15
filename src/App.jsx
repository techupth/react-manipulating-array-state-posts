import { useState } from "react";
import { initialPosts } from "./raw-data/posts";
import PostCard from "./components/PostCard";
import "./App.css"; 

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id) =>
    setPosts(prev => prev.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p)));

  const handleDislike = (id) =>
    setPosts(prev => prev.map(p => (p.id === id ? { ...p, likes: Math.max(0, p.likes - 1) } : p)));

  return (
    <main className="container">               {/* ✅ NEW: คอนเทนเนอร์กลางหน้า */}
      <h1 className="title">Posts</h1>         {/* ✅ NEW: หัวข้อกลาง */}
      <section className="posts">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onLike={() => handleLike(post.id)}
            onDislike={() => handleDislike(post.id)}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
