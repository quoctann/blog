<template>
  <div class="sticky-top navigation-bar shadow">

    <nav
      class="navbar navbar-expand-xl navbar-light"
      style="background-color: #baf2bb"
    >
      <a class="navbar-brand" href="#" @click="switchPageTo('homepage')">
        <i class="fas fa-quote-left"></i>
        Một chiếc blog
      </a>
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
            v-bind:class="{ active: this.$store.state.currentNavItem == 'homepage' ? true : false, }"
          >
            <a class="nav-link" href="#" @click="switchPageTo('homepage')">
              <i class="fas fa-home"></i>
              Trang chủ
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click="switchPageTo('postspage')"
            >
              <i class="fas fa-edit"></i>
              Bài viết
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="switchPageTo('intropage')">
              <i class="fas fa-info-circle"></i>
              Giới thiệu
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            > <!-- bootstrap -->
              <i class="fas fa-tags"></i>
              Nhãn bài viết
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                v-for="lb in this.$store.state.labels"
                v-bind:key="lb.id"
                @click="handleTagsClick(lb.name)"
              > <!-- rendering all labels name in labels array -->
                {{ lb.name }}
              </a>
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
    return {};
  },
  methods: {
    handleTagsClick(name) {
      this.$store.commit("filtering"); // enable filter
      this.$store.commit("updateLabel", name); // with this label name
      this.$store.commit("selectPage", "postspage"); // and switch to posts view
    },
    switchPageTo(name) { // switch to page "name"
      this.$store.commit("selectPage", name);
      this.$store.commit("cancelFilter"); // and disable filter
    }
  },
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
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
}
.dropdown-item {
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
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
</style>
