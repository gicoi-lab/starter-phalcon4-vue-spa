<template>
  <div class="match-center">
    <template v-if="!appInit">
      <div class="container pt-3rem">
        <div class="text-center text-danger my-2" v-if="!appAuthError">
          <b-spinner class="align-middle"></b-spinner>
          <strong class="ml-3">Loading...</strong>
        </div>
      </div>
    </template>
    <template v-if="appInit">
      <router-view></router-view>
    </template>
  </div>
</template>

<script src="./Full.js">
</script>

<style lang="scss">
</style>
