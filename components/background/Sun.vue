<template>
    <div id="Sun" class="sun">
        <div class="wrap">
            <div class="sun_rays">
                <div class="sun_ray" v-for="(item,index) of sun_rays" :key="'sun_ray'+index" :style="getSunRayStyle(index)"></div>
            </div>
            <div class="sun_faces">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sun.vue",
        data(){
            return{
                sun_rays:new Array(36)
            }
        },
        methods:{
            getSunRayStyle(index){
                let style={},
                    angle=360/this.sun_rays.length;
                style.transform=`translate(-50%,-50%) rotateZ(${angle*index}deg)`;
                return style;
            }
        }
    }
</script>

<style scoped>
    .sun{
        width:20vh;
        height:20vh;
        position:absolute;
        top:400px;
        left: 400px;
        transform: translate(-50%,-50%);
        border-radius: 100%;
        background: #ffa500;
    }
    .wrap{
        width:100%;
        height:100%;
        position:relative;
    }
    .sun_faces{
        width:100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        border-radius:100%;
        background: #ff0;
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
        width:1vh;
        height: 1vh;
        background: #111;
        border-radius:50%;
    }
    .mouth{
        transform:rotate(45deg);
        width:4vh;
        height: 4vh;
        border-radius:50%;
        margin:0 auto;
        box-shadow: 1vh 1vh 0 0 #2c3e50;
    }
    .sun_rays{
        width:100%;
        height:100%;
        animation:sun_rotate 10s linear infinite;
    }
    .sun_ray{
        position:absolute;
        height: 2vh;
        top:50%;
        left:50%;
        background:linear-gradient(90deg,transparent 0,transparent 50%,#ffa500 50%);
        transition:all 1s ease-in-out;
    }
    .sun_ray:nth-child(even){
       animation:sun_ray_even 2s linear infinite alternate;
    }
    .sun_ray:nth-child(odd){
        animation:sun_ray_odd 2s linear infinite alternate;
    }

    @keyframes sun_rotate{
        from{
            transform: rotateZ(0deg);
        }
        to{
            transform: rotateZ(360deg);
        }
    }

    @keyframes sun_ray_even {
        from{
            width:140%;
        }
        to{
            width:110%;
        }
    }

    @keyframes sun_ray_odd {
        from{
            width:110%;
        }
        to{
            width:140%;
        }
    }
</style>