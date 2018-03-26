<template>
    <div class="liu">
        <mt-swipe>
            <mt-swipe-item>
                <img src="../../static/images/01.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../static/images/02.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../static/images/03.jpg">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        methods: {
            handleChange(index) {
                console.log(index)
            }
        }
    }
</script>
<style scoped>
    .liu {
        padding-top: 45px;
    }

    .liu .mint-swipe {
        height: 183px;
    }

    img {
        width: 375px;
        height: 183px;
    }
</style>