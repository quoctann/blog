<template>
  <div id="app" class="container-fluid p-0">
    <navigation-bar />
    <home v-if="homepageActive" />
    <selected-post v-if="viewingPost" />
    <posts v-if="postspageActive" />
    <introduce v-if="introActive" />
    <Footer class="footer" />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import SelectedPost from "./components/SelectedPost.vue";
import Posts from "./components/Posts.vue";
import Introduce from "./components/Introduce.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    NavigationBar,
    Footer,
    Home,
    SelectedPost,
    Posts,
    Introduce,
  },
  methods: {},
  computed: {
    // all the methods are below to switch content views
    homepageActive: function() {
      return this.$store.state.currentNavItem === "homepage";
    },
    postspageActive: function() {
      return this.$store.state.currentNavItem === "postspage";
    },
    introActive: function() {
      return this.$store.state.currentNavItem === "intropage";
    },
    viewingPost: function() {
      return this.$store.state.currentNavItem === "viewingpost";
    },
    isDeactive: function() {
      return this.$store.state.currentNavItem === "homepage";
    },
  },
};
</script>

<style>
.container-fluid {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  font-weight: 500;
  background-color: #f4f4f4;
}
.deactive {
  display: none;
}
</style>
