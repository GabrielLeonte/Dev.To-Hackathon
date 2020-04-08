<template>
  <div>
    <div>Welcome home passager</div>
    <div>{{ $store.state.user }}</div>
    <br />
    <div><button class="button" @click="logout">Logout</button></div>
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
