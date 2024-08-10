import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <Link to={`/project/${project._id}`}>{project.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create">Create New Project</Link>
        </div>
    );
};

export default ProjectList;
