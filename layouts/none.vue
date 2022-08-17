<template>
  <div class="app no_layout">
    <div class="wrap" :class="{ auto: $store.state.ui.menuState == true }">
      <nuxt />
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <CreatePop
        v-if="$store.state.ui.popCreateState == true"
        :key="$store.state.ui.popCreateState"
      />
    </transition>
  </div>
</template>

<script>
import Header from "~/components/layouts/Header";
import Menu from "~/components/layouts/Menu.vue";
import Setting from "~/mixins/Setting";
import CreatePop from "~/components/popup/Create";

export default {
  mixins: [Setting],
  components: {
    Header,
    Menu,
    CreatePop,
  },
};
</script>
