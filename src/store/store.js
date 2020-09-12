import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentNavItem: 'homepage', // store the currently selected page in the navigation bar
    isFilter: false, // if user enable post filter, this return "true", default is "false"
    selectedLabel: '', // filtering posts by tags and this store the tag name
    sMonth: 0, // selected month when filtering posts, this feature is not complete
    sYear: 0, // selected year when filtering posts
    viewingData: { // this data going to render when user select a post to see full content
      title: '',
      author: '',
      day: 0,
      month: 0,
      year: 0,
      label: '',
      img: '',
      content: '',
    },
    labels: [ // store posts tags
      {name: 'Công nghệ', id: 10},
      {name: 'Văn học', id: 11},
      {name: 'Tin tức', id: 12},
    ],
    archive: [ // store posts date to filter
      {month: 6, year: 2020, postCount: 1, id: '0620'},
      {month: 7, year: 2020, postCount: 2, id: '0720'},
      {month: 8, year: 2020, postCount: 3, id: '0820'},
      {month: 9, year: 2020, postCount: 4, id: '0920'},

    ],
    posts: [ // store posts content, id is the key, img is file name in .src/assets/, this will auto render in getImg computed
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
    selectPage(state, name) { // to change current selected page
      state.currentNavItem = name;
    },
    cancelFilter(state) { // to disable filter
      state.isFilter = false;
    },
    filtering(state) { // to enable filter
      state.isFilter = true;
    },
    updateLabel(state, name) { // with filtering mutation, this give tag name to filter
      state.selectedLabel = name;
      state.sYear = 0;
      state.sMonth = 0;
    },
    cancelFilterDate(state) { // as this name
      state.isFilter = false;
    },
    updateDate(state, month, year) { // to update date filter
      state.sMonth = month;
      state.sYear = year;
      state.selectedLabel = '';
    },
    viewingPost(state, data) { // to pass by value data from post array to view a single post
      state.currentNavItem = 'viewingpost';
      state.viewingData.title = data.title;
      state.viewingData.author = data.author;
      state.viewingData.day = data.day;
      state.viewingData.month = data.month;
      state.viewingData.year = data.year;
      state.viewingData.label = data.label;
      state.viewingData.img = data.img;
      state.viewingData.content = data.content;
      state.viewingData.date = data.day + ' tháng ' + data.month + ' năm ' + data.year; // toString
    }
  },
});
