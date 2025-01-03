const countryContainer = document.querySelector(".countries-container");
const filterRegion = document.querySelector(".select-filter");
const searchFilter = document.querySelector(".search input");

// Fetch and cache the data for reuse
let allCountries = [];

fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
    allCountries = data; // Cache all countries
    renderCountries(data);
  })
  .catch((error) => console.error("Error fetching all countries:", error));

// Generic function to fetch and handle API responses
function fetchData(url, callback) {
  fetch(url)
    .then((res) => res.json())
    .then(callback)
    .catch((error) => console.error("Error fetching data:", error));
}

// Event listener for region filter
filterRegion.addEventListener('change', () => {
  const region = filterRegion.value;
  if (region === "all") {
    renderCountries(allCountries);
  } else {
    fetchData(`https://restcountries.com/v3.1/region/${region}`, renderCountries);
  }
});

// Event listener for search filter
searchFilter.addEventListener('input', () => {
  const query = searchFilter.value.trim().toLowerCase();
  if (!query) {
    renderCountries(allCountries); // Show all countries when search is empty
  } else {
    fetchData(`https://restcountries.com/v3.1/name/${query}`, renderCountries);
  }
});

// Function to render country cards
function renderCountries(data) {
  if (!Array.isArray(data)) {
    console.error("Expected data to be an array but received:", data);
    countryContainer.innerHTML = "<p>No countries found</p>";
    return;
  }

  countryContainer.innerHTML = data.map((country) => `
    <a href="/country.html?name=${country.name.common}" class="country-card block w-56 md:w-64 rounded-sm shadow transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <img src="${country.flags.svg}" alt="${country.name.common} flag" />
      <div class="card-text p-4 md:p-6 my-2 md:my-3">
        <h3 class="font-extrabold text-lg">${country.name.common}</h3>
        <div class="card-details my-3 md:my-5">
          <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
          <p><b>Region:</b> ${country.region}</p>
          <p><b>Capital:</b> ${country.capital || "N/A"}</p>
        </div>
      </div>
    </a>
  `).join(""); // Use `.join("")` to avoid unnecessary reflows
}
