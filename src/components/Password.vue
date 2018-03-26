<template>
    <div id="enroll" class="password">
        <div>
            <mt-header fixed title="修改密码">
                <router-link to="/mydidi" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <form action="">
            <div>
                <label for="old-password" class="form-span">旧密码：</label>
                <input type="tel" class="from-input" id="old-password" v-model="pwd">
            </div>
            <div>
                <label for="new-password" class="form-span">新密码：</label>
                <input type="tel" class="from-input" id="new-password" v-model="newPwd">
            </div>
            <div>
                <label for="renewname" class="form-span">确认新密码：</label>
                <input type="tel" class="from-input" id="renewname" v-model="newPwd">
            </div>
        </form>
        <div class="enroll">
            <button @click="genggai">确认修改</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'enroll',
        data(){
            return{
                pwd: '',
                newPwd: ''
            }
        },
        methods: {
            genggai(){
                this.$axios.post('psodUpdate', {
                    pwd: this.pwd,
                    newPwd: this.newPwd,
                }, {
                    withCredentials: true

                })
                    .then((response) => {
                        console.log(response)
                        if(response.data.code){
                            // this.$router.push('/index');
                            alert("修改成功，请重新登录");
                            this.$router.push('/login')
                        }else{
                            alert(response.data.msg)
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
    }

    form > div {
        height: 45px;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        font-size: 16px;
        line-height: 45px;

    }

    form div .form-span {
        float: left;
        display: inline-block;
        height: 45px;
        line-height: 45px;
        width: 27%;
        text-align: right;
        font-size: 16px;
    }

    form div .from-input {
        float: right;
        display: inline-block;
        width: 73%;
        height: 100%;
        border: none;
        padding-left: 5px;
        font-size: 16px;
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
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        margin: 10px auto 0;
        border: 1px solid #006eb4;
        border-radius: 8px;
        background: #006eb4;
        color: #fff;
    }
</style>