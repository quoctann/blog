<template>
  <div class="selected-post container">

    <div class="img-wrapper my-3"> <!-- cover image -->
      <img
        class="img shadow-md"
        v-bind:src="getImg(getData.img)"
        alt="article image"
      />
    </div>

    <hr />

    <div class="text-body">
      <h2 class="title">{{ getData.title }}</h2>
      <div class="post-info my-2">
        <span class="mr-3">
          <i class="fas fa-tag post-icon"></i>{{ getData.label }}
        </span>
        <span class="mr-3">
          <i class="fas fa-pen-nib post-icon"></i>Tác giả: {{ getData.author }}
        </span>
        <span class="">
          <i class="fas fa-calendar post-icon"></i>Ngày đăng: {{ getData.date }}
        </span>
        <div>
        <small>{{ getData.wordcount }} từ, khoảng {{ Math.round(getData.wordcount/200) }} phút đọc</small>
        </div>
      </div>
      <hr />
      <div class="content text-justify" v-html="getData.content"></div>
      <!-- with v-html you can use html tag to format content-->
      <p class="update-date mt-2">
        <small class="text-muted">Cập nhật {{ lastUpdate }} ngày trước.</small>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "selected-post",
  data() {
    return {};
  },
  computed: {
    getData: function() {
      return this.$store.state.viewingData;
    },
    lastUpdate() {
      var today = new Date();
      var dateCreated = new Date(
        this.getData.year,
        this.getData.month - 1,
        this.getData.day
      );
      return (
        (today.getTime() - dateCreated.getTime()) /
        (1000 * 3600 * 24)
      ).toFixed(0);
    },
  },
  methods: {
    getImg(url) {
      return require(`@/assets/${url}`);
    },
  },
};
</script>

<style>
.img-wrapper {
  height: 20%;
}
.img-wrapper > img {
  height: 100%;
  width: 100%;
}

@media (min-width: 768px) {
  /* small screen */
  .img-wrapper {
    height: 20rem;
  }
  .img-wrapper > img {
    height: 100%;
    width: auto;
    max-width: 100%;
  }
  
}
.title {
  font-family: "Josefin Sans", sans-serif;
}
.post-icon {
  margin-right: 0.5rem;
}
/* style for post 102, info and error code */
.err {
  color: red;
}
.inf {
  color: gray;
}
pre {
  background-color: lightgray;
  padding: 1rem;
  border-radius: 0.5rem;
}
.selected-post h2 {
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
}
</style>
