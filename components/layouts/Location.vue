<template>
  <div class="location">
    <nuxt-link v-for="(item, i) in list" :class="{'on': i == (list.length-1)}" :key="i" :to="item.link" v-html="item.name"></nuxt-link>
  </div>
</template>

<script>

export default {
  props:["list"],
  components: {
  },
};
</script>
