import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [posts, setPost] = useState(postData);

  function addLike(postId) {
    const upDatePostData = posts.map((post) => {
      const currentPost = Number(postId);
      if (post.id === currentPost) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPost(upDatePostData);
  }

  function disLike(postId) {
    const upDatePostData = posts.map((post) => {
      if (post.id === postId) {
        if (post.likes > 0) {
          return { ...post, likes: post.likes - 1 };
        } else {
          alert("ไม่เหลือที่ว่างให้คุณแสดงความเกลียดชังแล้ว... กรุณาผ่อนคลายและค่อย ๆ คลองสติลดความเกลียดชังซะ");
          return post;
        }
      }
      return post;
    });
    setPost(upDatePostData);
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>

      {posts.map((post) => {
        return (
          <div key={post.id} className="post-list">
            <div className="post-item">
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{post.likes}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button className="like-button" onClick={() => addLike(post.id)}>
                  Like
                </button>
                <button className="dislike-button" onClick={() => disLike(post.id)}>
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
