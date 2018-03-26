<template>
    <div id="enroll" class="balance">
        <div>
            <mt-header fixed title="账户余额">
                <router-link to="/mydidi" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="content-msg">
            <div class="msg">￥15000.00</div>
        </div>
        <div class="enroll">
            <button @click="withdraw">申请提现</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'enroll',
        methods:{
            withdraw:function(){
                this.$router.push('/withdraw')
            }
        }
    }
</script>

<style scoped>
    #enroll {
        background: #f5f5f5;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .content-msg {
        padding-top: 45px;
        height: 155px;
        text-align: center;
        background: #fff;
        /*font-size: ;*/
    }
    .content-msg .msg{
        margin: 38px auto;
    }
    .enroll{
        margin-top: 10px;
        background: #fff;
        height: 80px;
        border: 1px solid #fff;
    }
    .enroll button {
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
</style>