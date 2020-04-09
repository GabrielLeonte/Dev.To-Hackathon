<template>
  <div>
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
    }
  }
};
</script>
