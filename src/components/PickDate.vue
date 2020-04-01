<template>
  <div class="row">
    <div class="col-md-6">
      <div class="row">
        <div class="col-6 text-right">
          <label for="pick-date">Choose a date</label>
        </div>
        <div class="col-6">
          <b-form-datepicker
            id="pick-date"
            class="mb-2"
            :date-format-options="{
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              weekday: 'short'
            }"
            locale="en"
            :value="dateGetter"
            @input="getImageForDate"
          ></b-form-datepicker>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <div class="col-6">
          <b-button @click="saveFavouriteDate" variant="outline-success"
            >Save as Favourite
          </b-button>
        </div>
        <div class="col-6">
          <div v-if="savedDateGetter">
            <b-button @click="showFavouriteDate" variant="outline-success"
              >Show Favourite
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { parseDate, formatDate } from "../common";

export default {
  name: "PickDate",
  computed: mapGetters(["dateGetter", "savedDateGetter"]),

  methods: {
    ...mapActions(["fetchApodImage", "toggleModalState", "saveFavourite"]),

    //function to get image for the given date
    getImageForDate(selectedDate) {
      //change date to right format to compare dates incase date is from future
      let Finaldate = parseDate(selectedDate);
      let dateToday = new Date();

      //Compare dates to check if date is from future and throw error if its, else call api
      if (Finaldate > dateToday) {
        this.toggleModalState(true);
        return;
      } else {
        this.fetchApodImage(formatDate(Finaldate));
      }
    },
    //Function to save favourite date, in local storage
    saveFavouriteDate() {
      this.saveFavourite();
    },
    //Function to show for favourite date from local storage
    showFavouriteDate() {
      this.fetchApodImage(this.savedDateGetter);
    }
  }
};
</script>
<style scoped></style>
