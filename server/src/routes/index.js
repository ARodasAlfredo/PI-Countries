const { Router } = require("express");
const countriesRouter = require("./countryRouter");
const activitiesRouter = require("./activityRouter");

const primaryRouter = Router();

primaryRouter.use('/countries', countriesRouter);
primaryRouter.use('/activity', activitiesRouter);

module.exports = primaryRouter;
