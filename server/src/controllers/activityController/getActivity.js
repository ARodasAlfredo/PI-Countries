const { Activity } = require('../../db.js');

const getActivities = async () => {
    try {
        const activities = await Activity.findAll();
        return activities;
    } catch (error) {
        return null;
    }
}

module.exports = {
    getActivities
}