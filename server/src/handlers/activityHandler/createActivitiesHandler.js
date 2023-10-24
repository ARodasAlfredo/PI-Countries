const { createActivities } = require("../../controllers/activityController/createActivities");

const createActivitiesHandler = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const response = await createActivities(name, difficulty, duration, season, countries);
        if (!name || !difficulty || !duration || !season || !countries) {
            throw new Error("Please complete all fields")
        }
        return res.status(200).json(response);
    } catch (error) {
        if (error.message === "Please complete all fields") {
            return res.status(400).send({error: error.message})
        }
        return res.status(500).send({error: error.message})
    }
}

module.exports = {
    createActivitiesHandler
}

