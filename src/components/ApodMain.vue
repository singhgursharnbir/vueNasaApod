<template>
  <div class="container">
    <UserInfoModal />
    <ImageComponent />
    <ImageDescription />
  </div>
</template>

<script>
import ImageComponent from "./ImageComponent.vue";
import ImageDescription from "./ImageDescription.vue";
import UserInfoModal from "./UserInfoModal";

export default {
  name: "ApodMain",
  components: {
    ImageComponent,
    ImageDescription,
    UserInfoModal
  }
};
</script>
