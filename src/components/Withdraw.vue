<template>
    <div id="enroll" class="withdraw">
        <div>
            <mt-header fixed title="申请提现">
                <router-link to="/balance" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <form action="">
            <div>
                <label for="money" class="form-span">资金余额：</label>
                <input type="tel" class="from-input" id="money">
            </div>
            <div>
                <label for="how-money" class="form-span">提现金额：</label>
                <input type="tel" class="from-input" id="how-money">
            </div>
            <div>
                <label for="bank-name" class="form-span">户名：</label>
                <input type="text" class="from-input" id="bank-name">
            </div>
            <div>
                <label for="bank" class="form-span">开户行：</label>
                <input type="text" class="from-input" id="bank">
            </div>
            <div>
                <label for="bank-number" class="form-span">银行账号：</label>
                <input type="tel" class="from-input" id="bank-number">
            </div>
            <div>
                <label for="address" class="form-span">开户行地址：</label>
                <input type="text" class="from-input" id="address">
            </div>
        </form>
        <div class="enroll">
            <button>提交申请</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'enroll'
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
    form{
        padding-top: 45px;
        border: none;
        background: #fff;
    }
    form > div{
        height: 45px;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        font-size: 16px;
        line-height: 45px;

    }
    form div .form-span{
        float: left;
        display:inline-block;
        height: 45px;
        line-height: 45px;
        width: 27%;
        text-align: right;
        font-size: 16px;
    }
    form div .from-input{
        float: right;
        display: inline-block;
        width:73%;
        height: 100%;
        border:none;
        padding-left: 5px;
        font-size: 16px;
    }
    form div select{
        height: 45px;
        border: none;
        padding: 9px 0;
        box-sizing: border-box;
        background: #f5f5f5;
    }
    #agree{
        text-align:center;
    }
    .content-msg .msg{
        margin: 38px auto;
    }
    .enroll{
        height: 80px;
        border: 1px solid #f5f5f5;
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