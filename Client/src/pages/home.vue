<template>
  <div>
    <nav class="custom-navbar">
      <div class="navbar-menu-btn">
        <button class="material-icons" @click="closeDrower">menu</button>
      </div>
      <div class="navbar-title">We Help Dashboard</div>
    </nav>

    <div v-if="drawer" class="drawer">
      <i class="material-icons">account_circle</i>
    </div>

    <span>Click !</span>

    <!-- Ignore this -->
    <div>Welcome home passager</div>
    <div>{{ $store.state.user }}</div>
    <br />
    <div><button class="button" @click="logout">Logout</button></div>
    <router-link to="/test">Catre test</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    },
    closeDrower(){
      this.drawer = !this.drawer 
    }
  },
  data(){
    return {
      drawer: true,
    }
  }
};
</script>

<style scoped>
* {
  user-select: none;
  outline: none;
}
.drawer {
  float: left;
  width: 17rem;
  height: 100vh;
  border-right: solid #838383de 0.5px;
}
.custom-navbar {
  width: 100%;
  height: 3rem;
  background: #212121;
  box-shadow: 0 2px 4px #00000080;
}
.navbar-title {
  line-height: 3rem;
  vertical-align: middle;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  float: left;
  margin-left: 2%;
  font-size: 20px;
}
.navbar-menu-btn {
  vertical-align: middle;
  line-height: 3rem;
}
.navbar-menu-btn .material-icons {
  vertical-align: middle;
}
button.material-icons {
  float: left;
  color: #ffffff;
  margin-left: 1%;
  display: block;
  border: 0;
  background: transparent;
  color: #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: 4px;
}
/* Ripple button effect */
button.material-icons {
  position: relative;
  overflow: hidden;
}
button.material-icons:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: #ffffff80;
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}
button.material-icons:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}
</style>
