<template>
    <div id="mydidi">
        <div>
            <mt-header fixed title="个人信息">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="nav">
            <div>
                <img src="../static/images/01.jpg" alt="">
                <h2>王世超</h2>
                <mt-button type="danger" @click="loginout">退出登录</mt-button>
            </div>
        </div>
        <div class="rwp-content">
            <div class="content1">
                <i class="iconfont icon-wodekehu"></i>
                <router-link to="./customer">我的客户</router-link>
                <i class="iconfont icon-iconfontzhizuobiaozhun19"></i>
                <!--<i class="iconfont icon-iconfontzhizuobiaozhun19"></i>-->
            </div>
            <div class="content1">
                <i class="iconfont icon-balance"></i>
                <router-link to="./balance">我的余额</router-link>
                <i class="iconfont icon-iconfontzhizuobiaozhun19"></i>
            </div>
            <div class="content1">
                <i class="iconfont icon-combinedshapecopy2"></i>
                <router-link to="./enroll">客户注册</router-link>
                <i class="iconfont icon-iconfontzhizuobiaozhun19"></i>
            </div>
            <div class="content1">
                <i class="iconfont icon-xiugaimima1"></i>
                <router-link to="./password">修改密码</router-link>
                <i class="iconfont icon-iconfontzhizuobiaozhun19"></i>
            </div>
        </div>
    </div>
</template>

<script>
import "../static/init.css";

export default {
  name: "mydidi",
  components: {},
  methods: {
    Islogin() {
      this.$axios
        .get("getIsLogin")
        .then(res => {
          if (!res.data.ret) {
            alert("你还没有登录，请登录");
            this.$router.push("/login");
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    loginout() {
      this.$axios
        .post(
          "postLogout",
          {}
        )
        .then(res => {
          if (!res.data.ret) {
            alert("退出成功，请登录");
            this.$router.push("/");
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.Islogin();
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 245px;
  padding-top: 81px;
  padding-bottom: 55px;
  box-sizing: border-box;
  background: url("../static/images/02.jpg")no-repeat;
  background-size: 100%;
}

.nav div img {
  display: block;
  width: 56px;
  height: 56px;
  margin: 0 auto;
  border-radius: 50%;
}

.nav div > h2 {
  text-align: center;
  font-size: 20px;
  color: #ff0;
}

.nav div > button {
  /*width: 94px;*/
  /*height: 23px;*/
  display: block;
  margin: 0 auto;
  padding: 0 22px;
  text-align: center;
  background: #006eb8;
}

.rwp-content {
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
  height: 362px;
  box-sizing: border-box;
}

.rwp-content .content1 {
  margin: 13px 13px 0px;
  border: 1px solid #d8d8d8;
  background: #fff;
  height: 52px;
  border-radius: 10px;
  display: flex;
}

.rwp-content .content1 i {
  display: inline-block;
  color: #ff9100;
  width: 40px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
}

.rwp-content .content1 a {
  display: inline-block;
  width: 265px;
  line-height: 50px;
  font-size: 20px;
}

.rwp-content .content1 .icon-iconfontzhizuobiaozhun19 {
  color: #dbdbdb;
}
</style>
<style>
/*.rwp-content{*/
/*background: #000;*/
/*height: 316px;*/
/*}*/
</style>