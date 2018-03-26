<template>
    <div id="app">
        <transition name="slide-fade">
            <router-view/>
        </transition>
        <myfooter class="footer"></myfooter>
    </div>
</template>

<script>
    import '../static/init.css'
    import myfooter from '@/components/MyFooter'

    export default {
        name: 'App',
        components: {
            myfooter
        },
    }
</script>

<style>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        opacity: 0;
    }

    .mint-header {
        background: #006DB8 !important;
        height: 45px !important;
        font-weight: 400 !important;
        font-size: 22px !important;
    }

    .footer {
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        justify-content: space-around;
        width: 100%;
    }
    .resigon +.footer{
        display: none;
    }
    #login +.footer{
        display: none;
    }
    .dnf +.footer{
        display: none;
    }
    .password +.footer{
        display: none;
    }
    #customer +.footer{
        display: none;
    }
    .balance +.footer{
        display: none;
    }
    .withdraw +.footer{
        display: none;
    }
</style>
