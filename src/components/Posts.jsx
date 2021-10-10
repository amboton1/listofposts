import React, { useState } from 'react'
import Post from './Post';

const Posts = ({post, getComments, comments}) => {
    const { id, title } = post;
    const [isExpanded, setIsExpanded] = useState(false);

    const handleComments = (id) => {
        getComments(id);
        setIsExpanded(!isExpanded);
    }

    return <Post id={id} title={title} comments={comments} isExpanded={isExpanded} handleComments={handleComments} />
}

export default Posts;

