const { Country, Activity} = require('../../db.js')

const getCountries = async () => {
try {
    const countries = await Country.findAll(
        {
            include: Activity 
        }
    )
    return countries;
} catch (error) {
    return null;
}
}

module.exports = {
    getCountries
}