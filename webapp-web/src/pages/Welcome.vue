<template>
  <div class="form-row">
    <div class="flex-center position-ref full-height">
      <div class="content">
        <div class="title m-b-md">
          Phalcon ❤️ Vue.js
        </div>
        <div>
          <h4>GET user info via API</h4>
          <h5 class="text-danger">
          {{user}}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
//@import "./../scss/custom";
html, body {
  background-color: #fff;
  color: #636b6f;
  font-family: 'Nunito', sans-serif;
  font-weight: 200;
  height: 100vh;
  margin: 0;
}

.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.content {
  text-align: center;
}

.title {
  font-size: 84px;
}

.links > a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .1rem;
  text-decoration: none;
  text-transform: uppercase;
}

.m-b-md {
  margin-bottom: 30px;
}
</style>

<script src="./Welcome.js"></script>
