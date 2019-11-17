<template>
    <div class="star_mgr">
        <div class="wrap">
            <Star v-for="(item,index) of starList" :key="'star'+index" :index="index"></Star>
        </div>
    </div>
</template>

<script>
    import Star from "./Star";
    export default {
        name: "StarMgr.vue",
        data(){
          return{
              starList:new Array(14)
          }
        },
        components:{
            Star
        }
    }
</script>

<style scoped>
    .star_mgr{
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