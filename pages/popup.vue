<template>
  <div class="container guide">
    <div class="g_bx">
      <div class="col2">
        <div class="g_left">
          <div class="g_cont">
            <button class="btn" @click="fnOpenPop(1)">클릭</button>
            <button class="btn" @click="fnOpenPop(2)">클릭</button>
            <button class="btn" @click="fnOpenPop(3)">클릭</button>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreatePop from "~/components/popup/Create";
export default {
  components: {
    CreatePop,
  },
  methods: {
    fnOpenPop(num) {
      this.$store.dispatch("ui/setMenuState", false);
      if (num == 1) {
        this.$store.dispatch("ui/setPopCreateState", true);
      } else if (num == 2) {
        let data = {
          state: true,
          type: "alert",
          title: "Alert",
          msg: "경고창입니다.",
          btn: {
            name: "확인",
          },
        };
        this.$store.dispatch("ui/setPopAlertData", data);
      } else {
        let data = {
          state: true,
          type: "confirm",
          title: "Confirm",
          msg: "확인창입니다.",
          btn: {
            name: "save",
          },
        };
        this.$store.dispatch("ui/setPopAlertData", data);
      }
    },
  },
};
</script>

<style></style>
