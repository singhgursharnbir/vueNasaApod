<template>
  <div class="row m-4">
    <div class="col-md-12">
      <div
        class="row font-weight-bold justify-content-center text-primary mt-2"
      >
        <h4>{{ imageGetter.title }}</h4>
      </div>
      <div class="row justify-content-center">
        <p>{{ imageGetter.explanation }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ImageDescription",
  computed: mapGetters(["imageGetter"])
};
</script>
