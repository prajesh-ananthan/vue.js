<template>
    <div class="article">
        <h1>{{ title }}</h1>

        <p>Published on {{ published | moment }}</p>
        <p>Shares: {{ shares }}</p>
        <p class="lead">{{ content }}</p>

        <app-author :author="author"></app-author>
        <br><br>

        <!-- :article="$data"   : Pass the data object to Social.vue page -->
        <!-- $data              : This gives us access to the data object -->
        <app-social-sharing :article="$data" @articleWasShared="shared"></app-social-sharing>
    </div>
</template>

<script>
import moment from "moment";
import Author from "./Author.vue";
import Social from "./Social.vue";

export default {
  data() {
    return {
      title: "10 Reasons why Vue.js is Awesome",
      published: new Date(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan eu erat ut scelerisque.",
      author: {
        firstName: "Prajesh",
        lastName: "Ananthan"
      },
      shares: 0
    };
  },
  filters: {
    moment: function(value) {
      return moment(value).format("MMMM Do");
    }
  },
  methods: {
    shared: function(event) {
      this.shares++;
      console.log(event);
    }
  },
  components: {
    appAuthor: Author,
    appSocialSharing: Social
  }
};
</script>
