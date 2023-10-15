const { getCountries } = require('../../controllers/countryController/getCountries.js');

const getCountriesHandler = async (req, res) => {

    try {
        const response = await getCountries();
        if (!response) {
                throw new Error('No countries found');
        } 
        return res.status(200).json(response);
    } catch (error) {
        if (error.message === 'No countries found') {
            return res.status(404).send({error: error.message})
        }
        return res.status(500).send({error: error.message})
    }
};

module.exports = {
    getCountriesHandler
};