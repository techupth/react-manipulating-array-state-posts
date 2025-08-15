const PostCard = ({ post, onLike, onDislike }) => {
  return (
    <article className="post-card">
      <header className="post-card__header">
        <h3 className="post-card__title">{post.title}</h3>
        <span className="post-card__likes">Likes: {post.likes}</span>
      </header>

      <p className="post-card__body">{post.body}</p>

      <div className="post-card__actions">
        <button className="btn btn-like" onClick={onLike}>
          Like
        </button>
        <button className="btn btn-dislike" onClick={onDislike}>
          Dislike
        </button>
      </div>
    </article>
  );
};

export default PostCard;

