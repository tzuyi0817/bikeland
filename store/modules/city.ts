import { defineStore } from 'pinia';

interface CityState {
  city: string;
}

const defaultState: CityState = {
  city: '',
};

export const useCityStore = defineStore('bikeLand_city', {
  state: () => defaultState,
  actions: {
    setCity(city: string) {
      this.city = city;
    },
  },
  persist: {
    storage: persistedState.localStorage,
    paths: [
      'city',
    ],
  },
});
