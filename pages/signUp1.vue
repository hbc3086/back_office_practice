<template>
  <div class="join">
    <div class="inner">
      <h2>회원가입</h2>
      <div class="form">
        <div class="item">
          <label for="id">아이디</label>
          <Input
            :data="{
              type: 'text',
              id: 'id',
              placeholder: '이메일형식의 아이디를 입력해 주세요.',
            }"
          />
        </div>
        <div class="btns">
          <nuxt-link to="/signUp2" class="btn full">회원가입</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "~/components/common/Input";

export default {
  layout: "none",
  components: {
    Input,
  },
};
</script>
