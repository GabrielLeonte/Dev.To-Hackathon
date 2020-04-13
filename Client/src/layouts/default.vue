<template>
  <section>
    <!-- Navbar -->
    <nav class="custom-navbar">
      <div class="navbar-menu-btn">
        <button class="material-icons menu" @click="closeDrower">menu</button>
      </div>
      <div class="navbar-title">We Help Dashboard</div>
    </nav>

    <!-- Drawer -->
    <div :class="{ enter: drawer }" class="drawer">
      <div class="options">
        <div class="drawer-btn">
          <div class="left"><span class="material-icons">home</span></div>
          <div class="center"><span>Home</span></div>
        </div>
        <div class="drawer-btn">
          <div class="left"><span class="material-icons">face</span></div>
          <div class="center"><span>Open Cases</span></div>
        </div>
        <div class="drawer-btn">
          <div class="left"><span class="material-icons">history</span></div>
          <div class="center"><span>History</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    },
    closeDrower() {
      this.drawer = !this.drawer;
    }
  },
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style scoped>
* {
  user-select: none;
  outline: none;
}
.drawer {
  position: absolute;
  float: left;
  width: 17rem;
  left: -17rem;
  height: 100vh;
  border-right: solid #838383de 0.5px;
  transition: all 0.25s;
  z-index: 1000;
}
.enter {
  position: relative;
  transition: all 0.25s;
  left: 0;
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
button.material-icons.menu {
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
.options {
  margin-top: 10%;
  width: 17rem;
}
.drawer-btn {
  display: table;
  border: 0;
  width: 100%;
  height: 50px;
  font-size: 13px;
  vertical-align: middle;
}
.drawer-btn:hover {
  background: #cfcfcf80;
  transition: all 0.3s;
}
.left {
  float: left;
  text-align: left;
  margin-right: 35px;
  margin-left: 10%;
  font-size: 24px;
  color: #636363;
}
.center {
  display: block;
  text-align: left;
  float: center;
  font-weight: 700;
  color: #414141;
}
.drawer-btn span {
  line-height: 50px;
  vertical-align: middle;
}
</style>
