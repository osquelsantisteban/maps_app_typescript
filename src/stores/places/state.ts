/* export interface Place {
  // id: string;
  osm_id: string;
  name: string;
  location: [number, number];//[lat, lng]
} */
import type { PlacesResponse } from '@/interfaces/places';

export interface PlacesState {
  userLocation: [number, number] | null;
  isLoading: boolean;
  isLoadingPlaces: boolean;
  places: PlacesResponse[];
}

export const state: PlacesState = {
  userLocation: null,
  isLoading: false,
  isLoadingPlaces: false,
  places: [],
};

export interface StateInterface{
  places: PlacesState,
}