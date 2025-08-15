const PostCard = ({ post, onLike, onDislike }) => {
    return (
      <article className="card">
        <header className="card__head">
          <h3 className="card__title">{post.title}</h3>
          <span className="card__likes">Likes: {post.likes}</span>
        </header>
  
        <p className="card__body">{post.body}</p>
  
        <div className="card__actions">
          <button className="btn" onClick={onLike}>Like</button>
          <button className="btn" onClick={onDislike}>Dislike</button>
        </div>
      </article>
    );
  };
  
  export default PostCard;
  
  
  