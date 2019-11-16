<template>
    <!--制作一种日夜交替的背景-->
    <div id="background" class="background">
        <Sun></Sun>
        <Moon></Moon>
    </div>
</template>

<script>
    import Moon from "./Moon";
    import Sun from "./Sun";
    export default {
        name: "Background.vue",
        components:{
            Moon,
            Sun
        }
    }
</script>

<style scoped>
    .background{
        width:100vw;
        height: 100vh;
        background: #000;
    }
</style>