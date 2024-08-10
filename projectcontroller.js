const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createProject = async (req, res) => {
    try {
        const { name, description, fundingGoal } = req.body;
        const newProject = new Project({
            name,
            description,
            fundingGoal
        });
        await newProject.save();
        res.json(newProject);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
