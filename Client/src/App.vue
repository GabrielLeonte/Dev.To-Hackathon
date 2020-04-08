<template>
  <div id="app">
    <notifications position="right bottom" group="foo" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  sockets: {
    error_response(data) {
      this.$notify({ group: "foo", title: "ERROR", text: data, type: "error" });
    },
    critical_error(data) {
      this.$notify({
        group: "foo",
        title: data.name,
        text: data.message.charAt(0).toUpperCase() + data.message.slice(1),
        type: "error"
      });
      this.$store.commit("logout");
    },
    token(token) {
      this.$store.commit("token", token);
    },
    user_data(data) {
      this.$store.commit("user_data", data);
    }
  },
  watch: {
    $route(to, from) {
      if (this.$store.state.token)
        this.$socket.emit("token_valability", this.$store.state.token);
    }
  },
  mounted() {
    if (this.$store.state.token)
      this.$socket.emit("token_valability", this.$store.state.token);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

html,
body {
  overflow: hidden;
}

#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
}
</style>
