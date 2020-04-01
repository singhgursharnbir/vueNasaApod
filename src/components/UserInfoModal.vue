<template>
  <div>
    <b-modal ref="user-modal" hide-footer title="Welcome.. !!">
      <div class="d-block text-center">
        <h3>Please let us know your name</h3>
        <input
          type="text"
          :value="user.username"
          @input="saveUserInfo"
          class="form-control"
          placeholder="Enter Name"
        />
      </div>
      <b-button
        class="mt-3 float-right"
        variant="outline-success"
        @click="hideModal"
        >Ok</b-button
      >
      <small id="errorMessage" class="text-danger"> Please add in Name</small>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserInfoModal",
  computed: mapGetters(["user"]),

  //When mounted check if there is a username, if not show popup
  mounted() {
    if (!this.user.userName) {
      this.$refs["user-modal"].show();
    } else {
      this.$refs["user-modal"].hide();
    }
  },
  methods: {
    ...mapActions(["userInfo"]),

    //Function to save user info
    saveUserInfo(e) {
      this.userInfo(e.target.value);
    },

    //Functin to hide popup after checking if user have entered the username
    hideModal() {
      let x = document.getElementById("errorMessage");
      if (this.user.userName) {
        x.style.display = "none";
        this.$refs["user-modal"].hide();
      } else {
        x.style.display = "block";
      }
    }
  }
};
</script>
