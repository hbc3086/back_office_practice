<template>
  <div class="container guide">
    <div class="g_bx">
      <div class="col2">
        <div class="g_left">
          <div class="g_cont">
            <button class="btn" @click="fnOpenPop(1)">클릭</button>
            <button class="btn" @click="fnOpenPop(2)">클릭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fnOpenPop(num) {
      if (num == 1) {
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
