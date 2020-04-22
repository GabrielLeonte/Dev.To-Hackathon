<template>
  <div>
    <div class="title">
      <span>
        Open Cases
      </span>
    </div>
    <div class="table-container">
      <table>
        <tr>
          <th style="width: 350px;">Call ID</th>
          <th style="width: 180px;">Caller Number</th>
          <th style="width: 130px;">Caller City</th>
          <th style="width: 100px;">Caller State</th>
          <th style="width: 100px;">Caller Zip</th>
          <th style="width: 100px;">Duration</th>
          <th style="width: 210px;">Recorded at</th>
          <th style="width: 80px;">Status</th>
          <th style="width: 80px;">Play</th>
          <th style="width: 130px;">Take It</th>
        </tr>
        <tr
          v-for="(item, index) in $store.state.cases"
          :key="index"
          style="line-height: 40px; vertical-align: baseline;"
        >
          <td>{{ item.CallSid }}</td>
          <td>{{ item.Caller }}</td>
          <td>{{ item.CallerCity }}</td>
          <td>{{ item.CallerState }}</td>
          <td>{{ item.CallerZip }}</td>
          <td>{{ item.RecordingDuration }} s</td>
          <td>{{ new Date(item.createdAt).toGMTString() }}</td>
          <td>{{ item.Status }}</td>
          <td>
            <button
              class="button is-danger is-small"
              @click="playAudio(item.RecordingUrl)"
            >
              Listen
            </button>
          </td>
          <td>
            <button class="button is-warning is-small ">Take the case</button>
          </td>
        </tr>
        <td v-if="$store.state.cases.length == 0">Well, that's a good sign, nobody needs our help at this moment! :D</td>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playAudio(url) {
      new Audio(url).play();
    }
  },
  mounted() {
    this.$socket.emit("getCases", this.$store.state.token);
  }
};
</script>

<style scoped>
* {
  outline: none;
}
.title {
  position: relative;
  text-align: left;
  margin-top: 1%;
  left: 1%;
}
.table-container {
  display: flexbox;
  max-height: 81vh;
  overflow-x: auto;
  overflow-y: auto;
  position: relative;
  margin-top: 2%;
  left: 2%;
}
th {
  border-bottom: solid #8d8d8d 0.5px;
  user-select: none;
}
td {
  font-size: 12px;
  font-weight: 700;
}
button.is-small {
  margin-top: 8px;
}
</style>
