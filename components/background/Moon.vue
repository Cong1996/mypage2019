<template>
    <div id="Moon" class="moon">
        <div class="wrap">
            <div class="faces_box">
                <div class="eyes_box">
                    <div class="eyes"></div>
                    <div class="eyes"></div>
                </div>
                <div class="mouth"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Moon.vue"
    }
</script>

<style scoped>
    .moon{
        width:20vh;
        height:20vh;
        position:absolute;
        top:400px;
        left: 600px;
        transform: translate(-50%,-50%);
        border-radius: 100%;
        background: #fff;
    }
    .wrap{
        width:100%;
        height:100%;
        position:relative;
        border-radius: 50%;
        overflow: hidden;
    }
    .moon>.wrap::before{
        content:'';
        height: 20%;
        width: 20%;
        position: absolute;
        top:60%;
        right: 0%;
        border-radius: 50%;
        background-color:#bfbfbf;
        box-shadow: 0 0 2px 4px #999 inset;
    }

    .moon>.wrap::after{
        content:'';
        height: 40%;
        width: 40%;
        position: absolute;
        top:10%;
        left: -10%;
        border-radius: 50%;
        background-color:#bfbfbf;
        box-shadow: 0 0 2px 4px #999 inset;
    }
    .faces_box{
        position: absolute;
        top:50%;
        left:50%;
        width:10vh;
        transform: translate(-50%,-50%);
    }
    .eyes_box{
        display:flex;
        witdh:100%;
        justify-content: space-around;
    }
    .eyes{
        position: relative;
        transform:rotate(45deg);
        width:4vh;
        height: 4vh;
        border-radius:50%;
        margin:0 auto;
        background: #2c3e50;
        overflow: hidden;
    }

    .eyes::after{
        content:'';
        position: absolute;
        width:40%;
        height:40%;

        background: #ffff00;
        border-radius: 50%;
    }

    @keyframes changeEye{
        from{

        }
    }

    .mouth{
        transform:rotate(45deg);
        width:4vh;
        height: 4vh;
        border-radius:50%;
        margin:0 auto;
        box-shadow: 2vh 2vh 0 0 #2c3e50;
    }
</style>