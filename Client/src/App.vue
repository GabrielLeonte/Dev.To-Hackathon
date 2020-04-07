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
    }
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
