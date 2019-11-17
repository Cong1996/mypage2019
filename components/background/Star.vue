<template>
    <div class="star" :style="getStarStyle">
        <div class="wrap">
            <div class="face" :style="getFaceStyle">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Star.vue",
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
    .star{
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
        border-radius: 50%;
        transform: rotateZ(45deg);
    }

    .circle::before{
        position: absolute;
        content:'';
        width:1vh;
        height: 1vh;
        border-radius: 50%;
        background: #fff;
        transform: translateY(-50%);
        box-shadow: 0 0 20px gold,
                    0 0 40px gold,
                    0 0 60px gold,
                    0 0 80px gold,
                    0 0 100px gold,
                    0 0 0 5px rgba(255, 255, 0, 0.1);
    }
    @keyframes rotateStar {
        to {
            transform: rotate(1.5turn);
        }
    }
</style>