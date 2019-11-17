<template>
    <!--制作一种日夜交替的背景-->
    <div id="background" class="background">
        <div class="backgroundImg"></div>
        <Sun v-if="false"></Sun>
        <Moon v-if="false"></Moon>
        <StarMgr></StarMgr>
    </div>
</template>

<script>
    import Moon from "./Moon";
    import Sun from "./Sun";
    import StarMgr from "./StarMgr";
    export default {
        name: "Background.vue",
        components:{
            Moon,
            Sun,
            StarMgr
        }
    }
</script>

<style scoped>
    .background{
        width:100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        background: linear-gradient(rgba(48,46,48,1) 0,rgba(52,38,99,1) 100%);
    }
    .backgroundImg{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        -webkit-backdrop-filter: blur(5px);
    }
</style>