<template>
    <div>
        <div class="title">
            <span> Open Cases </span>
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
                <tr v-for="(item, index) in $store.state.cases" :key="index" style="line-height: 40px; vertical-align: baseline;">
                    <td>{{ item.CallSid }}</td>
                    <td>{{ item.Caller }}</td>
                    <td>{{ item.CallerCity }}</td>
                    <td>{{ item.CallerState }}</td>
                    <td>{{ item.CallerZip }}</td>
                    <td>{{ item.RecordingDuration }} s</td>
                    <td>{{ new Date(item.createdAt).toGMTString() }}</td>
                    <td>{{ item.Status }}</td>
                    <td>
                        <button class="button is-danger is-small" @click="playAudio(item.RecordingUrl)">
                            Listen
                        </button>
                    </td>
                    <td>
                        <button class="button is-warning is-small" @click="takeCase(item.CallSid)">
                            Take the case
                        </button>
                    </td>
                </tr>
            </table>

            <td v-if="$store.state.cases.length == 0" style="font-size: 14.5px; padding-top: 10px;">
                Well, that's a good sign, nobody needs our help at this moment! :D
            </td>
        </div>
        <!-- Take case Confirm Modal -->
        <v-dialog :width="600" />
    </div>
</template>

<script>
export default {
    methods: {
        playAudio(url) {
           new Audio(url).play();
        },
        takeCase(CallSid) {
            this.$modal.show("dialog", {
                title: "Take the case",
                text: "Make sure that you are able to fully understand the needs of this man, and if you're sure!",

                buttons: [{
                        title: "Let's do this, this man needs my help!",
                        handler: () => {
                            this.$modal.hide("dialog");
                            this.$socket.emit("takeCase", {
                                token: this.$store.state.token,
                                CallSid: CallSid
                            });
                        }
                    },
                    {
                        title: "I'am not sure, better not"
                    }
                ]
            });
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
