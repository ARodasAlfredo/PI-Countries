const { Router } = require("express")
const { getCountriesHandler } = require("../handlers/countryHandler/getCountriesHandler");
const { getCountryByIdHandler } = require("../handlers/countryHandler/getCountryByIdHandler");
const { getCountryByNameHandler } = require("../handlers/countryHandler/getCountryByNameHandler");

const countriesRouter = Router();

countriesRouter.get('/search', getCountryByNameHandler);
countriesRouter.get('/', getCountriesHandler);
countriesRouter.get('/:id', getCountryByIdHandler);

module.exports = countriesRouter;