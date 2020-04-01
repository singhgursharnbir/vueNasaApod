//Get variable from local storage
let localStorageVariables = window.localStorage.getItem("vuex");

//Define initial state
const state = {
  image: {
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: ""
  },
  date: "",
  error: "",
  Modalstate: false,
  //check if there is a data stored in local storage for saved date then assign that to saved date otherwise empty
  SavedDate: localStorageVariables
    ? JSON.parse(localStorageVariables).savedDate
    : ""
};

const getters = {
  imageGetter: state => state.image,
  dateGetter: state => state.date,
  err: state => state.error,
  modalState: state => state.Modalstate,
  savedDateGetter: state => state.SavedDate
};

const actions = {
  //action to fetch images
  async fetchApodImage({ commit }, date) {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?${"date=" +
        date}&api_key=xkBToPDdMMm7cBcJFJGhgKf0gPpODV3rf68qVeSr`
    )
      .then(res => res.json())
      .catch(err => commit("setError", err));

    commit("setImage", response);
  },

  //Action to toggle state of modal to control either to show or not
  toggleModalState({ commit }, modalState) {
    commit("setModalState", modalState);
  },

  //action to save favourite date
  saveFavourite({ commit }) {
    commit("setSaveFavourite");
  }
};

const mutations = {
  setImage: (state, ImageData) => {
    state.date = ImageData.date;
    state.image = ImageData;
    state.Modalstate = false;
    state.error = false;
  },
  setError: (state, err) => {
    state.error = err;
  },
  setModalState: (state, modalState) => {
    state.Modalstate = modalState;
  },
  setSaveFavourite: state => {
    state.SavedDate = state.date;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
