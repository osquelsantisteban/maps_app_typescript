export interface MapState {
    map: L.Map | null;
    markers: L.Marker[];
    distance: number;
    duration: number;
    isLoadingRoute: boolean;
  }
  
  export const state: MapState = {
    map: null,
    markers: [],
    distance: 0,
    duration: 0,
    isLoadingRoute: false,
  };
  