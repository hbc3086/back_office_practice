<template>
  <div class="item_patent">
    <input
      type="text"
      class="ipt id"
      v-model="item.id"
      placeholder="특허번호"
      :disabled="item.disabled == true ? 'disabled' : false"
    />
    <input
      type="text"
      class="ipt tit"
      v-model="item.tit"
      placeholder="특허 이름을 입력해주세요"
      :disabled="item.disabled == true ? 'disabled' : false"
    />
    <button class="btn_close">삭제</button>
  </div>
</template>
<script>
import InputBox from "~/components/common/Input";
export default {
  props: ["data"],
  data() {
    return {
      item: this.data || {},
    };
  },
  components: {
    InputBox,
  },
  methods: {},
};
</script>
