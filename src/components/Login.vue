<template>
    <div id="login">
        <div>
            <mt-header fixed title="登录">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="nav">
            <img src="../../static/images/zheng06.jpg" alt="">
        </div>
        <div class="dd-input">
            <ddinput label="用户名：" v-model="userName" class="dd" type="tel"></ddinput>
            <ddinput label="密码：" type="password" v-model="pwd"></ddinput>
        </div>
        <div class="enroll">
            <button @click="login">登录</button>
            <button @click="go">免费注册</button>
        </div>
    </div>
</template>

<script>
    import ddinput from './DDimput.vue'
    import axios from 'axios'

    export default {
        name: 'login',
        data() {
            return {
                label: '',
                userName:'15690511738',
                pwd:'666666',
            }
        },
        methods: {
            login() {
                this.$axios.post('getLogin', {
                    pwd: this.pwd,
                    userName: this.userName,
                }, {
                    withCredentials: true

                })
                    .then((response) => {
                        if(response.data.ret){
                            // this.$router.push('/index');
                            alert(response.data.msg)
                            this.$router.push('/mydidi')
                        }else{
                            alert(response.data.msg)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            go(){
                this.$router.push('/register')
            }
        },
        components: {
            ddinput
        },
    }
</script>

<style scoped>

    #enroll {
        background: #f5f5f5;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 61px;
    }

    .nav {
        padding-top: 90px;
    }

    .nav img {
        display: block;
        width: 70px;
        height: 70px;
        margin: 0 auto 0;
        border-radius: 50%;
        /*border: 1px solid #fff;*/
    }

    .enroll {
        height: 80px;
        border: 1px solid #f5f5f5;
    }

    .dd-input {
        width: 95%;
        margin: 0 auto;
        border: 1px solid #c4c4c4;
        border-radius: 10px;
    }

    .enroll button:first-child {
        display: block;
        width: 280px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        margin: 20px auto;
        border: 1px solid #006eb4;
        border-radius: 8px;
        background: #006eb4;
        color: #fff;
    }

    .enroll button:last-child {
        display: block;
        width: 280px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        margin: 20px auto;
        border: 1px solid #006eb4;
        border-radius: 8px;
        background: #fff;
        color: #006eb4;
    }

    .dd-input .dd {
        border-bottom: 1px solid #c4c4c4;
    }
</style>