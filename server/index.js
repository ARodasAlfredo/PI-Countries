const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: false }).then(() => {
server.listen(PORT, async () => {
  const allCountries = await Country.findAll();
  if (allCountries.length < 1) {
    const { data } = await axios.get("http://localhost:5000/countries");
    const countries = data.map((country) => {
      return {
        id: country.cca3,
        name: country.name?.common,
        flag: country.flags?.png,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : "no capital",
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });
    await Country.bulkCreate(countries);
    console.log("Countries loaded");
  }
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
