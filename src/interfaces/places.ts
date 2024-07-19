
export interface PlacesResponse {
    place_id:     number;
    licence:      string;
    osm_type:     string;
    osm_id:       number;
    lat:          string;
    lon:          string;
    class:        string;
    type:         string;
    place_rank:   number;
    importance:   number;
    addresstype:  string;
    name:         string;
    display_name: string;
    boundingbox:  string[];
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    place_name_es: string;
    text:          string;
    place_name:    string;
    bbox?:         number[];
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export interface Context {
    id:           string;
    wikidata?:    Wikidata;
    short_code?:  ShortCode;
    text_es:      string;
    language_es?: Language;
    text:         string;
    language?:    Language;
}

export enum Language {
    Es = "es",
}

export enum ShortCode {
    CR = "cr",
    CRA = "CR-A",
}

export enum Wikidata {
    Q37104 = "Q37104",
    Q502188 = "Q502188",
    Q800 = "Q800",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    foursquare?: string;
    landmark?:   boolean;
    category?:   string;
    maki?:       string;
    address?:    string;
}