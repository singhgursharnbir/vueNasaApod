<template>
  <div class="row">
    <div class="col-md-12">
      <div v-if="err">
        <ImageNotFound />
      </div>
      <div v-else class="row">
        <PrevIcon />
        <div class="col-md-10 ">
          <div class="row justify-content-end pl-3 pr-3">
            <div class="col-md-12">
              <PickDate />
            </div>
          </div>
          <div v-if="imageGetter.media_type === 'video'" class="col-md-12 mt-2">
            <iframe
              class="d-block w-100 sliderVideo"
              title="apodYoutube"
              :src="imageGetter.url"
            ></iframe>
          </div>
          <div v-else class="col-md-12 mt-2">
            <img class="d-block w-100 " :src="imageGetter.url" alt="main" />
          </div>
        </div>
        <NextIcon />
      </div>
    </div>
    <div v-if="modalState">
      <ModalComponent />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PrevIcon from "./PrevIcon";
import ImageNotFound from "./ImageNotFound";
import NextIcon from "./NextIcon";
import ModalComponent from "./ModalComponent";
import PickDate from "./PickDate";

import { formatDate } from "../common";

export default {
  name: "ImageComponent",
  components: {
    PrevIcon,
    NextIcon,
    ImageNotFound,
    ModalComponent,
    PickDate
  },

  computed: mapGetters(["imageGetter", "err", "modalState"]),

  methods: {
    ...mapActions(["fetchApodImage"])
  },

  created() {
    this.fetchApodImage(formatDate(new Date()));
  }
};
</script>
