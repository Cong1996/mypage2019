<template>
    <div class="comet_mgr">
        <div class="wrap">
            <Comet v-for="(item,index) of cometList" :key="'star'+index" :index="index"></Comet>
        </div>
    </div>
</template>

<script>
    import Comet from "./Comet";
    export default {
        name: "CometMgr.vue",
        data(){
          return{
              cometList:new Array(15)
          }
        },
        components:{
            Comet
        }
    }
</script>

<style scoped>
    .comet_mgr{
        position: fixed;
        width:100%;
        height: 100%;
        top:0%;
        left:0;
        transform: translateY(50%);
    }
    .wrap{
        width:100%;
        height: 100%;
        position: relative;
    }
</style>