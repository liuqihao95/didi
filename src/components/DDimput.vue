<template>
    <div id="ddimput">
            <label>
                <span>{{label}}</span>
                <input :type="type"  v-model="currentValue">
            </label>
    </div>
</template>

<script>
    export default {
        name: 'ddimput',
        data(){
            return{
                currentValue:this.value,

            }
        },
        props:{
            label:{
                type:String
            },
            value:{
            },
            type:{

            }
        },
        watch:{
            value(val){
                console.log(val)
                this.currentValue=val
            },
            currentValue(val) {
                this.$emit("input",val)
            }
        }
    }
</script>

<style scoped>
    label {
        display: block;
        width: 95%;
        height: 45px;
        margin: 0 auto 0;
        background: #fff;

        line-height: 45px;
        font-size: 16px;
        font-weight: 600;
    }

    label span {
        float: left;
        height: 45px;
        line-height: 45px;
        width: 27%;
        text-align: right;
        font-size: 16px;
        font-weight: 600;
    }

    label input{
        float: left;
        width: 73%;
        height: 100%;
        border: none;
        padding-left: 5px;
        font-size: 16px;
        font-weight: 600;
    }
</style>