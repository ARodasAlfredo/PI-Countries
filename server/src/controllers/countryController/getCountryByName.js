const { Country, Activity } = require('../../db.js');
const { Op } = require('sequelize');

const getCountryByName = async (name) => {
    try {
    const countryByName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: Activity
            });
        return countryByName;
    } catch (error) {
        return null;
}
}

module.exports = {
    getCountryByName
}
