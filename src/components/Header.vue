<template>
  <div class="bg-dark row mb-2">
    <div class="col-2"></div>
    <div class="col-8 text-center">
      <h1 class=" yellowTextColor text-center ">
        Astronomy Picture of the Day
      </h1>
    </div>
    <div class="col-md-2 pr-4 pt-4 text-right">
      <span class="text-white"
        >Welcome
        {{ user.userName }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: mapGetters(["user"])
};
</script>
