<template>
  <div class="intro container shadow my-4 p-4">
    <div class="header deco display-4 mb-3">Đây là một chiếc blog</div>
    <div class="text-justify">
      <p>
        Một chiếc blog bình thường không có gì hào nhoáng, và hơn nữa, trào lưu
        blog ngày nay cũng không còn thịnh hành như xưa, không thể cạnh tranh
        với những nền tảng truyền thông xã hội đang phát triển một cách chóng
        mặt... <br />Nếu đã như vậy, tại sao mình lại chọn blog mà không phải
        một thứ gì khác?
      </p>
      <h4 class="deco">Xóa bỏ những giới hạn</h4>
      <p>
        Nói một cách đơn giản, blog là nơi để cho mình thoải mái chia sẻ những
        gì mình quan tâm, những gì mình yêu thích - theo một cách dài dòng nhất
        có thể, mà không phải làm phiền người khác, vì mình rất ngại làm phiền
        người khác và cũng vì nếu như mình viết lung tung lên trang Facebook cá
        nhân thì có phải những người bạn bình thường, những người không muốn
        newsfeed của bản thân có những bài viết đạo lý làm người vớ vẩn nào đấy
        hiện lên làm hỏng cả một ngày của họ - sẽ phải rất buồn và block mình
        hay không?! <br />
        Hơn nữa, ngày nay cũng không khó để bạn có thể tự tạo cho mình một chiếc
        blog xinh xinh giống như mình thế này mà không cần am hiểu về kỹ thuật,
        tuy nhiên tại sao mình lại không chọn sử dụng những phương pháp đó?
        Không phải các nền tảng có sẵn như Wordpress hay Blogspot đơn giản và dễ
        sử dụng hơn nhiều hay sao?
      </p>

      <h4 class="deco">Để thử thách bản thân</h4>
      <p>
        Mình đang học một framework - một bộ giải pháp có sẵn cho việc lập trình
        trở nên tiện lợi và đơn giản hơn - một kiến thức rất mới mẻ đối với
        mình. Chuyện là khi mới bắt đầu học cái gì đó mới thì mình hay muốn áp
        dụng nó làm ra được sản phẩm luôn (vậy mới có hứng thú học tiếp chứ!),
        và thế là mình bắt tay vào thực hiện dự án nho nhỏ này, trước là để thực
        hành những gì mình vừa học, sau là để thử xem khả năng viết lách của
        mình đến đâu :>
      </p>
      <h4 class="deco">Và để chia sẻ</h4>
      <p>
        Cho đi ở hiện tại là cách để bản thân dọn dẹp lại tâm hồn, sửa soạn lại
        nội tâm có đủ chỗ trống để nhận về những điều lớn lao và tốt đẹp hơn
        trong tương lai. Trong lúc mình dành thời gian mày mò ở trên internet
        tìm tài liệu để viết trang này thì mình đã thấy rất nhiều người dành
        nhiều giờ quay video, dành nhiều công sức biên soạn những hướng dẫn rất
        hay và có ích - giúp đỡ được rất nhiều người như mình, một cách hoàn
        toàn miễn phí. Mình nhận lấy những giá trị đó và cảm thấy mình cũng nên
        dùng những gì mình biết, những gì mình cảm thấy hữu ích để lan tỏa tinh
        thần này rộng ra, và đó là một phần mục đích mình viết trang này.
      </p>
      <h4 class="deco">Nếu bạn quan tâm đến vấn đề kỹ thuật</h4>
      <p>
        Trang blog này là static website, ngoài HTML, CSS và JS thì mình còn sử
        dụng framework
        <a href="https://vuejs.org/" class="link link-active" target="_blank"
          ><i class="fab fa-vuejs"></i> VueJS v2.6.11</a
        >
        và
        <a
          href="https://getbootstrap.com/"
          class="link link-active"
          target="_blank"
          ><i class="fab fa-bootstrap"></i> Bootstrap v4.0</a
        >. Ngoài ra thì toàn bộ dự án này được công khai mã nguồn trên
        <a
          href="https://github.com/quoctann/blog"
          class="link link-active"
          target="_blank"
          ><i class="fab fa-github"></i> Github</a
        >
      </p>
      <h4 class="deco">Lời cám ơn</h4>
      <p>
        Cám ơn bạn nếu đã đọc đến dòng này, và cảm ơn lần nữa nếu bạn cảm thấy
        những gì mình tạo ra có giá trị cho cộng đồng.<br />Và đặc biệt em xin
        gửi lời cảm ơn đến anh Nhật, người đã tạo rất nhiều cơ hội để em có thể
        học hỏi và phát triển, em xin lỗi vì đã lãng phí những cơ hội quý báu đó
        cũng như thời gian và sự kỳ vọng của anh.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "intro",
  data() {
    return {};
  },
};
</script>

<style>
.deco {
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
}
.link-active {
  font-weight: bold;
  color: #1d8348 !important;
  text-decoration: none;
}
</style>
