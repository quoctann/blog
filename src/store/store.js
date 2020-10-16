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
      wordcount: 0,
    },
    labels: [ // store posts tags
      {name: 'Công nghệ', id: 10},
      {name: 'Lối sống', id: 11},
    ],
    archive: [ // store posts date to filter
      {month: 9, year: 2020, postCount: 2, id: '0920'},
      {month: 10, year: 2020, postCount: 1, id: '1020'},
    ],
    posts: [ // store posts content, id is the key, img is file name in .src/assets/, this will auto render in getImg computed
      {
        id: 100,
        wordcount: 2494,
        author: "Quốc Tấn",
        day: 20,
        month: 9,
        year: 2020,
        label: "Công nghệ",
        img: "postID_100/linus-twitter.png",
        title: "Hệ điều hành Linux",
        description: "Nguồn mở và miễn phí, hãy cùng mình tìm hiểu xem Linux có gì hay nhé!",
        content:
          "<p style='text-align: center;'>Bài viết này mình viết lần đầu vào <a class='link-active' href='https://www.facebook.com/groups/docbinhkieuit/permalink/162652201009675/'>năm 2017</a>, mình chỉ repost lại và chỉnh sửa một chút cho phù hợp với bối cảnh hiện tại.</p><p> Sau khi đã quá quen thuộc với hệ điều hành Windows, bản thân mình cảm thấy nên tìm một chút cảm giác mới cũng như tối ưu trải nghiệm trên chiếc PC 'khoai tây' ngót nghét chục năm tuổi của mình (ở thời điểm khởi thủy mình viết bài này), chỉ với 1GB RAM cùng với chiếc CPU Pentium cổ lỗ sĩ thì giải pháp mình chọn để vọc vạch đó là thử cài đặt hệ điều hành Linux, cụ thể là Lubuntu - một phiên bản dành cho thiết bị có cấu hình thấp được xây dựng dựa trên Ubuntu. Vậy thì qua những trải nghiệm cá nhân đó bản thân mình đã học hỏi được những gì?</p><div style='text-align: center !important;'> <div class='img-wrapper'> <img src='/blog/img/lubuntu1804.png' alt='lubuntu custom theme'> </div><small>Ảnh: Lubuntu 18.04 đã được tùy biến, nguồn: ảnh máy mình tự chụp</small> <p></p></div><h2>Linux là gì?</h2><p> Linux là một tập hợp các hệ điều hành nguồn mở, nói một các dễ hiểu thì nó cũng tương tự như Windows hay MacOS. Tuy nhiên nếu Windows là một hệ điều hành nguồn đóng thương mại - bạn phải trả tiền để mua bản quyền sử dụng, thì các hệ điều hành Linux hầu như miễn phí hoàn toàn. Đó là bởi vì cha đẻ của Linux và Git - Linus Torvalds vào năm 1991 không cảm thấy hài lòng với MS-DOS và MINIX, nên ông muốn mua hệ điều hành UNIX,<a class='link-active' href='https://itsfoss.com/linus-torvalds-facts/#:~:text=5.,to%20buy%20a%20UNIX%20system.&text=So%20he%20decided%20to%20make,clone%20of%20UNIX%2C%20from%20scratch.' target='blank_'> nhưng may mắn cho chúng ta là ông ấy không đủ tiền để mua</a>, và thế là ông tự tạo riêng cho mình một cái tương tự, sau đó Linux Kernel cùng hàng loạt công nghệ khác ra đời, và tất nhiên, nó miễn phí!</p><div style='text-align: center;'> <div class='img-wrapper'> <img src='/blog/img/linus-twitter.png' alt='linus torvalds twitter'> </div><small>Ảnh: Dòng tweet nổi tiếng của Linus, nguồn: <a class='link-active' href='https://twitter.com/linus__torvalds/status/296333253571387392?lang=en' target='blank_'>Twitter</a></small> <p></p></div><p> Vào sâu vấn đề kỹ thuật một chút, <a class='link-active' href='https://www.kernel.org/' target='blank_'>Linux hay Linux Kernel</a> là một nhân hệ điều hành mạnh mẽ mà từ đó được kế thừa và phát triển thêm nhiều bản phân phối (distro) khác nhau, có thể nói mỗi một distro là một biểu hiện hoàn chỉnh của Linux (có thể kể đến một số cái tên phổ biến như: Ubuntu, Fedora, Kali Linux hay Android,...). Một số khác thì lại dựa trên những bản phân phối ổn định và được cộng đồng đánh giá cao để phát triển thêm những nhánh distro riêng (bởi vì việc phát triển trực tiếp từ nhân rất khó khăn và tốn kém nhiều công sức). Nhưng dù thế nào thì đặc trưng của hầu hết các desktop distro là đều có hỗ trợ terminal để sử dụng giao diện dòng lệnh.</p><h2>Những điểm sáng</h2><ul> <li> Nguồn mở và miễn phí: hầu hết các distro đều miễn phí (trừ một số rất ít là thương mại hướng tới doanh nghiệp như RedHat Linux Enterprise), chỉ việc download ảnh đĩa về và cài đặt. </li><li> Phần cứng: Linux tương thích khá tốt các dòng CPU, ngày nay rất nhiều hãng PC cũng cài đặt sẵn Linux thay vì Windows để giảm giá thành bán ra - đồng nghĩa họ cũng đã thiết kế phần cứng sao cho tương thích với Linux, một tín hiệu đáng mừng cho cộng đồng nguồn mở. Kế đó là yêu cầu phần cứng của Linux khá thấp (có một số cực thấp ví dụ như Tiny Core Linux với bộ cài chỉ 17MB), cho phép Linux được sử dụng rộng rãi từ các thiết bị nhúng có phần cứng hạn chế cho đến các máy chủ, siêu máy tính,... </li><li> Hỗ trợ: Ngày nay Linux là một dự án mã nguồn mở khổng lồ bậc nhất thế giới với hơn <a class='link-active' href='https://www.zdnet.com/article/commit-1-million-the-history-of-the-linux-kernel/' target='blank_'>28 triệu dòng code và 10.7 commits mỗi giờ</a>, được cộng đồng hỗ trợ mạnh mẽ, Linux đang ngày một đơn giản hóa cách sử dụng để được đón nhận nhiều hơn. </li><li> Bảo mật: do không thực sự phổ biến nên Linux được hưởng thêm sự an toàn và bảo mật hơn so với đối thủ là Windows, một số distro còn thiên về bảo mật như Kali Linux với các công cụ chuyên biệt. </li><li> Terminal: thao tác dòng lệnh trực quan, hỗ trợ biên dịch một số ngôn ngữ ngay trên terminal, thích hợp cho người dùng chuyên nghiệp như lập trình viên. </li><li> Linh hoạt: bộ cài nhẹ nhàng, thậm chí bạn có thể ghi vào USB/CD/DVD mang đi bất cứ đâu và sử dụng chúng dạng Live Session. </li><li> Tùy biến cao: giao diện, theme, tất tần tật đều có thể tùy biến theo sở thích </li></ul><div style='text-align: center;'> <div class='img-wrapper'> <img src='/blog/img/kde-plasma-omgubuntu.png' alt='kde plasma'> </div><small>Ảnh: KDE Plasma, nguồn: <a class='link-active' href='https://www.omgubuntu.co.uk/' target='blank_'>OMGUbuntu</a></small> <p></p></div><h2>Nhiều điểm tốt như vậy, tại sao Linux lại không phổ biến?</h2><ul> <li> Phần mềm: dù kho phần mềm của Linux cũng rất đồ sộ và đáp ứng các nhu cầu thiết yếu nhất, tuy nhiên nếu so với đối thủ Windows thì đúng là không đủ, vì những phần mềm đồ họa chuyên nghiệp của Adobe hay những tựa game AAA đình đám nhất đều hoạt động trên nền tảng Windows. Và chừng đấy lí do đã đủ để khiến người dùng phổ thông ngại phải sử dụng Linux rồi. </li><li> Giao diện và trải nghiệm người dùng: để sử dụng Linux thì bạn phải trang bị một số kiến thức nhất định, một số lệnh terminal cơ bản. Nhưng những cải tiến gần đây đã và đang khiến Linux thân thiện với người dùng phổ thông hơn rất nhiều. </li></ul><h2>Có phải mọi hệ điều hành Linux based đều giống nhau?</h2><p>Nguồn tham khảo: <a class='link-active' href='https://goo.gl/UjdCFR' target='blank_'>(EITGuide) Phân loại Linux</a>, <a class='link-active' href='https://itsfoss.com/what-is-desktop-environment/#:~:text=A%20desktop%20environment%20is%20the,%2C%20wallpapers%2C%20and%20desktop%20widgets.&text=There%20are%20several%20desktop%20environments,how%20you%20interact%20with%20it.' target='blank_'>(it's FOSS) Định nghĩa Desktop Enviroment</a></p><p>Như mình đã trình bày, một số bản phân phối ổn định và hoạt động tốt có thể trở thành một nhánh cha để phát triển các bản phân phối khác, để phân loại thì mình tham khảo một bài viết trên internet và tóm tắt lại như sau:</p><ul> <li> Nhánh Debian: Nhóm này, nhìn chung, là dựa trên Debian, bản thân Debian cũng là một distro. Tất cả các distros trong nhóm này đều sử dụng phương thức quản lí gói là dpkg, phương thức cập nhật là apt. Và các tập tin cài đặt ứng dụng chính thức có đuôi là .deb; Trong nhóm này, có các thành viên nổi bật là Debian (distro chính mang tính dẫn dắt), Ubuntu (distro phổ biến nhất trong nhóm nói riêng và trong giới Linux nói chung), Linux Mint (lại dựa trên Ubuntu), và Knoppix. So với nhóm RedHat bên dưới, nhóm Debian có sự thống nhất cao hơn hẳn, và xét về độ ổn định thì ta có thể coi nhóm này ổn định hơn. Một tập tin .deb có thể được cài đặt trên tất cả các DEB distros mà không cần thay đổi, hoặc nếu có thì cũng không chỉnh sửa nhiều. </li><li> Nhánh RedHat: Nhóm này, nhìn chung, có xuất phát điểm là từ RedHat Linux Enterprise và bản thân RHEL cũng là 1 distro. Tuy nhiên, nó là 1 distro có tính chất thương mại và hướng tới người dùng doanh nghiệp, còn phiên bản free chính thức của nó và hướng tới người dùng cá nhân là Fedora. Ngoài hai cái tên đó, chúng ta còn có CentOS, Mandriva và OpenSUSE. So với nhóm Debian, nhóm này ít có sự thống nhất hơn. Bởi lẽ, mặc dù cùng sử dụng .rpm (vì vậy chúng còn có tên là các RPM distros) là đuôi tập tin cài đặt ứng dụng chính thức, các distros này sử dụng phương thức quản lí gói và cập nhật khá khác nhau. Fedora chính là distro cộm cán nhất của nhóm này, vì nó là bản phân phối có số lượng người dùng cao thứ hai trong giới Linux sau Ubuntu. Và cha đẻ của Linux, Sir. Linus Torvalds sử dụng distro này chứ không phải Debian hay Arch. </li><li> Nhánh còn lại: Tạm gom chung các distro còn lại vào nhóm này. Đại diện tiêu biểu của nhóm này là Arch Linux và Gentoo. Thực chất thì ChromeOS của Google dựa trên nền Gentoo. Đặc điểm chung của các distro trong nhóm là chúng không được dựa trên Debian hay RedHat. Một số người cho rằng Arch là bản distro cuối cùng, bởi họ đã từng dùng Ubuntu hay Fedora, và từ khi gặp Arch thì họ quyết định dừng chuyến phiêu lưu mà định cư lâu dài với distro này. Tuy nhiên, sự hỗ trợ của các lập trình viên đối với nhóm này có thể nói là có phần kém hơn so với các DEB và RPM distros. </li></ul><p> Ngoài việc được phân chia theo chiều ngang thành những nhánh (branch), thì giới Linux còn được phân loại theo chiều dọc, theo các môi trường desktop (desktop environments). Nếu nói mỗi bản phân phối là một biểu hiện cụ thể của Linux, thì mỗi phiên bản phân phối gắn với một DE là một biểu hiện cụ thể của bản phân phối đó.</p><p> Bạn có thể thấy các Linux DEs tương tự như các biến thể khác nhau của hệ điều hành Android. Mặc dù cũng là Android, nhưng Android trên máy Nexus ít nhiều khác biệt với Android trên máy Samsung, và khác nữa với Android trên máy LG. Tương tự như vậy, Ubuntu chạy DE là GNOME sẽ khác biệt với Ubuntu chạy DE là KDE, MATE hay Xfce hoặc LXDE và gần đây nhất là Budgie. Tuy nhiên, các DEs khả dụng trải dài trên tất cả các bản phân phối. Nghĩa là KDE không phải là DE độc quyền cho Ubuntu, vì cũng có Fedora chạy KDE, tương tự cho OpenSUSE với MATE và Arch với LXDE. Nếu bạn tạo ra một bảng với các hàng đại diện cho các bản phân phối, các cột là các môi trường desktop, thì mỗi ô chính là cái hệ điều hành mà bạn sẽ chuẩn bị cài đặt. Vẫn có một số DE mang tính chất độc quyền, chẳng hạn như Unity trên Ubuntu hay Elementary interface, tuy nhiên, đó chỉ là số ít.</p><p> Vậy, bạn nên chọn distro nào phù hợp với mình?</p><ul> <li> Đối với người mới dùng, mình nghĩ nên sử dụng Ubuntu là hợp lý, cộng đồng lớn, tuy nhiên bạn sẽ đối mặt với vấn đề chung là các bài viết tiếng Việt còn khá ít. </li><li> Linux Mint (xây dựng dựa trên Debian và Ubuntu) cũng là một lựa chọn không tồi cho người mới. </li><li> Khi bạn thuần thục cách sử dụng Linux rồi thì bạn hãy thử các distro đòi hỏi nhiều kinh nghiệm sử dụng hơn (như Kali Linux - dùng cho mục đích an ninh mạng chẳng hạn) </li></ul><h2>Cài đặt Linux như thế nào?</h2><p> Do chưa có điều kiện cài thử tất cả các bản phân phối, nên ở phần cuối này mình chỉ giới thiệu cách cài đặt một bản phân phối khá phổ biến đó là Ubuntu, có thể áp dụng rộng hơn vào các bản phân phối được xây dựng trên Ubuntu (Ubuntu flavours, Ubuntu based).</p><p><b>Chuẩn bị:</b></p><ul> <li> File ảnh đĩa .iso của bản phân phối bạn muốn dùng, tùy thuộc vào cấu hình máy của bạn mà lựa chọn bản phân phối thích hợp. Bạn có thể cài các bản có chữ LTS - Long Term Support, đây là các phiên bản được hỗ trợ dài hạn. </li><li style='list-style-type: none;'><ul> <li> <a class='link-active' href='https://ubuntu.com/' target='blank_'>Ubuntu và Ubuntu Flavours</a>: nếu máy mạnh bạn cứ dùng Ubuntu (GNOME), Kubuntu (KDE),... còn máy yếu yếu thì dùng Lubuntu (LXQt), ngoài ra bạn có thể tham khảo thêm các Ubuntu flavours khác như Budgie, MATE,... </li><li> <a class='link-active' href='https://linuxmint.com/download.php' target='blank_'>Linux Mint</a>: dựa trên Ubuntu và Debian, Linux Mint cũng là distro phổ biến, nhưng không thuộc gia đình Ubuntu, thích hợp cho người mới làm quen với Linux, yêu cầu cấu hình vừa phải, tùy vào sở thích và mục đích mà bạn chọn môi trường phù hợp (Cinnamon, Xfce, KDE, MATE). </li></ul></li><li>Đĩa CD/DVD hoặc ổ USB (dung lượng đủ chứa file ảnh đĩa của bạn)</li><li>Phần mềm ghi đĩa (nếu bạn cài bằng đĩa) hoặc USB Installer (nếu cài bằng USB), phần mềm Wubi (nếu bạn cài bên trong Windows)</li><li>Ổ cứng còn tầm 20GB cho thoải mái (hoặc bạn có thể xem yêu cầu trên trang chủ của bản phân phối)</li><li>Cáp mạng (đặc biệt đối với laptop)</li><li>Cái này chỉ để phòng hờ thôi: <a class='link-active' href='http://www.hirensbootcd.org/' target='blank_'>đĩa Hiren's Boot</a>, các bản backup của bạn để restore nếu có trục trặc xảy ra.</li></ul><p><b>Cài đặt như phần mềm trong Windows</b></p><p> Với wubi.exe, bạn có thể cài đặt Linux ngay bên trong Windows tương tự bạn cài mấy phần mềm khác vậy, dễ dàng gỡ bỏ bằng control panel. Dĩ nhiên tốc độ sẽ không đạt 100%, thích hợp nếu như bạn chỉ muốn dùng thử bởi vì cách này vẫn khiến bạn lệ thuộc vào Windows.</p><p> <a class='link-active' href='https://dungnt.net/blog/cai-ubuntu-su-dung-wubi/' target='blank_'>Xem hướng dẫn cài đặt</a></p><p> Một số lưu ý khi muốn gỡ cài đặt: sau khi gỡ cài đặt bằng control panel trong Windows, bạn phải xóa luôn những thứ dính líu đến nó trong menu boot, nếu không thì thậm chí bạn sẽ chẳng thể vào menu boot của Windows được nữa: <a class='link-active' href='https://blogchiasekienthuc.com/thu-thuat-may-tinh/xoa-bot-mot-he-dieu-hanh-windows.html' target='blank_'>xem hướng dẫn gỡ cài đặt</a>.</p><p><b>Cài thay thế hoặc tách biệt trên phân vùng</b></p><p> Cách này thích hợp nếu bạn muốn sử dụng tách biệt khỏi Windows, hoặc thay thế luôn Windows. <a class='link-active' href='https://blogtinhoc.com/cach-cai-ubuntu-14-04-12-04-song-song-voi-windows-7-8.html' target='blank_'>Bài hướng dẫn</a> mình tìm trên mạng này khá đầy đủ, các distro khác trong họ Ubuntu cũng được cài tương tự.</p><p><b>Live Session</b></p><p> Nếu bạn không biết máy mình chạy có được không, hoặc sợ rủi ro,... thì bộ cài của Linux có thể được boot live, khi boot bằng đĩa hoặc usb sẽ có một tùy chọn đại loại là 'Try without installing', bạn sẽ dùng trực tiếp luôn, nhưng những thay đổi của bạn sẽ không được ghi lại (tức là không cài được phần mềm, tùy chỉnh,...), nó chỉ chạy trên đĩa, không ảnh hưởng đến ổ cứng đang chạy hệ điều hành khác của bạn. Tạo bộ cài bằng USB bạn có thể xem bài viết ở phần trên, tạo bộ cài bằng đĩa thì bạn chỉ cần dùng bất cứ phần mềm ghi đĩa nào.</p><p><b>Windows Subsystem for Linux (WSL)</b></p><p> Những năm gần đây Microsoft trông rất mặn nồng với cộng đồng nguồn mở, từ Windows Terminal cho đến Visual Studio Code và WSL/WSL2. Với WSL bạn có thể sử dụng các công cụ, tiện ích dòng lệnh của Linux ngay trong Windows. Tuy nhiên lựa chọn này mình nghĩ sẽ phù hợp hơn cho các nhà phát triển, lập trình viên - những người dùng chuyên nghiệp làm việc nhiều với dòng lệnh, tuy nhiên nếu có hứng thú bạn vẫn có thể tham khảo <a class='link-active' href='https://docs.microsoft.com/en-us/windows/wsl/about' target='blank_'>tại đây</a>.</p><h2>Lời kết</h2><p> Cuối cùng, mình rất cám ơn bạn đã dành thời gian đọc bài viết, hy vọng những thông tin mình cung cấp sẽ hữu ích với bạn!</p>",
        featured: true,
      },
      {
        id: 101,
        wordcount: 1098,
        author: "Quốc Tấn",
        day: 21,
        month: 9,
        year: 2020,
        label: "Lối sống",
        img: "postID_101/self-help.jpg",
        title: "Sách self-help: kim chỉ nam hay sản phẩm của ngành công nghiệp mua bán hạnh phúc?",
        description: "Nên hay không nên đọc self-help?",
        content:
          "<p> Sau khi đọc một <a class='link-active' href='https://spiderum.com/bai-dang/Hay-sang-tac-Conan-neu-ban-muon-thanh-cong-tai-thi-truong-xuat-ban-Viet-Nam-qf0' target='blank_'>bài viết</a> về bức tranh ngành xuất bản sách ở Việt Nam những năm qua của anh Dương bên <a class='link-active' href='https://spiderum.com/' target='blank_'>Spiderum</a>, mình quyết định viết bài này. Nhìn vào những con số từ bài viết trên thật không khó để nhận ra sách self-help được in rất nhiều và bán rất chạy. Vậy điều gì làm self-help trở nên lôi cuốn như vậy? Liệu self-help có thực sự tốt như kỳ vọng?</p><p> Một <a class='link-active' href='https://www.ucalgary.ca/selfhelp/what' target='blank_'>định nghĩa</a> phổ biến về sách self-help (hay sách tự lực) đó là sách được viết với mục đích rõ ràng là giúp người đọc giải quyết những vấn đề trong cuộc sống cá nhân, thông thường tập trung vào những khía cạnh chính như xây dựng sự nghiệp thành công, những mối quan hệ tốt đẹp hay có sức khỏe tốt, một lối sống lành mạnh.</p><p> Thoạt nghe mục đích thì rất tốt, nhưng liệu đọc nhiều self-help có khiển bản thân bạn trở thành người chân - thiện - mỹ?</p><h2>Những trải nghiệm cá nhân</h2><p> Năm đó mình còn là một nam sinh trung học, cũng xốc nổi yêu đương cho biết mùi với người ta, xong rồi được dăm tháng thì chia tay, mình khi đó với tâm thế một thằng con trai lần đầu thất tình - tìm đến self-help như một giải pháp tâm lý để lấy lại thăng bằng cho cuộc sống khi đó, và mọi chuyện bắt đầu...</p><p> Sách đầu tiên mình đọc là một quyển self-help rất nổi khi ấy (và cả bây giờ vẫn thế). Thời đó mình còn sinh hoạt còn điều độ, ngày nào cũng đọc vài chục trang, đọc xong tràn đầy năng lượng, cảm giác như bản thân có thể làm được tất cả mọi chuyện, có niềm tin mãnh liệt vào lời tác giả viết. Hè năm đó mình đi phụ cậu mình làm việc kiếm được một khoản kha khá, mình mua hết những quyển self-help có tựa rất bắt tai, rất truyền cảm hứng và best seller khi đó về đọc, đọc rất hăng say và rất cố gắng để làm theo.</p><p> Và mình nhận ra, việc trở thành một người ưu tú như trong sách viết là điều không tưởng. Những năm sau đó, mình có điều kiện tiếp cận internet tốt hơn, tham gia những cộng đồng trên mạng, tiếp nhận được nhiều luồng ý kiến, nhiều thông tin hơn, nhờ đó mà mình học được thêm kỹ năng chọn lọc và tiếp thu thông tin, thay vì dùng sách vở viết từ quan điểm một người làm kim chỉ nam, mình chọn cách chắt lọc và lựa chọn những thông tin để quyết định hướng đi cho bản thân. Và mình cũng đọc self-help theo một cách rất khác, không còn cứng nhắc như học thuộc bài để trả bài miệng nữa.</p><h2>Vậy tóm lại có nên đọc self-help hay không?</h2><p> Cá nhân mình nghĩ việc đọc sách là tốt (tất nhiên sẽ có những loại sách xấu không nên đọc), không bổ bề ngang cũng bổ bề dọc, bạn có thể đọc qua những điểm mình liệt kê dưới dây rồi quyết định sau cũng chưa muộn.</p><p> Nên đọc nếu như bạn cần một thể loại sách không quá hàn lâm nhưng đảm bảo tính giải trí, đọc cho vui, đọc cho có động lực để dậy sớm hay tập thể dục thể thao, đó là điều tốt nên làm. Nhưng đọc thấy cái gì hay và bổ ích, phù hợp bản thân và cảm thấy đủ khả năng làm được thì hãy thực hiện. Chứ nếu bạn đọc sách dạy làm giàu, thấy họ bảo cổ phiếu công ty Hoa Hồng, Hoa Mai nào đó lợi nhuận lên đến 30% một tháng, rồi bạn lại cắm cả căn nhà vào đó thì không tác giả nào dám đảm bảo rủi ro cho bạn đâu.</p><p> Nếu như bạn cần những quyển sách cung cấp tri thức thật, dẫn chứng rõ ràng, nghiên cứu chuyên sâu, nói chung rất là hàn lâm thì self-help không phải một lựa chọn tốt cho bạn. Ở góc nhìn này bạn có thể xếp self-help vào kệ sách chung với các loại sách văn học nói chung, đọc giải trí chứ không dùng đến.</p><p> Và dù bạn đọc sách gì đi nữa, việc tiếp cận với chữ nghĩa nhiều sẽ nâng cao khả năng ngôn ngữ của bạn, ít nhất thì đây là điểm tốt có thể thấy được khi đọc self-help.</p><h2>Thế còn hạnh phúc, chẳng phải tiêu đề ghi là mua bán hạnh phúc hay sao?</h2><p> Con người luôn kiếm tìm hạnh phúc, và self-help ra đời để thoả mãn nhu cầu đó. Mọi người đều nghĩ sẽ tìm ra giải pháp, những công cụ từ self-help để bản thân thoát khỏi buồn phiền, nhưng đôi khi họ đọc phải những quyển sách ba xu nửa vời thì mọi thứ còn tồi tệ hơn nữa. Chúng ta cần những cảm xúc tạm bợ, và self-help cho chúng ta những điều đó. Thay vì thế chúng ta nên ra ngoài, gặp gỡ và tiếp xúc nhiều hơn, học những kinh nghiệm sống, hình thành lối sống cá nhân chuẩn mực, gặp những người mà bạn yêu thương và trân trọng, uống tách cà phê, kể chuyện con mèo nhà bạn chẳng hạn. Chúng ta là giống loài có tính xã hội cao, nếu bạn bình thường và không có vấn đề tâm lý, thì đó là những liều thuốc tự nhiên giúp bạn sống tích cực hơn.</p><p> Nếu bạn tinh ý, đọc đến đây bạn sẽ nghĩ thế này: 'Ơ thằng này vừa bảo sách self-help thế này thế kia mà bây giờ nó lại đi viết self-help là sao?!'. Nếu đúng thế thật thì bạn suy nghĩ chính xác rồi đấy, như mình đã viết, self-help không xấu, việc bạn lựa chọn có tiếp nhận những gì mình viết hay không hoàn toàn là do bản thân bạn, bạn thấy quan điểm mình phù hợp thì tiếp nhận, còn không thì cười khẩy cái rồi thôi (*cười*). Diễn đàn hỏi đáp Quora có một chính sách, nguyên tắc hoạt động cốt lõi mà mình cảm thấy rất hay đó là 'be nice, be respectful', không hợp ý thì thôi, hà cớ gì phải làm tổn thương nhau đúng không?</p><p> Nếu bạn đọc đến đây thì ắt hẳn mình viết không tới nỗi tệ. Mình rất cảm ơn bạn đã dành chút thời gian để đọc bài self-help này nhé! Chúc bạn một ngày tốt lành!</p>",
        featured: true,
      },
      {
        id: 102,
        wordcount: 1892,
        author: "Quốc Tấn",
        day: 11,
        month: 10,
        year: 2020,
        label: "Công nghệ",
        img: "postID_102/es6.jpg",
        title: "ECMAScript 6th Edition 2015",
        description: "ECMAScript, ES6 là gì? Nó và Javascript có phải là một?",
        content:
          "<p> Để đọc được bài viết này, đòi hỏi bạn phải có một số kiến thức nhất định về lập trình nói chung và Javascript (JS) nói riêng.</p><p> Mình nghĩ là trong quá trình học tập của bạn, đặc biệt nếu bạn quan tâm đến công nghệ web, thì sẽ không ít lần bạn bắt gặp những cụm từ như ES6, ECMAScript, arrow function,... vốn là những khái niệm mới so với Javascript đơn thuần. Vậy ECMAScript là gì, nó có những điểm gì khác biệt hay tốt hơn so với Javascript để có thể trở nên phổ biến như vậy?</p><h2>Nói chuyện ngày xưa một chút</h2><p> <a href='https://en.wikipedia.org/wiki/JavaScript' target='blank_' class='link-active'>Năm 1993</a>, trình duyệt web với giao diện đồ họa đầu tiên dành cho đại chúng được phát hành, đánh dấu kỷ nguyên bùng nổ của World Wide Web. Thời kỳ đó các trang web chỉ là web tĩnh, rất hạn chế sự tương tác từ người dùng, tuy nhiên với nhu cầu ngày một cao về web động, đòi hỏi phải có một công cụ để xử lý logic các thao tác từ người dùng, và thế là LiveScript - được đổi tên thành Javascript sau đó 3 tháng - được ra đời năm 1995.</p><p> Vơi bối cảnh những năm đó tồn tại nhiều hơn một phiên bản của Javascript (Javascript của Netscape và JScript của Microsoft), làm phát sinh nhu cầu chuẩn hóa các phiên bản của các công ty công nghệ. Kết quả là từ <a href='https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf' target='blank_' class='link-active'>tháng 11 năm 1996</a>, Javascript được chuyển đến ECMA International (*) để chuẩn hóa, và cái tên ECMAScript được hình thành từ đây.</p><small>(*) <a href='https://www.ecma-international.org/memento/history.htm' target='blank_' class='link-active'>European Computer Manufacturers Association</a> - hay ngắn gọn là ECMA, là một tổ chức quốc tế chuẩn hóa các kỹ thuật vận hành (chẳng hạn như lập trình, các mã lệnh input/output).</small><p></p><p> Cho đến nay ECMAScript đã trải qua 11 phiên bản, và phiên bản phổ biến nhất vẫn là ES6 hay ECMAScript 2015, bạn có thể xem chi tiết tên các phiên bản ECMAScript <a href='https://en.wikipedia.org/wiki/ECMAScript#ECMAScript,_ECMA-262_and_JavaScript' target='blank_' class='link-active'>tại đây</a>. Trong quy mô bài viết này, mình sẽ nói về ES6, tóm gọn những điểm cơ bản mà mình học được từ một <a href='https://www.coursera.org/projects/modern-javascript-es6-basics' target='blank_' class='link-active'>khóa học</a> trên Coursera: Modern JavaScript: ES6 Basics.</p><h2>Variable (let) and Scoping</h2><p> Thông thường trong Javascript khi bạn muốn khai báo một biến bạn sẽ làm thế này: <pre><code>var myCat = 'Tom';</code></pre></p><p>Tuy nhiên, ES6 cung cấp cho bạn một cách khai báo khác bắt đầu bằng từ khóa <code>let</code>, vậy thì <code>let</code> và <code>var</code> có những điểm gì khác nhau?</p><ul> <li> <p>Bạn có thể redefine - định nghĩa lại một đối tượng được khai báo bởi <code>var</code>, nhưng <code>let</code> thì không</p><pre><code>var myCat = 'Tom';\nvar myCat = 'Minie';\nconsole.log(myCat);\n<code class='inf'>Minie</code></code></pre> <p> Bạn có kiểm tra lại bằng cách nhấn phím F12 trên trình duyệt, chọn tab Console, copy và paste đoạn này vào, biến <code>myCat</code> của bạn sẽ có giá trị là <code>Minie</code>. Vì đối tượng khai báo bởi <code>var</code> có thể được định nghĩa lại tại bất cứ đâu nên sẽ khó khăn cho việc kiểm soát lỗi. Nhưng khi bạn khai báo bằng <code>let</code> thì khi bạn redefine, bạn sẽ gặp thông báo lỗi: </p><pre><code>let myCat = 'Tom';\nlet myCat = 'Minie';\nconsole.log(myCat);\n<code class='err'>error: unknown: Identifier 'myCat' has already been declared</code></code></pre> </li><li> <p>Kiểu trả về undefined</p><pre><code>console.log(myDog);\nvar myDog = 'Han';\n<code class='inf'>undefined</code></code></pre> <p> Kết quả mà bạn nhận được sẽ là undefined, một kiểu giá trị không hay ho cho lắm. Thông thường bạn sẽ mong muốn nhận lại một kiểu giá trị cụ thể, như bool (true/false) để xử lý các trường hợp chẳng hạn. Do đó việc bạn vô tình sử dụng một đối tượng trước khi khai báo sẽ làm chương trình khó kiểm soát, hoạt động không đúng ý muốn của bạn, gây ra lỗi. Trong ES6, khi bạn sử dụng <code>let</code> trong trường hợp này bạn sẽ nhận được thông báo lỗi: </p><pre><code>console.log(myDog);\nvar myDog = 'Han';\n<code class='err'>error: Uncaught ReferenceError: Cannot access 'myDog' before initialization</code></code></pre> </li><li> <p>Không có block scope</p><p>Hiểu nôm na block scope là phạm vi truy cập của các đối tượng trong một block (trong một cặp ngoặc nhọn '{}').</p><pre><code>for(var i = 0; i < 2; i++) {\n\tvar said = 'hey';\n}\nconsole.log(said);\n<code class='inf'>hey</code></code></pre> <p>Đoạn code trên bạn sẽ in được giá trị của said ra console, bởi vì biến said được khai báo bằng var không có block scope, phạm vi truy cập của nó không bị giới hạn trong hàm for, <code>let</code> cho phét bạn giới hạn phạm vi truy cập của biến trong nội tại một block.</p><pre><code>for(let i = 0; i < 2; i++) {\n\tlet said = 'hey';\n}\nconsole.log(said);\n<code class='err'>error: Uncaught ReferenceError: said is not defined</code></code></pre> <p>Một ví dụ khác</p><pre><code>let said = 'yo!'\nfor(let i = 0; i < 2; i++) {\n\tlet said = 'hey';\n}\nconsole.log(said);\n<code class='inf'>yo!</code></code></pre> </li></ul><h2>Variable (const) and Immutability</h2><p> Nếu <code>let</code> cho phép bạn khởi tạo một biến, có thể gán giá trị, thay đổi được (mutability), thì một từ khóa khác mà ES6 cung cấp đó là <code>const</code>, có các đặc tính tương tự <code>let</code> như không thể redefine, không thể sử dụng khi chưa khai báo. Và đặc điểm chủ yếu của <code>const</code> là không thể thay đổi (immutability), tức là bạn không thể gán giá trị cho <code>const</code> một lần nữa sau khi đã khai báo.</p><pre><code>const motorbike = ['yamaha', 'honda'];\nmotorbike = ['suzuki'];\n<code class='err'>error: Uncaught TypeError: Assignment to constant variable.</code></code></pre><p>Tuy nhiên, bạn vẫn có thể thay đổi giá trị bên trong của đối tượng tạo bởi <code>const</code></p><pre><code>const motorbike = ['yamaha', 'honda'];\nmotorbike[0] = 'suzuki';\nconsole.log(motorbike);\n<code class='inf'>(2) ['suzuki','honda']</code></code></pre><p>Đôi lúc bạn sẽ mong muốn đối tượng <code>const</code> của bạn không thể thay đổi giá trị bên trong, thì có một phương pháp để thực hiện điều này là sử dụng <code>Object.freeze(objName)</code> để 'đóng băng' giá trị dữ liệu ở mức đầu tiên. Gọi là mức đầu tiên bởi vì bạn vẫn có thể thay đổi giá trị các đối tượng lồng nhau nhiều mức, nếu bạn muốn tất cả là 'hằng' - không thể thay đổi thì bạn phải gọi <code>Object.Freeze(objName)</code> ở tất cả các mức dữ liệu.<pre><code>const animals = {\n \tfish: 'salmon',\n\tcatsFamily: ['cheetah', 'lion']\n}\nObject.freeze(animals);\nanimals.fish = 'shark';\nanimals.catsFamily[0] = 'tiger';\nconsole.log(animals);\n<code class='inf'>{\n \tfish:'salmon',\n \tcatsFamily:(2) [\n \t'tiger',\n \t'lion'\n \t]\n}</code></code></pre></p><p>Một lưu ý khi bạn sử dụng <code>Object.freeze(objName)</code> là nếu bạn cho nó nhận vào một object con không tồn tại thì nó sẽ trả về undefined<pre><code>fish = {\n \tdolphin: 1,\n \tshark: 2\n}\nconsole.log(Object.freeze(fish.something));\n<code class='inf'>undefined</code></code></pre></p><h2>Extracting data with Destructuring</h2><p>Nói một cách khái quát, destructuring là một phương pháp cho phép bạn gán hoặc trích xuất dữ liệu từ một Object hoặc Arrays thuận tiện hơn, giảm đáng kể các dòng lệnh mà trước kia cần sử dụng để thao tác với hai cấu trúc này. Giống như cách bạn khởi gán giá trị trong ví dụ dưới đây:</p><pre><code>const [first, second] = [1, 2];\nconsole.log(first, second);\n<code class='inf'>1 2</code></code></pre><p>Hoặc trích xuất dữ liệu phần tử đầu tiên của một arrays/object:</p><pre><code>const animals = ['dog', 'cat', 'fish', 'dolphin'];\nconst [firstThing] = animals;\nconsole.log(firstThing);\n<code class='inf'>dog</code></code></pre><p>Bạn cũng có thể sử dụng dấu phẩy ',' để bỏ qua một vài phần tử khi duyệt</p><pre><code>const animals = ['dog', 'cat', 'fish', 'dolphin'];\nconst [ , , something] = animals;\nconsole.log(something);\n<code class='inf'>fish</code></code></pre><p>Và dùng một đối số thay thế cho phần còn lại của mảng (rest params/rest es6)<pre><code>const animals = ['dog', 'cat', 'fish', 'dolphin'];\nconst [first, ...others] = animals;\nconsole.log(first, others);\n<code class='inf'>dog ['cat', 'fish', 'dolphin']</code></code></pre></p><h2>Arrow function</h2><p>Arrow function là một cú pháp mới từ ES6 dùng để viết các hàm một cách ngắn gọn hơn, thay đổi cách từ khóa <code>this</code> được ràng buộc đến hàm cũng như đơn giản hóa scoping. Cú pháp chung: <code>(param1, param2, paramN) => expression</code>. Bằng cách này bạn cũng sẽ tránh được việc phải gõ lại các từ khóa như <code>function</code>, <code>return</code>, cũng như cặp dấu ngoặc nhọn.</p><pre><code>//ES5\nconst number = [1, 2, 3];\nlet doubledNumber = number.map(function(num) {\n\treturn num * 2;\n})\nconsole.log(doubledNumber);\n<code class='inf'>(3) [2, 4, 6]</code>\n\n//ES6\nconst number = [1, 2, 3];\nlet calc = (num) => { return num * 2};\nconst doubledNumber = number.map(calc);\nconsole.log(doubledNumber);\n<code class='inf'>(3) [2, 4, 6]</code></code></pre><p>Trong một số trường hợp, bạn có thể lược bỏ các thành phần của arrow function để cho nó trông đơn giản hơn. Như bạn có thể lược bỏ <code>return</code> trong đoạn code trên (implicit return), bỏ luôn cặp dấu ngoặc đơn vì bạn chỉ sử dụng một tham số truyền vào (nhưng dấu ngoặc đơn là bắt buộc nếu hàm không tham số), đồng thời bỏ cả dấu ngoặc nhọn vì bạn chỉ có một dòng lệnh đơn giản. Sau đó dòng arrow function trên sẽ thành thế này:</p><pre><code>let calc = num => num * 2;</code></pre><h2>Arrow function and 'this'</h2><p>Trước khi có ES6, mỗi function tự định nghĩa và ràng buộc <code>this</code> cho bản thân nội hàm của nó, dựa vào cách nó được gọi, nếu function là một constructor (hàm xây dựng/khởi tạo) thì khi có lỗi nó sẽ trả về NaN (Not a Number) hoặc undefined</p><pre><code>function Dog() {\n\tthis.age = 0;\n\tsetInterval(function() {\n\t\tthis.age++;\n\t\tconsole.log(this.age);\n\t},1000);\n}\nconst puppy = new Dog();\n<code class='inf'>NaN\nNaN\n...</code></code></pre><p>Như bạn thấy, <code>this.age</code> của hàm khởi tạo Dog() và <code>this.age</code> của hàm <code>setInterval()</code> đã trỏ đến hai vùng nhớ khác nhau, hoàn toàn không tham chiếu đến nhau, do đó <code>this.age</code> của <code>setInterval()</code> mặc định là chưa được khởi tạo giá trị, việc cố tình cộng thêm giá trị cho nó sẽ trả về kiểu NaN. Nhưng khi bạn thay đổi một chút với Arrow function, từ khóa <code>this</code> sẽ được bind (ràng buộc) vào hàm cha đang bao quanh nó:</p><pre><code>function Dog() => {\n\tthis.age = 0;\n\tsetInterval(() => {\n\t\tthis.age++;\n\t\tconsole.log(this.age);\n\t},1000);\n}\nconst puppy = new Dog();\n<code class='inf'>1\n2\n3\n4\n...</code></code></pre><p>Một điểm khá hay nữa là bạn có thể lựa chọn thứ tự tham số nào sẽ được nhận vào xử lý:</p><pre><code>const checkEqual = (agrument) => {\n\tconsole.log(agrument);\n\treturn agrument[1] === 100;\n}\nconsole.log(checkEqual([50, 100, 200]));\n<code class='inf'>(3) [50, 100, 200]\ntrue</code></code></pre><p>Sử dụng rest operator để nhận vào một tập tham số: </p><pre><code>const isOdd = (...agrument) => agrument % 2 === 1;\nconsole.log(isOdd(3));\n<code class='inf'>true</code></code></pre><h2>Thay lời kết</h2><p>Phía trên mình vừa trình bày một số điểm mình cóp nhặt được trong quá trình học tập, có thể sẽ có nhiều sai sót hoặc chưa tối ưu nhưng mình hy vọng nó sẽ cung cấp cho bạn một cái nhìn tổng quan nhất về ES6. Theo mình thì lập trình nói riêng và những lĩnh vực khác nói chung đều cần phải học tập không ngừng và tham khảo, so sánh cũng như đối chiều nhiều nguồn thông tin khác nhau, để nhờ đó bản thân bạn có thể đúc kết được những kiến thức hữu ích nhất. Vì lẽ đó nên ở phần dưới mình sẽ để thêm một số nguồn tham khảo để bạn có thể xem thêm, do cá nhân mình cảm thấy tổng quan bài viết này còn khá sơ sài và chưa chuyên sâu cho lắm.</p><ul> <li><a href='https://www.w3schools.com/js/js_es6.asp' class='link-active'>W3Schools: ECMAScript 6</a></li><li><a href='https://anonystick.com/blog-developer/es6-arrow-functions-cheatsheet-2019061833209083.jsx' class='link-active'>Anonystick: ES6 Arrow Functions</a></li><li><a href='https://medium.com/@jonathan_wong/javascript-intro-to-es6-d9903026ba5e' class='link-active'>Medium: Intro to ES6</a></li><li><a href='https://anonystick.com/blog-developer/destructuring-javascript-la-gi-buong-gi-buong-chu-dung-bo-qua-phan-nay-cua-es6-2019122141422037#:~:text=Destructuring%20l%C3%A0%20m%E1%BB%99t%20c%C3%BA%20ph%C3%A1p,Destructuring%20Objects%20v%C3%A0%20Destructuring%20Arrays.' class='link-active'>Anonystick: Destructuring Javascript là gì? Buông gì buông chứ đừng bỏ qua phần này của ES6</a></li><li><a href='https://viblo.asia/p/ecmascript-es6-la-gi-overview-es6-gAm5y9RA5db' class='link-active'>Viblo: ECMAScript - ES6 Là gì? Overview ES6</a></li></ul>",
        featured: true,
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
      state.viewingData.wordcount = data.wordcount;
      state.viewingData.date = data.day + ' tháng ' + data.month + ' năm ' + data.year; // toString
    }
  },
});
