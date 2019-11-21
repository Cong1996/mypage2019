<template>
    <div class="star">

    </div>
</template>

<script>
    export default {
        name: "Star.vue"
    }
</script>

<style scoped>
    .star{
        position: absolute;
        left:50%;
        width:1vh;
        height: 1vh;
        background: #fff;
        transform: translateY(-50%);
        box-shadow: 0 0 20px #fff,
        0 0 40px #fff,
        0 0 60px #fff,
        0 0 80px #fff,
        0 0 100px #fff,
        0 0 0 5px rgba(255, 255, 0, 0.1);
        animation:rotateStar 5s linear infinite;
    }

    @keyframes rotateStar {
        to {
            transform:translateY(-50%) rotateZ(1turn);
        }
    }
</style>