<template>
    <div id="PlatformPresence">
        <div>
            <mt-header fixed title="平台风采">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="platimg">
            <img src="../../static/images/platfrom.png" alt="">
        </div>
        <div class="content-p">
            <h1>公司简介</h1>
            <h2>鸿鑫互联科技（北京）股份有限公司</h2>
            <p class="didi">是一个建筑平台领域万众创业者的开放性互联网电子商务服务平台-----滴滴工程平台。
                我们的口号是干工程就上滴滴。滴滴工程平台是公司核心管理平台，平台集企业资质品牌、CRM、
                线上OA办公、线上ERP、线上采购、资源整合于一体。实现创业者项目管理：<span>高效、降低成本、安全</span>
                。为创业者提供建筑行业生态链一站式服务，为自身创造千万价值的同时，成为平台的股东，享受平台
                上市资本带来的数倍回报。
            </p>
            <p class="didi">
                我们秉承“<span>专注、创新、服务、分享</span>”的企业精神，打破行业传统管理理念，为行业创造
                良好的服务环境，打造国内建筑领域各平台的浮华平台、管理平台、数据平台、（目前专业有：门窗幕墙、装饰、钢结构等）
                ；以全新的管理模式，完善技术。周到的服务呈现，我们始终坚持至上，全新服务，创业者成功平台才能
                成功的企业核心价值观。
            </p>
            <p class="final">
                欢迎各位创业者来到平台，如您对平台感兴趣或有疑问，请联系我们。
            </p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    #PlatformPresence{
        background: #f5f5f5;
    }
    .platimg img{
        display: block;
        width: 100%;
        height: 195px;
        padding-top: 45px;
    }
    .content-p{
        width: 90%;
        margin: 0 auto;
        font-size: 16px;
        line-height: 2em;
        color: #606060;
    }
    .content-p h1{
        color: #ff6601;
        font-size: 30px;
        border-bottom: 1px dotted #c4c4c4;
    }
    .content-p h2{
        font-size: 18px;
        padding-top: 10px;
       font-weight: 600;
        color: #606060;
    }
    .content-p .didi{
        padding-bottom: 10px;
    }
    .content-p .final{
        padding-bottom: 61px;
    }{
        padding-bottom: 10px;
    }
    .content-p span{
        color: #ff6601;
        font-weight: 600;
    }
</style>