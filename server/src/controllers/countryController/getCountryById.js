const { Country, Activity } = require('../../db.js');

const getCountryById = async (id) => {
    try {
        const country = await Country.findByPk(id.toUpperCase(), {include: Activity});
        return country;
    } catch (error) {
        return null;
    }
}

module.exports = {
    getCountryById
}