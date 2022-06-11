import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
    const [comment, setComment] = useState([]);

    const fecthData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComment(res.data);
    };

    useEffect(() => {
        fecthData();
    }, []);

    const renderedComments = comment.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    });

    return (<div>
        <ul>{renderedComments}</ul>
    </div>);
}

export default CommentList;