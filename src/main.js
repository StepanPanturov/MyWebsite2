const countryListDiv = document.getElementById("country-list");
const countryDetailsDiv = document.getElementById("country-details");


async function fetchCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  renderCountryList(countries);
}


function renderCountryList(countries) {
  countryListDiv.innerHTML = countries
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .map(
      (country) => `
        <button class="country-btn" data-name="${country.name.common}">
          ${country.name.common}
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".country-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      fetchCountryDetails(btn.dataset.name);
    })
  );
}


async function fetchCountryDetails(name) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const [country] = await res.json();
  countryDetailsDiv.innerHTML = `
    <h2>${country.name.common}</h2>
    <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="150" />
    <p><strong>Столица:</strong> ${country.capital}</p>
    <p><strong>Регион:</strong> ${country.region}</p>
    <p><strong>Население:</strong> ${country.population.toLocaleString()}</p>
  `;
}

fetchCountries();
