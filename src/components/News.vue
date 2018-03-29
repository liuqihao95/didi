<template>
    <div id="news">
        <mt-header fixed title="新闻列表">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="rwp">
            <div class="content-news" v-for="msg in arr" :key="msg._id">
                <h2 v-text="msg.title">我是标题</h2>
                <p v-html="msg.contentText">我是内容</p>
                <h5 v-text="msg.createTime">我是时间</h5>
                <div>
                    <router-link :to="'/newsitem?id='+msg._id">查看详情</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'news',
        data: function () {
            return {
                arr:{}
            }
        },
        methods: {
            goto(){
                for(var i=0;i<this.arr.length;i++){
                    // console.log(this.arr[i].createtime);
                    var timestamp3 = 1403058804;
                    var newDate = new Date();
                    newDate.setTime(timestamp3 * 1000);
                    // console.log(newDate.toLocaleDateString()); // 2014年6月18日
                    // console.log(newDate.toLocaleString()); // 2014年6月18日 上午10:33:24
                    // console.log(newDate.toLocaleTimeString()); // 上午10:33:24
                }
            },
            getnew(){
                this.$axios.get('getArticle').then(res => {
                    this.arr = res.data.data;
                    for(var i=0;i<this.arr.length;i++){
                        // console.log(this.arr[i].createtime);
                        var timestamp3 = this.arr[i].createtime;
                        var newDate = new Date();
                        newDate.setTime(timestamp3 * 1000);
                        // console.log(newDate.toLocaleDateString()); // 2014年6月18日
                        // console.log(newDate.toLocaleString()); // 2014年6月18日 上午10:33:24
                        // console.log(newDate.toLocaleTimeString()); // 上午10:33:24
                        this.arr[i].createtime=newDate.toLocaleString()
                    }
                })
            },
            getNews() {
                this.$axios.get('getArticle')
                    .then((res) => {
                        this.arr = res.data.data;
                        // for(var i=0;i<this.arr.length;i++){
                        //     // console.log(this.arr[i].createtime);
                        //     var timestamp3 = this.arr[i].createtime;
                        //     var newDate = new Date();
                        //     newDate.setTime(timestamp3 * 1000);
                        //     // console.log(newDate.toLocaleDateString()); // 2014年6月18日
                        //     // console.log(newDate.toLocaleString()); // 2014年6月18日 上午10:33:24
                        //     // console.log(newDate.toLocaleTimeString()); // 上午10:33:24
                        //     this.arr[i].createtime=newDate.toLocaleString()
                        // }
                        // // console.log(res);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        mounted() {
            this.getnew();
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
        padding-top: 52px;
        padding-bottom: 8px;
        width: 92%;
        margin: 0 auto 0;
    }

    .rwp .content-news {
        text-align: left;
        width: 90%;
        height: 120px;
        margin: 2% auto;
        background: #fff;
    }

    .rwp .content-news h2 {
        text-align: center;
        box-sizing: border-box;
        height: 30px;
        padding: 10px 1% 0;
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        border-top: 1px solid #cfcfcf;
        border-right: 1px solid #cfcfcf;
        border-left: 5px solid #006eb8;
    }

    .rwp .content-news p {
        height: 36px;
        font-size: 12px;
        line-height: 1.5em;
        padding-bottom: 4px;
        color: #b8b8b8;
        overflow: hidden;
        padding-left: 5%;
        padding-right: 5%;
        border-right: 1px solid #cfcfcf;
        border-left: 5px solid #006eb8;
    }

    .rwp .content-news h5 {
        height: 34px;
        padding: 10px 10% 0;
        font-size: 14px;
        text-align: right;
        line-height: 20px;
        font-weight: 600;
        border-right: 1px solid #cfcfcf;
        border-left: 5px solid #006eb8;
    }

    .rwp .content-news div {
        height: 20px;
        background: #f5f5f5;
        border-top: 1px solid #cfcfcf;
    }

    .rwp .content-news div a {
        width: 60px;
        float: right;
        display: block;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        color: #fff;
        background: #7a7a7a;

    }
</style>