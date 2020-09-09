<template>
  <div class="posts my-4">
    <div class="container">
      <div class="card-columns">
        <div
          class="card rounded-sm shadow my-3"
          v-for="post in filter"
          v-bind:key="post.id"
        >
          <div class="card-img-wrap">
            <img
              class="card-img-top"
              v-bind:src="getImg(post.img)"
              alt="article image"
              style="height: 12rem"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title post-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>

            <a class="link mr-3" @click="tagSelected(post.label)">
              <i class="fas fa-tag post-icon"></i>
              <span>{{ post.label }}</span>
            </a>
            <a class="mr-3">
              <i class="fas fa-pen-nib post-icon"></i>
              <span>Tác giả: {{ post.author }}</span>
            </a>
            <a class="link mr-3" @click="archiveSelected(post.month, post.year)">
              <i class="fas fa-calendar post-icon"></i>
              <span>Ngày đăng: {{ post.day }} tháng {{ post.month }} năm {{ post.year }}</span>
            </a>
            <p class="card-text">
              <small class="text-muted">Cập nhật {{ lastUpdate(post) }} ngày trước</small>
            </p>
            <button
              type="button"
              class="btn btn-outline-success btn-sm"
              v-on:click="handlePost(post)"
            >
              Xem bài viết đầy đủ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts",
  data() {
    return {};
  },
  computed: {
    filter: function() {
      if (this.$store.state.isFilter == false) return this.$store.state.posts;
      if (this.$store.state.selectedLabel !== "")
        return this.$store.state.posts.filter(
          (i) => i.label === this.$store.state.selectedLabel
        );
      return this.$store.state.posts.filter(
        (i) => i.month == this.$store.state.sMonth
      );
    },
  },
  methods: {
    getImg(url) {
      return require(`@/assets/${url}`);
    },
    tagSelected(lb) {
      this.$store.commit("updateLabel", lb);
      this.$store.commit("filtering");
    },
    archiveSelected(month, year) {
      this.$store.commit("updateDate", month, year);
      this.$store.commit("filtering");
      // console.log(this.$store.state.sMonth, this.$store.state.sYear);
    },
    handlePost(data) {
      // console.log(data);
      this.$store.commit("viewingPost", data);
    },
    lastUpdate(data) {
      var today = new Date();
      var dateCreated = new Date(
        data.year,
        data.month - 1,
        data.day
      );
      return (
        (today.getTime() - dateCreated.getTime()) /
        (1000 * 3600 * 24)
      ).toFixed(0);
    },
  },
};
</script>

<style>
.posts > .card {
  background-color: #f7f7f7;
}
</style>
