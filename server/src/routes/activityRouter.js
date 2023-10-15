const { Router } = require("express");
const { createActivitiesHandler } = require("../handlers/activityHandler/createActivitiesHandler");
const { getActivitiesHandler } = require("../handlers/activityHandler/getActivityHandler");

const activitiesRouter = Router();

activitiesRouter.post('/', createActivitiesHandler);
activitiesRouter.get('/', getActivitiesHandler);

module.exports = activitiesRouter;