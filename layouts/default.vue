<template>
  <div class="app" :class="{ on_menu: $store.state.ui.menuState == true }">
    <Menu />
    <div class="wrap">
      <Header />
      <nuxt />
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <Alert
        v-if="$store.state.ui.popAlertData.state == true"
        :key="$store.state.ui.popAlertData.state"
      />
    </transition>
  </div>
</template>

<script>
import Header from "~/components/layouts/Header";
import Menu from "~/components/layouts/Menu.vue";
import Setting from "~/mixins/Setting";
import Alert from "~/components/popup/Alert";

export default {
  mixins: [Setting],
  components: {
    Header,
    Menu,
    Alert,
  },
};
</script>
