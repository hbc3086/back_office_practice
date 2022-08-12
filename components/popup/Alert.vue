<template>
  <div
    class="popup"
    v-if="data !== null"
    :class="data.type !== undefined ? data.type : 'alert'"
  >
    <div class="p_wrap">
      <div class="p_top">
        <h3 v-if="data.title !== undefined" v-html="data.title"></h3>
        <button class="btn_close" @click="fnClosePop">닫기</button>
      </div>
      <div class="p_container">
        <div class="msg" v-html="data.msg"></div>
      </div>
      <div class="p_bottom" v-if="data.type === 'alert'">
        <button
          v-if="data.btn.link == undefined"
          @click="fnClosePop"
          class="btn"
        >
          <b>{{ data.btn.name }}</b>
        </button>
        <nuxt-link v-else :to="data.btn.link" class="btn"
          ><b>{{ data.btn.name }}</b></nuxt-link
        >
      </div>
      <div class="p_bottom" v-else>
        <button
          v-if="data.btn.link == undefined"
          @click="fnClosePop"
          class="btn"
        >
          <b>{{ data.btn.name }}</b>
        </button>
        <nuxt-link v-else :to="data.btn.link" class="btn"
          ><b>{{ data.btn.name }}</b></nuxt-link
        >
        <button @click="fnClosePop" class="btn dark"><b>Close</b></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  components: {},
  mounted() {
    this.data = this.$store.state.ui.popAlertData;
    $nuxt.$router.beforeEach((to, from, next) => {
      this.fnClosePop();
      next();
    });
  },
  methods: {
    fnClosePop() {
      this.$store.dispatch("ui/setPopAlertData", {
        state: false,
        type: null,
        title: null,
        msg: null,
        btn: {
          link: "",
          name: null,
        },
      });
    },
  },
};
</script>
