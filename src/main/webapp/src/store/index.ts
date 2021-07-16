import { createStore } from 'vuex'

const store = createStore({
    state:{
        baseUrl : null, // QuarkusのURL
        exhibitList: [],    // 展示一覧
        commentList: [],    // 展示コメント一覧
    },
    getters:{
        getBaseUrl: state => state.baseUrl,
        getExhibitList: state => state.exhibitList,
        getCommentList: state => state.commentList,
    },
    mutations:{
        initBaseUrl(state, url){
            state.baseUrl = url;
        },
        intiExhibit(state, resList){
            state.exhibitList = resList;
        },
        initComment(state, resList){
            state.commentList = resList;
        }
    },
    actions:{
        initBaseUrl({commit}, url){
            commit('initBaseUrl', url)
        },
        initExhibit({commit}, resList){
            commit('intiExhibit', resList)
        },
        initComment({commit}, resList){
            commit('initComment', resList)
        }
    }
})

export default store