<template>
  <div class="login">
    <div class="inner">
      <h1 class="logo">유니콘랜치</h1>
      <div class="form">
        <div class="item">
          <label for="id">아이디</label>
          <InputBox
            :data="{
              type: 'text',
              id: 'id',
              placeholder: '이메일형식의 아이디를 입력해 주세요.',
            }"
          />
        </div>
        <div class="item">
          <div class="colb">
            <div class="left">
              <label for="pw">비밀번호</label>
            </div>
            <div class="right">
              <nuxt-link to="" class="txt_gray"
                >비밀번호를 잊으셨나요?</nuxt-link
              >
            </div>
          </div>
          <InputBox
            :data="{
              type: 'password',
              id: 'pw',
              placeholder: '비밀번호를 입력해 주세요.',
            }"
          />
        </div>
        <CheckBox
          :data="{
            title: '<b>아이디기억하기</b>',
            id: '1',
          }"
          ref="agrTm01"
          @onChange="
            (checked) => fnFormChange({ name: 'agrTm01', value: checked })
          "
        />
        <div class="btns">
          <button class="btn full">로그인</button>
        </div>
        <div class="bx">
          <span class="txt_gray">백오피스 회원이 아니신가요?</span>
          <nuxt-link to="/signUp1" class="txt_sky">회원가입</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/layouts/Header";
import Location from "~/components/layouts/Location";
import CheckBox from "~/components/common/CheckBox";
import InputBox from "~/components/common/Input";

export default {
  layout: "none",
  components: {
    Header,
    Location,
    CheckBox,
    InputBox,
  },
};
</script>
