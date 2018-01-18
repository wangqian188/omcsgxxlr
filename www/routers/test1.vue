<style>
    body {
        margin: 0 !important;
        padding: 0 !important;
    }
    .cwkz{font-size: 0.38rem !important;font-weight: 900;margin-top: 0.5rem !important;margin: auto;width: 5rem;}
    .sssj{color: #999999;margin-top: 0.2rem !important;margin: auto;width: 1.5rem;}
</style>
<template>
    <div style="background-color: white !important;">
        <div>dajfkjdkajfkjasdkfjkdjk</div>
        <div style="margin: 0 auto;width:16rem;margin-bottom: 2rem;margin-top: 5rem;" @click="ddd">
            <a href="javascript:;"><iframe width="100%" vertical-align="middle" src="http://beyond.3dnest.cn/play/?m=zq_jw_1"></iframe></a>
        </div>


    </div>
</template>

<script>
    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    import {Indicator} from 'mint-ui';
    import {InfiniteScroll} from 'mint-ui';
    import echarts from  'echarts';


    export default {
        components: {
            header1,
            footer1,

        },
        data () {
            return {
                xmname:"朝外MEN",

            }
        },
        methods: {
            ddd(){
                alert(5555);
            },




        },

        mounted(){



        }
    }
</script>
