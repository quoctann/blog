import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentNavItem: 'homepage', // store current selected page
    isFilter: false,
    selectedLabel: '',
    sMonth: 0,
    sYear: 0,
    viewingData: {
      title: '',
      author: '',
      day: 0,
      month: 0,
      year: 0,
      label: '',
      img: '',
      content: '',
      // can use slot tag to define this
    },
    labels: [
      {name: 'Công nghệ', id: 10},
      {name: 'Văn học', id: 11},
      {name: 'Tin tức', id: 12},
    ],
    archive: [
      {month: 6, year: 2020, postCount: 1, id: '0620'},
      {month: 7, year: 2020, postCount: 2, id: '0720'},
      {month: 8, year: 2020, postCount: 3, id: '0820'},
      {month: 9, year: 2020, postCount: 4, id: '0920'},

    ],
    posts: [
      {
        id: 100,
        author: "Quoc Tan",
        day: 1,
        month: 7,
        year: 2020,
        label: "Công nghệ",
        img: "article.jpg",
        title: "Bài viết được gợi ý",
        description: "lorem islum dolo sit amet",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur incidunt veritatis doloribus sint labore repudiandae expedita aut magnam beatae consequatur esse ex harum aspernatur eaque fugiat odit reprehenderit consectetur </br> Break something here and i want something classicfied here <h3>Bold text here</h3>",
        featured: true,
      },
      {
        id: 101,
        author: "Quoc Tan",
        day: 20,
        month: 8,
        year: 2020,
        label: "Văn học",
        img: "article2.jpg",
        title: "Đây là tiêu đề bài viết",
        description: "lorem islum dolo sit amet",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur incidunt veritatis doloribus sint labore repudiandae expedita aut magnam beatae consequatur esse ex harum aspernatur eaque fugiat odit reprehenderit consectetur",
        featured: false,
      },
      {
        id: 102,
        author: "Quoc Tan",
        day: 1,
        month: 9,
        year: 2020,
        label: "Tin tức",
        img: "article.jpg",
        title: "Đây là tiêu đề bài viết",
        description: "lorem islum dolo sit amet",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur incidunt veritatis doloribus sint labore repudiandae expedita aut magnam beatae consequatur esse ex harum aspernatur eaque fugiat odit reprehenderit consectetur",
        featured: false,
      },
      {
        id: 103,
        author: "Quoc Tan",
        day: 1,
        month: 9,
        year: 2020,
        label: "Công nghệ",
        img: "article2.jpg",
        title: "Đây là tiêu đề bài viết",
        description: "lorem islum dolo sit amet",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur incidunt veritatis doloribus sint labore repudiandae expedita aut magnam beatae consequatur esse ex harum aspernatur eaque fugiat odit reprehenderit consectetur",
        featured: false,
      },
      {
        id: 104,
        author: "Quoc Tan",
        day: 26,
        month: 8,
        year: 2020,
        label: "Văn học",
        img: "article.jpg",
        title: "Bài viết được gợi ý",
        description: "lorem islum dolo sit amet",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur incidunt veritatis doloribus sint labore repudiandae expedita aut magnam beatae consequatur esse ex harum aspernatur eaque fugiat odit reprehenderit consectetur",
          featured: true,
      },
      {
        id: 105,
        author: "Quoc Tan",
        day: 1,
        month: 7,
        year: 2020,
        label: "Tin tức",
        img: "article2.jpg",
        title: "Bài viết được gợi ý",
        description: "lorem islum dolo sit amet",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur incidunt veritatis doloribus sint labore repudiandae expedita aut magnam beatae consequatur esse ex harum aspernatur eaque fugiat odit reprehenderit consectetur",
        featured: true,
      },
      {
        id: 106,
        author: "Quoc Tan",
        day: 1,
        month: 6,
        year: 2020,
        label: "Công nghệ",
        img: "article.jpg",
        title: "Đây là tiêu đề bài viết",
        description: "lorem islum dolo sit amet",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur incidunt veritatis doloribus sint labore repudiandae expedita aut magnam beatae consequatur esse ex harum aspernatur eaque fugiat odit reprehenderit consectetur",
        featured: false,
      },
      {
        id: 107,
        author: "Quoc Tan",
        day: 1,
        month: 6,
        year: 2020,
        label: "Văn học",
        img: "article.jpg",
        title: "Đây là tiêu đề bài viết",
        description: "lorem islum dolo sit amet",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur incidunt veritatis doloribus sint labore repudiandae expedita aut magnam beatae consequatur esse ex harum aspernatur eaque fugiat odit reprehenderit consectetur",
        featured: false,
      },
    ],
  },
  mutations: {
    selectPage(state, name) {
      state.currentNavItem = name;
    },
    cancelFilter(state) {
      state.isFilter = false;
    },
    filtering(state) {
      state.isFilter = true;
    },
    updateLabel(state, name) {
      state.selectedLabel = name;
      state.sYear = 0;
      state.sMonth = 0;
    },
    cancelFilterDate(state) {
      state.isFilter = false;
    },
    updateDate(state, month, year) {
      state.sMonth = month;
      state.sYear = year;
      state.selectedLabel = '';
    },
    viewingPost(state, data) {
      state.currentNavItem = 'viewingpost';
      state.viewingData.title = data.title;
      state.viewingData.author = data.author;
      state.viewingData.day = data.day;
      state.viewingData.month = data.month;
      state.viewingData.year = data.year;
      state.viewingData.label = data.label;
      state.viewingData.img = data.img;
      state.viewingData.content = data.content;
      state.viewingData.date = data.day + ' tháng ' + data.month + ' năm ' + data.year;
    }
  },
});
