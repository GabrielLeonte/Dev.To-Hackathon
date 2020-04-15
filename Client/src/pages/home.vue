<template>
  <div>
    <div class="title">
      <span>
        Taken Cases
      </span>
    </div>
    <div class="table-container">
      <table>
        <tr>
          <th style="width: 350px;">Call ID</th>
          <th style="width: 150px;">Caller Number</th>
          <th style="width: 130px;">Caller City</th>
          <th style="width: 100px;">Caller State</th>
          <th style="width: 100px;">Caller Zip</th>
          <th style="width: 80px;">Duration</th>
          <th style="width: 80px;">Status</th>
          <th style="width: 80px;">Listen</th>
        </tr>
        <tr
          v-for="(item, index) in $store.state.cases"
          :key="index"
          style="line-height: 40px;   vertical-align: baseline;"
        >
          <td>{{ item.CallSid }}</td>
          <td>{{ item.Caller }}</td>
          <td>{{ item.CallerCity }}</td>
          <td>{{ item.CallerState }}</td>
          <td>{{ item.CallerZip }}</td>
          <td>{{ item.RecordingDuration }} s</td>
          <td>{{ item.Status }}</td>
          <button class="material-icons" @click="playAudio(item.RecordingUrl)">
            play_arrow
          </button>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playAudio(url) {
      // new Audio(url).play()
    }
  },
  mounted() {
    this.$socket.emit("getCases", this.$store.state.token);
    console.log(12);
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
  overflow-x: auto;
  position: relative;
  margin-top: 2%;
  left: 2%;
}
button.material-icons {
  user-select: none;
  outline: none;
  float: left;
  color: #ffffff;
  margin-left: 1%;
  display: block;
  border: 0;
  background: #e91e40 !important;
  color: #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: 4px;
}
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
th {
  border-bottom: solid #8d8d8d 0.5px;
  user-select: none;
}
td {
  font-size: 12px;
  font-weight: 700;
}
</style>
