<template>
  <div class="area_menu">
    <h1 class="logo"><nuxt-link to="/">유니콘랜치</nuxt-link></h1>
    <nav>
      <ul class="list_menu">
        <li><nuxt-link to="/popup" class="menu no_dep">POPUP</nuxt-link></li>
        <li><nuxt-link to="/input" class="menu no_dep">INPUT</nuxt-link></li>
        <li><nuxt-link to="/login" class="menu no_dep">LOGIN</nuxt-link></li>
        <li class="dep1">
          <button class="menu" @click="fnToggle">OPENIP</button>
          <ul class="dep2">
            <li><nuxt-link to="" class="sub_menu">특허 관리</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">상품 관리</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu on">거래 관리</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">고객 관리</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">카테고리 관리</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">태그 관리</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">FAQ</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">문의사항</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">공지사항</nuxt-link></li>
          </ul>
        </li>
        <li class="dep1">
          <button class="menu" @click="fnToggle">메뉴2</button>
          <ul class="dep2">
            <li><nuxt-link to="" class="sub_menu">서브메뉴1</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">서브메뉴2</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">서브메뉴3</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">서브메뉴4</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">서브메뉴5</nuxt-link></li>
            <li><nuxt-link to="" class="sub_menu">서브메뉴6</nuxt-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["classNm"],
  data() {
    return {
      view:
        this.$store.state.ui.view == undefined
          ? "mobile"
          : this.$store.state.ui.view,
    };
  },
  components: {},
  mounted() {
    console.log(this.view);
    window.addEventListener(
      "resize",
      () => {
        this.view = this.$store.state.ui.view;
      },
      true
    );
    $nuxt.$router.beforeEach((to, from, next) => {
      this.fnClosePop();
      next();
    });
  },
  methods: {
    fnToggle(e) {
      let target = e.target.parentNode;
      let on = target.classList.contains("on");
      const dep1 = document.getElementsByClassName("dep1");
      Array.prototype.forEach.call(dep1, (item) => item.classList.remove("on"));
      if (on == true) {
        target.classList.remove("on");
      } else {
        target.classList.add("on");
      }
    },
    fnClosePop() {
      this.$store.dispatch("ui/setMenuState", false);
    },
  },
};
</script>
