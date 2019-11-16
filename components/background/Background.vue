<template>
    <!--制作一种日夜交替的背景-->
    <div id="background">
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

</style>