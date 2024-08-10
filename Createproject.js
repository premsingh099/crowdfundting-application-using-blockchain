import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [fundingGoal, setFundingGoal] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/projects', { name, description, fundingGoal });
            history.push('/projects');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Project Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Funding Goal:</label>
                    <input type="number" value={fundingGoal} onChange={(e) => setFundingGoal(e.target.value)} required />
                </div>
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;
