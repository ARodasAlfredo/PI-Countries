const { getCountryById } = require("../../controllers/countryController/getCountryById");

const getCountryByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getCountryById(id);
        if (!response) {
            throw new Error('Country not found');
        }
        return res.status(200).json(response);
    } catch (error) {
        if (error.message === 'Country not found') {
            return res.status(404).send({error: error.message})
        }
        return res.status(500).send({error: error.message})
    }
}

module.exports = {
    getCountryByIdHandler
}