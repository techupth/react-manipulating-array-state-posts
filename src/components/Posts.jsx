import { useState } from "react";

function Posts(props) {
  const [like, setLikes] = useState(props.like);

  const handleLike = () => {
    const newLike = like + 1;
    setLikes(newLike);
  };

  const handleDislike = () => {
    if (like > 0) {
      const newLike = like - 1;
      setLikes(newLike);
    }
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        <div className="post-item">
          <div className="post-header">
            <h2>
              Post Title #{props.id} {props.title}
            </h2>
            <div className="post-social-media-stats">
              <span className="stats-topic">Likes: </span>
              <span className="post-likes">{like}</span>
            </div>
          </div>
          <p className="post-content">
            {props.content}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div className="post-actions">
            <button className="like-button" onClick={handleLike}>
              Like
            </button>
            <button className="dislike-button" onClick={handleDislike}>
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
