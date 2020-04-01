<template>
  <div class="col-md-1 my-auto text-center p-2">
    <img
      @click="getNextImage"
      class="thumbImage"
      src="../rightArrow.png"
      alt="prev"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { parseDate, formatDate } from "../common";

export default {
  name: "NextIcon",
  methods: {
    ...mapActions(["fetchApodImage", "toggleModalState"]),

    //Function to get next image
    getNextImage() {
      let dateToday = formatDate(new Date());

      //If current date and requested date is same, we cannot get next image so show error and do nothing
      if (this.dateGetter === dateToday) {
        this.toggleModalState(true);
        return;
      }

      //Formate date in right format to increase it by day
      let tempDate = parseDate(this.dateGetter);
      this.date = tempDate.setDate(tempDate.getDate() + 1);

      //Change it back to format required by the API
      let Finaldate = formatDate(tempDate);

      //Call teh api
      this.fetchApodImage(Finaldate);
    }
  },
  computed: mapGetters(["dateGetter"])
};
</script>
