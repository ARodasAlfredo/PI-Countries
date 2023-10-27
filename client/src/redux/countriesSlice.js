import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countries: [],
    allCountries: [],
    countryDetails: [],
    activities: [],
    allActivities: [],
    order: "a-z",
    filter: "all",
    currentPage: 1,
    countriesPerPage: 10
}

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload;
            state.allCountries = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;

            if (action.payload === "all") {
                state.countries = state.allCountries;
            }
            else if (action.payload === "africa") {
                state.countries = state.allCountries.filter(country => country.continent.toLowerCase() === "africa");
            }
            else if (action.payload === "south america") {
                state.countries = state.allCountries.filter(country => country.continent.toLowerCase() === "south america");
            }            
            else if (action.payload === "north america") {
                state.countries = state.allCountries.filter(country => country.continent.toLowerCase() === "north america");
            }            
            else if (action.payload === "asia") {
                state.countries = state.allCountries.filter(country => country.continent.toLowerCase() === "asia");
            }            
            else if (action.payload === "europe") {
                state.countries = state.allCountries.filter(country => country.continent.toLowerCase() === "europe");
            }            
            else if (action.payload === "oceania") {
                state.countries = state.allCountries.filter(country => country.continent.toLowerCase() === "oceania");
            }
            else if (action.payload === "antarctica") {
                state.countries = state.allCountries.filter(country => country.continent.toLowerCase() === "antarctica");
            }
            else if (action.payload === "countries with activities") {
                state.countries = state.allCountries.filter(country => country.activities.length > 0);
            }
            else if (action.payload === "countries without activities") {
                state.countries = state.allCountries.filter(country => country.activities.length === 0);
            }
            else if (action.payload.includes('activity')) {
                state.countries = state.allCountries.filter(country => country.activities.some(activity => activity.name === action.payload.slice(9).trim()))
            }
        },
        setOrder: (state, action) => {
            state.order = action.payload;
                if (action.payload === "a-z") {
                    state.countries.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    state.allCountries.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    
                }
                else if (action.payload === "z-a") {
                    state.countries.sort((a, b) => {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    state.allCountries.sort((a, b) => {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    });
                }
                else if (action.payload === "population: high-low") {
                    state.countries.sort((a, b) => {
                        if (a.population < b.population) {
                            return 1;
                        }
                        if (a.population > b.population) {
                            return -1;
                        }
                        return 0;
                    });
                    state.allCountries.sort((a, b) => {
                        if (a.population < b.population) {
                            return 1;
                        }
                        if (a.population > b.population) {
                            return -1;
                        }
                        return 0;
                    });
                }
                else if (action.payload === "population: low-high") {
                    state.countries.sort((a, b) => {
                        if (a.population > b.population) {
                            return 1;
                        }
                        if (a.population < b.population) {
                            return -1;
                        }
                        return 0;
                    });
                    state.allCountries.sort((a, b) => {
                        if (a.population > b.population) {
                            return 1;
                        }
                        if (a.population < b.population) {
                            return -1;
                        }
                        return 0;
                    });
                }
                else if (action.payload === "area: high-low") {
                    state.countries.sort((a, b) => {
                        return b.area - a.area;
                    });
                    state.allCountries.sort((a, b) => {
                        return b.area - a.area;
                    });
                }
                else if (action.payload === "area: low-high") {
                    state.countries.sort((a, b) => {
                        return a.area - b.area;
                    });
                    state.allCountries.sort((a, b) => {
                        return a.area - b.area;
                    })
                }
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setCountriesPerPage: (state, action) => {
            state.countriesPerPage = action.payload;
        },
        getCountriesByName: (state, action) => {
            state.countries = action.payload;
            state.countries = state.allCountries.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()));
        },
        setActivitiesList: (state, action) => {
            state.activities = action.payload;
            state.allActivities = action.payload;

        },
        postActivity: (state, action) => {
            state.activities.push(action.payload);
            state.allActivities.push(action.payload);
            state.allCountries.find(country => country.id === action.payload.countries.includes(country.id)).activities.push(action.payload);
        }
    }
});

export const { setCountries, setFilter, setOrder, setCurrentPage, setCountriesPerPage, getCountriesByName, postActivity, setActivitiesList } = countriesSlice.actions;
export default countriesSlice.reducer;



