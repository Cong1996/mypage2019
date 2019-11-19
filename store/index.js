import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        nowDate:null
    },
    mutations:{
        init(){
            store.commit('updateNowDate');
        },
        updateNowDate(state){
            state.nowDate=new Date();
        }
    }
});

export default store