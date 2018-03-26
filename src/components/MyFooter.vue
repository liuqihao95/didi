<template>
    <div class="liu">
        <router-link to='/' :class="{active: $route.name==='index'}">
            <div>
                <i class="iconfont icon-weibiaoti1"></i>
                <h2>首页</h2>
            </div>
        </router-link>
        <router-link to='/venture' :class="{active: $route.name==='venture'}">
            <div>
                <i class="iconfont icon-02"></i>
                <h2>创业项目</h2>
            </div>
        </router-link>
        <router-link to='/process' :class="{active: $route.name==='process'}">
            <div>
                <i class="iconfont icon-liucheng"></i>
                <h2>报名流程</h2>
            </div>
        </router-link>
        <router-link to='/PlatformPresence' :class="{active: $route.name==='PlatformPresence'}">
            <div>
                <i class="iconfont icon-fengcai"></i>
                <h2>平台风采</h2>
            </div>
        </router-link>
        <router-link to='/mydidi' :class="{active: $route.name==='mydidi'|| $route.name==='enroll'||
         $route.name==='balance'|| $route.name==='customer'|| $route.name==='withdraw'|| $route.name==='password'||
         $route.name==='news'|| $route.name==='newsitem'|| $route.name==='gongchenganli'|| $route.name==='register'}">
            <div>
                <i class="iconfont icon-777"></i>
                <h2>我的滴滴</h2>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {}
</script>
<style>
</style>
<style scoped>
    h2 {
        font-size: 14px;
    }
    .liu {
        background: #333;
        text-align: center;
    }

    i {
        font-size: 22px;
    }

    a {
        color: #fff;
        font-size: 12px;
    }
    .active {
        color: #f00;
    }
</style>