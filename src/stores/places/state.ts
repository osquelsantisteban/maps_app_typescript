export interface Place {
  id: string;
  name: string;
  location: [number, number];//[lng, lat]
}

export interface PlacesState {
  userLocation: [number, number] | null;
  isLoading: boolean;
  places: Place[];
}

export const state: PlacesState = {
  userLocation: null,
  isLoading: false,
  places: [],
};

export interface StateInterface{
  places: PlacesState,
}