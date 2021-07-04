import { createStore } from 'vuex'

const store = createStore({
    state:{
        baseUrl : null,
        exhibitList: [],
    },
    getters:{
        getBaseUrl: state => state.baseUrl,
        getExhibitList: state => state.exhibitList,
    },
    mutations:{
        initBaseUrl(state, url){
            state.baseUrl = url;
        },
        intiExhibit(state, resList){
            state.exhibitList = resList;
        },
    },
    actions:{
        initBaseUrl({commit}, url){
            commit('initBaseUrl', url)
        },
        initExhibit({commit}, resList){
            commit('intiExhibit', resList)
        },
    }
})

export default store