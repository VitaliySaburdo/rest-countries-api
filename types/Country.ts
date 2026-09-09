export interface Country {
  uuid: string;

  names: {
    common: string;
    official: string;
    native: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
    alternates: string[];
    translations: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };

  flag: {
    emoji: string;
    unicode: string;
    html_entity: string;
    description: string;
    url_png: string;
    url_svg: string;
    colors: {
      dominant: string;
      prominent: string;
      palette: string[];
      swatches: {
        [key: string]: string;
      };
    };
  };

  population: number;

  region: string;
  subregion: string;

  capitals: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    attributes: {
      [key: string]: unknown;
    };
  }[];

  borders: string[];

  continents: string[];

  area: {
    kilometers: number;
    miles: number;
  };

  coordinates: {
    lat: number;
    lng: number;
  };

  landlocked: boolean;

  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];

  languages: {
    bcp47: string;
    iso639_1: string;
    iso639_2b: string;
    iso639_2t: string;
    iso639_3: string;
    name: string;
    native_name: string;
  }[];

  calling_codes: string[];

  cars: {
    driving_side: string;
    signs: string[];
  };

  classification: {
    dependency: boolean;
    dependency_type: string;
    disputed: boolean;
    iso_status: string;
    sovereign: boolean;
    un_member: boolean;
    un_observer: boolean;
  };

  codes: {
    alpha_2: string;
    alpha_3: string;
    ccn3: string;
    cioc: string;
    fifa: string;
    fips: string;
    gec: string;
  };

  date: {
    academic_year_start: {
      day: number;
      month: number;
    };
    fiscal_year_start: {
      corporate: unknown;
      government: unknown;
      personal: unknown;
    };
    start_of_week: string;
  };

  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra?: {
      f: string;
      m: string;
    };
  };

  descriptions: {
    short: string;
    long: string;
  };

  economy: {
    gini_coefficient: {
      [key: string]: unknown;
    };
  };

  government_type: string;

  links: {
    google_maps: string;
    official: string;
    open_street_maps: string;
    wikipedia: string;
  };

  memberships: {
    african_union: boolean;
    arab_league: boolean;
    asean: boolean;
    brics: boolean;
    commonwealth: boolean;
    eu: boolean;
    eurozone: boolean;
    g7: boolean;
    g20: boolean;
    nato: boolean;
    oecd: boolean;
    opec: boolean;
    schengen: boolean;
    un: boolean;
  };

  number_format: {
    decimal_separator: string;
    thousands_separator: string;
  };

  parent: {
    alpha_2: string;
    alpha_3: string;
  };

  postal_code: {
    format: string;
    regex: string;
  };

  timezones: string[];

  tlds: string[];

  units: {
    measurement_system: string;
    temperature_scale: string;
  };

  assets: unknown[];

  leaders: unknown[];

  _meta: {
    lastUpdatedTimestamp: number;
  };
}