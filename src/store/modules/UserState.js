import Cookies from "js-cookie";

//get cookie data
let userCookie = Cookies.get("vuex");

const state = {
  //set username to cookie if there is a userame in cookie if not leave empty
  userName: userCookie ? JSON.parse(userCookie) : "",
  Password: ""
};

const getters = {
  user: state => state
};

const actions = {
  //Action to set user info
  userInfo({ commit }, userName) {
    commit("setUserInfo", userName);
  }
};

const mutations = {
  setUserInfo: (state, userName) => {
    state.userName = userName;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
