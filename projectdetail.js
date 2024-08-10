import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios.get(`/api/projects/${id}`)
            .then(response => setProject(response.data))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <div>
            {project ? (
                <>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <p>Funding Goal: {project.fundingGoal}</p>
                    <p>Funds Raised: {project.fundsRaised}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProjectDetail;
