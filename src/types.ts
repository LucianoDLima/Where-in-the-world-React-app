interface CountryName {
  common: string;
}

interface Flag {
  svg: string;
}

export type CountriesType = {
  region: string;
  name: CountryName;
  flags: Flag;
  population: string;
  capital: string;
};
