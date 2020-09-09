<template>
  <div class="home my-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <!-- left side element -->
          <div
            class="post container"
            v-for="post in filterPost"
            v-bind:key="post.id"
            style="padding: 0"
          >
            <div class="card rounded-sm shadow my-3">
              <div class="card-img-wrap">
                <img
                  class="card-img-top"
                  v-bind:src="getImg(post.img)"
                  alt="article image"
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
          <!-- end of post element-->
        </div>
        <!-- end of left side element-->

        <div class="col-xl my-3">
          <!-- right side element -->

          <div class="feature rounded shadow" style="background-color: #f7f7f7">
            <!-- about me -->
            <div class="graphic">
              <!-- graphic -->
              <div class="cover-wrapper">
                <img src="@/assets/bg.jpg" alt="cover about me" />
              </div>
              <div class="avt-wrapper">
                <img
                  src="@/assets/avt.jpg"
                  alt="avatar"
                  class="rounded-circle shadow"
                />
              </div>
            </div>
            <div class="p-2 m-2">
              <!-- text -->
              <h5 class="myname">Trần Quốc Tấn</h5>
              <hr>
              <div class="box-trophy">
              <i class="fas fa-trophy" style="color: gold"></i>
              <span class="pl-1" style="color: #c36f09"
                >Trời mưa biết chạy vào nhà</span
              >
              <br>
              <i class="fas fa-heart" style="color: #cb322a"></i>
              <span class="pl-1" style="color: #a52824"
                >Top 10 người giàu tình cảm</span
              >
              </div>
              <hr>
              <p style="text-align: justify;">
                Top 10 thì mình phét cho vui, nhưng nội dung mình viết thì không phét đâu! Hy vọng một ít năng lượng tích cực, cùng với một xíu hiểu biết mà mình đã đặt vào đây có thể giúp cho bạn chút gì đó! <i class="far fa-smile-wink"></i>
              </p>
              <blockquote class="blockquote text-center">
                <small style="color: #1d8348">"Be nice, be respectful"</small>
              </blockquote>
            </div>
          </div>
          <!-- end of about me -->

          <div class="utilities">
            <div class="card text-center shadow my-3">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      v-bind:class="{ active: labelsActive }"
                      @click="lbActive"
                      ><i class="fas fa-tags mr-1 post-icon"></i>Nhãn bài
                      viết</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      v-bind:class="{ active: archiveActive }"
                      @click="arcActive"
                      ><i class="fas fa-archive mr-1 post-icon"></i>Lưu trữ</a
                    >
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="labels" v-if="labelsActive">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="lb in this.$store.state.labels"
                      v-bind:key="lb.id"
                    >
                      <a class="link" @click="tagSelected(lb.name)">{{
                        lb.name
                      }}</a>
                    </li>
                  </ul>
                </div>
                <div class="archive" v-if="archiveActive">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="ar in this.$store.state.archive"
                      v-bind:key="ar.id"
                    >
                      <a
                        class="link"
                        @click="archiveSelected(ar.month, ar.year)"
                        >Tháng {{ ar.month }} năm {{ ar.year }} ({{
                          ar.postCount
                        }})</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- displaying element of menu -->
            </div>
          </div>
          <!-- utilities -->
        </div>
        <!-- end of right side element -->
      </div>
      <!-- row -->
    </div>
    <!-- highest container -->
  </div>
  <!-- post list -->
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      isVisible: true,
      archiveActive: false,
      labelsActive: true,
    };
  },
  components: {},
  computed: {
    filterPost: function() {
      if (this.$store.state.isFilter == false)
        return this.$store.state.posts.filter((i) => i.featured == true);
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
    toggleCollapse() {
      this.isVisible = !this.isVisible;
    },
    handlePost(data) {
      // console.log(data);
      this.$store.commit("viewingPost", data);
    },
    getImg(url) {
      return require(`@/assets/${url}`);
    },
    lbActive() {
      this.archiveActive = false;
      this.labelsActive = true;
    },
    arcActive() {
      this.archiveActive = true;
      this.labelsActive = false;
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
/* formating left side with content */
.disable {
  display: none;
}
.post > .card {
  display: flex;
  /* border: 1px solid #333; */
}
.card-img-wrap {
  height: 12rem;
  overflow: hidden;
}
.post-title {
  font-family: "Sriracha", cursive;
  font-size: 1.5rem;
}
.post-icon {
  color: #1d8348;
  margin: 0;
  padding: 0;
}

/* formating right side about me */
.myname {
  font-family: "Sriracha", cursive;
  font-size: 1.5rem;
}
.feature {
  /* border: 1px solid #333; */
  overflow: hidden;
  background-color: white !important;
}
.cover-wrapper {
  width: 100%;
  height: 50%;
}
.cover-wrapper > img {
  width: 100%;
  height: 100%;
}
.avt-wrapper {
  width: 100%;
  height: 100%;
  margin-top: -25%;
}
.avt-wrapper > img {
  width: 40%;
  height: 40%;
}

/* formating right side utilities */
.utilities .nav-item {
  cursor: pointer;
}
.link {
  cursor: pointer;
}
.link:hover {
  font-weight: bold;
  color: #1d8348 !important;
}
</style>
