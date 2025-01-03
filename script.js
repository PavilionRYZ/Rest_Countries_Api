const countryContainer = document.querySelector(".countries-container");
fetch('https://restcountries.com/v3.1/all').then((res) => res.json()).then((data) => {
    data.forEach((country) => {
        const countryCard = document.createElement("a");
        countryCard.href = `/country.html?name=${country.name.common}`;
        countryCard.classList.add(
            'country-card',
            'block',
            'w-56',
            'md:w-64',
            'rounded-sm',
            'shadow',
            'transition-transform',
            'duration-500',
            'ease-in-out',
            'transform',
            'hover:scale-105',
            'hover:shadow-lg'
        );

        countryCard.innerHTML = `
 <img src=${country.flags.svg} alt="flag" srcset="" />
          <div class="card-text p-4 md:p-6 my-2 md:my-3">
            <h3 class="font-extrabold text-lg">${country.name.common}</h3>
            <div class="card-details my-3 md:my-5">
              <p><b>Population:</b>${country.population.toLocaleString('en-IN')}</p> 
              <p><b>Region:</b>${country.region}</p>
              <p><b>Capital:</b>${country.capital}</p>
            </div>
          </div>`

        countryContainer.append(countryCard);
    })
})
