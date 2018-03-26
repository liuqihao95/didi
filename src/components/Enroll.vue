<template>
    <div id="enroll" class="dnf">
        <div>
            <mt-header fixed title="注册客户">
                <router-link to="/mydidi" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="con">
            <form action="">
                <label>
                    <span for="username" class="form-span">客户姓名：</span>
                    <input type="text" class="from-input" id="username" v-model="name">
                </label>
                <label>
                    <label for="phone" class="form-span">手机号：</label>
                    <input type="tel" class="from-input" id="phone" v-model="phone">
                </label>
                <label>
                    <label for="shenfen" class="form-span">身份证号：</label>
                    <input type="tel" class="from-input" id="shenfen" v-model="idNum">
                </label>
                <label>
                    <span class="form-span">客户类型：</span>
                    <select v-model="status">
                        <option :value="0">钻石会员</option>
                        <option :value="1">白金会员</option>
                        <option :value="2">黄金会员</option>
                        <option :value="3">白银会员</option>
                        <option :value="4">黄铜会员</option>
                    </select>
                </label>
                <label>
                    <span class="form-span">客户状态：</span>
                    <select v-model="level">
                        <option :value="0">潜在客户</option>
                        <option :value="1">发展客户</option>
                        <option :value="2">正式客户</option>
                        <option :value="3">有钱客户</option>
                        <option :value="4">土豪客户</option>
                    </select>
                </label>
                <label id="agree">
                    <input type="checkbox" id="agrww" checked="checked">
                    <label for="agrww">我已经同意以下条款<a href="#">《用户使用协议》</a></label>
                </label>
            </form>
            <div class="lol">
                <div class="enroll">
                    <button @click="register">完成注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'enroll',
        data() {
            return {
                name: '',
                phone: '',
                idNum: '',
                status: '0',
                level: '0'
            }
        },
        methods: {
            register() {
                this.$axios.post('postAdd', {
                    name: this.name,
                    phone: this.phone,
                    idNum: this.idNum,
                    status: this.status,
                    level: this.level,
                }, {
                    withCredentials: true

                })
                    .then((response) => {
                        console.log(response.data)
                        if (response.data.ret) {
                            // this.$router.push('/index');
                            alert(response.data.msg)
                            this.$router.push('/enroll')
                        } else {
                            alert("注册失败")
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>
    form {
        padding-top: 45px;
        border: none;
        background: #fff;
        font-size: 16px;
    }

    form label {
        display: block;
        height: 55px;
        width: 100%;
        border-bottom: 2px dotted #c2c2c3;
        font-size: 16px;
        line-height: 55px;

    }

    form .form-span {
        float: left;
        display: inline-block;
        height: 100%;
        width: 30%;
        text-align: right;
        border: none;
    }

    form .from-input {
        float: right;
        display: inline-block;
        width: 70%;
        height: 100%;
        border: none;
        padding-left: 5px;
    }

    form select {
        box-sizing: border-box;
        width: 66%;
        height: 100%;
        border: none;
        margin: 0 2%;
        -moz-appearance: none;
        -webkit-appearance: none;
        background: url("../../static/images/bg.png") no-repeat scroll right center transparent;
        padding-right: 14px;

    }

    form select:focus {
        outline: none;
    }

    #agree {
        text-align: center;
    }

    #agree input {
        display: none;
    }

    #agree label {
    }

    #agree label:before {
        content: "\a0"; /*不换行空格*/
        display: inline-block;
        /*vertical-align: .2em;*/
        font-size: 16px;
        width: 1em;
        height: 1em;
        box-sizing: border-box;
        margin-right: .3em;
        border-radius: .2em;
        line-height: .65em;
        border: 1px solid #649ac9;
    }

    #agree input:checked + label:before {
        content: "\2713";
        color: yellow;
        font-size: 16px;
        font-weight: 900;
        background: #649ac9;
    }

    #agree a {
        color: #006eb4;
    }

    .lol {
        position: relative;
    }

    #enroll {
        background: #f5f5f5;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .enroll button {
        display: block;
        width: 280px;
        height: 60px;
        line-height: 40px;
        font-size: 20px;
        margin: 40px auto 0;
        border: 1px solid #006eb4;
        border-radius: 8px;
        background: #006eb4;
        color: #fff;
    }
</style>