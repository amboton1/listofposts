import React from 'react';
import './post.css';

const Post = ({id, title, handleComments, comments, isExpanded}) => {
    const renderComments = () => {
        return isExpanded ? (
            comments && comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <div className="ui comments">
                        <div className="comment">
                            <a href="#!" className="avatar">
                                <img src="/images/avatar.jpg" alt="avatar" />
                            </a>
                            <div className="content">
                                <a href="#!" className="author">{comment.email}</a>
                                <div className="text">
                                    {comment.body}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        ) : null
    }

    return (
        <ul className="collection with-header">
            <li className="collection-item">
                <div className="flexed-item">
                    {title}
                    <div className="secondary-content">
                        <button onClick={() => handleComments(id)} aria-label="Show more button" className="btn-floating btn-medium waves-effect waves-light red">
                            {isExpanded ? <i className="material-icons">expand_less</i> : <i className="material-icons">expand_more</i>} 
                        </button>
                    </div>
                </div>
                <div className="comments">
                    {renderComments()}
                </div>
            </li>
        </ul>
    )
}

export default Post;
