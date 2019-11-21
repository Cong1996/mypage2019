<template>
    <div class="comet" :style="getStarStyle">
        <div class="wrap">

            <div class="face" :style="getFaceStyle">
                <div class="circle">
                    <Star></Star>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Star from "./Star";
    export default {
        name: "Comet.vue",
        components:{
            Star
        },
        data(){
          return{
              widthCell:150,
              starColor:[
                  {
                      headColor:'white',
                      bodyColor:'rgba(255,255,255,1)'
                  },{
                      headColor:'white',
                      bodyColor:'rgba(178,123,195,1)'
                  },{
                      headColor:'white',
                      bodyColor:'rgba(126,86,177,1)'
                  },{
                      headColor:'white',
                      bodyColor:'rgba(214,86,233,1)'
                  },{
                      headColor:'white',
                      bodyColor:'rgba(109,203,247,1)'
                  },{
                      headColor:'white',
                      bodyColor:'rgba(250,220,150,1)'
                  }
              ]
          }
        },
        props:{
            index:{
                required:true,
                type:Number
            }
        },
        methods:{

        },
        computed:{
            getStarStyle(){
                let style={};
                let width=(this.index+1)*this.widthCell+'px';
                style.width=width;
                style.height=width;
                return style;
            },
            getFaceStyle(){
                let style={};
                let angle=180+Math.ceil(Math.random()*(225-180));
                style.transform= `rotateZ(${angle}deg)`;
                style.animationDuration=`${10+Math.ceil(Math.random()*20)}s`;
                style.animationName="'rotateStar'";
                style.animationTimingFunction='linear';
                style.animationIterationCount='infinite';
                style.color=`${this.starColor[Math.min(Math.floor(Math.random()*this.starColor.length),this.starColor.length-1)].bodyColor}`;
                return style;
            }
        }
    }
</script>

<style scoped>
    .comet{
        position: absolute;
        width: 1000px;
        height: 1000px;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .wrap{
        width:100%;
        height: 100%;
        position: relative;
    }
    .face{
        position: absolute;
        border-radius: 50%;
        border-style: solid;
        width: 100%;
        height: 100%;
        color:rgba(109,203,247,1);
        border-color:currentColor transparent transparent transparent;
        border-width: .2vh .2vh 0 0;
        animation:rotateStar 5s linear infinite;

    }
    .circle{
        position: relative;
        width: 100%;
        height: 100%;
        transform: rotateZ(45deg);
    }

    @keyframes rotateStar {
        to {
            transform: rotate(1.5turn);
        }
    }
</style>