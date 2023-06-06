// import { defineStore } from 'pinia';
// import type { User } from '@/types/user';

// interface UserState {
//   user: Partial<User>;
// }

// const defaultState: UserState = {
//   user: {},
// };

// export const useUserStore = defineStore('lion-game-user', {
//   state: () => defaultState,
//   getters: {
//     isLogin(state) {
//       return Object.hasOwn(state.user, 'userId');
//     },
//   },
//   actions: {
//     setUser(user: Partial<User>) {
//       const token = useCookie('lion_game_token');

//       this.user = user;
//       token.value = this.user.token ?? '';
//     },
//   },
//   persist: {
//     storage: persistedState.localStorage,
//     paths: [
//       'user',
//     ],
//   },
// });
