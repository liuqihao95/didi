<template>
    <div class="liu">
        <mt-swipe>
            <mt-swipe-item v-for="(item,index) in arr" :key='index'>
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                arr:[]
            }
        },
        methods: {
             getimage(){
                this.$axios.get('getImage').then(res=>{
                    this.arr=res.data.data;
                })
            },
            handleChange(index) {
                console.log(index)
            }
        },
         mounted(){
            this.getimage()
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