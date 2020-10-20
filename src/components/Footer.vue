<template>
  <footer class="footer shadow-lg ">
    <div class="footer-icon py-2">
      <div class="px-2">
        <a href="https://www.facebook.com/quctan/" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <div class="px-2">
        <a href="https://github.com/quoctann" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="px-2">
        <a href="mailto:tqtlife@gmail.com" target="_blank">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <div class="author px-2">
        <p>TRẦN QUỐC TẤN &copy; 2020</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
footer {
  font-size: 14px;
  color: #333;
  width: 100%;
  background-color: #baf2bb;
}
a {
  text-decoration: none;
  color: #333;
  padding: 0;
  margin: 0;
}
a:hover {
  color: #1d8348;
}
.author {
  font-weight: bold;
}
.author > p {
  margin: 0;
}
.footer-icon {
  display: flex;
}
</style>
