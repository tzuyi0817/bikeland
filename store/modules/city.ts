import { defineStore } from 'pinia';

interface CityState {
  city: string;
  townName: string;
}

const defaultState: CityState = {
  city: '',
  townName: '',
};

export const useCityStore = defineStore('bikeLand_city', {
  state: () => defaultState,
  actions: {
    setCity(city: string) {
      this.city = city;
    },
    setTownName(townName: string) {
      this.townName = townName;
    },
  },
  persist: {
    storage: persistedState.localStorage,
    paths: [
      'city',
    ],
  },
});
