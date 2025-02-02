
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

export interface PlacesState {
    userLocation: [number, number] | null;
    isLoading: boolean;
    isLoadingPlaces: boolean;
    places: PlacesResponse[];
}
  
export interface StateInterface{
    places: PlacesState,
}

export const placesState: PlacesState = {
    userLocation: null,
    isLoading: false,
    isLoadingPlaces: false,
    places: [],
}