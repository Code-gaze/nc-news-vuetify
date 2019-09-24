import Vue from "vue";
import Vuex from "vuex";
import { getTopics } from "../components/api";

Vue.use(Vuex);

const state = {
  //this protery will be the component imported object, not the component name
  currentComponentRendered: {},
  showTopic: false,
  topics: []
};

const mutations = {
  SET_CURRENT_COMPONENT(state, payload) {
    state.currentComponentRendered = payload;
  },
  SET_TOPIC(state, payload) {
    state.showTopic = payload;
  },
  GET_TOPICS(state, payload) {
    state.topics = payload;
  }
};

const actions = {
  getCurrentComponent({ commit }, payload) {
    commit("SET_CURRENT_COMPONENT", payload);
  },
  setTopic({ commit }, payload) {
    commit("SET_TOPIC", payload);
  },
  getTopics({ commit }) {
    return getTopics().then(topics => commit("GET_TOPICS", topics));
  }
};

const getters = {
  currentComponentRendered: state => state.currentComponentRendered,
  showTopic: state => state.showTopic,
  topics: state =>
    state.topics.map(topic => {
      let icon =
        topic.slug === "coding"
          ? "fas fa-code"
          : topic.slug === "football"
          ? "fas fa-futbol"
          : "fas fa-utensils";
      return { ...topic, icon };
    })
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
