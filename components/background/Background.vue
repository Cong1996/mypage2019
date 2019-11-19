<template>
    <!--制作一种日夜交替的背景-->
    <div id="background" class="background" :style="{background:backgroundLinearGradient}">
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
        data(){
          return{
            startColor:"",
            endColor:"",
            startColorPercent:0.1
          }
        },
        methods:{
            updateColor(){
                let nowHour=this.$store.state.nowDate.getHours(),
                    dayColorChange=window.dataConfig.dayColorChange,
                    index=Math.floor(Math.abs(nowHour-12)/3);
                this.startColor=nowHour>12?dayColorChange[index+1]:dayColorChange[index];
                this.endColor=nowHour>12?dayColorChange[index]:dayColorChange[index+1];
                let nowMinutes=(nowHour-12)%3*60+this.$store.state.nowDate.getMinutes();
                this.startColorPercent=nowMinutes/(3*60);
                let that=this;
                setTimeout(function(){
                    that.$store.commit('updateNowDate');
                    that.updateColor();
                },10*600)
            }
        },
        mounted(){
            this.updateColor();

        },
        computed:{
            backgroundLinearGradient(){
                return `linear-gradient(${this.startColor} ${this.startColorPercent*100}%,${this.endColor} 100%)`;
            }
        },
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