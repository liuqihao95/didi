<template>
    <div id="enroll" class="resigon">
        <div>
            <mt-header fixed title="用户注册">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="con">
            <form action="">
                <label>
                    <span class="form-span">客户姓名</span>
                    <input type="text" v-model="name" class="from-input">
                </label>
                <label>
                    <span class="form-span">密码</span>
                    <input type="text" class="from-input" v-model="pwd">
                </label>
                <label>
                    <span class="form-span">手机号</span>
                    <input type="tel" class="from-input" v-model="phone">
                </label>
                <label>
                    <span class="form-span">身份证号</span>
                    <input type="tel" class="from-input" v-model="idNum">
                </label>
                <label>
                    <span class="form-span">客户类型</span>
                    <select name="" v-model="type">
                        <option value="0">钻石会员</option>
                        <option value="1">白金会员</option>
                        <option value="2">黄金会员</option>
                        <option value="3">白银会员</option>
                        <option value="4">黄铜会员</option>
                    </select>
                </label>
                <div class="sex">
                    <span class="form-span">性别</span>
                    <div class="from-input">
                        <input :value="0" type="radio" name="sex" id="sexmen" v-model="sex">
                        <label for="sexmen">男</label>
                        <input :value="1" type="radio" name="sex" id="sexwomen" v-model="sex">
                        <label for="sexwomen">女</label>
                    </div>
                </div>
                <div class="sex">
                    <span class="form-span">注册类型</span>
                    <div class="from-input">
                        <input type="radio" name="userType" value="0" id="yuangong" v-model="userType">
                        <label for="yuangong">员工</label>
                        <input type="radio" name="userType" value="1" id="kehu" v-model="userType">
                        <label for="kehu">客户</label>
                    </div>
                </div>
                <label>
                    <span class="form-span">Email</span>
                    <input type="text" class="from-input" v-model="email">
                </label>
                <label>
                    <span class="form-span">联系地址</span>
                    <input type="text" class="from-input" v-model="address">
                </label>
                <div id="agree">
                    <input type="checkbox" id="agrww" checked="checked">
                    <label for="agrww">我已经同意以下条款<a href="#">《用户使用协议》</a></label>
                </div>
            </form>
            <div class="enroll">
                <button @click="register">完成注册</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "enroll",
        data() {
            return {
                address: "",
                pwd: "",
                sex: "0",
                type: "0",
                idNum: "",
                email: "",
                phone: "",
                name: "",
                userType: "0"
            };
        },
        methods: {
            register() {
                this.$axios
                    .post(
                        "postRegister",
                        {
                            address: this.address,
                            pwd: this.pwd,
                            sex: this.sex,
                            type: this.type,
                            idNum: this.idNum,
                            email: this.email,
                            phone: this.phone,
                            name: this.name,
                            userType: this.userType
                        },
                        {
                            withCredentials: true
                        }
                    )
                    .then(response => {
                        if (response.data.ret) {
                            // this.$router.push('/index');
                            alert(response.data.msg);
                            this.$router.push("/login");
                        } else {
                            alert(response.data.msg);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        mounted() {
        }
    };
</script>

<style scoped>
    form {
        padding-top: 45px;
        border: none;
        background: #fff;
    }

    form > label {
        display: block;
        height: 45px;
        width: 90%;
        margin: 10px auto 0;
        border: 1px solid #c2c2c3;
        padding: 0 10px;
        border-radius: 10px;
        font-size: 16px;
        line-height: 45px;
    }

    form .form-span {
        float: left;
        display: inline-block;
        height: 45px;
        padding-right: 10px;
        border-right: 1px solid #c2c2c3;
        line-height: 45px;
        width: 27%;
        text-align: right;
        font-size: 16px;
    }

    form .from-input {
        float: right;
        width: 73%;
        height: 43px;
        border: none;
        padding: 0 10px 0;
        font-size: 16px;
        line-height: 43px;
    }

    form select {
        width: 73%;
        height: 43px;
        border: none;
        line-height: 43px;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        background: url("../../static/images/bg.png") no-repeat scroll right center transparent;
        padding-right: 24px;
        box-sizing: border-box;
    }

    select::-ms-expand {
        display: none;
    }

    select:focus {
        outline: none;
    }

    #agree {
        text-align: center;
        border: none;
        display: block;
        height: 45px;
        width: 90%;
        margin: 10px auto 0;
        padding: 0 10px;
        border-radius: 10px;
        font-size: 16px;
        line-height: 45px;
    }

    #agree input {
        display: none;
    }

    #agree label {
        width: 90%;
    }

    #agree label:before {
        content: "\a0"; /*不换行空格*/
        display: inline-block;
        vertical-align: middle;
        font-size: 10px;
        width: 16px;
        height: 16px;
        box-sizing: border-box;
        margin-right: 0.6em;
        border-radius: 50%;
        border: 1px solid #649ac9;
    }

    #agree input:checked + label:before {
        background: #649ac9;
        background-clip: content-box;
        padding: 0.2em;
    }

    #agree a {
        color: #006eb4;
    }

    #enroll {
        background: #f5f5f5;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 61px;
    }

    .enroll {
        padding-bottom: 30px;
        padding-top: 30px;
    }

    .enroll button {
        display: block;
        width: 80%;
        height: 40px;
        margin: 0 auto 0;
        border: 1px solid #006eb4;
        border-radius: 8px;
        background: #006eb4;

        line-height: 40px;
        font-size: 20px;
        color: #fff;
    }

    .sex {
        display: block;
        height: 45px;
        width: 90%;
        margin: 10px auto 0;
        border: 1px solid #c2c2c3;
        padding: 0 10px;
        border-radius: 10px;
        font-size: 16px;
        line-height: 45px;
    }

    .sex input {
        display: none;
    }

    .sex label:before {
        content: "\a0";
        display: inline-block;
        vertical-align: middle;
        font-size: 10px;
        width: 16px;
        height: 16px;
        margin-right: 0.6em;
        box-sizing: border-box;
        border: 1px solid #649ac9;
        border-radius: 50%;
        line-height: 1;
    }

    .sex input:checked + label:before {
        background: #649ac9;
        background-clip: content-box;
        padding: 0.2em;
    }

    .footer {
        display: none;
    }
</style>
