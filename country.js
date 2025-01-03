const countryDetails = document.querySelector(".country-details");
const countryName = new URLSearchParams(window.location.search).get("name");
const countryNameElement = document.querySelector(".country-name");
const flagImage = document.querySelector(".flag-div img");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subregion = document.querySelector(".subregion");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector(".border-country");
const loading = document.querySelector(".loading");


document.querySelector('.back-btn').addEventListener('click', function () {
    if (history.length > 1) {
        history.back();
    } else {
        window.location.href = '/localhost:5173';
    }
});


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
        const country = data[0];
        console.log(country);

        // const borders = country.borders || [];
        countryNameElement.innerText = country.name.common;
        flagImage.src = country.flags.svg;
        population.innerText = country.population.toLocaleString('en-IN');
        region.innerText = country.region;
        capital.innerText = country.capital;
        topLevelDomain.innerText = country.tld;
        if (country.name.nativeName) {
            nativeName.innerText = Object.values(country.name.nativeName)[0].common;
        } else {
            nativeName.innerText = country.name.common;
        }
        if (country.subregion) {
            subregion.innerText = country.subregion;
        }
        if (country.capital) {
            capital.innerText = country.capital;
        }
        if (country.currencies) {
            currencies.innerText = Object.values(country.currencies).map((currencies) => currencies.name).join(', ');
        }
        if (country.languages) {
            languages.innerText = Object.values(country.languages).join(', ');
        }
        if (country.borders) {
            country.borders.forEach((border) => {
                fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) => res.json()).then(([border]) => {
                    const borderCountryTag = document.createElement('a');
                    borderCountryTag.classList.add(
                        'border-country-tag',
                        'px-2',
                        'py-1',
                        'bg-gray-200',
                        'text-gray-800',
                        'rounded-sm',
                        'hover:bg-gray-300',
                        'hover:text-gray-900',
                    );
                    borderCountryTag.href = `/country.html?name=${border.name.common}`;
                    borderCountryTag.innerText = border.name.common;
                    borderCountries.append(borderCountryTag);
                })
            })
        }

    })
    .catch((error) => {
        console.error('Error fetching country data:', error);
    });
