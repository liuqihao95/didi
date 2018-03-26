<template>
    <div id="newsitem">
        <mt-header fixed title="新闻公告">
            <router-link to="/news" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content2 teshude" v-html="lol.content">
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newsitem",
  data: function() {
    return {
      lol: {}
    };
  },
  methods: {
    getNews() {
      this.$axios
        .get("getArticle",{ id:this.$route.query.id})
        .then(res => {
          console.log(res);
          this.lol = res.data.data[0];
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getNews();
  }
};
</script>
<style>
.teshude img {
  display: block;
  width: 100%;
}
</style>
<style scoped>
img {
  display: block;
  margin: 0 auto 0;
  width: 300px;
}
.content2 {
  padding-top: 45px;
  width: 90%;
  margin: 0 auto 0;
  font-size: 14px;
  line-height: 2em;
  text-indent: 2em;
  color: #a7a7a7;
}
</style>