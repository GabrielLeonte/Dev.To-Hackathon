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
          <th style="width: 300px;">Call ID</th>
          <th style="width: 180px;">Caller Number</th>
          <th style="width: 130px;">Caller City</th>
          <th style="width: 100px;">Caller State</th>
          <th style="width: 100px;">Caller Zip</th>
          <th style="width: 80px;">Duration</th>
          <th style="width: 210px;">Expire At</th>
          <th style="width: 80px;">Status</th>
          <th style="width: 80px;">Play</th>
          <th style="width: 170px;">Submit</th>
          <th style="width: 150px;">Release the case</th>
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
          <td>{{ new Date(item.expiresAt).toGMTString() }}</td>
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
            <button
              class="button is-success is-small"
              @click="openVolunteerModal(item.CallSid)"
            >
              Submit to Volunteers
            </button>
          </td>
          <td>
            <button type="submit" class="button is-danger is-small">
              Release
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
    <!-- Send to Volunteer Modal -->
    <modal name="submit-to-volunteers" :height="550">
      <form @submit.prevent="submitToVolunteers">
        <div>
          <div>
            <span class="custom-title">Submit to Volunteers</span>
          </div>
          <div>
            <span class="custom-subtitle">
              - In order to help peoples you will have to chose the best
              volunteer for the user's requests!
            </span>
          </div>
        </div>
        <div class="modal-body">
          <div class="block">
            <span class="custom-input-title">Choose volunteer category</span>
            <div>
              <select class="client-name" v-model="volunteerType" required>
                <option value="food-delivery" selected>Food Delivery</option>
                <option value="human-help">Physical Help</option>
                <option value="shoppings">Shoppings</option>
                <option value="pharmacy-shoppings">Pharmacy Shoppings</option>
                <option value="basic-food">
                  Basic Food Shoppings (eg: Bread, Tomatos, Milk...)
                </option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div class="block">
            <span class="custom-input-title">Client Contact Name</span>
            <div>
              <input
                type="text"
                class="client-name"
                placeholder="Name"
                v-model="clientName"
                required
              />
            </div>
          </div>
          <div class="block">
            <span class="custom-input-title">
              Description (this one will be sent to he volunteer)
            </span>
            <div>
              <textarea
                cols="93"
                rows="7"
                style="resize:none;"
                v-model="description"
                required
              ></textarea>
            </div>
          </div>
          <div class="block submit">
            <div>
              <input
                type="submit"
                class="button is-success is-small"
                value="Submit"
              />
            </div>
          </div>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    playAudio(url) {
      new Audio(url).play();
    },
    openVolunteerModal(modalID) {
      this.modalID = modalID;
      this.$modal.show("submit-to-volunteers");
    },
    async submitToVolunteers() {
      this.$modal.hide("submit-to-volunteers");
      console.log({
        id: this.modalID,
        description: this.description,
        type: this.volunteerType,
        clientName: this.clientName
      });
    }
  },
  mounted() {
    this.$socket.emit("getCases", this.$store.state.token);
  },
  data() {
    return {
      volunteerType: "",
      clientName: "",
      description: "",
      modalID: ""
    };
  }
};
</script>

<style scoped>
* {
  outline: none;
}
.block {
  padding-left: 2%;
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
.modal-body {
  margin-top: 40px;
}
.custom-input-title {
  font-weight: 700;
  font-size: 15px;
}
.client-name {
  width: 54%;
  padding: 2px 2px 2px 2px;
  border: 0;
  border-bottom: solid #8d8d8d 0.5px;
}
.submit {
  position: relative;
  margin-top: 18.5%;
}
</style>
