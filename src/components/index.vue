<template>
    <div id="index">
        <mt-header fixed title="滴滴工程">
            <router-link to="/" slot="left">
            </router-link>
        </mt-header>
        <!--<router-view></router-view>-->
        <hl></hl>
        <div class="last">
            <div class="rwp">
                <div class="daohang">
                    <div @click="venture">
                        <img src="../../static/images/zheng06.jpg" alt="">
                        <h6>创业项目</h6>
                    </div>
                    <div @click="platfrom">
                        <img src="../../static/images/zheng01.jpg" alt="">
                        <h6>平台风采</h6>
                    </div>
                    <div @click="process">
                        <img src="../../static/images/zheng02.jpg" alt="">
                        <h6>报名流程</h6>
                    </div>
                </div>
            </div>
            <div class="rwp">
                <div class="daohang">
                    <div  @click="login">
                        <img src="../../static/images/zheng03.jpg" alt="">
                        <h6>客户管理</h6>
                    </div>
                    <div  @click="login">
                        <img src="../../static/images/zheng04.jpg" alt="">
                        <h6>财务管理</h6>
                    </div>
                    <div  @click="shownews">
                        <img src="../../static/images/zheng05.jpg" alt="">
                        <h6>新闻公告</h6>
                    </div>
                </div>
            </div>
            <div class="rwp ">
                <div class="daohang">
                    <div @click="gongchenganli">
                        <img src="../../static/images/zheng06.jpg" alt="">
                        <h6>工程案例</h6>
                    </div>
                    <div  @click="login">
                        <img src="../../static/images/zheng01.jpg" alt="">
                        <h6>修改密码</h6>
                    </div>
                    <div  @click="register">
                        <img src="../../static/images/zheng02.jpg" alt="">
                        <h6>用户注册</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import hl from './Lunbo.vue'

    export default {
        name: 'index',
        components: {
            hl
        },
        methods: {
            shownews(){
                this.$router.push('/news')
            },
            login(){
                this.$router.push('/mydidi')
            },
            venture(){
                this.$router.push('/venture')
            },
            platfrom(){
                this.$router.push('/PlatformPresence')
            },
            process(){
                this.$router.push('/process')
            },
            gongchenganli(){
                this.$router.push('/gongchenganli')
            },
            register(){
                this.$router.push('/register')
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*.mint-header {*/
        /*background: #006DB8;*/
        /*height: 45px;*/
        /*font-weight: 400;*/
        /*font-size: 22px;*/
    /*}*/

    .rwp {
        background: #f2f2f2;
        height: 126px;
    }

    .rwp .daohang {
        display: flex;
        justify-content: space-around;
        background: #fff;
        height: 110px;
    }

    .rwp div div {
        box-sizing: border-box;
        margin: 12px 0 26px;
        display: flex;
        flex-direction: column;
    }

    .rwp div div img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 auto 16px;
    }

    h6 {
        font-size: 16px;
        line-height: 1em;
    }
    .last{
        padding-bottom: 61px;
    }
</style>
<style>
    .mint-header {
        background: #006DB8;
        height: 45px;
        font-weight: 400;
        font-size: 22px;
    }
</style>
