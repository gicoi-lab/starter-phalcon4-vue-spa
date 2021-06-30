<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
