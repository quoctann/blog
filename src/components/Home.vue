<template>
  <div class="home my-4">
    <div class="container">
      <div class="row"> <!-- only one row -->


        <div class="col-xl-8"> <!-- left side with 8/10 viewport width to display featured post -->
          <div
            class="post container"
            v-for="post in filterPost"
            v-bind:key="post.id"
            style="padding: 0"
          > <!-- render post from post array, see filterPost to know more -->
            <div class="card rounded-sm shadow my-3">
              <div class="card-img-wrap">
                <img
                  class="card-img-top"
                  v-bind:src="getImg(post.img)"
                  alt="article image"
                /> <!-- this is article image, getImg to make this working correctly -->
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
                  <small class="text-muted">Cập nhật {{ lastUpdate(post) }} ngày trước. {{ post.wordcount }} từ, khoảng {{ Math.round(post.wordcount/200) }} phút đọc</small>
                </p> <!-- this method will calculate how long since this post was written -->
                <button
                  type="button"
                  class="btn btn-outline-success btn-sm"
                  v-on:click="handlePost(post)"
                >
                  Xem bài viết đầy đủ
                </button> <!-- post is an element of posts array -->
              </div>
            </div>
          </div> <!-- end of post element-->
        </div> <!-- end of left side element, feature post-->


        <div class="col-xl my-3"> <!-- right side element -->

          <div class="feature rounded shadow" style="background-color: #f7f7f7"> <!-- about me -->
            <div class="graphic"> <!-- cover picture -->
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
              <h5 class="myname">Trần Quốc Tấn</h5>
              <hr>
              <div class="box-trophy">
                <i class="fas fa-trophy" style="color: gold"></i>
                <span class="pl-1" style="color: #c36f09">Trời mưa biết chạy vào nhà</span>
                <br>
                <i class="fas fa-heart" style="color: #cb322a"></i>
                <span class="pl-1" style="color: #a52824">Làm con của bố mẹ toàn thời gian</span>
              </div>
              <hr>
              <p style="text-align: justify;">
                Bio của mình cũng không có gì quá nổi bật. Mình viết chỉ vì mình muốn thử sức viết lách, đồng thời ôn lại những gì mình học hỏi được, cũng như chia sẻ những quan niệm sống của bản thân. Hy vọng những giá trị mình tạo ra ở đây sẽ hữu ích đối với bạn! <i class="far fa-smile-wink"></i>
              </p>
              <blockquote class="blockquote text-center">
                <small style="color: #1d8348">"Be nice, be respectful"</small>
              </blockquote>
            </div>
          </div> <!-- end of about me -->

          <div class="utilities"> <!-- filter post by date or labels/tags -->

            <div class="card text-center shadow my-3">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">

                  <li class="nav-item"> <!-- filter by labels/tags -->
                    <a
                      class="nav-link"
                      v-bind:class="{ active: labelsActive }"
                      @click="lbActive"
                      ><i class="fas fa-tags mr-1 post-icon"></i>Nhãn bài viết
                    </a>
                  </li>

                  <li class="nav-item"> <!-- filter by date -->
                    <a
                      class="nav-link"
                      v-bind:class="{ active: archiveActive }"
                      @click="arcActive"
                      ><i class="fas fa-archive mr-1 post-icon"></i>Lưu trữ
                    </a>
                  </li>

                </ul>

              </div>

              <div class="card-body"> <!-- condition rendering -->

                <div class="labels" v-if="labelsActive"> <!-- when labels/tags is selected-->
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="lb in this.$store.state.labels"
                      v-bind:key="lb.id"
                    > <!-- rendering all labels name -->
                      <a class="link" @click="tagSelected(lb.name)">{{lb.name}}</a>
                    </li>
                  </ul>
                </div>

                <div class="archive" v-if="archiveActive"> <!-- when date is selected-->
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="ar in this.$store.state.archive"
                      v-bind:key="ar.id"
                    >
                      <a 
                        class="link" 
                        @click="archiveSelected(ar.month, ar.year)"
                      >Tháng {{ ar.month }} năm {{ ar.year }} ({{ar.postCount}})
                      </a>
                    </li>
                  </ul>
                </div>
              </div> <!-- end condition rendering -->

            </div>

          </div> <!-- end utilities -->

        </div> <!-- end of right side element -->

      </div> <!-- row -->
      
    </div> <!-- container -->
    
  </div> <!-- home -->
  
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      archiveActive: false, // these two variables have opposite values
      labelsActive: true,
    };
  },
  components: {},
  computed: {
    filterPost: function() {
      if (this.$store.state.isFilter == false) // default
        return this.$store.state.posts.filter((i) => i.featured == true); // rendering featured posts
      if (this.$store.state.selectedLabel !== "") // filter by labels if user triggered this
        return this.$store.state.posts.filter(
          (i) => i.label === this.$store.state.selectedLabel
        );
      return this.$store.state.posts.filter( // filter by date if no tags was triggered
        (i) => (i.month == this.$store.state.sMonth)
      );
    },
  },
  methods: {
    handlePost(data) { // "data" is an element of posts object array, store everything about this post
      this.$store.commit("viewingPost", data);
    },
    getImg(url) { // this make the url working correctly
      return require(`@/assets/${url}`);
    },
    lbActive() { // to enable labels view and disable the opposite one
      this.archiveActive = false;
      this.labelsActive = true;
    },
    arcActive() { // to enable date view and disable the opposite one
      this.archiveActive = true;
      this.labelsActive = false;
    },
    tagSelected(lb) { // to enable filter and send label name to center store for filtering
      this.$store.commit("updateLabel", lb);
      this.$store.commit("filtering");
    },
    archiveSelected(month, year) { // to enable filter and send date to center store for filtering
      this.$store.commit("updateDate", month, year);
      this.$store.commit("filtering");
    },
    lastUpdate(data) { // calculating how long since this post was written
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

/* formating right side about me*/
.myname {
  font-family: "Sriracha", cursive;
  font-size: 1.5rem;
}
.feature {
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
