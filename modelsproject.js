const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    fundingGoal: { type: Number, required: true },
    fundsRaised: { type: Number, default: 0 }
});

module.exports = mongoose.model('Project', ProjectSchema);
