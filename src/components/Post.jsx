import { useState } from "react";

function Post(props) {
  const [likeNum, setLikeNum] = useState(props.likes);

  return (
    <div class="post-list">
      <div class="post-item">
        <div class="post-header">
          <h2>
            {props.title} #{props.id}
          </h2>
          <div class="post-social-media-stats">
            <span class="stats-topic">Likes: </span>
            <span class="post-likes">{likeNum}</span>
          </div>
        </div>
        <p class="post-content">{props.content}</p>
        <div class="post-actions">
          <button class="like-button" onClick={() => setLikeNum(likeNum + 1)}>
            Like
          </button>
          <button
            class="dislike-button"
            onClick={() => {
              if (likeNum !== 0) {
                return setLikeNum(likeNum - 1);
              } else if (likeNum === 0) {
                return setLikeNum(likeNum);
              }
            }}
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
