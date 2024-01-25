// import { useEffect, useState } from "react";
// import CountryCards from "../../components/CountryCards/CountryCards";
import FilterWrapper from "../../components/Common/FilterWrapper";

const Base = () => {
  // const [countryData, setCountryData] = useState([]);
  // const [allCountries, setAllCountries] = useState(true);
  // const [searchInput, setSearchInput] = useState("");
  // const [searchFilter, setSearchFilter] = useState("");
  // const [filterName, setFilterName] = useState("Filter by Region");
  // Fetches all the countries
  // useEffect(() => {
  //   // The if is necessary so the API is called again when you delete the text inside the search input
  //   if (allCountries) {
  //     setAllCountries(false);
  //     const fetchCountryData = async () => {
  //       try {
  //         const response = await fetch('https://restcountries.com/v3.1/all');
  //         const data = await response.json();
  //         setCountryData(data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchCountryData();
  //   }
  // }, [allCountries]);

  // useEffect(() => {
  //   console.log(searchFilter);
  //   if (searchFilter && searchFilter !== "All") {
  //     const fetchCountryData = async () => {
  //       try {
  //         const response: any = await fetch(
  //           `https://restcountries.com/v3.1/region/${searchFilter}`,
  //         );

  //         if (!response.ok) {
  //           throw new Error(response.status);
  //         }

  //         const data: any = await response.json();
  //         console.log(data);
  //         setCountryData(data);
  //       } catch (error) {
  //         console.log("Filter: ", error);
  //       }
  //     };

  //     fetchCountryData();
  //     setAllCountries(false);
  //   } else if (searchFilter === "All") {
  //     setAllCountries(true);
  //   }
  // }, [searchFilter]);

  // const inputSearch = (e: any) => {
  //   setSearchInput(e.target.value);
  // };
  // // Filters the coutries depending on the inputSearch, if you write something, only that will show up
  // const filteredCountries: any = countryData.filter((country) => {
  //   return country.name.common
  //     .toLowerCase()
  //     .includes(searchInput.toLowerCase());
  // });

  // const filterSearch = (e: any) => {
  //   setSearchFilter(e.target.value);
  //   setFilterName("");
  // };

  return (
    <>
      <FilterWrapper />
      {/* <main>
        {filteredCountries.map((country: any) => (
          <CountryCards
            key={country.name.common}
            flag={country.flags.svg}
            flagAlt={country.flags.alt}
            countryName={country.name.common}
            population={country.population.toLocaleString().replace(/,/g, ".")}
            region={country.region}
            capital={country.capital}
            to={country.name.common}
          />
        ))}
      </main> */}
    </>
  );
};

export default Base;
