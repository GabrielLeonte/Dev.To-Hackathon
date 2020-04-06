<template>
  <div class="login-page">
    <notifications position="right bottom" group="foo" />
    <form @submit.prevent="login">
      <div class="columns is-multiline is-mobile">
        <div class="column is-full title">
          <h1>Welcome back!</h1>
        </div>
        <div class="column is-full">
          <img src="../assets/auth.svg" />
        </div>
        <div class="column is-full">
          <input
            type="tel"
            class="phone"
            placeholder="Phone"
            v-model="phone"
            required
          />
        </div>
        <div class="column is-full">
          <input
            type="password"
            class="password"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div class="column is-full">
          <input type="submit" value="Login" required />
        </div>
        <div
          class="column is-full links magic-box"
          style="position: fixed; bottom: 0; text-align: center;"
        >
          <div class="link">
            &#8226; Don't have an account?
            <router-link to="/newAccount" style="color: #6fb555;">
              Make one
            </router-link>
          </div>
          <br />
          <div class="link">
            &#8226; Forgot Password?
            <router-link to="/reset" style="color: #6fb555;"
              >Reset
            </router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    login() {
      try {
        this.$socket.emit("login", {
          phone: this.phone,
          password: this.password,
        });
      } catch (err) {
        if (err) alert(err);
      }
    },
  },
  sockets: {
    login_response(data) {
      this.$notify({
        group: "foo",
        title: "Important message",
        text: "The password is incorrect",
        type: "error",
      });
    },
  },
};
</script>

<style scoped>
* {
  user-select: none;
}
.login-page {
  height: 100vh;
}
.title > h1 {
  margin-top: 8%;
  font-weight: 600;
  font-size: 40px;
}
input[type="tel"],
input[type="password"] {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  border: 0;
  border-bottom: solid #c4c4c4 0.5px;
  width: 350px;
  height: 40px;
  outline: none;
  padding: 5px 5px 10px 5px;
  font-size: 15px;
  color: #363636;
}
input[type="submit"] {
  border: 0;
  background: #6fb555;
  width: 300px;
  height: 40px;
  border-radius: 13px;
  margin-top: 5vh;
  outline: none;
  font-size: 20px;
  font-weight: 400;
  color: white;
}
input[type="submit"]:hover {
  background: #5c9945;
  box-shadow: 0px 0px 5px 0px #6fb555;
}
.phone {
  margin-top: 3%;
}
.links {
  margin-top: 2vh;
}
.link {
  color: #999999;
}
.magic-box {
  font-size: 15px;
  margin-bottom: 10px;
  line-height: 15px;
}
img {
  width: 230px;
  margin-bottom: 3%;
}

.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 12px;

  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
  margin-right: 30px;
  padding-top: 20px;
}

.vue-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}

.vue-notification.error {
  background: #e54d42;
  border-left-color: #b82e24;
}

.vue-notification.success {
  background: #68cd86;
  border-left-color: #42a85f;
}
</style>
