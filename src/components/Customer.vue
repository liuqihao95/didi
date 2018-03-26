<template>
    <div id="customer">
        <mt-header fixed title="客户管理">
            <router-link to="/mydidi" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="rwp">
            <label>
                <span>请输入要查询的页数</span>
                <input type="text" v-model="pn" @keyup.enter="getcustomer">
            </label>
            <label>
                <span>请输入要查找的姓名</span>
                <input type="text" v-model="userName" @keyup.enter="getcustomer">
            </label>
            <button @click="getcustomer" class="chaxun">查询</button>
            <div class="content-news clearfix" v-for="(msg,index) in arr">
                <div>
                    <p><span class="left">客户序号：</span><span class="right" v-text="index+1"></span></p>
                    <p><span class="left">客户名字：</span><span class="right" v-text="msg.name"></span></p>
                    <p><span class="left">联系电话：</span><span class="right" v-text="msg.phone"></span></p>
                    <p><span class="left">用户类型：</span><span class="right" v-text="msg.status"></span></p>
                    <p><span class="left">用户等级：</span><span class="right" v-text="msg.level"></span></p>
                    <p><span class="left">身份证号：</span><span class="right" v-text="msg.idNum"></span></p>
                    <p><span class="left">创建时间：</span><span class="right" v-text="msg.createTime"></span></p>
                </div>
                <h1>{{msg.level}}</h1>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "customer",
        data: function () {
            return {
                arr: [],
                userName: "",
                pn: "",
                level: ""
            };
        },
        methods: {
            getcustomer() {
                this.$axios
                    .get("getUserlist", {
                        pn: this.pn,
                        userName: this.userName
                    })
                    .then(res => {
                        // console.log(res);
                        for (var i = 0; i < res.data.data.data.length; i++) {
                            // switch (res.data.data.data[i].level) {
                            //     case '0':
                            //         res.data.data.data[i].level = '潜在客户';
                            //         break;
                            //     case '1':
                            //         res.data.data.data[i].level = '发展客户';
                            //         break;
                            //     case '2':
                            //         res.data.data.data[i].level = '正式客户';
                            //         break;
                            //     case '3':
                            //         res.data.data.data[i].level = ' 有钱客户';
                            //         break;
                            //     case '4':
                            //         res.data.data.data[i].level = '土豪客户';
                            //         break;
                            //     default:
                            //         break
                            // }
                            if (res.data.data.data[i].level == "0") {
                                res.data.data.data[i].level = "潜在客户";
                            } else if (res.data.data.data[i].level == "1") {
                                res.data.data.data[i].level = "发展客户";
                            } else if (res.data.data.data[i].level == "2") {
                                res.data.data.data[i].level = "正式客户";
                            } else if (res.data.data.data[i].level == "3") {
                                res.data.data.data[i].level = " 有钱客户";
                            } else {
                                res.data.data.data[i].level = "土豪客户";
                            }
                        }
                        for (var j = 0; j < res.data.data.data.length; j++) {
                            if (res.data.data.data[j].status == "0") {
                                res.data.data.data[j].status = "钻石会员";
                            } else if (res.data.data.data[j].status == "1") {
                                res.data.data.data[j].status = "白金会员";
                            } else if (res.data.data.data[j].status == "2") {
                                res.data.data.data[j].status = "黄金会员";
                            } else if (res.data.data.data[j].status == "3") {
                                res.data.data.data[j].status = "白银会员";
                            } else {
                                res.data.data.data[j].status = "黄铜会员";
                            }
                        }
                        // console.log(res);
                        this.arr = res.data.data.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        mounted() {
            this.getcustomer();
        }
    };
</script>

<style scoped>
    .chaxun {
        display: block;
        width: 70%;
        margin: 20px auto 0;
        border: none;
        background: yellow;
        color: #fff;
        text-align: center;
        height: 30px;
        line-height: 30px;
    }

    #customer {
        background: #f5f5f5;
    }

    .rwp {
        padding-top: 55px;
        width: 94%;
        margin: 0 auto;
        font-size: 16px;
    }

    label {
        display: block;
        width: 100%;
    }

    .rwp .content-news {
        position: relative;
        margin-top: 20px;
        padding: 10px 0;
    }

    .rwp .content-news div:first-child {
        float: left;
        width: 75%;
        border: 1px solid #cfcfcf;
        border-left: 5px solid #006eb8;
        background: #fff;
    }

    .rwp .content-news h1 {
        float: left;
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 10px;
        line-height: 100px;
        font-size: 16px;
        text-align: center;
        padding: 0 1px;
        top: 50%;
        left: 89%;
        background: #ff6700;
        transform: translate(-50%, -50%);
    }

    .rwp .content-news p {
        height: 30px;
        line-height: 30px;
        color: #b8b8b8;
    }

    .rwp .content-news p .left {
        float: left;
        width: 35%;
        height: 30px;
    }

    .rwp .content-news p .right {
        float: left;
        width: 65%;
        height: 30px;
    }

    .clearfix::after {
        content: "";
        clear: both;
        display: block;
        visibility: hidden;
        overflow: hidden;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
    }
</style>