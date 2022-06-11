import axios from 'axios';
import React, { useState } from 'react';


const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });

        setContent('');
    }

    return (
        <div className='p-2'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input className="form-control" value={content} onChange={e => setContent(e.target.value)} />
                    <button className='btn btn-secondary mt-2'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CommentCreate;