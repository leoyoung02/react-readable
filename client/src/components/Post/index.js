// External Dependencies
import React from 'react';

// Our Dependencies
import styles from './index.scss';
import formatTimestamp from 'src/app/util/formatTimestamp';

export default ({ post, onClickVote }) => (
  <li key={post.id} className="post-container">
    <div className="top-left-data">
    <span className="date">{formatTimestamp(post.timestamp)}</span>
    <div className="comment">
      <span className="img">comment</span>
      <span className="comment-count">10</span>
    </div>
    </div>
    <div className="card">
      <div className="meta">
        <div className="likes-container">
          <span className="likes-count">
            {post.voteScore > 0 ? `+${post.voteScore}` : post.voteScore}
          </span>
          <div className="likes-buttons">
            <span onClick={() => onClickVote(post.id, 'upVote')} className="up-vote"></span>
            <span onClick={() => onClickVote(post.id, 'downVote')} className="down-vote"></span>
          </div>
        </div>
      </div>
      <div className="card-content">
        <h2>{post.title}</h2>
        <div className="card-details">
          <p className="description">{post.body}</p>
          <span className="author">by {post.author}</span>
        </div>
      </div>
    </div>
  </li>
)