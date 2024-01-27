const countriesURL = "https://restcountries.com/v3.1/all";
const filterURL = "?fields=name,capital,region,flags,population";

export async function fetchData() {
  try {
    const response = await fetch(`${countriesURL}${filterURL}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `An error occured with the ${response.status} status code`,
      );
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}
