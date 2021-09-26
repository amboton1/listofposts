import React, { useState } from 'react'
import Post from './Post';

const Posts = ({post, comments}) => {
    const { id, title } = post;
    const [filteredComments, setFilteredComments] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const getComments = (id) => {
        setFilteredComments(comments.filter(comment => comment.postId === id));
        setIsExpanded(!isExpanded);
    }

    return <Post id={id} title={title} filteredComments={filteredComments} isExpanded={isExpanded} getComments={getComments} />
}

export default Posts
