<template>
  <header>
    <div class="left">
      <button class="btn_menu" @click="fnToggleMenu">menu button</button>
    </div>
    <Gnb />
    <div class="right">
      <button class="btn_my">사용자정보</button>
      <button class="btn_logout">로그아웃</button>
    </div>
  </header>
</template>

<script>
import Gnb from "~/components/layouts/Gnb.vue";

export default {
  data() {
    return {};
  },
  components: {
    Gnb,
  },
  mounted() {},
  methods: {
    fnToggleMenu() {
      this.$store.dispatch("ui/setMenuState", !this.$store.state.ui.menuState);
    },
  },
};
</script>
