<template>
  <div class="join">
    <div class="inner">
      <h2><span class="logo">유니콘랜치</span> 백오피스 회원가입</h2>
      <div class="form">
        <div class="item">
          <label for="id">아이디</label>
          <Input :data="{type:'text', id:'id', placeholder:'이메일형식의 아이디를 입력해 주세요.',}"/>
        </div>
        <div class="item">
          <label for="id">비밀번호</label>
          <Input :data="{type:'password', id:'id', placeholder:'비밀번호를 입력해 주세요.',}"/>
        </div>
        <div class="item">
          <label for="id">비밀번호 확인</label>
          <Input :data="{type:'password', id:'id', placeholder:'비밀번호를 입력해 주세요.',}"/>
        </div>
        <div class="item">
          <label for="id">가입자 이름</label>
          <Input :data="{type:'text', id:'id', placeholder:'가입하시는 분의 이름을 입력해 주세요.',}"/>
        </div>
        <div class="item">
          <label for="id">소속 부서</label>
          <Input :data="{type:'text', id:'id', placeholder:'소속 부서를 입력해 주세요.',}"/>
        </div>
        <div class="item">
          <label for="id">직급</label>
          <Input :data="{type:'text', id:'id', placeholder:'직급을 입력해 주세요.',}"/>
        </div>
        <div class="btns">
          <button class="btn full">회원가입</button>
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
    Input
  },
};
</script>