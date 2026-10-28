# Đáp án và giải thích – 200 câu hỏi trắc nghiệm Linux

Tài liệu này tổng hợp **đáp án đúng** và **lời giải thích** cho toàn bộ 200 câu hỏi trong ứng dụng *Trắc nghiệm Linux*.
Số thứ tự câu hỏi và thứ tự các phương án A–D trùng với trang *Danh sách câu hỏi* trên trang web.

> **Lưu ý:** khi làm bài với tùy chọn *Xáo trộn thứ tự câu hỏi*, thứ tự các câu thay đổi nhưng thứ tự phương án A–D của từng câu vẫn giữ nguyên.

<a id="muc-luc"></a>

## Mục lục

| # | Chủ đề | Câu |
|---|--------|-----|
| 1 | [Kiến thức cơ bản](#basics) | 1–20 |
| 2 | [Hệ thống tệp & Điều hướng](#navigation) | 21–40 |
| 3 | [Quản lý tệp](#files) | 41–60 |
| 4 | [Xem & Soạn thảo văn bản](#text) | 61–80 |
| 5 | [Phân quyền](#permissions) | 81–100 |
| 6 | [Người dùng & Nhóm](#users) | 101–120 |
| 7 | [Tiến trình & Hệ thống](#processes) | 121–140 |
| 8 | [Quản lý gói phần mềm](#packages) | 141–160 |
| 9 | [Mạng](#networking) | 161–180 |
| 10 | [Shell & Viết script](#shell) | 181–200 |
|   | [Bảng đáp án nhanh](#bang-dap-an) |   |

<a id="basics"></a>

## 1. Kiến thức cơ bản (câu 1–20)

### Câu 1. Ai là người tạo ra nhân (kernel) Linux?

- **A. Linus Torvalds** ✅
- B. Richard Stallman
- C. Dennis Ritchie
- D. Steve Jobs

**Đáp án đúng: A** – Linus Torvalds

**Giải thích:** Linus Torvalds bắt đầu viết Linux như một dự án sở thích khi còn là sinh viên ở Phần Lan và công bố nó vào năm 1991.

### Câu 2. Phiên bản đầu tiên của nhân Linux được phát hành vào năm nào?

- A. 1985
- B. 2001
- C. 1995
- **D. 1991** ✅

**Đáp án đúng: D** – 1991

**Giải thích:** Linux 0.01 được phát hành vào tháng 9 năm 1991.

### Câu 3. Nhân (kernel) Linux là gì?

- A. Một môi trường đồ họa cho máy tính để bàn
- B. Một trình duyệt web
- C. Một trình soạn thảo văn bản
- **D. Phần lõi của hệ điều hành, quản lý phần cứng, bộ nhớ và các tiến trình** ✅

**Đáp án đúng: D** – Phần lõi của hệ điều hành, quản lý phần cứng, bộ nhớ và các tiến trình

**Giải thích:** Nhân nằm giữa phần cứng và các chương trình của bạn. Nó quản lý CPU, bộ nhớ, thiết bị và các tiến trình đang chạy.

### Câu 4. Nhân Linux được phân phối theo giấy phép nào?

- A. Một giấy phép độc quyền, phải trả phí
- B. Giấy phép Apache 2.0
- C. Giấy phép MIT
- **D. Giấy phép Công cộng GNU phiên bản 2 (GPLv2)** ✅

**Đáp án đúng: D** – Giấy phép Công cộng GNU phiên bản 2 (GPLv2)

**Giải thích:** Nhân Linux được phát hành theo GPLv2, giấy phép bảo đảm mã nguồn luôn được tự do sử dụng, nghiên cứu, chỉnh sửa và chia sẻ.

### Câu 5. Một bản phân phối Linux ("distro") là gì?

- A. Một phiên bản của nhân Windows
- **B. Một hệ điều hành hoàn chỉnh gồm nhân Linux cùng các công cụ, phần mềm và trình quản lý gói** ✅
- C. Một lệnh Linux đơn lẻ
- D. Một loại phần cứng máy tính

**Đáp án đúng: B** – Một hệ điều hành hoàn chỉnh gồm nhân Linux cùng các công cụ, phần mềm và trình quản lý gói

**Giải thích:** Các bản phân phối như Ubuntu, Fedora và Debian đóng gói nhân Linux cùng các công cụ hệ thống, ứng dụng và cách thức cài đặt phần mềm.

### Câu 6. Đâu là một bản phân phối Linux?

- A. Windows 11
- **B. Ubuntu** ✅
- C. iOS
- D. macOS

**Đáp án đúng: B** – Ubuntu

**Giải thích:** Ubuntu là một trong những bản phân phối Linux phổ biến nhất. macOS và iOS là hệ điều hành của Apple, còn Windows là của Microsoft.

### Câu 7. Linh vật chính thức của Linux là gì?

- A. Chú cáo tên Foxy
- B. Chú chuột túi má (gopher) tên Go
- C. Chú cá voi tên Moby
- **D. Chú chim cánh cụt tên Tux** ✅

**Đáp án đúng: D** – Chú chim cánh cụt tên Tux

**Giải thích:** Chim cánh cụt Tux là linh vật của Linux từ năm 1996.

### Câu 8. Shell trong Linux là gì?

- A. Một trình điều khiển phần cứng (driver)
- B. Lớp vỏ kim loại bên ngoài máy tính
- **C. Chương trình đọc các lệnh bạn gõ và yêu cầu hệ điều hành thực thi chúng** ✅
- D. Một loại hệ thống tệp

**Đáp án đúng: C** – Chương trình đọc các lệnh bạn gõ và yêu cầu hệ điều hành thực thi chúng

**Giải thích:** Shell là trình thông dịch lệnh. Bash, Zsh và Fish là các ví dụ về shell.

### Câu 9. Shell nào là shell mặc định trên hầu hết các bản phân phối Linux?

- A. Command Prompt (cmd.exe)
- B. PowerShell
- C. Finder
- **D. Bash** ✅

**Đáp án đúng: D** – Bash

**Giải thích:** Bash (Bourne Again SHell) là shell tương tác mặc định trên hầu hết các bản phân phối Linux.

### Câu 10. "Bash" là viết tắt của cụm từ nào?

- **A. Bourne Again SHell** ✅
- B. Basic Shell
- C. Binary Access Shell
- D. Background Automated Shell

**Đáp án đúng: A** – Bourne Again SHell

**Giải thích:** Bash là bản thay thế tự do cho Bourne shell (sh) ban đầu, vì thế mới có cách chơi chữ "Bourne Again" (đọc giống "born again" – "tái sinh").

### Câu 11. Tài khoản người dùng nào có toàn quyền quản trị hệ thống Linux?

- **A. root** ✅
- B. guest
- C. owner
- D. admin

**Đáp án đúng: A** – root

**Giải thích:** Người dùng root (UID 0) có thể làm mọi việc trên hệ thống, vì vậy cần sử dụng thật cẩn thận.

### Câu 12. Điểm khác biệt chính giữa CLI và GUI là gì?

- A. GUI luôn nhanh hơn CLI
- B. CLI chỉ dùng được trên máy chủ
- C. Hai loại này không có gì khác nhau
- **D. CLI dùng các lệnh gõ bằng văn bản, còn GUI dùng cửa sổ, biểu tượng và chuột** ✅

**Đáp án đúng: D** – CLI dùng các lệnh gõ bằng văn bản, còn GUI dùng cửa sổ, biểu tượng và chuột

**Giải thích:** CLI là giao diện dòng lệnh (Command-Line Interface), GUI là giao diện đồ họa (Graphical User Interface). Linux hỗ trợ cả hai.

### Câu 13. Đâu là một môi trường máy tính để bàn (desktop environment) phổ biến trên Linux?

- A. Explorer
- B. Metro
- C. Aqua
- **D. GNOME** ✅

**Đáp án đúng: D** – GNOME

**Giải thích:** GNOME, KDE Plasma, Xfce và Cinnamon là các môi trường desktop phổ biến trên Linux. Aqua là giao diện của macOS.

### Câu 14. Linux là phần mềm "mã nguồn mở". Điều đó có nghĩa là gì?

- **A. Mã nguồn của nó được công khai để mọi người xem, chỉnh sửa và chia sẻ** ✅
- B. Nó không có tính năng bảo mật
- C. Nó chỉ được cung cấp dưới dạng bản dùng thử miễn phí
- D. Nó chỉ chạy được trên phần cứng mở

**Đáp án đúng: A** – Mã nguồn của nó được công khai để mọi người xem, chỉnh sửa và chia sẻ

**Giải thích:** Phần mềm mã nguồn mở công bố mã nguồn để bất kỳ ai cũng có thể nghiên cứu, cải tiến và phân phối lại.

### Câu 15. Ubuntu được xây dựng dựa trên bản phân phối Linux nào?

- A. Slackware
- B. Fedora
- **C. Debian** ✅
- D. Arch Linux

**Đáp án đúng: C** – Debian

**Giải thích:** Ubuntu được xây dựng trên Debian và dùng chung định dạng gói .deb cùng bộ công cụ APT.

### Câu 16. Nhấn phím Tab khi đang gõ lệnh trong Bash có tác dụng gì?

- A. Thụt lề lệnh vào bốn dấu cách
- B. Chạy lệnh ngay lập tức
- **C. Tự động hoàn thành tên lệnh và tên tệp** ✅
- D. Mở một tab terminal mới

**Đáp án đúng: C** – Tự động hoàn thành tên lệnh và tên tệp

**Giải thích:** Tự động hoàn thành bằng phím Tab giúp gõ nhanh hơn và tránh sai sót. Nhấn Tab hai lần để xem tất cả các khả năng phù hợp.

### Câu 17. Công ty nào phát triển và hỗ trợ Ubuntu?

- **A. Canonical** ✅
- B. SUSE
- C. Red Hat
- D. Google

**Đáp án đúng: A** – Canonical

**Giải thích:** Canonical Ltd. sáng lập và duy trì Ubuntu. Red Hat đứng sau Fedora và RHEL; SUSE phát triển SUSE Linux Enterprise và tài trợ cho dự án openSUSE.

### Câu 18. Tên tệp trong Linux phân biệt chữ hoa và chữ thường. Điều đó có nghĩa là gì?

- A. Có thể gõ lệnh bằng chữ hoa hay chữ thường đều được
- B. Tệp phải được lưu trong các thư mục gọi là "case"
- C. Tên tệp chỉ được chứa chữ thường
- **D. `File.txt` và `file.txt` được coi là hai tệp khác nhau** ✅

**Đáp án đúng: D** – `File.txt` và `file.txt` được coi là hai tệp khác nhau

**Giải thích:** Linux phân biệt chữ hoa và chữ thường trong tên tệp và tên lệnh. `LS` không giống với `ls`.

### Câu 19. Lệnh nào mở trang hướng dẫn sử dụng (manual) của một lệnh khác, ví dụ `ls`?

- **A. `man ls`** ✅
- B. `help-me ls`
- C. `doc ls`
- D. `guide ls`

**Đáp án đúng: A** – `man ls`

**Giải thích:** `man` hiển thị tài liệu hướng dẫn của một lệnh. Nhấn `q` để thoát trình xem. Nhiều lệnh còn hỗ trợ tùy chọn `--help`.

### Câu 20. Lệnh nào hiển thị phiên bản nhân Linux đang chạy?

- A. `kernel --version`
- B. `linux -v`
- C. `version`
- **D. `uname -r`** ✅

**Đáp án đúng: D** – `uname -r`

**Giải thích:** `uname -r` in ra phiên bản nhân, ví dụ 6.8.0-45-generic. `uname -a` hiển thị thêm nhiều thông tin hệ thống.

[↑ Về mục lục](#muc-luc)

---

<a id="navigation"></a>

## 2. Hệ thống tệp & Điều hướng (câu 21–40)

### Câu 21. Lệnh nào in ra thư mục làm việc hiện tại?

- A. `here`
- B. `where`
- **C. `pwd`** ✅
- D. `cwd`

**Đáp án đúng: C** – `pwd`

**Giải thích:** `pwd` là viết tắt của "print working directory" và hiển thị đường dẫn đầy đủ của thư mục bạn đang đứng.

### Câu 22. Lệnh nào liệt kê các tệp trong một thư mục?

- A. `cat`
- **B. `ls`** ✅
- C. `show`
- D. `list`

**Đáp án đúng: B** – `ls`

**Giải thích:** `ls` liệt kê nội dung thư mục. Thêm các tùy chọn như `-l` hoặc `-a` để xem chi tiết hơn.

### Câu 23. Lệnh `cd ..` có tác dụng gì?

- A. Liệt kê các tệp ẩn
- **B. Di chuyển lên một cấp, tới thư mục cha** ✅
- C. Di chuyển tới thư mục chính (home) của bạn
- D. Di chuyển tới thư mục gốc

**Đáp án đúng: B** – Di chuyển lên một cấp, tới thư mục cha

**Giải thích:** `..` luôn chỉ thư mục cha của thư mục hiện tại.

### Câu 24. Lệnh `cd ~` có tác dụng gì?

- A. Chuyển tới thư mục gốc
- **B. Chuyển tới thư mục chính (home) của bạn** ✅
- C. Không làm gì cả
- D. Chuyển về thư mục trước đó

**Đáp án đúng: B** – Chuyển tới thư mục chính (home) của bạn

**Giải thích:** `~` là cách viết tắt của thư mục chính của bạn, ví dụ /home/alice. Chạy `cd` không kèm tham số cũng cho kết quả tương tự.

### Câu 25. Lệnh `cd -` có tác dụng gì?

- A. Di chuyển tới thư mục cha
- B. Xóa thư mục hiện tại
- C. Di chuyển tới thư mục gốc
- **D. Quay lại thư mục bạn vừa ở trước đó** ✅

**Đáp án đúng: D** – Quay lại thư mục bạn vừa ở trước đó

**Giải thích:** `cd -` chuyển qua lại giữa thư mục hiện tại và thư mục làm việc trước đó.

### Câu 26. Thư mục `/` đại diện cho điều gì?

- A. Thư mục chính của người dùng hiện tại
- B. Thư mục thùng rác
- **C. Gốc (đỉnh) của toàn bộ hệ thống tệp** ✅
- D. Thư mục hiện tại

**Đáp án đúng: C** – Gốc (đỉnh) của toàn bộ hệ thống tệp

**Giải thích:** Mọi thứ trong Linux đều nằm dưới `/`, tức thư mục gốc. Linux không dùng ký tự ổ đĩa như C: hay D:.

### Câu 27. Trong một đường dẫn, dấu chấm đơn `.` chỉ điều gì?

- **A. Thư mục hiện tại** ✅
- B. Thư mục gốc
- C. Thư mục chính (home)
- D. Thư mục cha

**Đáp án đúng: A** – Thư mục hiện tại

**Giải thích:** `.` nghĩa là "tại đây". Ví dụ, `./script.sh` chạy tệp script.sh nằm trong thư mục hiện tại.

### Câu 28. Tùy chọn nào giúp `ls` hiển thị cả các tệp ẩn?

- **A. `ls -a`** ✅
- B. `ls -h`
- C. `ls -r`
- D. `ls -s`

**Đáp án đúng: A** – `ls -a`

**Giải thích:** `-a` (all – tất cả) hiển thị cả những mục có tên bắt đầu bằng dấu chấm.

### Câu 29. Tệp ẩn trong Linux được nhận biết như thế nào?

- **A. Tên của chúng bắt đầu bằng dấu chấm, ví dụ `.bashrc`** ✅
- B. Chúng không có quyền truy cập nào
- C. Chúng có phần mở rộng .hidden
- D. Chúng được lưu trong thư mục /hidden

**Đáp án đúng: A** – Tên của chúng bắt đầu bằng dấu chấm, ví dụ `.bashrc`

**Giải thích:** Bất kỳ tệp hay thư mục nào có tên bắt đầu bằng `.` đều bị ẩn khi chạy `ls` thông thường.

### Câu 30. Lệnh `ls -l` hiển thị gì?

- A. Chỉ tệp cuối cùng trong thư mục
- **B. Danh sách chi tiết gồm quyền, chủ sở hữu, kích thước và ngày sửa đổi** ✅
- C. Tất cả các tệp trên một dòng
- D. Chỉ các liên kết mềm (symbolic link)

**Đáp án đúng: B** – Danh sách chi tiết gồm quyền, chủ sở hữu, kích thước và ngày sửa đổi

**Giải thích:** Định dạng dài hiển thị mỗi tệp trên một dòng với quyền, số liên kết, chủ sở hữu, nhóm, kích thước và thời gian sửa đổi.

### Câu 31. So với `ls -l`, lệnh `ls -lh` bổ sung điều gì?

- A. Chỉ hiển thị các tệp lớn nhất
- B. Hiển thị các tệp theo thứ tự ngược lại
- C. Hiển thị các tệp ẩn
- **D. Hiển thị kích thước tệp theo đơn vị dễ đọc như K, M, G** ✅

**Đáp án đúng: D** – Hiển thị kích thước tệp theo đơn vị dễ đọc như K, M, G

**Giải thích:** `-h` (human-readable – dễ đọc) in kích thước dạng 4.0K hoặc 2.3M thay vì số byte thô.

### Câu 32. Thư mục nào chứa thư mục chính (home) của những người dùng thông thường?

- A. `/root`
- B. `/users`
- **C. `/home`** ✅
- D. `/usr`

**Đáp án đúng: C** – `/home`

**Giải thích:** Mỗi người dùng thông thường có một thư mục như /home/alice. Thư mục chính của người dùng root là /root.

### Câu 33. Thư mục nào chủ yếu lưu các tệp cấu hình của toàn hệ thống?

- A. `/tmp`
- B. `/var`
- C. `/bin`
- **D. `/etc`** ✅

**Đáp án đúng: D** – `/etc`

**Giải thích:** /etc chứa các tệp cấu hình như /etc/passwd, /etc/hosts và /etc/fstab.

### Câu 34. Thư mục nào chứa dữ liệu thay đổi thường xuyên, chẳng hạn như tệp nhật ký (log)?

- A. `/etc`
- B. `/boot`
- **C. `/var`** ✅
- D. `/opt`

**Đáp án đúng: C** – `/var`

**Giải thích:** /var lưu dữ liệu hay thay đổi. Nhật ký hệ thống thường nằm trong /var/log.

### Câu 35. Thư mục nào được dùng cho các tệp tạm thời?

- A. `/swap`
- **B. `/tmp`** ✅
- C. `/temp`
- D. `/trash`

**Đáp án đúng: B** – `/tmp`

**Giải thích:** Chương trình và người dùng có thể ghi tệp tạm vào /tmp. Thư mục này thường được dọn sạch khi khởi động lại máy.

### Câu 36. Thư mục chính (home) của người dùng root là gì?

- A. `/admin`
- B. `/`
- C. `/home/root`
- **D. `/root`** ✅

**Đáp án đúng: D** – `/root`

**Giải thích:** Thư mục chính của root là /root, được tách riêng khỏi /home để vẫn dùng được ngay cả khi /home gặp sự cố hoặc không khả dụng.

### Câu 37. Thư mục nào chứa các tệp cần thiết để khởi động hệ thống, chẳng hạn như nhân Linux?

- **A. `/boot`** ✅
- B. `/kernel`
- C. `/init`
- D. `/start`

**Đáp án đúng: A** – `/boot`

**Giải thích:** /boot chứa tệp nhân (kernel), đĩa RAM khởi tạo (initramfs) và các tệp của trình nạp khởi động (boot loader).

### Câu 38. Đâu là một đường dẫn tuyệt đối?

- A. `../alice`
- B. `docs/notes.txt`
- C. `./script.sh`
- **D. `/home/alice/docs`** ✅

**Đáp án đúng: D** – `/home/alice/docs`

**Giải thích:** Đường dẫn tuyệt đối bắt đầu bằng `/` và mô tả vị trí tính từ thư mục gốc. Các đáp án còn lại là đường dẫn tương đối.

### Câu 39. Thư mục nào biểu diễn các thiết bị phần cứng dưới dạng tệp đặc biệt?

- A. `/devices`
- B. `/drivers`
- **C. `/dev`** ✅
- D. `/hw`

**Đáp án đúng: C** – `/dev`

**Giải thích:** /dev chứa các tệp thiết bị như /dev/sda (một ổ đĩa) và /dev/null.

### Câu 40. Trên máy tính để bàn, các thiết bị lưu trữ di động như USB thường được tự động gắn (mount) vào đâu?

- A. Bên trong `/boot`
- **B. Bên trong `/media`** ✅
- C. Bên trong `/usb`
- D. Bên trong `/etc`

**Đáp án đúng: B** – Bên trong `/media`

**Giải thích:** Ubuntu và Debian tự động gắn ổ di động vào /media/tên\_người\_dùng/ (một số bản phân phối như Fedora dùng /run/media/tên\_người\_dùng/). Thư mục /mnt theo truyền thống dùng để gắn thủ công, tạm thời.

[↑ Về mục lục](#muc-luc)

---

<a id="files"></a>

## 3. Quản lý tệp (câu 41–60)

### Câu 41. Lệnh nào tạo một thư mục mới?

- **A. `mkdir`** ✅
- B. `newdir`
- C. `touch`
- D. `makefolder`

**Đáp án đúng: A** – `mkdir`

**Giải thích:** `mkdir projects` tạo một thư mục tên là projects.

### Câu 42. Lệnh nào tạo một tệp rỗng, hoặc cập nhật thời gian sửa đổi của một tệp đã có?

- A. `mkfile`
- **B. `touch`** ✅
- C. `new`
- D. `create`

**Đáp án đúng: B** – `touch`

**Giải thích:** `touch notes.txt` tạo tệp notes.txt nếu chưa tồn tại, hoặc cập nhật thời gian sửa đổi nếu tệp đã có.

### Câu 43. Lệnh nào dùng để sao chép tệp?

- A. `mv`
- B. `copy`
- **C. `cp`** ✅
- D. `cpy`

**Đáp án đúng: C** – `cp`

**Giải thích:** `cp source.txt dest.txt` sao chép một tệp. Còn `mv` thì di chuyển hoặc đổi tên tệp.

### Câu 44. Lệnh nào dùng để di chuyển hoặc đổi tên tệp?

- A. `ren`
- B. `cp`
- C. `move`
- **D. `mv`** ✅

**Đáp án đúng: D** – `mv`

**Giải thích:** `mv` di chuyển tệp tới vị trí mới; di chuyển tệp sang một tên mới trong cùng thư mục chính là đổi tên.

### Câu 45. Lệnh nào dùng để xóa một tệp?

- **A. `rm`** ✅
- B. `delete`
- C. `erase`
- D. `del`

**Đáp án đúng: A** – `rm`

**Giải thích:** `rm file.txt` xóa một tệp. Trên terminal không có thùng rác, vì vậy hãy cẩn thận.

### Câu 46. Làm thế nào để xóa một thư mục cùng toàn bộ nội dung bên trong?

- A. `rmdir --all dirname`
- B. `del /s dirname`
- C. `rm dirname`
- **D. `rm -r dirname`** ✅

**Đáp án đúng: D** – `rm -r dirname`

**Giải thích:** `-r` (recursive – đệ quy) xóa thư mục và mọi thứ bên trong. Lệnh `rm` không kèm tùy chọn này sẽ từ chối xóa thư mục.

### Câu 47. Lệnh `rmdir` có tác dụng gì?

- A. Đổi tên một thư mục
- B. Xóa một thư mục cùng toàn bộ nội dung bên trong
- C. Liệt kê các thư mục
- **D. Xóa một thư mục rỗng** ✅

**Đáp án đúng: D** – Xóa một thư mục rỗng

**Giải thích:** `rmdir` chỉ hoạt động với thư mục rỗng, vì vậy đây là cách dọn dẹp an toàn.

### Câu 48. Lệnh nào tạo các thư mục lồng nhau a/b/c chỉ trong một bước?

- A. `mkdir a b c`
- B. `mkdir -r a/b/c`
- C. `mkdir -n a/b/c`
- **D. `mkdir -p a/b/c`** ✅

**Đáp án đúng: D** – `mkdir -p a/b/c`

**Giải thích:** `-p` (parents) tự tạo các thư mục cha còn thiếu. Còn `mkdir a b c` sẽ tạo ba thư mục riêng biệt.

### Câu 49. Làm thế nào để sao chép một thư mục cùng toàn bộ nội dung bên trong?

- **A. `cp -r source dest`** ✅
- B. `cp -d source dest`
- C. `cp source dest`
- D. `cp -f source dest`

**Đáp án đúng: A** – `cp -r source dest`

**Giải thích:** Cần dùng `-r` (đệ quy) để sao chép thư mục. Nếu thiếu tùy chọn này, `cp` sẽ bỏ qua thư mục.

### Câu 50. Lệnh `rm -i file.txt` có tác dụng gì?

- **A. Hỏi xác nhận trước khi xóa tệp** ✅
- B. Xóa tệp mà không hỏi
- C. Bỏ qua tệp
- D. Chuyển tệp vào thùng rác

**Đáp án đúng: A** – Hỏi xác nhận trước khi xóa tệp

**Giải thích:** `-i` (interactive – tương tác) hỏi lại trước mỗi lần xóa.

### Câu 51. Lệnh nào tạo một liên kết mềm (symbolic link)?

- **A. `ln -s target linkname`** ✅
- B. `sym target linkname`
- C. `ln target linkname`
- D. `mklink target linkname`

**Đáp án đúng: A** – `ln -s target linkname`

**Giải thích:** `ln -s` tạo liên kết mềm (giống lối tắt). `ln` không có `-s` sẽ tạo liên kết cứng (hard link); `mklink` là lệnh của Windows.

### Câu 52. Lệnh nào tìm trong cây thư mục /home một tệp tên là notes.txt?

- A. `grep /home notes.txt`
- **B. `find /home -name "notes.txt"`** ✅
- C. `ls --find notes.txt`
- D. `search /home notes.txt`

**Đáp án đúng: B** – `find /home -name "notes.txt"`

**Giải thích:** `find` duyệt qua các thư mục và tìm tệp theo tên, kích thước, loại, ngày tháng và nhiều tiêu chí khác.

### Câu 53. Ký tự đại diện `*` khớp với gì trong tên tệp?

- A. Chỉ các tệp ẩn
- **B. Bất kỳ số lượng ký tự nào, kể cả không có ký tự nào** ✅
- C. Chỉ các chữ số
- D. Đúng một ký tự

**Đáp án đúng: B** – Bất kỳ số lượng ký tự nào, kể cả không có ký tự nào

**Giải thích:** Ví dụ, `*.log` khớp với mọi tệp có đuôi .log.

### Câu 54. Ký tự đại diện `?` khớp với gì trong tên tệp?

- A. Không khớp với gì cả
- **B. Đúng một ký tự** ✅
- C. Bất kỳ số lượng ký tự nào
- D. Chỉ đúng dấu chấm hỏi

**Đáp án đúng: B** – Đúng một ký tự

**Giải thích:** `file?.txt` khớp với file1.txt và fileA.txt, nhưng không khớp với file10.txt.

### Câu 55. Lệnh `ls *.txt` liệt kê những gì?

- A. Chỉ các tệp .txt bị ẩn
- **B. Tất cả các tệp có đuôi .txt trong thư mục hiện tại** ✅
- C. Nội dung văn bản bên trong mọi tệp
- D. Chỉ một tệp có tên đúng là \*.txt

**Đáp án đúng: B** – Tất cả các tệp có đuôi .txt trong thư mục hiện tại

**Giải thích:** Shell mở rộng `*.txt` thành danh sách các tên tệp phù hợp trước khi chạy `ls`.

### Câu 56. Lệnh nào cho biết một tệp chứa loại dữ liệu gì (văn bản, hình ảnh, chương trình, ...)?

- A. `kind`
- B. `typeof`
- **C. `file`** ✅
- D. `format`

**Đáp án đúng: C** – `file`

**Giải thích:** `file photo.jpg` có thể in ra "JPEG image data". Linux không dựa vào phần mở rộng để xác định loại tệp.

### Câu 57. Lệnh `cp -i` có tác dụng gì?

- A. Chỉ sao chép hình ảnh
- B. Bỏ qua mọi lỗi
- C. Chỉ sao chép các tệp ẩn
- **D. Hỏi trước khi ghi đè lên một tệp đã tồn tại** ✅

**Đáp án đúng: D** – Hỏi trước khi ghi đè lên một tệp đã tồn tại

**Giải thích:** `-i` (interactive) giúp tránh vô tình ghi đè lên tệp.

### Câu 58. Lệnh `mv old.txt new.txt` làm gì khi cả hai tên nằm trong cùng một thư mục?

- A. Xóa cả hai tệp
- **B. Đổi tên old.txt thành new.txt** ✅
- C. Gộp hai tệp lại với nhau
- D. Sao chép old.txt thành new.txt

**Đáp án đúng: B** – Đổi tên old.txt thành new.txt

**Giải thích:** Với nhu cầu cơ bản, Linux dùng `mv` để đổi tên tệp chứ không cần một lệnh đổi tên riêng.

### Câu 59. Lệnh nào hiển thị thông tin chi tiết về một tệp, như kích thước, inode và các mốc thời gian?

- A. `fileinfo`
- **B. `stat`** ✅
- C. `about`
- D. `details`

**Đáp án đúng: B** – `stat`

**Giải thích:** `stat file.txt` hiển thị kích thước, quyền, chủ sở hữu, số inode và các thời điểm truy cập/sửa đổi/thay đổi của tệp.

### Câu 60. Lệnh nào tìm tệp theo tên rất nhanh nhờ một cơ sở dữ liệu được tạo sẵn?

- **A. `locate`** ✅
- B. `where`
- C. `seek`
- D. `find`

**Đáp án đúng: A** – `locate`

**Giải thích:** `locate` tìm trong một chỉ mục được cập nhật định kỳ (bằng `updatedb`), nên rất nhanh. Còn `find` tìm trực tiếp trên ổ đĩa.

[↑ Về mục lục](#muc-luc)

---

<a id="text"></a>

## 4. Xem & Soạn thảo văn bản (câu 61–80)

### Câu 61. Lệnh nào hiển thị toàn bộ nội dung của một tệp ra terminal?

- A. `show`
- B. `print`
- C. `open`
- **D. `cat`** ✅

**Đáp án đúng: D** – `cat`

**Giải thích:** `cat file.txt` in ra toàn bộ tệp. Tên lệnh là viết tắt của "concatenate" (nối).

### Câu 62. Lệnh nào hiển thị tệp theo từng trang màn hình và cho phép cuộn lên xuống?

- A. `cat`
- B. `touch`
- **C. `less`** ✅
- D. `echo`

**Đáp án đúng: C** – `less`

**Giải thích:** `less` là trình phân trang. Dùng phím mũi tên hoặc Space để cuộn, `/` để tìm kiếm và `q` để thoát.

### Câu 63. Theo mặc định, lệnh nào hiển thị 10 dòng đầu tiên của một tệp?

- A. `top`
- **B. `head`** ✅
- C. `tail`
- D. `first`

**Đáp án đúng: B** – `head`

**Giải thích:** `head file.txt` in ra 10 dòng đầu. Dùng `head -n 5` để chọn số dòng khác.

### Câu 64. Theo mặc định, lệnh nào hiển thị 10 dòng cuối cùng của một tệp?

- A. `head`
- B. `last`
- C. `end`
- **D. `tail`** ✅

**Đáp án đúng: D** – `tail`

**Giải thích:** `tail file.txt` in ra 10 dòng cuối. (`last` là một lệnh khác, dùng để xem các lần đăng nhập gần đây.)

### Câu 65. Lệnh `tail -f /var/log/syslog` có tác dụng gì?

- A. Xóa tệp nhật ký
- B. Hiển thị các dòng đầu tiên của tệp
- **C. Hiển thị phần cuối của tệp và tiếp tục in ra các dòng mới khi chúng được thêm vào** ✅
- D. Sửa lỗi định dạng trong tệp

**Đáp án đúng: C** – Hiển thị phần cuối của tệp và tiếp tục in ra các dòng mới khi chúng được thêm vào

**Giải thích:** `-f` (follow – theo dõi) rất hữu ích để theo dõi tệp nhật ký theo thời gian thực. Nhấn Ctrl+C để dừng.

### Câu 66. Lệnh nào tìm kiếm một mẫu văn bản bên trong các tệp?

- A. `find`
- B. `search`
- **C. `grep`** ✅
- D. `locate`

**Đáp án đúng: C** – `grep`

**Giải thích:** `grep "error" app.log` in ra mọi dòng trong app.log có chứa "error".

### Câu 67. Lệnh `grep -i "error" app.log` có tác dụng gì?

- **A. Tìm "error" mà không phân biệt chữ hoa, chữ thường** ✅
- B. Chèn "error" vào tệp
- C. Chỉ hiển thị các dòng không chứa "error"
- D. Đếm số dòng trong tệp

**Đáp án đúng: A** – Tìm "error" mà không phân biệt chữ hoa, chữ thường

**Giải thích:** `-i` (ignore case – bỏ qua hoa/thường) khớp với cả "error", "Error" và "ERROR".

### Câu 68. Lệnh `grep -v "debug" app.log` có tác dụng gì?

- A. Chỉ hiển thị các dòng có chứa "debug"
- B. Hiển thị phiên bản của grep
- C. In tệp ra kèm nhiều thông tin chi tiết
- **D. Hiển thị các dòng KHÔNG chứa "debug"** ✅

**Đáp án đúng: D** – Hiển thị các dòng KHÔNG chứa "debug"

**Giải thích:** `-v` đảo ngược kết quả khớp, rất tiện để lọc bỏ những dòng không cần thiết.

### Câu 69. Lệnh `wc -l file.txt` in ra gì?

- A. Số từ trong tệp
- B. Số ký tự trong tệp
- **C. Số dòng trong tệp** ✅
- D. Dòng cuối cùng của tệp

**Đáp án đúng: C** – Số dòng trong tệp

**Giải thích:** `wc` (word count) đếm số dòng (`-l`), số từ (`-w`) và số byte (`-c`).

### Câu 70. Lệnh nào sắp xếp các dòng văn bản theo thứ tự bảng chữ cái?

- A. `order`
- B. `uniq`
- **C. `sort`** ✅
- D. `arrange`

**Đáp án đúng: C** – `sort`

**Giải thích:** `sort names.txt` in ra các dòng đã được sắp xếp. Dùng `-r` để đảo ngược thứ tự và `-n` để sắp xếp theo số.

### Câu 71. Lệnh `uniq` có tác dụng gì?

- A. Đếm số người dùng trên hệ thống
- B. Xáo trộn các dòng một cách ngẫu nhiên
- **C. Loại bỏ các dòng lặp lại nằm liền kề nhau** ✅
- D. Đổi tên tệp thành một tên duy nhất

**Đáp án đúng: C** – Loại bỏ các dòng lặp lại nằm liền kề nhau

**Giải thích:** Vì `uniq` chỉ loại bỏ các dòng trùng nằm liền nhau, nó thường được dùng sau `sort`, ví dụ `sort list.txt | uniq`.

### Câu 72. Lệnh nào in một dòng văn bản ra terminal?

- A. `say`
- **B. `echo`** ✅
- C. `show`
- D. `output`

**Đáp án đúng: B** – `echo`

**Giải thích:** `echo "Hello"` in ra Hello. Lệnh này thường được dùng trong các script.

### Câu 73. Đâu là một trình soạn thảo văn bản trên terminal đơn giản, thân thiện với người mới bắt đầu?

- **A. `nano`** ✅
- B. `curl`
- C. `gcc`
- D. `vlc`

**Đáp án đúng: A** – `nano`

**Giải thích:** `nano` hiển thị các phím tắt ở cuối màn hình nên rất dễ học.

### Câu 74. Trong vim, lệnh nào lưu tệp rồi thoát?

- **A. `:wq`** ✅
- B. `:q!`
- C. `Ctrl+C`
- D. `:s`

**Đáp án đúng: A** – `:wq`

**Giải thích:** `:w` ghi (lưu) và `:q` thoát, nên `:wq` làm cả hai việc. Hãy nhấn Esc trước để chắc chắn đang ở chế độ Normal.

### Câu 75. Trong vim, lệnh `:q!` có tác dụng gì?

- A. Mở một tệp mới
- **B. Thoát mà không lưu các thay đổi** ✅
- C. Lưu rồi thoát
- D. Lưu mà không thoát

**Đáp án đúng: B** – Thoát mà không lưu các thay đổi

**Giải thích:** Dấu `!` buộc vim thoát và bỏ qua mọi thay đổi chưa lưu.

### Câu 76. Trong vim, phím nào chuyển sang chế độ Insert để bạn có thể gõ văn bản?

- A. `x`
- B. `:`
- **C. `i`** ✅
- D. `d`

**Đáp án đúng: C** – `i`

**Giải thích:** Nhấn `i` để chèn văn bản và nhấn Esc để quay lại chế độ Normal.

### Câu 77. Trong nano, phím tắt nào dùng để thoát khỏi trình soạn thảo?

- **A. `Ctrl+X`** ✅
- B. `Ctrl+Z`
- C. `Ctrl+Q`
- D. `Esc`

**Đáp án đúng: A** – `Ctrl+X`

**Giải thích:** Ctrl+X thoát nano; nếu còn thay đổi chưa lưu, nano sẽ hỏi bạn có muốn lưu không.

### Câu 78. Lệnh `cat file1 file2 > combined.txt` có tác dụng gì?

- A. So sánh hai tệp
- **B. Nối file1 và file2 vào một tệp mới tên là combined.txt** ✅
- C. Xóa cả hai tệp
- D. Sao chép combined.txt vào cả hai tệp

**Đáp án đúng: B** – Nối file1 và file2 vào một tệp mới tên là combined.txt

**Giải thích:** `cat` nối các tệp lại với nhau, và `>` chuyển hướng kết quả vào combined.txt.

### Câu 79. Lệnh nào hiển thị sự khác biệt giữa hai tệp văn bản theo từng dòng?

- A. `delta`
- B. `match`
- C. `compare`
- **D. `diff`** ✅

**Đáp án đúng: D** – `diff`

**Giải thích:** `diff old.txt new.txt` liệt kê các dòng đã được thêm, xóa hoặc thay đổi.

### Câu 80. Lệnh `cut -d: -f1 /etc/passwd` in ra gì?

- A. Nội dung tệp sau khi bỏ ký tự đầu tiên
- B. Dòng đầu tiên của tệp
- **C. Trường đầu tiên (tên người dùng) của mỗi dòng, dùng ":" làm ký tự phân cách** ✅
- D. Số lượng người dùng trên hệ thống

**Đáp án đúng: C** – Trường đầu tiên (tên người dùng) của mỗi dòng, dùng ":" làm ký tự phân cách

**Giải thích:** `-d:` đặt ký tự phân cách là dấu hai chấm và `-f1` chọn trường thứ nhất.

[↑ Về mục lục](#muc-luc)

---

<a id="permissions"></a>

## 5. Phân quyền (câu 81–100)

### Câu 81. Trong chuỗi quyền `-rwxr-xr--`, chủ sở hữu (owner) có những quyền gì?

- A. Chỉ đọc và thực thi
- B. Không có quyền nào
- C. Chỉ đọc
- **D. Đọc, ghi và thực thi** ✅

**Đáp án đúng: D** – Đọc, ghi và thực thi

**Giải thích:** Nhóm ba ký tự đầu tiên sau ký tự loại tệp (`rwx`) là quyền của chủ sở hữu.

### Câu 82. Trong chuỗi quyền `-rwxr-xr--`, "những người khác" (others) có những quyền gì?

- A. Đọc, ghi và thực thi
- B. Chỉ thực thi
- C. Đọc và ghi
- **D. Chỉ đọc** ✅

**Đáp án đúng: D** – Chỉ đọc

**Giải thích:** Ba ký tự cuối (`r--`) là quyền của những người khác: được đọc, không được ghi và không được thực thi.

### Câu 83. Trong `drwxr-xr-x`, ký tự đầu tiên `d` có nghĩa là gì?

- A. Mục này đã bị vô hiệu hóa
- **B. Mục này là một thư mục** ✅
- C. Mục này là một thiết bị ổ đĩa
- D. Mục này đã bị xóa

**Đáp án đúng: B** – Mục này là một thư mục

**Giải thích:** Ký tự đầu tiên cho biết loại tệp: `-` là tệp thông thường, `d` là thư mục và `l` là liên kết mềm.

### Câu 84. Giá trị số (hệ bát phân) của quyền đọc (read) là bao nhiêu?

- A. 1
- B. 2
- C. 7
- **D. 4** ✅

**Đáp án đúng: D** – 4

**Giải thích:** Đọc = 4, ghi = 2, thực thi = 1. Cộng các giá trị lại để được một chữ số quyền.

### Câu 85. Giá trị số (hệ bát phân) của quyền ghi (write) là bao nhiêu?

- **A. 2** ✅
- B. 3
- C. 1
- D. 4

**Đáp án đúng: A** – 2

**Giải thích:** Đọc = 4, ghi = 2, thực thi = 1. Ví dụ, đọc + ghi = 6.

### Câu 86. Giá trị số (hệ bát phân) của quyền thực thi (execute) là bao nhiêu?

- A. 4
- B. 2
- **C. 1** ✅
- D. 0

**Đáp án đúng: C** – 1

**Giải thích:** Đọc = 4, ghi = 2, thực thi = 1. Ví dụ, đọc + thực thi = 5.

### Câu 87. Lệnh `chmod 755 script.sh` thiết lập những quyền nào?

- A. Mọi người: rwx
- B. Chủ sở hữu: r-x; nhóm và người khác: rwx
- **C. Chủ sở hữu: rwx; nhóm và người khác: r-x** ✅
- D. Chủ sở hữu: rw-; nhóm và người khác: r--

**Đáp án đúng: C** – Chủ sở hữu: rwx; nhóm và người khác: r-x

**Giải thích:** 7 = 4+2+1 (rwx) và 5 = 4+1 (r-x). 755 thường dùng cho script và thư mục.

### Câu 88. Lệnh `chmod 644 notes.txt` thiết lập những quyền nào?

- A. Chủ sở hữu: rwx; nhóm: r--; người khác: không có quyền
- B. Chủ sở hữu: r--; nhóm và người khác: rw-
- **C. Chủ sở hữu: rw-; nhóm và người khác: r--** ✅
- D. Mọi người: rw-

**Đáp án đúng: C** – Chủ sở hữu: rw-; nhóm và người khác: r--

**Giải thích:** 6 = 4+2 (rw-) và 4 = chỉ đọc (r--). 644 là quyền thường gặp của các tệp thông thường.

### Câu 89. Lệnh nào cấp quyền thực thi script cho chủ sở hữu của nó?

- A. `exec script.sh`
- B. `chown +x script.sh`
- **C. `chmod u+x script.sh`** ✅
- D. `chmod u-x script.sh`

**Đáp án đúng: C** – `chmod u+x script.sh`

**Giải thích:** `u` là user (chủ sở hữu), `+` là thêm quyền và `x` là thực thi.

### Câu 90. Lệnh nào thay đổi chủ sở hữu của một tệp?

- A. `chgrp`
- B. `chmod`
- C. `owner`
- **D. `chown`** ✅

**Đáp án đúng: D** – `chown`

**Giải thích:** `chown` = change owner (đổi chủ sở hữu). `chmod` đổi quyền, còn `chgrp` chỉ đổi nhóm.

### Câu 91. Lệnh nào chỉ thay đổi nhóm của một tệp?

- **A. `chgrp`** ✅
- B. `groupmod`
- C. `setgroup`
- D. `chmod g`

**Đáp án đúng: A** – `chgrp`

**Giải thích:** `chgrp developers app.py` đặt nhóm của tệp thành developers. (`groupmod` dùng để sửa chính một nhóm, không phải tệp.)

### Câu 92. Lệnh `chmod 777 file` có tác dụng gì?

- **A. Cấp quyền đọc, ghi và thực thi cho tất cả mọi người** ✅
- B. Biến tệp thành chỉ đọc
- C. Gỡ bỏ mọi quyền
- D. Ẩn tệp

**Đáp án đúng: A** – Cấp quyền đọc, ghi và thực thi cho tất cả mọi người

**Giải thích:** 777 nghĩa là rwx cho chủ sở hữu, nhóm và người khác. Đây thường là rủi ro bảo mật và nên tránh.

### Câu 93. Lệnh `sudo` có tác dụng gì?

- A. Đổi bố cục bàn phím
- B. Tắt hệ thống
- C. Hiển thị dung lượng ổ đĩa đã dùng
- **D. Chạy một lệnh với quyền quản trị (root)** ✅

**Đáp án đúng: D** – Chạy một lệnh với quyền quản trị (root)

**Giải thích:** `sudo` ("superuser do") cho phép những người dùng được cấp phép chạy từng lệnh với quyền root, thường sau khi nhập mật khẩu của chính họ.

### Câu 94. Quyền trên tệp Linux được thiết lập riêng cho ba nhóm đối tượng nào?

- **A. Chủ sở hữu (user), nhóm (group) và người khác (others)** ✅
- B. Cục bộ, từ xa và hệ thống
- C. Quản trị viên, khách và root
- D. Đọc, ghi và thực thi

**Đáp án đúng: A** – Chủ sở hữu (user), nhóm (group) và người khác (others)

**Giải thích:** Mỗi đối tượng có các bit đọc, ghi, thực thi riêng (`ugo` trong chmod: user, group, others).

### Câu 95. Lệnh `chmod o-w file.txt` có tác dụng gì?

- **A. Gỡ quyền ghi của những người khác** ✅
- B. Gỡ quyền ghi của chủ sở hữu
- C. Thêm quyền ghi cho những người khác
- D. Cấp quyền ghi cho chủ sở hữu

**Đáp án đúng: A** – Gỡ quyền ghi của những người khác

**Giải thích:** `o` = others (người khác), `-` = gỡ bỏ, `w` = ghi.

### Câu 96. Lệnh `chmod g+r report.txt` có tác dụng gì?

- A. Đặt nhóm "r" làm chủ sở hữu
- **B. Thêm quyền đọc cho nhóm** ✅
- C. Thêm quyền đọc cho tất cả mọi người
- D. Gỡ quyền đọc của nhóm

**Đáp án đúng: B** – Thêm quyền đọc cho nhóm

**Giải thích:** `g` = group (nhóm), `+` = thêm, `r` = đọc.

### Câu 97. Quyền thực thi (x) trên một thư mục cho phép làm gì?

- A. Chạy thư mục như một chương trình
- B. Xóa thư mục
- **C. Vào thư mục (bằng `cd`) và truy cập các tệp bên trong** ✅
- D. Chỉ liệt kê các tệp ẩn

**Đáp án đúng: C** – Vào thư mục (bằng `cd`) và truy cập các tệp bên trong

**Giải thích:** Với thư mục, `r` cho phép liệt kê tên, `w` cho phép tạo hoặc xóa mục bên trong, còn `x` cho phép đi vào và truy cập.

### Câu 98. `umask` kiểm soát điều gì?

- A. Mật khẩu của người dùng
- **B. Quyền mặc định gán cho các tệp và thư mục mới được tạo** ✅
- C. Mặt nạ mạng con (subnet mask)
- D. Độ sáng màn hình

**Đáp án đúng: B** – Quyền mặc định gán cho các tệp và thư mục mới được tạo

**Giải thích:** Giá trị umask phổ biến là 022, khi đó tệp mới có quyền 644 và thư mục mới có quyền 755.

### Câu 99. Lệnh nào hiển thị quyền của một tệp?

- A. `cat -p file.txt`
- **B. `ls -l file.txt`** ✅
- C. `chmod file.txt`
- D. `perm file.txt`

**Đáp án đúng: B** – `ls -l file.txt`

**Giải thích:** Cột đầu tiên trong kết quả của `ls -l` cho biết loại tệp và quyền, ví dụ -rw-r--r--.

### Câu 100. Làm thế nào để đặt người dùng alice làm chủ sở hữu và nhóm dev làm nhóm của file.txt chỉ bằng một lệnh?

- A. `chown dev:alice file.txt`
- B. `chmod alice:dev file.txt`
- C. `chgrp alice dev file.txt`
- **D. `chown alice:dev file.txt`** ✅

**Đáp án đúng: D** – `chown alice:dev file.txt`

**Giải thích:** `chown` chấp nhận dạng `user:group`, nên đổi được cả hai cùng lúc. Lệnh này thường cần dùng `sudo`.

[↑ Về mục lục](#muc-luc)

---

<a id="users"></a>

## 6. Người dùng & Nhóm (câu 101–120)

### Câu 101. Lệnh nào hiển thị tên người dùng mà bạn đang sử dụng?

- **A. `whoami`** ✅
- B. `myname`
- C. `userid`
- D. `whois`

**Đáp án đúng: A** – `whoami`

**Giải thích:** `whoami` in ra tên người dùng hiện tại của bạn. (`whois` dùng để tra cứu thông tin đăng ký tên miền.)

### Câu 102. Tệp nào lưu thông tin cơ bản về các tài khoản người dùng, như tên đăng nhập, UID và thư mục chính?

- **A. `/etc/passwd`** ✅
- B. `/etc/users`
- C. `/home/users`
- D. `/var/accounts`

**Đáp án đúng: A** – `/etc/passwd`

**Giải thích:** Mỗi dòng trong /etc/passwd mô tả một tài khoản. Dù có tên như vậy, tệp này không còn lưu mật khẩu nữa.

### Câu 103. Trên các hệ thống Linux hiện đại, mật khẩu (dạng đã băm) của người dùng được lưu ở đâu?

- **A. `/etc/shadow`** ✅
- B. `/etc/passwd`
- C. `/root/passwords`
- D. `/etc/password`

**Đáp án đúng: A** – `/etc/shadow`

**Giải thích:** Người dùng thông thường không đọc được /etc/shadow; chỉ root và các công cụ hệ thống có đặc quyền mới đọc được, nhờ đó các bản băm mật khẩu được giữ an toàn.

### Câu 104. Lệnh nào dùng để đổi mật khẩu của người dùng?

- A. `setpw`
- **B. `passwd`** ✅
- C. `chpwd`
- D. `password`

**Đáp án đúng: B** – `passwd`

**Giải thích:** Chạy `passwd` để đổi mật khẩu của chính bạn, hoặc `sudo passwd username` để đổi mật khẩu của người khác.

### Câu 105. Lệnh nào thường được dùng để tạo tài khoản người dùng mới?

- A. `usercreate`
- B. `newuser`
- **C. `useradd`** ✅
- D. `addaccount`

**Đáp án đúng: C** – `useradd`

**Giải thích:** `sudo useradd -m alice` tạo người dùng alice kèm thư mục chính. Debian và Ubuntu còn có lệnh `adduser` thân thiện hơn.

### Câu 106. Lệnh nào dùng để xóa một tài khoản người dùng?

- **A. `userdel`** ✅
- B. `killuser`
- C. `userrm`
- D. `removeuser`

**Đáp án đúng: A** – `userdel`

**Giải thích:** `sudo userdel -r alice` xóa tài khoản; `-r` xóa luôn thư mục chính của người dùng đó.

### Câu 107. Lệnh nào thêm người dùng bob (đã có sẵn) vào nhóm docker mà không xóa bob khỏi các nhóm khác?

- A. `sudo useradd docker bob`
- B. `sudo chgrp bob docker`
- **C. `sudo usermod -aG docker bob`** ✅
- D. `sudo groupadd bob docker`

**Đáp án đúng: C** – `sudo usermod -aG docker bob`

**Giải thích:** `-G` đặt các nhóm phụ, còn `-a` (append) giúp thêm vào thay vì thay thế. Thay đổi có hiệu lực từ lần đăng nhập tiếp theo của bob.

### Câu 108. Lệnh nào tạo một nhóm mới?

- A. `newgroup`
- B. `mkgroup`
- C. `groupnew`
- **D. `groupadd`** ✅

**Đáp án đúng: D** – `groupadd`

**Giải thích:** `sudo groupadd developers` tạo một nhóm tên là developers.

### Câu 109. Lệnh nào liệt kê các nhóm mà một người dùng tham gia?

- A. `listgroups`
- **B. `groups`** ✅
- C. `whogroup`
- D. `mygroups`

**Đáp án đúng: B** – `groups`

**Giải thích:** `groups` hiển thị các nhóm của bạn; `groups alice` hiển thị các nhóm của alice.

### Câu 110. Lệnh nào hiển thị UID, GID và các nhóm của một người dùng?

- A. `userinfo`
- B. `whoami -a`
- C. `uid`
- **D. `id`** ✅

**Đáp án đúng: D** – `id`

**Giải thích:** `id` in ra kết quả dạng uid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo).

### Câu 111. UID (mã người dùng) của người dùng root là bao nhiêu?

- A. 100
- B. 1
- C. 1000
- **D. 0** ✅

**Đáp án đúng: D** – 0

**Giải thích:** Hệ thống nhận diện root nhờ UID 0, chứ không phải nhờ cái tên "root".

### Câu 112. Tệp nào lưu danh sách các nhóm trên hệ thống?

- **A. `/etc/group`** ✅
- B. `/etc/groups`
- C. `/home/groups`
- D. `/var/group`

**Đáp án đúng: A** – `/etc/group`

**Giải thích:** Mỗi dòng trong /etc/group chứa tên nhóm, GID và danh sách thành viên.

### Câu 113. Lệnh `su - alice` có tác dụng gì?

- A. Xóa người dùng alice
- **B. Chuyển sang người dùng alice với đầy đủ môi trường đăng nhập của alice** ✅
- C. Hiển thị các tệp của alice
- D. Gửi tin nhắn cho alice

**Đáp án đúng: B** – Chuyển sang người dùng alice với đầy đủ môi trường đăng nhập của alice

**Giải thích:** `su` nghĩa là "switch user" (chuyển người dùng). Dấu `-` nạp môi trường của người dùng đích như thể họ vừa đăng nhập.

### Câu 114. Lệnh nào cho biết những ai đang đăng nhập vào hệ thống?

- A. `whoami`
- B. `id`
- C. `pwd`
- **D. `who`** ✅

**Đáp án đúng: D** – `who`

**Giải thích:** `who` liệt kê những người dùng đang đăng nhập cùng terminal và thời điểm đăng nhập. `whoami` chỉ hiển thị tên của chính bạn.

### Câu 115. Lệnh nào hiển thị danh sách các lần đăng nhập gần đây?

- A. `history`
- B. `first`
- **C. `last`** ✅
- D. `logs`

**Đáp án đúng: C** – `last`

**Giải thích:** `last` đọc bản ghi đăng nhập và cho biết ai đã đăng nhập vào lúc nào. Còn `history` hiển thị các lệnh bạn đã gõ trước đó.

### Câu 116. Thư mục chính (home) của một người dùng thông thường thường nằm ở đâu?

- A. `/etc/username`
- B. `/var/username`
- **C. `/home/username`** ✅
- D. `/usr/username`

**Đáp án đúng: C** – `/home/username`

**Giải thích:** Ví dụ, người dùng alice thường có thư mục chính là /home/alice.

### Câu 117. Tệp nào quy định những người dùng nào được phép dùng sudo?

- A. `/etc/admins`
- B. `/etc/rootusers`
- **C. `/etc/sudoers`** ✅
- D. `/etc/passwd`

**Đáp án đúng: C** – `/etc/sudoers`

**Giải thích:** /etc/sudoers (cùng các tệp trong /etc/sudoers.d/) định nghĩa các quy tắc sudo. Trên Ubuntu, thành viên nhóm sudo mặc định được phép dùng sudo.

### Câu 118. Nên dùng lệnh nào để chỉnh sửa tệp sudoers một cách an toàn?

- **A. `visudo`** ✅
- B. `sudoconf`
- C. `sudo-edit`
- D. `editsudo`

**Đáp án đúng: A** – `visudo`

**Giải thích:** `visudo` kiểm tra cú pháp trước khi lưu, nên một lỗi đánh máy sẽ không khiến bạn bị khóa khỏi sudo.

### Câu 119. Trên hầu hết các bản phân phối hiện đại, tài khoản người dùng thông thường (không phải tài khoản hệ thống) bắt đầu từ UID nào?

- **A. 1000** ✅
- B. 65535
- C. 1
- D. 0

**Đáp án đúng: A** – 1000

**Giải thích:** Người dùng đầu tiên được tạo trên Ubuntu, Debian hoặc Fedora thường có UID 1000. Các số nhỏ hơn được dành cho root và các tài khoản hệ thống.

### Câu 120. Trong /etc/passwd, trường cuối cùng của mỗi dòng (ví dụ `/bin/bash`) biểu thị điều gì?

- A. Thư mục chính của người dùng
- B. Mật khẩu của người dùng
- C. Tên nhóm của người dùng
- **D. Shell đăng nhập của người dùng** ✅

**Đáp án đúng: D** – Shell đăng nhập của người dùng

**Giải thích:** Một dòng có dạng alice:x:1000:1000:Alice:/home/alice:/bin/bash. Trường cuối cùng là shell được khởi chạy khi đăng nhập.

[↑ Về mục lục](#muc-luc)

---

<a id="processes"></a>

## 7. Tiến trình & Hệ thống (câu 121–140)

### Câu 121. Lệnh nào hiển thị ảnh chụp nhanh (snapshot) các tiến trình đang chạy?

- A. `tasks`
- B. `pl`
- C. `proc`
- **D. `ps`** ✅

**Đáp án đúng: D** – `ps`

**Giải thích:** `ps aux` là dạng thường dùng để liệt kê mọi tiến trình trên hệ thống.

### Câu 122. Lệnh nào hiển thị trực tiếp, liên tục cập nhật các tiến trình và mức sử dụng tài nguyên?

- **A. `top`** ✅
- B. `live`
- C. `head`
- D. `ps`

**Đáp án đúng: A** – `top`

**Giải thích:** `top` làm mới sau mỗi vài giây và hiển thị mức sử dụng CPU, bộ nhớ. Nhấn `q` để thoát. `htop` là một lựa chọn thay thế thân thiện hơn.

### Câu 123. PID là gì?

- A. Program Installation Directory: thư mục cài đặt chương trình
- B. Partition ID: mã định danh phân vùng trên ổ đĩa
- C. Primary Internet Domain: tên miền Internet chính
- **D. Process ID: một số duy nhất dùng để nhận diện một tiến trình đang chạy** ✅

**Đáp án đúng: D** – Process ID: một số duy nhất dùng để nhận diện một tiến trình đang chạy

**Giải thích:** Mỗi tiến trình được gán một PID, và các lệnh như `kill` dùng PID này để chọn đúng tiến trình.

### Câu 124. Lệnh nào gửi tín hiệu tới một tiến trình (thường để dừng nó) dựa trên PID?

- A. `end`
- **B. `kill`** ✅
- C. `close`
- D. `stop`

**Đáp án đúng: B** – `kill`

**Giải thích:** `kill 1234` gửi tín hiệu TERM tới tiến trình 1234, yêu cầu nó kết thúc một cách "lịch sự".

### Câu 125. Lệnh `kill -9 1234` có tác dụng gì?

- A. Kết thúc 9 tiến trình
- B. Khởi động lại tiến trình 1234
- C. Tạm dừng tiến trình 1234 trong 9 giây
- **D. Buộc kết thúc ngay tiến trình 1234 (SIGKILL)** ✅

**Đáp án đúng: D** – Buộc kết thúc ngay tiến trình 1234 (SIGKILL)

**Giải thích:** Tín hiệu 9 (SIGKILL) không thể bị tiến trình bỏ qua. Chỉ dùng khi lệnh `kill` thông thường không hiệu quả.

### Câu 126. Lệnh nào có thể dừng tiến trình dựa theo tên thay vì PID?

- A. `pskill`
- B. `namekill`
- **C. `pkill`** ✅
- D. `killname`

**Đáp án đúng: C** – `pkill`

**Giải thích:** `pkill firefox` gửi tín hiệu tới mọi tiến trình có tên firefox. `killall` hoạt động tương tự.

### Câu 127. Làm thế nào để chạy một lệnh ở chế độ nền (background)?

- **A. Thêm `&` vào cuối lệnh** ✅
- B. Bắt đầu lệnh bằng `bg:`
- C. Thêm `#` vào cuối lệnh
- D. Thêm `>>` vào cuối lệnh

**Đáp án đúng: A** – Thêm `&` vào cuối lệnh

**Giải thích:** Ví dụ, `sleep 60 &` trả lại dấu nhắc lệnh ngay lập tức trong khi lệnh vẫn tiếp tục chạy.

### Câu 128. Tổ hợp phím nào ngắt (dừng) lệnh đang chạy ở tiền cảnh (foreground)?

- A. `Ctrl+V`
- **B. `Ctrl+C`** ✅
- C. `Ctrl+P`
- D. `Ctrl+A`

**Đáp án đúng: B** – `Ctrl+C`

**Giải thích:** Ctrl+C gửi tín hiệu ngắt (SIGINT), thường làm chương trình đang chạy kết thúc.

### Câu 129. Tổ hợp phím `Ctrl+Z` có tác dụng gì với một lệnh đang chạy ở tiền cảnh?

- A. Hoàn tác lệnh vừa chạy
- B. Kết thúc lệnh đó ngay lập tức
- **C. Tạm dừng lệnh đó** ✅
- D. Chuyển lệnh đó sang một terminal khác

**Đáp án đúng: C** – Tạm dừng lệnh đó

**Giải thích:** Lệnh bị tạm dừng có thể được tiếp tục bằng `fg` (tiền cảnh) hoặc `bg` (chạy nền).

### Câu 130. Lệnh nào đưa một tác vụ đang chạy nền hoặc đang tạm dừng trở lại tiền cảnh?

- **A. `fg`** ✅
- B. `front`
- C. `bg`
- D. `up`

**Đáp án đúng: A** – `fg`

**Giải thích:** `fg` tiếp tục tác vụ gần nhất ở tiền cảnh; `fg %2` tiếp tục tác vụ số 2.

### Câu 131. Lệnh nào liệt kê các tác vụ (job) được khởi chạy từ shell hiện tại?

- A. `work`
- **B. `jobs`** ✅
- C. `list`
- D. `tasks`

**Đáp án đúng: B** – `jobs`

**Giải thích:** `jobs` hiển thị các tác vụ đang chạy nền và đang tạm dừng, kèm số thứ tự như \[1\] và \[2\].

### Câu 132. Lệnh nào cho biết bộ nhớ (RAM) đã dùng và còn trống?

- A. `mem`
- **B. `free -h`** ✅
- C. `ram`
- D. `df -h`

**Đáp án đúng: B** – `free -h`

**Giải thích:** `free -h` hiển thị tổng bộ nhớ, bộ nhớ đã dùng và còn khả dụng theo đơn vị dễ đọc. Còn `df` báo cáo dung lượng ổ đĩa.

### Câu 133. Lệnh nào hiển thị dung lượng đã dùng và còn trống của các hệ thống tệp đã được gắn (mount)?

- **A. `df -h`** ✅
- B. `du -h`
- C. `disk -h`
- D. `free -h`

**Đáp án đúng: A** – `df -h`

**Giải thích:** `df` là viết tắt của "disk free". Còn `du` đo kích thước của từng tệp và thư mục cụ thể.

### Câu 134. Lệnh nào cho biết một thư mục cụ thể chiếm bao nhiêu dung lượng ổ đĩa?

- **A. `du -sh dirname`** ✅
- B. `space dirname`
- C. `df -h dirname`
- D. `free dirname`

**Đáp án đúng: A** – `du -sh dirname`

**Giải thích:** `du` nghĩa là "disk usage"; `-s` cho ra một con số tổng và `-h` hiển thị dạng dễ đọc.

### Câu 135. Lệnh nào cho biết hệ thống đã chạy được bao lâu kể từ lần khởi động gần nhất?

- A. `time`
- B. `runtime`
- C. `since`
- **D. `uptime`** ✅

**Đáp án đúng: D** – `uptime`

**Giải thích:** `uptime` cũng hiển thị số người dùng đang đăng nhập và tải trung bình (load average) của hệ thống.

### Câu 136. Trên hầu hết các bản phân phối hiện đại, chương trình nào chạy với PID 1 – tiến trình đầu tiên được nhân khởi động?

- A. cron
- B. login
- **C. systemd** ✅
- D. bash

**Đáp án đúng: C** – systemd

**Giải thích:** systemd (hoặc init truyền thống trên các hệ thống cũ) khởi động và quản lý mọi dịch vụ khác.

### Câu 137. Trên các hệ thống dùng systemd, lệnh nào dùng để khởi động, dừng và kiểm tra các dịch vụ?

- A. `servicectl`
- **B. `systemctl`** ✅
- C. `sysrun`
- D. `servctl`

**Đáp án đúng: B** – `systemctl`

**Giải thích:** Ví dụ, `sudo systemctl restart nginx` hoặc `systemctl status ssh`.

### Câu 138. Trên hệ thống systemd, lệnh nào giúp dịch vụ nginx tự động chạy mỗi khi khởi động máy?

- A. `sudo systemctl auto nginx`
- B. `sudo systemctl start nginx`
- **C. `sudo systemctl enable nginx`** ✅
- D. `sudo systemctl boot nginx`

**Đáp án đúng: C** – `sudo systemctl enable nginx`

**Giải thích:** `enable` cấu hình dịch vụ tự chạy khi khởi động, còn `start` chỉ chạy dịch vụ ngay lúc đó. `enable --now` làm cả hai việc.

### Câu 139. Trên hệ thống systemd, lệnh nào dùng để đọc nhật ký hệ thống (journal)?

- A. `showlogs`
- B. `logread`
- **C. `journalctl`** ✅
- D. `syslogview`

**Đáp án đúng: C** – `journalctl`

**Giải thích:** `journalctl -u nginx` hiển thị nhật ký của một dịch vụ, còn `journalctl -f` theo dõi các dòng nhật ký mới khi chúng xuất hiện.

### Câu 140. Lệnh nào khởi động lại máy tính?

- A. `sudo reload`
- B. `sudo restart`
- **C. `sudo reboot`** ✅
- D. `sudo again`

**Đáp án đúng: C** – `sudo reboot`

**Giải thích:** `sudo reboot` khởi động lại hệ thống. `sudo shutdown now` hoặc `sudo poweroff` sẽ tắt máy.

[↑ Về mục lục](#muc-luc)

---

<a id="packages"></a>

## 8. Quản lý gói phần mềm (câu 141–160)

### Câu 141. Debian và Ubuntu sử dụng trình quản lý gói nào?

- A. `dnf`
- B. `pacman`
- **C. `apt`** ✅
- D. `zypper`

**Đáp án đúng: C** – `apt`

**Giải thích:** APT (Advanced Package Tool) cài đặt các gói .deb trên các hệ thống dựa trên Debian.

### Câu 142. Fedora và Red Hat Enterprise Linux hiện đại sử dụng trình quản lý gói nào?

- A. `apt`
- **B. `dnf`** ✅
- C. `brew`
- D. `pacman`

**Đáp án đúng: B** – `dnf`

**Giải thích:** `dnf` đã thay thế `yum` cũ và dùng để cài đặt các gói .rpm.

### Câu 143. Arch Linux sử dụng trình quản lý gói nào?

- **A. `pacman`** ✅
- B. `yum`
- C. `apt`
- D. `emerge`

**Đáp án đúng: A** – `pacman`

**Giải thích:** `pacman` là trình quản lý gói của Arch. `emerge` thuộc về Gentoo.

### Câu 144. Trên Ubuntu, lệnh nào làm mới danh sách các gói có sẵn từ kho phần mềm?

- A. `sudo apt refresh`
- **B. `sudo apt update`** ✅
- C. `sudo apt upgrade`
- D. `sudo apt list`

**Đáp án đúng: B** – `sudo apt update`

**Giải thích:** `apt update` tải về danh sách gói mới nhất nhưng không cài đặt gì cả.

### Câu 145. Trên Ubuntu, lệnh nào cài đặt phiên bản mới hơn cho các gói đã được cài?

- A. `sudo apt newer`
- B. `sudo apt install`
- C. `sudo apt update`
- **D. `sudo apt upgrade`** ✅

**Đáp án đúng: D** – `sudo apt upgrade`

**Giải thích:** Hãy chạy `sudo apt update` trước để làm mới danh sách, sau đó chạy `sudo apt upgrade` để áp dụng các bản cập nhật.

### Câu 146. Làm thế nào để cài đặt gói htop trên Ubuntu?

- A. `sudo install htop`
- **B. `sudo apt install htop`** ✅
- C. `sudo apt get htop`
- D. `sudo apt add htop`

**Đáp án đúng: B** – `sudo apt install htop`

**Giải thích:** `apt install` tải gói cùng các gói phụ thuộc của nó về rồi cài đặt.

### Câu 147. Làm thế nào để gỡ bỏ một gói đã cài đặt trên Ubuntu?

- A. `sudo apt uninstall packagename`
- B. `sudo rm packagename`
- **C. `sudo apt remove packagename`** ✅
- D. `sudo apt delete packagename`

**Đáp án đúng: C** – `sudo apt remove packagename`

**Giải thích:** `apt remove` gỡ cài đặt gói nhưng vẫn giữ lại các tệp cấu hình hệ thống của gói đó.

### Câu 148. So với `sudo apt remove nginx`, lệnh `sudo apt purge nginx` khác ở điểm nào?

- A. Cài đặt lại gói
- B. Chỉ xóa bộ nhớ đệm tải về
- C. Chỉ xóa các tệp cấu hình
- **D. Gỡ bỏ gói và xóa luôn cả các tệp cấu hình của nó** ✅

**Đáp án đúng: D** – Gỡ bỏ gói và xóa luôn cả các tệp cấu hình của nó

**Giải thích:** Dùng `purge` khi bạn muốn gỡ bỏ hoàn toàn, sạch sẽ.

### Câu 149. Các gói của Debian và Ubuntu có phần mở rộng (đuôi tệp) là gì?

- **A. `.deb`** ✅
- B. `.exe`
- C. `.rpm`
- D. `.pkg`

**Đáp án đúng: A** – `.deb`

**Giải thích:** Các hệ thống dựa trên Debian dùng tệp .deb; các hệ thống dựa trên Red Hat dùng tệp .rpm.

### Câu 150. Các gói của Red Hat, Fedora và openSUSE có phần mở rộng là gì?

- A. `.deb`
- B. `.msi`
- **C. `.rpm`** ✅
- D. `.apk`

**Đáp án đúng: C** – `.rpm`

**Giải thích:** RPM ban đầu là viết tắt của "Red Hat Package Manager".

### Câu 151. Lệnh cấp thấp nào dùng để cài đặt một tệp .deb có sẵn trên máy?

- A. `sudo deb install package.deb`
- **B. `sudo dpkg -i package.deb`** ✅
- C. `sudo apt-file package.deb`
- D. `sudo rpm -i package.deb`

**Đáp án đúng: B** – `sudo dpkg -i package.deb`

**Giải thích:** `dpkg` là công cụ quản lý gói cấp thấp của Debian. Lệnh `sudo apt install ./package.deb` cũng dùng được và còn tự xử lý các gói phụ thuộc.

### Câu 152. Trên Ubuntu, lệnh nào tìm kiếm gói trong kho phần mềm theo từ khóa?

- A. `apt look keyword`
- B. `apt find keyword`
- **C. `apt search keyword`** ✅
- D. `apt grep keyword`

**Đáp án đúng: C** – `apt search keyword`

**Giải thích:** `apt search` liệt kê các gói có tên hoặc mô tả phù hợp. `apt show name` hiển thị thông tin chi tiết về một gói.

### Câu 153. Lệnh nào cài đặt một gói trên Fedora?

- A. `sudo pacman -S packagename`
- B. `sudo fedora install packagename`
- **C. `sudo dnf install packagename`** ✅
- D. `sudo apt install packagename`

**Đáp án đúng: C** – `sudo dnf install packagename`

**Giải thích:** Fedora dùng `dnf`. `apt` dành cho Debian/Ubuntu, còn `pacman` dành cho Arch Linux.

### Câu 154. Lệnh `sudo apt autoremove` có tác dụng gì?

- A. Gỡ bỏ mọi gói đã cài đặt
- B. Xóa các tệp trong /tmp
- C. Gỡ cài đặt chính chương trình apt
- **D. Gỡ bỏ các gói từng được cài làm gói phụ thuộc nhưng nay không còn cần thiết** ✅

**Đáp án đúng: D** – Gỡ bỏ các gói từng được cài làm gói phụ thuộc nhưng nay không còn cần thiết

**Giải thích:** Khi bạn gỡ một chương trình, các gói phụ thuộc của nó thường vẫn còn lại; `autoremove` sẽ dọn dẹp chúng.

### Câu 155. Trong quản lý gói Linux, "kho phần mềm" (repository) là gì?

- A. Bản sao lưu của nhân Linux
- B. Danh sách người dùng của hệ thống
- C. Thư mục chứa tài liệu của người dùng
- **D. Máy chủ hoặc nơi lưu trữ chứa các gói để bạn tải về và cài đặt** ✅

**Đáp án đúng: D** – Máy chủ hoặc nơi lưu trữ chứa các gói để bạn tải về và cài đặt

**Giải thích:** Trình quản lý gói tải phần mềm từ các kho tin cậy đã được cấu hình trên hệ thống của bạn.

### Câu 156. Trên Debian và Ubuntu, các nguồn kho phần mềm của APT được cấu hình ở đâu?

- **A. Trong `/etc/apt/sources.list` và các tệp bên trong `/etc/apt/sources.list.d/`** ✅
- B. Trong `/etc/repos`
- C. Trong `/usr/apt/list`
- D. Trong `/var/apt/repos`

**Đáp án đúng: A** – Trong `/etc/apt/sources.list` và các tệp bên trong `/etc/apt/sources.list.d/`

**Giải thích:** Các phiên bản Ubuntu mới lưu nguồn chính trong tệp /etc/apt/sources.list.d/ubuntu.sources.

### Câu 157. "Gói phụ thuộc" (dependency) là gì?

- A. Một gói đã lỗi thời
- **B. Một gói khác cần được cài đặt để chương trình có thể hoạt động** ✅
- C. Một gói bị hỏng
- D. Một gói chỉ chạy được trên máy chủ

**Đáp án đúng: B** – Một gói khác cần được cài đặt để chương trình có thể hoạt động

**Giải thích:** Các trình quản lý gói như APT và DNF tự động cài đặt những gói phụ thuộc cần thiết.

### Câu 158. Lệnh nào liệt kê tất cả các gói đã cài đặt trên hệ thống Debian hoặc Ubuntu?

- A. `apt get-list`
- B. `dpkg -i`
- **C. `dpkg -l`** ✅
- D. `ls /packages`

**Đáp án đúng: C** – `dpkg -l`

**Giải thích:** `dpkg -l` liệt kê các gói đã cài đặt. `apt list --installed` cho kết quả tương tự.

### Câu 159. Snap và Flatpak là gì?

- A. Các trình soạn thảo văn bản trên Linux
- B. Các công cụ giám sát mạng
- **C. Các định dạng gói đa nền tảng, đóng gói ứng dụng cùng với các thành phần phụ thuộc của nó** ✅
- D. Các hệ thống tệp

**Đáp án đúng: C** – Các định dạng gói đa nền tảng, đóng gói ứng dụng cùng với các thành phần phụ thuộc của nó

**Giải thích:** Gói Snap và Flatpak chạy được trên nhiều bản phân phối khác nhau vì chúng mang theo những gì cần thiết.

### Câu 160. Lệnh nào cài đặt một gói trên Arch Linux?

- A. `sudo arch install packagename`
- **B. `sudo pacman -S packagename`** ✅
- C. `sudo pacman -R packagename`
- D. `sudo pacman -Q packagename`

**Đáp án đúng: B** – `sudo pacman -S packagename`

**Giải thích:** `-S` đồng bộ (cài đặt) một gói, `-R` gỡ bỏ gói và `-Q` truy vấn các gói đã cài.

[↑ Về mục lục](#muc-luc)

---

<a id="networking"></a>

## 9. Mạng (câu 161–180)

### Câu 161. Lệnh nào kiểm tra xem có thể kết nối tới một máy ở xa qua mạng hay không?

- A. `check`
- B. `reach`
- **C. `ping`** ✅
- D. `hello`

**Đáp án đúng: C** – `ping`

**Giải thích:** `ping google.com` gửi các gói tin kiểm tra nhỏ và cho biết có nhận được phản hồi không, cũng như mất bao lâu.

### Câu 162. Lệnh hiện đại nào hiển thị địa chỉ IP của các giao diện mạng?

- A. `ipconfig`
- B. `showip`
- **C. `ip addr`** ✅
- D. `netaddr`

**Đáp án đúng: C** – `ip addr`

**Giải thích:** `ip addr` (hoặc `ip a`) thay thế cho lệnh cũ `ifconfig`. `ipconfig` là lệnh tương đương trên Windows.

### Câu 163. Địa chỉ IP nào là địa chỉ loopback, luôn trỏ về chính máy tính của bạn?

- A. 192.168.0.1
- B. 8.8.8.8
- C. 255.255.255.255
- **D. 127.0.0.1** ✅

**Đáp án đúng: D** – 127.0.0.1

**Giải thích:** 127.0.0.1 (và tên localhost) trỏ về chính máy cục bộ.

### Câu 164. Tên máy (hostname) nào luôn chỉ chính máy tính của bạn?

- A. home
- B. self
- C. myhost
- **D. localhost** ✅

**Đáp án đúng: D** – localhost

**Giải thích:** `localhost` được phân giải thành địa chỉ loopback 127.0.0.1 (hoặc ::1 với IPv6).

### Câu 165. Lệnh nào cho phép bạn đăng nhập an toàn vào một máy tính từ xa?

- A. `remote user@host`
- B. `login user@host`
- C. `ftp user@host`
- **D. `ssh user@host`** ✅

**Đáp án đúng: D** – `ssh user@host`

**Giải thích:** SSH (Secure Shell) mã hóa toàn bộ phiên làm việc, kể cả mật khẩu của bạn.

### Câu 166. Cổng mặc định của SSH là bao nhiêu?

- **A. 22** ✅
- B. 21
- C. 443
- D. 80

**Đáp án đúng: A** – 22

**Giải thích:** SSH lắng nghe trên cổng TCP 22 theo mặc định. Cổng 21 được FTP sử dụng.

### Câu 167. Cổng mặc định của HTTP là bao nhiêu?

- **A. 80** ✅
- B. 443
- C. 22
- D. 25

**Đáp án đúng: A** – 80

**Giải thích:** Máy chủ web phục vụ HTTP thông thường qua cổng 80. Cổng 25 được dùng cho email SMTP.

### Câu 168. Cổng mặc định của HTTPS là bao nhiêu?

- A. 22
- B. 8080
- C. 80
- **D. 443** ✅

**Đáp án đúng: D** – 443

**Giải thích:** HTTPS (HTTP qua TLS) dùng cổng 443 theo mặc định.

### Câu 169. Lệnh nào sao chép tệp một cách an toàn giữa các máy tính thông qua SSH?

- A. `cp -r`
- **B. `scp`** ✅
- C. `mv --ssh`
- D. `ftp`

**Đáp án đúng: B** – `scp`

**Giải thích:** Ví dụ, `scp report.pdf alice@server:/home/alice/`. `rsync` cũng là một lựa chọn phổ biến.

### Câu 170. Lệnh nào tải một tệp về từ một địa chỉ URL?

- **A. `wget`** ✅
- B. `get`
- C. `pull`
- D. `fetchurl`

**Đáp án đúng: A** – `wget`

**Giải thích:** `wget https://example.com/file.zip` lưu tệp vào thư mục hiện tại. `curl -O` cũng làm được điều tương tự.

### Câu 171. Tệp nào ánh xạ tên máy sang địa chỉ IP ngay trên máy cục bộ, trước khi hỏi DNS?

- A. `/etc/hostname`
- **B. `/etc/hosts`** ✅
- C. `/etc/dns.conf`
- D. `/etc/ips`

**Đáp án đúng: B** – `/etc/hosts`

**Giải thích:** Các dòng như `127.0.0.1 localhost` nằm trong /etc/hosts. Còn /etc/hostname chỉ chứa tên của chính máy tính này.

### Câu 172. Theo truyền thống, tệp nào liệt kê các máy chủ DNS mà hệ thống sử dụng?

- A. `/etc/hosts.allow`
- **B. `/etc/resolv.conf`** ✅
- C. `/etc/network.conf`
- D. `/etc/dns`

**Đáp án đúng: B** – `/etc/resolv.conf`

**Giải thích:** /etc/resolv.conf chứa các dòng `nameserver`. Trên nhiều hệ thống hiện đại, tệp này được quản lý tự động.

### Câu 173. Lệnh nào hiển thị tên máy (hostname) của hệ thống?

- **A. `hostname`** ✅
- B. `whoami`
- C. `myname`
- D. `hostinfo`

**Đáp án đúng: A** – `hostname`

**Giải thích:** `hostname` in ra tên của máy tính. Trên hệ thống systemd, `hostnamectl` có thể xem và thay đổi tên máy.

### Câu 174. Lệnh hiện đại nào liệt kê các cổng đang lắng nghe và các kết nối mạng đang mở?

- A. `ports -l`
- **B. `ss -tuln`** ✅
- C. `ip ports`
- D. `listen -a`

**Đáp án đúng: B** – `ss -tuln`

**Giải thích:** `ss` thay thế cho lệnh cũ `netstat`. `-t` là TCP, `-u` là UDP, `-l` là đang lắng nghe và `-n` hiển thị dạng số.

### Câu 175. Lệnh nào tra cứu địa chỉ IP của một tên miền?

- A. `iplookup example.com`
- B. `getip example.com`
- **C. `nslookup example.com`** ✅
- D. `domain example.com`

**Đáp án đúng: C** – `nslookup example.com`

**Giải thích:** `nslookup`, `dig` và `host` gửi truy vấn tới máy chủ DNS để phân giải tên miền thành địa chỉ IP.

### Câu 176. Lệnh nào hiển thị đường đi (từng chặng) mà gói tin đi qua để tới một máy?

- A. `hops`
- B. `pathping`
- **C. `traceroute`** ✅
- D. `netpath`

**Đáp án đúng: C** – `traceroute`

**Giải thích:** `traceroute example.com` liệt kê từng router trên đường đi. `pathping` là công cụ của Windows.

### Câu 177. Lệnh nào hiển thị bảng định tuyến (routing table) của hệ thống?

- A. `routes`
- B. `showroute`
- C. `ip addr`
- **D. `ip route`** ✅

**Đáp án đúng: D** – `ip route`

**Giải thích:** `ip route` cho biết lưu lượng được gửi đi đâu, bao gồm cả cổng mặc định (default gateway). `ip addr` hiển thị địa chỉ của các giao diện mạng.

### Câu 178. Lệnh nào tạo một cặp khóa SSH mới?

- A. `ssh --create-key`
- **B. `ssh-keygen`** ✅
- C. `ssh-newkey`
- D. `keygen-ssh`

**Đáp án đúng: B** – `ssh-keygen`

**Giải thích:** `ssh-keygen` tạo một khóa riêng tư (private key) và một khóa công khai (.pub) tương ứng mà bạn có thể sao chép lên máy chủ.

### Câu 179. Công cụ dòng lệnh nào truyền dữ liệu tới/từ URL và thường được dùng để kiểm thử API web?

- A. `ping`
- **B. `curl`** ✅
- C. `traceroute`
- D. `ssh`

**Đáp án đúng: B** – `curl`

**Giải thích:** Ví dụ, `curl https://api.example.com/users` in ra phản hồi của máy chủ.

### Câu 180. Công cụ tường lửa đơn giản nào thường được dùng trên Ubuntu?

- **A. `ufw`** ✅
- B. `safenet`
- C. `fwall`
- D. `blockit`

**Đáp án đúng: A** – `ufw`

**Giải thích:** UFW nghĩa là "Uncomplicated Firewall" (tường lửa không phức tạp). Ví dụ: `sudo ufw allow 22` và `sudo ufw enable`.

[↑ Về mục lục](#muc-luc)

---

<a id="shell"></a>

## 10. Shell & Viết script (câu 181–200)

### Câu 181. Ký hiệu pipe `|` có tác dụng gì?

- **A. Chuyển kết quả đầu ra của một lệnh thành dữ liệu đầu vào cho lệnh tiếp theo** ✅
- B. Lưu kết quả đầu ra vào một tệp
- C. Biến phần còn lại của dòng thành chú thích
- D. Chạy cùng lúc hai lệnh không liên quan

**Đáp án đúng: A** – Chuyển kết quả đầu ra của một lệnh thành dữ liệu đầu vào cho lệnh tiếp theo

**Giải thích:** Ví dụ, `ls | wc -l` đếm số tệp trong một thư mục.

### Câu 182. Trong lệnh `ls > files.txt`, ký hiệu `>` có tác dụng gì?

- A. Nối thêm kết quả vào cuối files.txt
- **B. Ghi kết quả vào files.txt, thay thế nội dung cũ của tệp** ✅
- C. So sánh kết quả với files.txt
- D. Đọc dữ liệu đầu vào từ files.txt

**Đáp án đúng: B** – Ghi kết quả vào files.txt, thay thế nội dung cũ của tệp

**Giải thích:** `>` chuyển hướng đầu ra chuẩn vào một tệp và ghi đè lên tệp đó. Dùng `>>` nếu muốn ghi nối thêm.

### Câu 183. Trong lệnh `echo "done" >> log.txt`, ký hiệu `>>` có tác dụng gì?

- **A. Nối thêm kết quả vào cuối log.txt** ✅
- B. Chạy lệnh hai lần
- C. Chỉ chuyển hướng các thông báo lỗi
- D. Ghi đè lên log.txt

**Đáp án đúng: A** – Nối thêm kết quả vào cuối log.txt

**Giải thích:** `>>` giữ nguyên nội dung hiện có của tệp và thêm kết quả mới vào cuối.

### Câu 184. `2>` chuyển hướng luồng dữ liệu nào?

- A. Chỉ đầu ra của lệnh thứ hai
- **B. Đầu ra lỗi (standard error)** ✅
- C. Đầu vào (standard input)
- D. Đầu ra thông thường (standard output)

**Đáp án đúng: B** – Đầu ra lỗi (standard error)

**Giải thích:** Luồng 1 là stdout và luồng 2 là stderr, vì vậy `command 2> errors.txt` chỉ lưu các thông báo lỗi.

### Câu 185. `/dev/null` là gì?

- **A. Một tệp đặc biệt loại bỏ mọi dữ liệu được ghi vào nó** ✅
- B. Ổ cứng đầu tiên
- C. Một tài khoản người dùng không có mật khẩu
- D. Một thư mục chứa các tệp đã bị xóa

**Đáp án đúng: A** – Một tệp đặc biệt loại bỏ mọi dữ liệu được ghi vào nó

**Giải thích:** `command > /dev/null` ẩn đầu ra của lệnh, giống như một "hố đen".

### Câu 186. Làm thế nào để in ra giá trị của biến có tên NAME?

- A. `echo NAME`
- B. `echo @NAME`
- **C. `echo $NAME`** ✅
- D. `echo %NAME%`

**Đáp án đúng: C** – `echo $NAME`

**Giải thích:** Dấu `$` yêu cầu shell thay tên biến bằng giá trị của nó. `%NAME%` là cú pháp của Windows.

### Câu 187. Biến môi trường nào chứa danh sách các thư mục mà shell tìm kiếm lệnh?

- A. `HOME`
- **B. `PATH`** ✅
- C. `SHELL`
- D. `USER`

**Đáp án đúng: B** – `PATH`

**Giải thích:** Các thư mục trong PATH được phân tách bằng dấu hai chấm, ví dụ /usr/local/bin:/usr/bin:/bin.

### Câu 188. Dòng đầu tiên `#!/bin/bash` trong một script có tác dụng gì?

- **A. Cho hệ thống biết cần chạy script bằng trình thông dịch Bash** ✅
- B. Không có tác dụng gì; nó chỉ là một dòng chú thích
- C. Xóa các phiên bản cũ của script
- D. Biến script thành tệp ẩn

**Đáp án đúng: A** – Cho hệ thống biết cần chạy script bằng trình thông dịch Bash

**Giải thích:** Dòng này được gọi là "shebang". Nó chọn chương trình sẽ thông dịch phần còn lại của tệp.

### Câu 189. Làm thế nào để chạy script backup.sh (đã có quyền thực thi) nằm trong thư mục hiện tại?

- A. `open backup.sh`
- B. `run backup.sh`
- **C. `./backup.sh`** ✅
- D. `backup.sh.exe`

**Đáp án đúng: C** – `./backup.sh`

**Giải thích:** `./` báo cho shell tìm trong thư mục hiện tại – vốn thường không nằm trong PATH. Lệnh `bash backup.sh` cũng chạy được.

### Câu 190. Lệnh nào hiển thị các lệnh bạn đã chạy trước đó trong shell?

- A. `last`
- B. `previous`
- C. `recent`
- **D. `history`** ✅

**Đáp án đúng: D** – `history`

**Giải thích:** `history` liệt kê các lệnh đã chạy kèm số thứ tự. `!42` chạy lại lệnh số 42, còn phím mũi tên Lên gọi lại các lệnh gần đây.

### Câu 191. Lệnh `alias ll='ls -l'` có tác dụng gì?

- A. Đổi tên chương trình ls thành ll
- B. Xóa lệnh ll
- **C. Tạo lối tắt để khi gõ `ll` thì lệnh `ls -l` được chạy** ✅
- D. Liệt kê tất cả các alias hiện có

**Đáp án đúng: C** – Tạo lối tắt để khi gõ `ll` thì lệnh `ls -l` được chạy

**Giải thích:** Alias giúp gõ lệnh nhanh hơn. Hãy đặt chúng trong \~/.bashrc để giữ lại cho các phiên làm việc sau.

### Câu 192. Tệp nào thường được dùng để tùy biến Bash cho một người dùng, ví dụ để thêm alias?

- A. `/bin/bash`
- B. `/etc/passwd`
- C. `~/.config.txt`
- **D. `~/.bashrc`** ✅

**Đáp án đúng: D** – `~/.bashrc`

**Giải thích:** \~/.bashrc được chạy mỗi khi một shell Bash tương tác mới khởi động. Chạy `source ~/.bashrc` để áp dụng thay đổi ngay lập tức.

### Câu 193. Lệnh nào giúp một biến của shell có thể được dùng bởi các chương trình khởi chạy từ shell đó?

- A. `share`
- **B. `export`** ✅
- C. `global`
- D. `public`

**Đáp án đúng: B** – `export`

**Giải thích:** Ví dụ, `export EDITOR=nano` giúp các tiến trình con nhìn thấy biến EDITOR.

### Câu 194. Trong Bash, biến đặc biệt `$?` chứa giá trị gì?

- A. Số lượng tham số truyền vào script
- **B. Mã thoát (exit status) của lệnh vừa chạy (0 nghĩa là thành công)** ✅
- C. PID của tiến trình hiện tại
- D. Tên của người dùng hiện tại

**Đáp án đúng: B** – Mã thoát (exit status) của lệnh vừa chạy (0 nghĩa là thành công)

**Giải thích:** Giá trị khác 0 thường có nghĩa là lệnh bị lỗi. `$$` là PID của shell và `$#` là số lượng tham số.

### Câu 195. Lệnh nào tạo tệp nén backup.tar.gz từ thư mục docs?

- A. `tar -xzf backup.tar.gz docs`
- B. `gzip -r docs backup.tar.gz`
- **C. `tar -czf backup.tar.gz docs`** ✅
- D. `zip -x backup.tar.gz docs`

**Đáp án đúng: C** – `tar -czf backup.tar.gz docs`

**Giải thích:** `-c` tạo mới (create), `-z` nén bằng gzip, `-f` chỉ định tên tệp lưu trữ.

### Câu 196. Lệnh nào giải nén tệp archive.tar.gz?

- A. `tar -czf archive.tar.gz`
- **B. `tar -xzf archive.tar.gz`** ✅
- C. `tar -tzf archive.tar.gz`
- D. `untar archive.tar.gz`

**Đáp án đúng: B** – `tar -xzf archive.tar.gz`

**Giải thích:** `-x` nghĩa là giải nén (extract). `-t` chỉ liệt kê nội dung mà không giải nén.

### Câu 197. Lệnh nào nén một tệp tên report thành report.gz?

- A. `compress -gz report`
- B. `tar report`
- C. `gunzip report`
- **D. `gzip report`** ✅

**Đáp án đúng: D** – `gzip report`

**Giải thích:** `gzip` thay tệp gốc bằng phiên bản nén .gz. Lệnh `gunzip report.gz` khôi phục lại tệp ban đầu.

### Câu 198. Cron được dùng để làm gì?

- **A. Lên lịch để các lệnh tự động chạy vào thời điểm định sẵn** ✅
- B. Giám sát lưu lượng mạng
- C. Nén tệp
- D. Soạn thảo tệp văn bản

**Đáp án đúng: A** – Lên lịch để các lệnh tự động chạy vào thời điểm định sẵn

**Giải thích:** Cron chạy các tác vụ đã lên lịch, ví dụ một script sao lưu vào 2 giờ sáng mỗi đêm.

### Câu 199. Lệnh nào dùng để chỉnh sửa các tác vụ cron đã lên lịch của người dùng hiện tại?

- A. `schedule -e`
- **B. `crontab -e`** ✅
- C. `crontab -l`
- D. `cron --edit`

**Đáp án đúng: B** – `crontab -e`

**Giải thích:** `crontab -e` mở bảng cron của bạn trong trình soạn thảo. `crontab -l` chỉ liệt kê nội dung.

### Câu 200. Trong `cmd1 && cmd2`, khi nào cmd2 được chạy?

- A. Cùng lúc với cmd1
- B. Chỉ khi cmd1 thất bại
- **C. Chỉ khi cmd1 chạy thành công** ✅
- D. Không bao giờ; && là một dòng chú thích

**Đáp án đúng: C** – Chỉ khi cmd1 chạy thành công

**Giải thích:** `&&` nối các lệnh khi lệnh trước thành công, ví dụ `sudo apt update && sudo apt upgrade`. `||` chỉ chạy lệnh tiếp theo khi lệnh trước thất bại.

[↑ Về mục lục](#muc-luc)

---

<a id="bang-dap-an"></a>

## Bảng đáp án nhanh

| Chủ đề | Đáp án |
|--------|--------|
| Kiến thức cơ bản | 1-A · 2-D · 3-D · 4-D · 5-B · 6-B · 7-D · 8-C · 9-D · 10-A · 11-A · 12-D · 13-D · 14-A · 15-C · 16-C · 17-A · 18-D · 19-A · 20-D |
| Hệ thống tệp & Điều hướng | 21-C · 22-B · 23-B · 24-B · 25-D · 26-C · 27-A · 28-A · 29-A · 30-B · 31-D · 32-C · 33-D · 34-C · 35-B · 36-D · 37-A · 38-D · 39-C · 40-B |
| Quản lý tệp | 41-A · 42-B · 43-C · 44-D · 45-A · 46-D · 47-D · 48-D · 49-A · 50-A · 51-A · 52-B · 53-B · 54-B · 55-B · 56-C · 57-D · 58-B · 59-B · 60-A |
| Xem & Soạn thảo văn bản | 61-D · 62-C · 63-B · 64-D · 65-C · 66-C · 67-A · 68-D · 69-C · 70-C · 71-C · 72-B · 73-A · 74-A · 75-B · 76-C · 77-A · 78-B · 79-D · 80-C |
| Phân quyền | 81-D · 82-D · 83-B · 84-D · 85-A · 86-C · 87-C · 88-C · 89-C · 90-D · 91-A · 92-A · 93-D · 94-A · 95-A · 96-B · 97-C · 98-B · 99-B · 100-D |
| Người dùng & Nhóm | 101-A · 102-A · 103-A · 104-B · 105-C · 106-A · 107-C · 108-D · 109-B · 110-D · 111-D · 112-A · 113-B · 114-D · 115-C · 116-C · 117-C · 118-A · 119-A · 120-D |
| Tiến trình & Hệ thống | 121-D · 122-A · 123-D · 124-B · 125-D · 126-C · 127-A · 128-B · 129-C · 130-A · 131-B · 132-B · 133-A · 134-A · 135-D · 136-C · 137-B · 138-C · 139-C · 140-C |
| Quản lý gói phần mềm | 141-C · 142-B · 143-A · 144-B · 145-D · 146-B · 147-C · 148-D · 149-A · 150-C · 151-B · 152-C · 153-C · 154-D · 155-D · 156-A · 157-B · 158-C · 159-C · 160-B |
| Mạng | 161-C · 162-C · 163-D · 164-D · 165-D · 166-A · 167-A · 168-D · 169-B · 170-A · 171-B · 172-B · 173-A · 174-B · 175-C · 176-C · 177-D · 178-B · 179-B · 180-A |
| Shell & Viết script | 181-A · 182-B · 183-A · 184-B · 185-A · 186-C · 187-B · 188-A · 189-C · 190-D · 191-C · 192-D · 193-B · 194-B · 195-C · 196-B · 197-D · 198-A · 199-B · 200-C |

[↑ Về mục lục](#muc-luc)
