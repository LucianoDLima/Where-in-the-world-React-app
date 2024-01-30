interface CountryName {
  common: string;
  official: string;
}

interface Flag {
  svg: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface DriveSide {
  side: "right" | "left";
}

export type CountriesType = {
  borders: { [key: string]: string };
  capital: string;
  car: DriveSide;
  continents: string[];
  currencies: { [key: string]: Currency };
  flags: Flag;
  languages: { [code: string]: string };
  name: CountryName;
  population: string;
  region: string;
  subregion: string;
  tld: string[];
};
