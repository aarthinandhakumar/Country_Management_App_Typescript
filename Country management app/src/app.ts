// Defines the ICountry interface
interface ICountry {
  name: string;
  getInfo(element: HTMLElement): HTMLElement;
}

// RainyCountry class
class RainyCountry implements ICountry {
  constructor(public name: string, public rainLevel: number) {}

  getInfo(element: HTMLElement): HTMLElement {
      element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
      return element;
  }
}

// SnowyCountry class
class SnowyCountry implements ICountry {
  constructor(public name: string, public snowLevel: number) {}

  getInfo(element: HTMLElement): HTMLElement {
      element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
      return element;
  }
}

// IslandCountry class
class IslandCountry implements ICountry {
  constructor(public name: string, public landSize: number) {}

  getInfo(element: HTMLElement): HTMLElement {
      element.textContent = `${this.name} has a land size of ${this.landSize} square miles.`;
      return element;
  }
}

// Input data
const countries: ICountry[] = [
  new RainyCountry("USA", 25),
  new SnowyCountry("Norway", 21),
  new RainyCountry("Canada", 39),
  new IslandCountry("Japan", 145404),
  new SnowyCountry("Sweden", 23),
  new IslandCountry("Australia", 2967012)
];

// Empty list for snowy countries
const snowyCountriesList: SnowyCountry[] = [];

// Function to check if a country is a SnowyCountry
function isSnowyCountry(country: ICountry): country is SnowyCountry {
  return (country as SnowyCountry).snowLevel !== undefined;
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
