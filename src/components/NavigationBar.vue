<template>
  <div class="sticky-top navigation-bar shadow">
    <nav
      class="navbar navbar-expand-xl navbar-light"
      style="background-color: #baf2bb"
    >
      <a class="navbar-brand" href="#" @click="homepage('homepage')">
        <i class="fas fa-quote-left"></i>
        Đây là một chiếc blog</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-cheese" style="color: #333"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-bind:class="{
              active:
                this.$store.state.currentNavItem == 'homepage' ? true : false,
            }"
          >
            <!-- put some data binding here for active class -->
            <a class="nav-link" href="#" @click="homepage('homepage')">
              <i class="fas fa-home"></i>
              Trang chủ</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click="handlePostsPageClick('postspage')"
            >
              <i class="fas fa-edit"></i>
              Bài viết</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="handleIntroClick('intropage')">
              <i class="fas fa-info-circle"></i>
              Giới thiệu</a
            >
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-language"></i>
              english</a
              >
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-tags"></i>
              Nhãn bài viết
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                v-for="lb in this.$store.state.labels"
                v-bind:key="lb.id"
                @click="handleTagsClick(lb.name)"
                >{{ lb.name }}</a
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation-bar",
  props: {},
  data() {
    return {
    };
  },
  methods: {
    homepage(name) {
      this.$store.commit("selectPage", name);
      // console.log(this.$store.state.currentNavItem)
      this.$store.commit("cancelFilter");
    },
    handleTagsClick(name) {
      var current = "";
      this.$store.commit("filtering");
      this.$store.commit("updateLabel", name);
      if (this.$store.state.currentNavItem === "postspage")
        current = "postspage";
      else if (this.$store.state.currentNavItem === "intropage")
        current = "postspage";
      else current = "postspage";
      this.$store.commit("selectPage", current);
    },
    handlePostsPageClick(name) {
      this.$store.commit("selectPage", name);
      // console.log(this.$store.state.currentNavItem);
      this.$store.commit("cancelFilter");
    },
    handleIntroClick(name) {
      this.$store.commit("selectPage", name);
      // console.log(this.$store.state.currentNavItem);
      this.$store.commit("cancelFilter");
    },
  },
  computed: {},
};
</script>

<style>
.navbar-brand {
  color: #333 !important;
  
}
.navbar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
.dropdown-item {
  font-family: 'Nunito', Arial, Helvetica, sans-serif;
}
.navbar,
.navbar-brand {
  font-size: 20px;
  font-weight: bold;
}
.fa-quote-left {
  margin-right: 5px;
}
.fa-hamburger {
  color: white;
}
.nav-item:hover {
  cursor: pointer;
}
.deactive {
  display: none;
}
</style>
