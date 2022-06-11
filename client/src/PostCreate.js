import React, { useState } from "react";
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
        window.location.reload(true);
    };

    return <div className="card">
        <div className="card-header">
            New Posts
        </div>
        <div className="card-body">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                </div>
                <button className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    </div>;
};

export default PostCreate;