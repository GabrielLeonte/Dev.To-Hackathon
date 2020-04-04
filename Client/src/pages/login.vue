<template>
  <div class="login-page">
    <div class="columns is-multiline is-mobile">
      <div class="column is-full title">
        <h1>Welcome</h1>
      </div>
      <div class="column is-full">
        <img src="../assets/auth.svg" />
      </div>
      <div class="column is-full">
        <input
          type="tel"
          class="phone"
          placeholder="Phone number"
          maxlength="10"
        />
      </div>
      <div class="column is-full">
        <input type="password" class="password" placeholder="Password" />
      </div>
      <div class="column is-full">
        <input type="submit" value="Login" />
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
          <router-link to="/reset" style="color: #6fb555;">Reset </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  user-select: none;
}
.login-page {
  height: 100vh;
}
.title > h1 {
  margin-top: 17vh;
  font-weight: 600;
  font-size: 40px;
}
input[type="tel"],
input[type="password"] {
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
  width: 130px;
}
</style>
