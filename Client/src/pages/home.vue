<template>
  <div>
    <div class="title">
      <span>
        My Cases
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
          <th style="width: 80px;">Duration</th>
          <th style="width: 80px;">Status</th>
          <th style="width: 80px;">Play</th>
          <th style="width: 80px;">Submit</th>
        </tr>
        <tr
          v-for="(item, index) in $store.state.mycases"
          :key="index"
          style="line-height: 40px; vertical-align: baseline;"
        >
          <td>{{ item.CallSid }}</td>
          <td>{{ item.Caller }}</td>
          <td>{{ item.CallerCity }}</td>
          <td>{{ item.CallerState }}</td>
          <td>{{ item.CallerZip }}</td>
          <td>{{ item.RecordingDuration }} s</td>
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
            <button class="button is-success is-small" @click="submit()">
              Submit to Volunteers
            </button>
          </td>
        </tr>
        <tr v-if="$store.state.mycases.length === 0">
          <td style="font-size: 14.5px; padding-top: 10px">
            No case has been taken!
          </td>
        </tr>
      </table>
    </div>
    <modal name="submit-to-volunteers">
      <div>
        <div>
          <span class="custom-title">Submit to Volunteers</span>
        </div>
        <div>
          <span class="custom-subtitle">
            In order to help peoples you will have to chose the best volunteer
            for the user's requests!
          </span>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    playAudio(url) {
      new Audio(url).play();
    },
    submit() {
      this.$modal.show("submit-to-volunteers");
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
  overflow-x: auto;
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
/* Modal Items CSS Here */

.custom-title {
  font-size: 25px;
  padding-left: 5px;
  font-weight: 700;
}
.custom-subtitle {
  font-size: 12px;
  font-weight: 700;
  padding-left: 7px;
}
</style>
