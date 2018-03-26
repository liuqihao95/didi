<template>
    <div class="rwp">
        <mt-header fixed title="报名流程">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <img src="../../static/images/zheng05.jpg" alt="">
        <img src="../../static/images/baoming.png" alt="">
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .rwp > img:first-of-type {
        padding-top: 45px;
        height: 150px;
        width: 100%;
    }
    .rwp > img:last-child {
        width: 100%;
        padding-bottom: 61px;
    }
</style>