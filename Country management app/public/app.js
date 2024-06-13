"use strict";
// RainyCountry class
class RainyCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}
// SnowyCountry class
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}
// IslandCountry class
class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a land size of ${this.landSize} square miles.`;
        return element;
    }
}
// Input data
const countries = [
    new RainyCountry("USA", 25),
    new SnowyCountry("Norway", 21),
    new RainyCountry("Canada", 39),
    new IslandCountry("Japan", 145404),
    new SnowyCountry("Sweden", 23),
    new IslandCountry("Australia", 2967012)
];
// Empty list for snowy countries
const snowyCountriesList = [];
// Function to check if a country is a SnowyCountry
function isSnowyCountry(country) {
    return country.snowLevel !== undefined;
}
// Filters the list of countries and add snowy countries to snowyCountriesList
countries.forEach(country => {
    if (isSnowyCountry(country)) {
        snowyCountriesList.push(country);
    }
});
// Renders the country information to the DOM
function renderCountryInfo() {
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = "<h2>All Countries</h2>";
        countries.forEach(country => {
            const countryElement = document.createElement('p');
            output.appendChild(country.getInfo(countryElement));
        });
        output.innerHTML += "<h2>Snowy Countries</h2>";
        snowyCountriesList.forEach(country => {
            const countryElement = document.createElement('p');
            output.appendChild(country.getInfo(countryElement));
        });
        const totalSnowLevel = snowyCountriesList.reduce((acc, country) => acc + country.snowLevel, 0);
        const totalSnowElement = document.createElement('p');
        totalSnowElement.textContent = `Total snow level: ${totalSnowLevel} inches.`;
        output.appendChild(totalSnowElement);
    }
}
// Calls the function to render the information
renderCountryInfo();
