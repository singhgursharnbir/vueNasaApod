<template>
  <div>
    <b-modal ref="alert-modal" hide-footer title="I am sorry..!!">
      <div class="d-block text-center">
        <h3>I cannot fetch image from future yet</h3>
      </div>
      <b-button
        class="mt-3 float-right"
        variant="outline-danger"
        @click="hideModal"
        >Ok Close</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { formatDate } from "../common";

export default {
  name: "ModalComponent",
  computed: mapGetters(["modalState"]),

  mounted() {
    //When component mounted check for state of modal to check either show the modal or not
    if (this.modalState) {
      this.$refs["alert-modal"].show();
    } else {
      this.$refs["alert-modal"].hide();
    }
  },

  methods: {
    ...mapActions(["toggleModalState", "fetchApodImage"]),
    hideModal() {
      //Toogle state of modal show to false
      this.toggleModalState(false);

      //Fetch image for today
      this.fetchApodImage(formatDate(new Date()));

      //hide the modal
      this.$refs["alert-modal"].hide();
    }
  }
};
</script>
