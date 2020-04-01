<template>
  <div class="col-md-1 my-auto text-center p-2">
    <img
      @click="getPrevImage"
      class="thumbImage"
      src="../leftArrow.png"
      alt="prev"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { parseDate, formatDate } from "../common";

export default {
  name: "PrevIcon",
  methods: {
    ...mapActions(["fetchApodImage"]),

    //Function to get image for prev date
    getPrevImage() {
      //Change format of date to datetime stamp to decrease
      let tempDate = parseDate(this.dateGetter);
      this.date = tempDate.setDate(tempDate.getDate() - 1);

      //Change it back to required formate for API
      let Finaldate = formatDate(tempDate);

      //Call API
      this.fetchApodImage(Finaldate);
    }
  },
  computed: mapGetters(["dateGetter"])
};
</script>
