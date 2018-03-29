<template>
    <div>
        <mt-header fixed title="工程案例">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="rwp">
            <div class="content-news" v-for="msg in arr" :key="msg._id">
                <img :src="msg.img" alt="">
                <p v-text="msg.address">我是标题</p>
                <p v-text="msg.createTime">我是时间</p>
                <p v-text="msg.title">我是时间</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data: function () {
            return {
                arr: []
            }
        },
        methods: {
            getprojects() {
                this.$axios.get('getProjects')
                    .then((res) => {
                        this.arr = res.data.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        mounted() {
            this.getprojects()
        }
    }
</script>

<style scoped>
    #news {
        background: #f5f5f5;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 61px;
    }

    .rwp {
        padding-top: 45px;
        width: 92%;
        margin: 0 auto 0;

        font-size: 18px;
        color: #484848;
        text-align: left;
    }
    .rwp .content-news {
        border: 1px solid #fff;
        margin-top: 20px;
    }
    .rwp div:last-child{
        padding-bottom: 61px;
    }
    .rwp img{
        display: block;
        width: 95%;
        height: 140px;
        margin: 0 auto 0;

    }
    .rwp p{
        margin: 0 3% 0;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        color: #b8b8b8;
    }
    /*.rwp .content-news h2 {*/
        /*text-align: center;*/
        /*box-sizing: border-box;*/
        /*height: 30px;*/
        /*padding: 10px 1% 0;*/
        /*font-size: 14px;*/
        /*line-height: 20px;*/
        /*font-weight: 600;*/
        /*border-top: 1px solid #cfcfcf;*/
        /*border-right: 1px solid #cfcfcf;*/
        /*border-left: 5px solid #006eb8;*/
    /*}*/

    /*.rwp .content-news p {*/
        /*height: 36px;*/
        /*font-size: 12px;*/
        /*line-height: 1.5em;*/
        /*padding-bottom: 4px;*/
        /*color: #b8b8b8;*/
        /*overflow: hidden;*/
        /*padding-left: 5%;*/
        /*padding-right: 5%;*/
        /*border-right: 1px solid #cfcfcf;*/
        /*border-left: 5px solid #006eb8;*/
    /*}*/

    /*.rwp .content-news h5 {*/
        /*height: 34px;*/
        /*padding: 10px 10% 0;*/
        /*font-size: 14px;*/
        /*text-align: right;*/
        /*line-height: 20px;*/
        /*font-weight: 600;*/
        /*border-right: 1px solid #cfcfcf;*/
        /*border-left: 5px solid #006eb8;*/
    /*}*/

    /*.rwp .content-news div {*/
        /*height: 20px;*/
        /*background: #f5f5f5;*/
        /*border-top: 1px solid #cfcfcf;*/
    /*}*/

    /*.rwp .content-news div a {*/
        /*width: 60px;*/
        /*float: right;*/
        /*display: block;*/
        /*font-size: 12px;*/
        /*line-height: 20px;*/
        /*text-align: center;*/
        /*color: #fff;*/
        /*background: #7a7a7a;*/

    /*}*/
</style>