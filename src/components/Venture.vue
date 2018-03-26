<template>
    <div id="venture">
        <div>
            <mt-header fixed title="创业项目">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="rwp">
            <div>
                <p @click="activeIndex = 0" v-bind:class="{'active': activeIndex == 0}">钻石创业者</p>
                <p @click="activeIndex = 1" v-bind:class="{'active': activeIndex == 1}">金牌创业者</p>
                <p @click="activeIndex = 2" v-bind:class="{'active': activeIndex == 2}">银牌创业者</p>
            </div>
            <div class="fristimg">
                <img src="../../static/images/02.jpg" alt="" v-bind:class="{'active': activeIndex == 0}">
                <img src="../../static/images/01.jpg" alt="" v-bind:class="{'active': activeIndex == 1}">
                <img src="../../static/images/03.jpg" alt="" v-bind:class="{'active': activeIndex == 2}">
            </div>
            <div class="nav" v-bind:class="{'active': activeIndex == 0}">
                <div>
                    <h1>服务内容</h1>
                    <div class="item-6">
                        <div>工程行业学院</div>
                        <p>十</p>
                        <div>市场营销学院</div>
                        <p>十</p>
                        <div>运营管理学院</div>
                        <div>渠道建设学院</div>
                        <p>十</p>
                        <div>招商路演学院</div>
                        <p>十</p>
                        <div>会议营销学院</div>
                    </div>
                    <h3>学院的技术支持、咨询服务、课件学习等内容。</h3>
                </div>
                <div>
                    <h2>创业者享受的回报收益</h2>
                    <img src="../../static/images/shouyi.png" alt="">
                    <p>X:渠道可享有的股份额度；</p>
                    <p>Y:渠道个人业绩流水总额累计；</p>
                    <p>Z:历年渠道全部个方业绩流水总额累计；</p>
                    <p>B:鸿鑫互联集团所拥有的上市或重组公司总股本数；</p>
                    <p>20%:鸿鑫互联集团上市总股数的20%。</p>
                </div>
                <div>
                    <h3>获得收益的条件</h3>
                    <p>N≧10人</p>
                    <p>业务流水≧1.2亿</p>
                    <p>当满足以上两个条件时，钻石创业者才能取得弃权。</p>
                    <p><span>注：</span>上面的y、z为财务数据，由财务部门按期提供，录入即可。 </p>
                </div>
            </div>
            <div class="nav" v-bind:class="{'active': activeIndex == 1}">
                <div>
                    <h1>服务内容</h1>
                    <div class="item-6">
                        <div>工程行业学院</div>
                        <p>十</p>
                        <div>市场营销学院</div>
                        <p>十</p>
                        <div>运营管理学院</div>
                        <div>渠道建设学院</div>
                        <p>十</p>
                        <div>招商路演学院</div>
                        <p>十</p>
                        <div>会议营销学院</div>
                    </div>
                    <h3>学院的技术支持、咨询服务、课件学习等内容。</h3>
                </div>
                <div>
                    <h2>创业者享受的回报收益</h2>
                    <img src="../../static/images/shouyi.png" alt="">
                    <p>X:渠道可享有的股份额度；</p>
                    <p>Y:渠道个人业绩流水总额累计；</p>
                    <p>Z:历年渠道全部个方业绩流水总额累计；</p>
                    <p>B:鸿鑫互联集团所拥有的上市或重组公司总股本数；</p>
                    <p>20%:鸿鑫互联集团上市总股数的20%。</p>
                </div>
                <div>
                    <h3>获得收益的条件</h3>
                    <p>N≧10人</p>
                    <p>业务流水≧1.2亿</p>
                    <p>当满足以上两个条件时，钻石创业者才能取得弃权。</p>
                    <p><span>注：</span>上面的y、z为财务数据，由财务部门按期提供，录入即可。 </p>
                </div>
            </div>
            <div class="nav" v-bind:class="{'active': activeIndex == 2}">
                <div>
                    <h1>服务内容</h1>
                    <div class="item-6">
                        <div>工程行业学院</div>
                        <p>十</p>
                        <div>市场营销学院</div>
                    </div>
                    <h3>学院的技术支持、咨询服务、课件学习等内容。</h3>
                </div>
                <div>
                    <h2>创业者享受的回报收益</h2>
                    <img src="../../static/images/shouyi.png" alt="" id="last">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'venture',
        data: function () {
            return {
                activeIndex : 0
            }
        }
    }
</script>

<style scoped>
    .rwp > div:first-child {
        padding-top: 45px;
        padding-left: 3%;
        padding-right: 3%;
        width: 100%;
        height: 100px;
        line-height: 55px;
        margin: 0 0 5px;
        background: #f2f2f2;
        display: flex;
        justify-content: space-around;
        font-size: 20px;
    }
    .rwp > div:first-child p{
        width: 33.3%;
    }
    .rwp .fristimg img {
        display: block;
        width: 100%;
        height: 140px;
    }

    .nav > div > h1 {
        text-align: center;
        font-size: 25px;
        height: 50px;
        line-height: 50px;
        font-weight: 600;
    }

    .nav > div > h3 {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
    }

    .nav .item-6 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0 12%;
    }

    .nav .item-6 div {
        width: 20%;
        height: 60px;
        padding: 5px;
        margin: 10px;
        border: 1px dotted #000;
        border-radius: 50%;
        background: #08acb0;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
    }

    .nav .item-6 div:nth-of-type(2) {
        background: #eab115;
    }

    .nav .item-6 div:nth-of-type(3) {
        background: #e96062;
    }

    .nav .item-6 div:nth-of-type(4) {
        background: #60bdfd;
    }

    .nav .item-6 div:nth-of-type(5) {
        background: #fe01e3;
    }

    .nav .item-6 div:nth-of-type(6) {
        background: #fd0500;
    }

    .nav .item-6 p {
        width: 6%;
        text-align: center;
        line-height: 80px;
        font-size: 22px;
    }

    .nav > div:nth-child(2) {
        background: #f2f2f2;
    }

    .nav > div:nth-child(2) h2 {
        text-align: center;
        font-size: 23px;
        font-weight: 600;
    }

    .nav > div:nth-child(2) img {
        display: block;
        width: 100%;
    }

    .nav > div:nth-child(2) p {
        padding-left: 40px;
        text-align: left;
        line-height: 2em;
        font-size: 14px;

    }

    .nav > div:nth-child(3) h3 {
        text-align: center;
        line-height: 2em;
        font-size: 24px;

    }

    .nav > div:nth-child(3) {
        padding-top: 0;
        padding-bottom: 61px;
    }

    .nav > div:nth-child(3) p {
        text-align: left;
        padding-left: 40px;
        line-height: 2em;
        font-size: 14px;
    }

    #last {
        padding-bottom: 61px;
    }
    .rwp div .active{
        background: #fff;
        color: #006eb8;
    }
    .rwp .nav {
        display: none;
    }
    .rwp >.active{
        display: block;
    }
    .rwp .fristimg img{
        display: none;
    }
    .rwp .fristimg .active{
        display: block;
    }
</style>