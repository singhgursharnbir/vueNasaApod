import Vuex from "vuex";
import Vue from "vue";
import VuexPersistence from "vuex-persist";
import ApodActions from "./modules/ApodActions";
import UserState from "./modules/UserState";
import Cookies from "js-cookie";

//Load Vuex
Vue.use(Vuex);

//Initialise vuex persist
const vuexCookie = new VuexPersistence({
  saveState: (key, state) => {
    Cookies.set(key, JSON.stringify(state.UserState.userName), {
      expires: 1
    });
  }
});

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    savedDate: state.ApodActions.SavedDate
  }),
  modules: [ApodActions]
});

export default new Vuex.Store({
  modules: {
    ApodActions,
    UserState
  },
  plugins: [vuexCookie.plugin, vuexLocal.plugin]
});
