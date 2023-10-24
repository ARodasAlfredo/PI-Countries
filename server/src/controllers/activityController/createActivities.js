const { Activity } = require('../../db.js');

const createActivities = async (name, difficulty, duration, season, countries) => {
    try {
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });
        await activity.addCountries(countries);
        return activity;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createActivities
}