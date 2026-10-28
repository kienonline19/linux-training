# Đề trắc nghiệm Linux – 200 câu hỏi

Mỗi câu hỏi có 4 phương án A–D và chỉ có **một** đáp án đúng.
Làm xong, hãy đối chiếu với tệp [dap-an.md](dap-an.md) (cùng số thứ tự câu hỏi).

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

<a id="basics"></a>

## 1. Kiến thức cơ bản (câu 1–20)

### Câu 1. Ai là người tạo ra nhân (kernel) Linux?

- A. Linus Torvalds
- B. Richard Stallman
- C. Dennis Ritchie
- D. Steve Jobs

### Câu 2. Phiên bản đầu tiên của nhân Linux được phát hành vào năm nào?

- A. 1985
- B. 2001
- C. 1995
- D. 1991

### Câu 3. Nhân (kernel) Linux là gì?

- A. Một môi trường đồ họa cho máy tính để bàn
- B. Một trình duyệt web
- C. Một trình soạn thảo văn bản
- D. Phần lõi của hệ điều hành, quản lý phần cứng, bộ nhớ và các tiến trình

### Câu 4. Nhân Linux được phân phối theo giấy phép nào?

- A. Một giấy phép độc quyền, phải trả phí
- B. Giấy phép Apache 2.0
- C. Giấy phép MIT
- D. Giấy phép Công cộng GNU phiên bản 2 (GPLv2)

### Câu 5. Một bản phân phối Linux ("distro") là gì?

- A. Một phiên bản của nhân Windows
- B. Một hệ điều hành hoàn chỉnh gồm nhân Linux cùng các công cụ, phần mềm và trình quản lý gói
- C. Một lệnh Linux đơn lẻ
- D. Một loại phần cứng máy tính

### Câu 6. Đâu là một bản phân phối Linux?

- A. Windows 11
- B. Ubuntu
- C. iOS
- D. macOS

### Câu 7. Linh vật chính thức của Linux là gì?

- A. Chú cáo tên Foxy
- B. Chú chuột túi má (gopher) tên Go
- C. Chú cá voi tên Moby
- D. Chú chim cánh cụt tên Tux

### Câu 8. Shell trong Linux là gì?

- A. Một trình điều khiển phần cứng (driver)
- B. Lớp vỏ kim loại bên ngoài máy tính
- C. Chương trình đọc các lệnh bạn gõ và yêu cầu hệ điều hành thực thi chúng
- D. Một loại hệ thống tệp

### Câu 9. Shell nào là shell mặc định trên hầu hết các bản phân phối Linux?

- A. Command Prompt (cmd.exe)
- B. PowerShell
- C. Finder
- D. Bash

### Câu 10. "Bash" là viết tắt của cụm từ nào?

- A. Bourne Again SHell
- B. Basic Shell
- C. Binary Access Shell
- D. Background Automated Shell

### Câu 11. Tài khoản người dùng nào có toàn quyền quản trị hệ thống Linux?

- A. root
- B. guest
- C. owner
- D. admin

### Câu 12. Điểm khác biệt chính giữa CLI và GUI là gì?

- A. GUI luôn nhanh hơn CLI
- B. CLI chỉ dùng được trên máy chủ
- C. Hai loại này không có gì khác nhau
- D. CLI dùng các lệnh gõ bằng văn bản, còn GUI dùng cửa sổ, biểu tượng và chuột

### Câu 13. Đâu là một môi trường máy tính để bàn (desktop environment) phổ biến trên Linux?

- A. Explorer
- B. Metro
- C. Aqua
- D. GNOME

### Câu 14. Linux là phần mềm "mã nguồn mở". Điều đó có nghĩa là gì?

- A. Mã nguồn của nó được công khai để mọi người xem, chỉnh sửa và chia sẻ
- B. Nó không có tính năng bảo mật
- C. Nó chỉ được cung cấp dưới dạng bản dùng thử miễn phí
- D. Nó chỉ chạy được trên phần cứng mở

### Câu 15. Ubuntu được xây dựng dựa trên bản phân phối Linux nào?

- A. Slackware
- B. Fedora
- C. Debian
- D. Arch Linux

### Câu 16. Nhấn phím Tab khi đang gõ lệnh trong Bash có tác dụng gì?

- A. Thụt lề lệnh vào bốn dấu cách
- B. Chạy lệnh ngay lập tức
- C. Tự động hoàn thành tên lệnh và tên tệp
- D. Mở một tab terminal mới

### Câu 17. Công ty nào phát triển và hỗ trợ Ubuntu?

- A. Canonical
- B. SUSE
- C. Red Hat
- D. Google

### Câu 18. Tên tệp trong Linux phân biệt chữ hoa và chữ thường. Điều đó có nghĩa là gì?

- A. Có thể gõ lệnh bằng chữ hoa hay chữ thường đều được
- B. Tệp phải được lưu trong các thư mục gọi là "case"
- C. Tên tệp chỉ được chứa chữ thường
- D. `File.txt` và `file.txt` được coi là hai tệp khác nhau

### Câu 19. Lệnh nào mở trang hướng dẫn sử dụng (manual) của một lệnh khác, ví dụ `ls`?

- A. `man ls`
- B. `help-me ls`
- C. `doc ls`
- D. `guide ls`

### Câu 20. Lệnh nào hiển thị phiên bản nhân Linux đang chạy?

- A. `kernel --version`
- B. `linux -v`
- C. `version`
- D. `uname -r`

[↑ Về mục lục](#muc-luc)

---

<a id="navigation"></a>

## 2. Hệ thống tệp & Điều hướng (câu 21–40)

### Câu 21. Lệnh nào in ra thư mục làm việc hiện tại?

- A. `here`
- B. `where`
- C. `pwd`
- D. `cwd`

### Câu 22. Lệnh nào liệt kê các tệp trong một thư mục?

- A. `cat`
- B. `ls`
- C. `show`
- D. `list`

### Câu 23. Lệnh `cd ..` có tác dụng gì?

- A. Liệt kê các tệp ẩn
- B. Di chuyển lên một cấp, tới thư mục cha
- C. Di chuyển tới thư mục chính (home) của bạn
- D. Di chuyển tới thư mục gốc

### Câu 24. Lệnh `cd ~` có tác dụng gì?

- A. Chuyển tới thư mục gốc
- B. Chuyển tới thư mục chính (home) của bạn
- C. Không làm gì cả
- D. Chuyển về thư mục trước đó

### Câu 25. Lệnh `cd -` có tác dụng gì?

- A. Di chuyển tới thư mục cha
- B. Xóa thư mục hiện tại
- C. Di chuyển tới thư mục gốc
- D. Quay lại thư mục bạn vừa ở trước đó

### Câu 26. Thư mục `/` đại diện cho điều gì?

- A. Thư mục chính của người dùng hiện tại
- B. Thư mục thùng rác
- C. Gốc (đỉnh) của toàn bộ hệ thống tệp
- D. Thư mục hiện tại

### Câu 27. Trong một đường dẫn, dấu chấm đơn `.` chỉ điều gì?

- A. Thư mục hiện tại
- B. Thư mục gốc
- C. Thư mục chính (home)
- D. Thư mục cha

### Câu 28. Tùy chọn nào giúp `ls` hiển thị cả các tệp ẩn?

- A. `ls -a`
- B. `ls -h`
- C. `ls -r`
- D. `ls -s`

### Câu 29. Tệp ẩn trong Linux được nhận biết như thế nào?

- A. Tên của chúng bắt đầu bằng dấu chấm, ví dụ `.bashrc`
- B. Chúng không có quyền truy cập nào
- C. Chúng có phần mở rộng .hidden
- D. Chúng được lưu trong thư mục /hidden

### Câu 30. Lệnh `ls -l` hiển thị gì?

- A. Chỉ tệp cuối cùng trong thư mục
- B. Danh sách chi tiết gồm quyền, chủ sở hữu, kích thước và ngày sửa đổi
- C. Tất cả các tệp trên một dòng
- D. Chỉ các liên kết mềm (symbolic link)

### Câu 31. So với `ls -l`, lệnh `ls -lh` bổ sung điều gì?

- A. Chỉ hiển thị các tệp lớn nhất
- B. Hiển thị các tệp theo thứ tự ngược lại
- C. Hiển thị các tệp ẩn
- D. Hiển thị kích thước tệp theo đơn vị dễ đọc như K, M, G

### Câu 32. Thư mục nào chứa thư mục chính (home) của những người dùng thông thường?

- A. `/root`
- B. `/users`
- C. `/home`
- D. `/usr`

### Câu 33. Thư mục nào chủ yếu lưu các tệp cấu hình của toàn hệ thống?

- A. `/tmp`
- B. `/var`
- C. `/bin`
- D. `/etc`

### Câu 34. Thư mục nào chứa dữ liệu thay đổi thường xuyên, chẳng hạn như tệp nhật ký (log)?

- A. `/etc`
- B. `/boot`
- C. `/var`
- D. `/opt`

### Câu 35. Thư mục nào được dùng cho các tệp tạm thời?

- A. `/swap`
- B. `/tmp`
- C. `/temp`
- D. `/trash`

### Câu 36. Thư mục chính (home) của người dùng root là gì?

- A. `/admin`
- B. `/`
- C. `/home/root`
- D. `/root`

### Câu 37. Thư mục nào chứa các tệp cần thiết để khởi động hệ thống, chẳng hạn như nhân Linux?

- A. `/boot`
- B. `/kernel`
- C. `/init`
- D. `/start`

### Câu 38. Đâu là một đường dẫn tuyệt đối?

- A. `../alice`
- B. `docs/notes.txt`
- C. `./script.sh`
- D. `/home/alice/docs`

### Câu 39. Thư mục nào biểu diễn các thiết bị phần cứng dưới dạng tệp đặc biệt?

- A. `/devices`
- B. `/drivers`
- C. `/dev`
- D. `/hw`

### Câu 40. Trên máy tính để bàn, các thiết bị lưu trữ di động như USB thường được tự động gắn (mount) vào đâu?

- A. Bên trong `/boot`
- B. Bên trong `/media`
- C. Bên trong `/usb`
- D. Bên trong `/etc`

[↑ Về mục lục](#muc-luc)

---

<a id="files"></a>

## 3. Quản lý tệp (câu 41–60)

### Câu 41. Lệnh nào tạo một thư mục mới?

- A. `mkdir`
- B. `newdir`
- C. `touch`
- D. `makefolder`

### Câu 42. Lệnh nào tạo một tệp rỗng, hoặc cập nhật thời gian sửa đổi của một tệp đã có?

- A. `mkfile`
- B. `touch`
- C. `new`
- D. `create`

### Câu 43. Lệnh nào dùng để sao chép tệp?

- A. `mv`
- B. `copy`
- C. `cp`
- D. `cpy`

### Câu 44. Lệnh nào dùng để di chuyển hoặc đổi tên tệp?

- A. `ren`
- B. `cp`
- C. `move`
- D. `mv`

### Câu 45. Lệnh nào dùng để xóa một tệp?

- A. `rm`
- B. `delete`
- C. `erase`
- D. `del`

### Câu 46. Làm thế nào để xóa một thư mục cùng toàn bộ nội dung bên trong?

- A. `rmdir --all dirname`
- B. `del /s dirname`
- C. `rm dirname`
- D. `rm -r dirname`

### Câu 47. Lệnh `rmdir` có tác dụng gì?

- A. Đổi tên một thư mục
- B. Xóa một thư mục cùng toàn bộ nội dung bên trong
- C. Liệt kê các thư mục
- D. Xóa một thư mục rỗng

### Câu 48. Lệnh nào tạo các thư mục lồng nhau a/b/c chỉ trong một bước?

- A. `mkdir a b c`
- B. `mkdir -r a/b/c`
- C. `mkdir -n a/b/c`
- D. `mkdir -p a/b/c`

### Câu 49. Làm thế nào để sao chép một thư mục cùng toàn bộ nội dung bên trong?

- A. `cp -r source dest`
- B. `cp -d source dest`
- C. `cp source dest`
- D. `cp -f source dest`

### Câu 50. Lệnh `rm -i file.txt` có tác dụng gì?

- A. Hỏi xác nhận trước khi xóa tệp
- B. Xóa tệp mà không hỏi
- C. Bỏ qua tệp
- D. Chuyển tệp vào thùng rác

### Câu 51. Lệnh nào tạo một liên kết mềm (symbolic link)?

- A. `ln -s target linkname`
- B. `sym target linkname`
- C. `ln target linkname`
- D. `mklink target linkname`

### Câu 52. Lệnh nào tìm trong cây thư mục /home một tệp tên là notes.txt?

- A. `grep /home notes.txt`
- B. `find /home -name "notes.txt"`
- C. `ls --find notes.txt`
- D. `search /home notes.txt`

### Câu 53. Ký tự đại diện `*` khớp với gì trong tên tệp?

- A. Chỉ các tệp ẩn
- B. Bất kỳ số lượng ký tự nào, kể cả không có ký tự nào
- C. Chỉ các chữ số
- D. Đúng một ký tự

### Câu 54. Ký tự đại diện `?` khớp với gì trong tên tệp?

- A. Không khớp với gì cả
- B. Đúng một ký tự
- C. Bất kỳ số lượng ký tự nào
- D. Chỉ đúng dấu chấm hỏi

### Câu 55. Lệnh `ls *.txt` liệt kê những gì?

- A. Chỉ các tệp .txt bị ẩn
- B. Tất cả các tệp có đuôi .txt trong thư mục hiện tại
- C. Nội dung văn bản bên trong mọi tệp
- D. Chỉ một tệp có tên đúng là \*.txt

### Câu 56. Lệnh nào cho biết một tệp chứa loại dữ liệu gì (văn bản, hình ảnh, chương trình, ...)?

- A. `kind`
- B. `typeof`
- C. `file`
- D. `format`

### Câu 57. Lệnh `cp -i` có tác dụng gì?

- A. Chỉ sao chép hình ảnh
- B. Bỏ qua mọi lỗi
- C. Chỉ sao chép các tệp ẩn
- D. Hỏi trước khi ghi đè lên một tệp đã tồn tại

### Câu 58. Lệnh `mv old.txt new.txt` làm gì khi cả hai tên nằm trong cùng một thư mục?

- A. Xóa cả hai tệp
- B. Đổi tên old.txt thành new.txt
- C. Gộp hai tệp lại với nhau
- D. Sao chép old.txt thành new.txt

### Câu 59. Lệnh nào hiển thị thông tin chi tiết về một tệp, như kích thước, inode và các mốc thời gian?

- A. `fileinfo`
- B. `stat`
- C. `about`
- D. `details`

### Câu 60. Lệnh nào tìm tệp theo tên rất nhanh nhờ một cơ sở dữ liệu được tạo sẵn?

- A. `locate`
- B. `where`
- C. `seek`
- D. `find`

[↑ Về mục lục](#muc-luc)

---

<a id="text"></a>

## 4. Xem & Soạn thảo văn bản (câu 61–80)

### Câu 61. Lệnh nào hiển thị toàn bộ nội dung của một tệp ra terminal?

- A. `show`
- B. `print`
- C. `open`
- D. `cat`

### Câu 62. Lệnh nào hiển thị tệp theo từng trang màn hình và cho phép cuộn lên xuống?

- A. `cat`
- B. `touch`
- C. `less`
- D. `echo`

### Câu 63. Theo mặc định, lệnh nào hiển thị 10 dòng đầu tiên của một tệp?

- A. `top`
- B. `head`
- C. `tail`
- D. `first`

### Câu 64. Theo mặc định, lệnh nào hiển thị 10 dòng cuối cùng của một tệp?

- A. `head`
- B. `last`
- C. `end`
- D. `tail`

### Câu 65. Lệnh `tail -f /var/log/syslog` có tác dụng gì?

- A. Xóa tệp nhật ký
- B. Hiển thị các dòng đầu tiên của tệp
- C. Hiển thị phần cuối của tệp và tiếp tục in ra các dòng mới khi chúng được thêm vào
- D. Sửa lỗi định dạng trong tệp

### Câu 66. Lệnh nào tìm kiếm một mẫu văn bản bên trong các tệp?

- A. `find`
- B. `search`
- C. `grep`
- D. `locate`

### Câu 67. Lệnh `grep -i "error" app.log` có tác dụng gì?

- A. Tìm "error" mà không phân biệt chữ hoa, chữ thường
- B. Chèn "error" vào tệp
- C. Chỉ hiển thị các dòng không chứa "error"
- D. Đếm số dòng trong tệp

### Câu 68. Lệnh `grep -v "debug" app.log` có tác dụng gì?

- A. Chỉ hiển thị các dòng có chứa "debug"
- B. Hiển thị phiên bản của grep
- C. In tệp ra kèm nhiều thông tin chi tiết
- D. Hiển thị các dòng KHÔNG chứa "debug"

### Câu 69. Lệnh `wc -l file.txt` in ra gì?

- A. Số từ trong tệp
- B. Số ký tự trong tệp
- C. Số dòng trong tệp
- D. Dòng cuối cùng của tệp

### Câu 70. Lệnh nào sắp xếp các dòng văn bản theo thứ tự bảng chữ cái?

- A. `order`
- B. `uniq`
- C. `sort`
- D. `arrange`

### Câu 71. Lệnh `uniq` có tác dụng gì?

- A. Đếm số người dùng trên hệ thống
- B. Xáo trộn các dòng một cách ngẫu nhiên
- C. Loại bỏ các dòng lặp lại nằm liền kề nhau
- D. Đổi tên tệp thành một tên duy nhất

### Câu 72. Lệnh nào in một dòng văn bản ra terminal?

- A. `say`
- B. `echo`
- C. `show`
- D. `output`

### Câu 73. Đâu là một trình soạn thảo văn bản trên terminal đơn giản, thân thiện với người mới bắt đầu?

- A. `nano`
- B. `curl`
- C. `gcc`
- D. `vlc`

### Câu 74. Trong vim, lệnh nào lưu tệp rồi thoát?

- A. `:wq`
- B. `:q!`
- C. `Ctrl+C`
- D. `:s`

### Câu 75. Trong vim, lệnh `:q!` có tác dụng gì?

- A. Mở một tệp mới
- B. Thoát mà không lưu các thay đổi
- C. Lưu rồi thoát
- D. Lưu mà không thoát

### Câu 76. Trong vim, phím nào chuyển sang chế độ Insert để bạn có thể gõ văn bản?

- A. `x`
- B. `:`
- C. `i`
- D. `d`

### Câu 77. Trong nano, phím tắt nào dùng để thoát khỏi trình soạn thảo?

- A. `Ctrl+X`
- B. `Ctrl+Z`
- C. `Ctrl+Q`
- D. `Esc`

### Câu 78. Lệnh `cat file1 file2 > combined.txt` có tác dụng gì?

- A. So sánh hai tệp
- B. Nối file1 và file2 vào một tệp mới tên là combined.txt
- C. Xóa cả hai tệp
- D. Sao chép combined.txt vào cả hai tệp

### Câu 79. Lệnh nào hiển thị sự khác biệt giữa hai tệp văn bản theo từng dòng?

- A. `delta`
- B. `match`
- C. `compare`
- D. `diff`

### Câu 80. Lệnh `cut -d: -f1 /etc/passwd` in ra gì?

- A. Nội dung tệp sau khi bỏ ký tự đầu tiên
- B. Dòng đầu tiên của tệp
- C. Trường đầu tiên (tên người dùng) của mỗi dòng, dùng ":" làm ký tự phân cách
- D. Số lượng người dùng trên hệ thống

[↑ Về mục lục](#muc-luc)

---

<a id="permissions"></a>

## 5. Phân quyền (câu 81–100)

### Câu 81. Trong chuỗi quyền `-rwxr-xr--`, chủ sở hữu (owner) có những quyền gì?

- A. Chỉ đọc và thực thi
- B. Không có quyền nào
- C. Chỉ đọc
- D. Đọc, ghi và thực thi

### Câu 82. Trong chuỗi quyền `-rwxr-xr--`, "những người khác" (others) có những quyền gì?

- A. Đọc, ghi và thực thi
- B. Chỉ thực thi
- C. Đọc và ghi
- D. Chỉ đọc

### Câu 83. Trong `drwxr-xr-x`, ký tự đầu tiên `d` có nghĩa là gì?

- A. Mục này đã bị vô hiệu hóa
- B. Mục này là một thư mục
- C. Mục này là một thiết bị ổ đĩa
- D. Mục này đã bị xóa

### Câu 84. Giá trị số (hệ bát phân) của quyền đọc (read) là bao nhiêu?

- A. 1
- B. 2
- C. 7
- D. 4

### Câu 85. Giá trị số (hệ bát phân) của quyền ghi (write) là bao nhiêu?

- A. 2
- B. 3
- C. 1
- D. 4

### Câu 86. Giá trị số (hệ bát phân) của quyền thực thi (execute) là bao nhiêu?

- A. 4
- B. 2
- C. 1
- D. 0

### Câu 87. Lệnh `chmod 755 script.sh` thiết lập những quyền nào?

- A. Mọi người: rwx
- B. Chủ sở hữu: r-x; nhóm và người khác: rwx
- C. Chủ sở hữu: rwx; nhóm và người khác: r-x
- D. Chủ sở hữu: rw-; nhóm và người khác: r--

### Câu 88. Lệnh `chmod 644 notes.txt` thiết lập những quyền nào?

- A. Chủ sở hữu: rwx; nhóm: r--; người khác: không có quyền
- B. Chủ sở hữu: r--; nhóm và người khác: rw-
- C. Chủ sở hữu: rw-; nhóm và người khác: r--
- D. Mọi người: rw-

### Câu 89. Lệnh nào cấp quyền thực thi script cho chủ sở hữu của nó?

- A. `exec script.sh`
- B. `chown +x script.sh`
- C. `chmod u+x script.sh`
- D. `chmod u-x script.sh`

### Câu 90. Lệnh nào thay đổi chủ sở hữu của một tệp?

- A. `chgrp`
- B. `chmod`
- C. `owner`
- D. `chown`

### Câu 91. Lệnh nào chỉ thay đổi nhóm của một tệp?

- A. `chgrp`
- B. `groupmod`
- C. `setgroup`
- D. `chmod g`

### Câu 92. Lệnh `chmod 777 file` có tác dụng gì?

- A. Cấp quyền đọc, ghi và thực thi cho tất cả mọi người
- B. Biến tệp thành chỉ đọc
- C. Gỡ bỏ mọi quyền
- D. Ẩn tệp

### Câu 93. Lệnh `sudo` có tác dụng gì?

- A. Đổi bố cục bàn phím
- B. Tắt hệ thống
- C. Hiển thị dung lượng ổ đĩa đã dùng
- D. Chạy một lệnh với quyền quản trị (root)

### Câu 94. Quyền trên tệp Linux được thiết lập riêng cho ba nhóm đối tượng nào?

- A. Chủ sở hữu (user), nhóm (group) và người khác (others)
- B. Cục bộ, từ xa và hệ thống
- C. Quản trị viên, khách và root
- D. Đọc, ghi và thực thi

### Câu 95. Lệnh `chmod o-w file.txt` có tác dụng gì?

- A. Gỡ quyền ghi của những người khác
- B. Gỡ quyền ghi của chủ sở hữu
- C. Thêm quyền ghi cho những người khác
- D. Cấp quyền ghi cho chủ sở hữu

### Câu 96. Lệnh `chmod g+r report.txt` có tác dụng gì?

- A. Đặt nhóm "r" làm chủ sở hữu
- B. Thêm quyền đọc cho nhóm
- C. Thêm quyền đọc cho tất cả mọi người
- D. Gỡ quyền đọc của nhóm

### Câu 97. Quyền thực thi (x) trên một thư mục cho phép làm gì?

- A. Chạy thư mục như một chương trình
- B. Xóa thư mục
- C. Vào thư mục (bằng `cd`) và truy cập các tệp bên trong
- D. Chỉ liệt kê các tệp ẩn

### Câu 98. `umask` kiểm soát điều gì?

- A. Mật khẩu của người dùng
- B. Quyền mặc định gán cho các tệp và thư mục mới được tạo
- C. Mặt nạ mạng con (subnet mask)
- D. Độ sáng màn hình

### Câu 99. Lệnh nào hiển thị quyền của một tệp?

- A. `cat -p file.txt`
- B. `ls -l file.txt`
- C. `chmod file.txt`
- D. `perm file.txt`

### Câu 100. Làm thế nào để đặt người dùng alice làm chủ sở hữu và nhóm dev làm nhóm của file.txt chỉ bằng một lệnh?

- A. `chown dev:alice file.txt`
- B. `chmod alice:dev file.txt`
- C. `chgrp alice dev file.txt`
- D. `chown alice:dev file.txt`

[↑ Về mục lục](#muc-luc)

---

<a id="users"></a>

## 6. Người dùng & Nhóm (câu 101–120)

### Câu 101. Lệnh nào hiển thị tên người dùng mà bạn đang sử dụng?

- A. `whoami`
- B. `myname`
- C. `userid`
- D. `whois`

### Câu 102. Tệp nào lưu thông tin cơ bản về các tài khoản người dùng, như tên đăng nhập, UID và thư mục chính?

- A. `/etc/passwd`
- B. `/etc/users`
- C. `/home/users`
- D. `/var/accounts`

### Câu 103. Trên các hệ thống Linux hiện đại, mật khẩu (dạng đã băm) của người dùng được lưu ở đâu?

- A. `/etc/shadow`
- B. `/etc/passwd`
- C. `/root/passwords`
- D. `/etc/password`

### Câu 104. Lệnh nào dùng để đổi mật khẩu của người dùng?

- A. `setpw`
- B. `passwd`
- C. `chpwd`
- D. `password`

### Câu 105. Lệnh nào thường được dùng để tạo tài khoản người dùng mới?

- A. `usercreate`
- B. `newuser`
- C. `useradd`
- D. `addaccount`

### Câu 106. Lệnh nào dùng để xóa một tài khoản người dùng?

- A. `userdel`
- B. `killuser`
- C. `userrm`
- D. `removeuser`

### Câu 107. Lệnh nào thêm người dùng bob (đã có sẵn) vào nhóm docker mà không xóa bob khỏi các nhóm khác?

- A. `sudo useradd docker bob`
- B. `sudo chgrp bob docker`
- C. `sudo usermod -aG docker bob`
- D. `sudo groupadd bob docker`

### Câu 108. Lệnh nào tạo một nhóm mới?

- A. `newgroup`
- B. `mkgroup`
- C. `groupnew`
- D. `groupadd`

### Câu 109. Lệnh nào liệt kê các nhóm mà một người dùng tham gia?

- A. `listgroups`
- B. `groups`
- C. `whogroup`
- D. `mygroups`

### Câu 110. Lệnh nào hiển thị UID, GID và các nhóm của một người dùng?

- A. `userinfo`
- B. `whoami -a`
- C. `uid`
- D. `id`

### Câu 111. UID (mã người dùng) của người dùng root là bao nhiêu?

- A. 100
- B. 1
- C. 1000
- D. 0

### Câu 112. Tệp nào lưu danh sách các nhóm trên hệ thống?

- A. `/etc/group`
- B. `/etc/groups`
- C. `/home/groups`
- D. `/var/group`

### Câu 113. Lệnh `su - alice` có tác dụng gì?

- A. Xóa người dùng alice
- B. Chuyển sang người dùng alice với đầy đủ môi trường đăng nhập của alice
- C. Hiển thị các tệp của alice
- D. Gửi tin nhắn cho alice

### Câu 114. Lệnh nào cho biết những ai đang đăng nhập vào hệ thống?

- A. `whoami`
- B. `id`
- C. `pwd`
- D. `who`

### Câu 115. Lệnh nào hiển thị danh sách các lần đăng nhập gần đây?

- A. `history`
- B. `first`
- C. `last`
- D. `logs`

### Câu 116. Thư mục chính (home) của một người dùng thông thường thường nằm ở đâu?

- A. `/etc/username`
- B. `/var/username`
- C. `/home/username`
- D. `/usr/username`

### Câu 117. Tệp nào quy định những người dùng nào được phép dùng sudo?

- A. `/etc/admins`
- B. `/etc/rootusers`
- C. `/etc/sudoers`
- D. `/etc/passwd`

### Câu 118. Nên dùng lệnh nào để chỉnh sửa tệp sudoers một cách an toàn?

- A. `visudo`
- B. `sudoconf`
- C. `sudo-edit`
- D. `editsudo`

### Câu 119. Trên hầu hết các bản phân phối hiện đại, tài khoản người dùng thông thường (không phải tài khoản hệ thống) bắt đầu từ UID nào?

- A. 1000
- B. 65535
- C. 1
- D. 0

### Câu 120. Trong /etc/passwd, trường cuối cùng của mỗi dòng (ví dụ `/bin/bash`) biểu thị điều gì?

- A. Thư mục chính của người dùng
- B. Mật khẩu của người dùng
- C. Tên nhóm của người dùng
- D. Shell đăng nhập của người dùng

[↑ Về mục lục](#muc-luc)

---

<a id="processes"></a>

## 7. Tiến trình & Hệ thống (câu 121–140)

### Câu 121. Lệnh nào hiển thị ảnh chụp nhanh (snapshot) các tiến trình đang chạy?

- A. `tasks`
- B. `pl`
- C. `proc`
- D. `ps`

### Câu 122. Lệnh nào hiển thị trực tiếp, liên tục cập nhật các tiến trình và mức sử dụng tài nguyên?

- A. `top`
- B. `live`
- C. `head`
- D. `ps`

### Câu 123. PID là gì?

- A. Program Installation Directory: thư mục cài đặt chương trình
- B. Partition ID: mã định danh phân vùng trên ổ đĩa
- C. Primary Internet Domain: tên miền Internet chính
- D. Process ID: một số duy nhất dùng để nhận diện một tiến trình đang chạy

### Câu 124. Lệnh nào gửi tín hiệu tới một tiến trình (thường để dừng nó) dựa trên PID?

- A. `end`
- B. `kill`
- C. `close`
- D. `stop`

### Câu 125. Lệnh `kill -9 1234` có tác dụng gì?

- A. Kết thúc 9 tiến trình
- B. Khởi động lại tiến trình 1234
- C. Tạm dừng tiến trình 1234 trong 9 giây
- D. Buộc kết thúc ngay tiến trình 1234 (SIGKILL)

### Câu 126. Lệnh nào có thể dừng tiến trình dựa theo tên thay vì PID?

- A. `pskill`
- B. `namekill`
- C. `pkill`
- D. `killname`

### Câu 127. Làm thế nào để chạy một lệnh ở chế độ nền (background)?

- A. Thêm `&` vào cuối lệnh
- B. Bắt đầu lệnh bằng `bg:`
- C. Thêm `#` vào cuối lệnh
- D. Thêm `>>` vào cuối lệnh

### Câu 128. Tổ hợp phím nào ngắt (dừng) lệnh đang chạy ở tiền cảnh (foreground)?

- A. `Ctrl+V`
- B. `Ctrl+C`
- C. `Ctrl+P`
- D. `Ctrl+A`

### Câu 129. Tổ hợp phím `Ctrl+Z` có tác dụng gì với một lệnh đang chạy ở tiền cảnh?

- A. Hoàn tác lệnh vừa chạy
- B. Kết thúc lệnh đó ngay lập tức
- C. Tạm dừng lệnh đó
- D. Chuyển lệnh đó sang một terminal khác

### Câu 130. Lệnh nào đưa một tác vụ đang chạy nền hoặc đang tạm dừng trở lại tiền cảnh?

- A. `fg`
- B. `front`
- C. `bg`
- D. `up`

### Câu 131. Lệnh nào liệt kê các tác vụ (job) được khởi chạy từ shell hiện tại?

- A. `work`
- B. `jobs`
- C. `list`
- D. `tasks`

### Câu 132. Lệnh nào cho biết bộ nhớ (RAM) đã dùng và còn trống?

- A. `mem`
- B. `free -h`
- C. `ram`
- D. `df -h`

### Câu 133. Lệnh nào hiển thị dung lượng đã dùng và còn trống của các hệ thống tệp đã được gắn (mount)?

- A. `df -h`
- B. `du -h`
- C. `disk -h`
- D. `free -h`

### Câu 134. Lệnh nào cho biết một thư mục cụ thể chiếm bao nhiêu dung lượng ổ đĩa?

- A. `du -sh dirname`
- B. `space dirname`
- C. `df -h dirname`
- D. `free dirname`

### Câu 135. Lệnh nào cho biết hệ thống đã chạy được bao lâu kể từ lần khởi động gần nhất?

- A. `time`
- B. `runtime`
- C. `since`
- D. `uptime`

### Câu 136. Trên hầu hết các bản phân phối hiện đại, chương trình nào chạy với PID 1 – tiến trình đầu tiên được nhân khởi động?

- A. cron
- B. login
- C. systemd
- D. bash

### Câu 137. Trên các hệ thống dùng systemd, lệnh nào dùng để khởi động, dừng và kiểm tra các dịch vụ?

- A. `servicectl`
- B. `systemctl`
- C. `sysrun`
- D. `servctl`

### Câu 138. Trên hệ thống systemd, lệnh nào giúp dịch vụ nginx tự động chạy mỗi khi khởi động máy?

- A. `sudo systemctl auto nginx`
- B. `sudo systemctl start nginx`
- C. `sudo systemctl enable nginx`
- D. `sudo systemctl boot nginx`

### Câu 139. Trên hệ thống systemd, lệnh nào dùng để đọc nhật ký hệ thống (journal)?

- A. `showlogs`
- B. `logread`
- C. `journalctl`
- D. `syslogview`

### Câu 140. Lệnh nào khởi động lại máy tính?

- A. `sudo reload`
- B. `sudo restart`
- C. `sudo reboot`
- D. `sudo again`

[↑ Về mục lục](#muc-luc)

---

<a id="packages"></a>

## 8. Quản lý gói phần mềm (câu 141–160)

### Câu 141. Debian và Ubuntu sử dụng trình quản lý gói nào?

- A. `dnf`
- B. `pacman`
- C. `apt`
- D. `zypper`

### Câu 142. Fedora và Red Hat Enterprise Linux hiện đại sử dụng trình quản lý gói nào?

- A. `apt`
- B. `dnf`
- C. `brew`
- D. `pacman`

### Câu 143. Arch Linux sử dụng trình quản lý gói nào?

- A. `pacman`
- B. `yum`
- C. `apt`
- D. `emerge`

### Câu 144. Trên Ubuntu, lệnh nào làm mới danh sách các gói có sẵn từ kho phần mềm?

- A. `sudo apt refresh`
- B. `sudo apt update`
- C. `sudo apt upgrade`
- D. `sudo apt list`

### Câu 145. Trên Ubuntu, lệnh nào cài đặt phiên bản mới hơn cho các gói đã được cài?

- A. `sudo apt newer`
- B. `sudo apt install`
- C. `sudo apt update`
- D. `sudo apt upgrade`

### Câu 146. Làm thế nào để cài đặt gói htop trên Ubuntu?

- A. `sudo install htop`
- B. `sudo apt install htop`
- C. `sudo apt get htop`
- D. `sudo apt add htop`

### Câu 147. Làm thế nào để gỡ bỏ một gói đã cài đặt trên Ubuntu?

- A. `sudo apt uninstall packagename`
- B. `sudo rm packagename`
- C. `sudo apt remove packagename`
- D. `sudo apt delete packagename`

### Câu 148. So với `sudo apt remove nginx`, lệnh `sudo apt purge nginx` khác ở điểm nào?

- A. Cài đặt lại gói
- B. Chỉ xóa bộ nhớ đệm tải về
- C. Chỉ xóa các tệp cấu hình
- D. Gỡ bỏ gói và xóa luôn cả các tệp cấu hình của nó

### Câu 149. Các gói của Debian và Ubuntu có phần mở rộng (đuôi tệp) là gì?

- A. `.deb`
- B. `.exe`
- C. `.rpm`
- D. `.pkg`

### Câu 150. Các gói của Red Hat, Fedora và openSUSE có phần mở rộng là gì?

- A. `.deb`
- B. `.msi`
- C. `.rpm`
- D. `.apk`

### Câu 151. Lệnh cấp thấp nào dùng để cài đặt một tệp .deb có sẵn trên máy?

- A. `sudo deb install package.deb`
- B. `sudo dpkg -i package.deb`
- C. `sudo apt-file package.deb`
- D. `sudo rpm -i package.deb`

### Câu 152. Trên Ubuntu, lệnh nào tìm kiếm gói trong kho phần mềm theo từ khóa?

- A. `apt look keyword`
- B. `apt find keyword`
- C. `apt search keyword`
- D. `apt grep keyword`

### Câu 153. Lệnh nào cài đặt một gói trên Fedora?

- A. `sudo pacman -S packagename`
- B. `sudo fedora install packagename`
- C. `sudo dnf install packagename`
- D. `sudo apt install packagename`

### Câu 154. Lệnh `sudo apt autoremove` có tác dụng gì?

- A. Gỡ bỏ mọi gói đã cài đặt
- B. Xóa các tệp trong /tmp
- C. Gỡ cài đặt chính chương trình apt
- D. Gỡ bỏ các gói từng được cài làm gói phụ thuộc nhưng nay không còn cần thiết

### Câu 155. Trong quản lý gói Linux, "kho phần mềm" (repository) là gì?

- A. Bản sao lưu của nhân Linux
- B. Danh sách người dùng của hệ thống
- C. Thư mục chứa tài liệu của người dùng
- D. Máy chủ hoặc nơi lưu trữ chứa các gói để bạn tải về và cài đặt

### Câu 156. Trên Debian và Ubuntu, các nguồn kho phần mềm của APT được cấu hình ở đâu?

- A. Trong `/etc/apt/sources.list` và các tệp bên trong `/etc/apt/sources.list.d/`
- B. Trong `/etc/repos`
- C. Trong `/usr/apt/list`
- D. Trong `/var/apt/repos`

### Câu 157. "Gói phụ thuộc" (dependency) là gì?

- A. Một gói đã lỗi thời
- B. Một gói khác cần được cài đặt để chương trình có thể hoạt động
- C. Một gói bị hỏng
- D. Một gói chỉ chạy được trên máy chủ

### Câu 158. Lệnh nào liệt kê tất cả các gói đã cài đặt trên hệ thống Debian hoặc Ubuntu?

- A. `apt get-list`
- B. `dpkg -i`
- C. `dpkg -l`
- D. `ls /packages`

### Câu 159. Snap và Flatpak là gì?

- A. Các trình soạn thảo văn bản trên Linux
- B. Các công cụ giám sát mạng
- C. Các định dạng gói đa nền tảng, đóng gói ứng dụng cùng với các thành phần phụ thuộc của nó
- D. Các hệ thống tệp

### Câu 160. Lệnh nào cài đặt một gói trên Arch Linux?

- A. `sudo arch install packagename`
- B. `sudo pacman -S packagename`
- C. `sudo pacman -R packagename`
- D. `sudo pacman -Q packagename`

[↑ Về mục lục](#muc-luc)

---

<a id="networking"></a>

## 9. Mạng (câu 161–180)

### Câu 161. Lệnh nào kiểm tra xem có thể kết nối tới một máy ở xa qua mạng hay không?

- A. `check`
- B. `reach`
- C. `ping`
- D. `hello`

### Câu 162. Lệnh hiện đại nào hiển thị địa chỉ IP của các giao diện mạng?

- A. `ipconfig`
- B. `showip`
- C. `ip addr`
- D. `netaddr`

### Câu 163. Địa chỉ IP nào là địa chỉ loopback, luôn trỏ về chính máy tính của bạn?

- A. 192.168.0.1
- B. 8.8.8.8
- C. 255.255.255.255
- D. 127.0.0.1

### Câu 164. Tên máy (hostname) nào luôn chỉ chính máy tính của bạn?

- A. home
- B. self
- C. myhost
- D. localhost

### Câu 165. Lệnh nào cho phép bạn đăng nhập an toàn vào một máy tính từ xa?

- A. `remote user@host`
- B. `login user@host`
- C. `ftp user@host`
- D. `ssh user@host`

### Câu 166. Cổng mặc định của SSH là bao nhiêu?

- A. 22
- B. 21
- C. 443
- D. 80

### Câu 167. Cổng mặc định của HTTP là bao nhiêu?

- A. 80
- B. 443
- C. 22
- D. 25

### Câu 168. Cổng mặc định của HTTPS là bao nhiêu?

- A. 22
- B. 8080
- C. 80
- D. 443

### Câu 169. Lệnh nào sao chép tệp một cách an toàn giữa các máy tính thông qua SSH?

- A. `cp -r`
- B. `scp`
- C. `mv --ssh`
- D. `ftp`

### Câu 170. Lệnh nào tải một tệp về từ một địa chỉ URL?

- A. `wget`
- B. `get`
- C. `pull`
- D. `fetchurl`

### Câu 171. Tệp nào ánh xạ tên máy sang địa chỉ IP ngay trên máy cục bộ, trước khi hỏi DNS?

- A. `/etc/hostname`
- B. `/etc/hosts`
- C. `/etc/dns.conf`
- D. `/etc/ips`

### Câu 172. Theo truyền thống, tệp nào liệt kê các máy chủ DNS mà hệ thống sử dụng?

- A. `/etc/hosts.allow`
- B. `/etc/resolv.conf`
- C. `/etc/network.conf`
- D. `/etc/dns`

### Câu 173. Lệnh nào hiển thị tên máy (hostname) của hệ thống?

- A. `hostname`
- B. `whoami`
- C. `myname`
- D. `hostinfo`

### Câu 174. Lệnh hiện đại nào liệt kê các cổng đang lắng nghe và các kết nối mạng đang mở?

- A. `ports -l`
- B. `ss -tuln`
- C. `ip ports`
- D. `listen -a`

### Câu 175. Lệnh nào tra cứu địa chỉ IP của một tên miền?

- A. `iplookup example.com`
- B. `getip example.com`
- C. `nslookup example.com`
- D. `domain example.com`

### Câu 176. Lệnh nào hiển thị đường đi (từng chặng) mà gói tin đi qua để tới một máy?

- A. `hops`
- B. `pathping`
- C. `traceroute`
- D. `netpath`

### Câu 177. Lệnh nào hiển thị bảng định tuyến (routing table) của hệ thống?

- A. `routes`
- B. `showroute`
- C. `ip addr`
- D. `ip route`

### Câu 178. Lệnh nào tạo một cặp khóa SSH mới?

- A. `ssh --create-key`
- B. `ssh-keygen`
- C. `ssh-newkey`
- D. `keygen-ssh`

### Câu 179. Công cụ dòng lệnh nào truyền dữ liệu tới/từ URL và thường được dùng để kiểm thử API web?

- A. `ping`
- B. `curl`
- C. `traceroute`
- D. `ssh`

### Câu 180. Công cụ tường lửa đơn giản nào thường được dùng trên Ubuntu?

- A. `ufw`
- B. `safenet`
- C. `fwall`
- D. `blockit`

[↑ Về mục lục](#muc-luc)

---

<a id="shell"></a>

## 10. Shell & Viết script (câu 181–200)

### Câu 181. Ký hiệu pipe `|` có tác dụng gì?

- A. Chuyển kết quả đầu ra của một lệnh thành dữ liệu đầu vào cho lệnh tiếp theo
- B. Lưu kết quả đầu ra vào một tệp
- C. Biến phần còn lại của dòng thành chú thích
- D. Chạy cùng lúc hai lệnh không liên quan

### Câu 182. Trong lệnh `ls > files.txt`, ký hiệu `>` có tác dụng gì?

- A. Nối thêm kết quả vào cuối files.txt
- B. Ghi kết quả vào files.txt, thay thế nội dung cũ của tệp
- C. So sánh kết quả với files.txt
- D. Đọc dữ liệu đầu vào từ files.txt

### Câu 183. Trong lệnh `echo "done" >> log.txt`, ký hiệu `>>` có tác dụng gì?

- A. Nối thêm kết quả vào cuối log.txt
- B. Chạy lệnh hai lần
- C. Chỉ chuyển hướng các thông báo lỗi
- D. Ghi đè lên log.txt

### Câu 184. `2>` chuyển hướng luồng dữ liệu nào?

- A. Chỉ đầu ra của lệnh thứ hai
- B. Đầu ra lỗi (standard error)
- C. Đầu vào (standard input)
- D. Đầu ra thông thường (standard output)

### Câu 185. `/dev/null` là gì?

- A. Một tệp đặc biệt loại bỏ mọi dữ liệu được ghi vào nó
- B. Ổ cứng đầu tiên
- C. Một tài khoản người dùng không có mật khẩu
- D. Một thư mục chứa các tệp đã bị xóa

### Câu 186. Làm thế nào để in ra giá trị của biến có tên NAME?

- A. `echo NAME`
- B. `echo @NAME`
- C. `echo $NAME`
- D. `echo %NAME%`

### Câu 187. Biến môi trường nào chứa danh sách các thư mục mà shell tìm kiếm lệnh?

- A. `HOME`
- B. `PATH`
- C. `SHELL`
- D. `USER`

### Câu 188. Dòng đầu tiên `#!/bin/bash` trong một script có tác dụng gì?

- A. Cho hệ thống biết cần chạy script bằng trình thông dịch Bash
- B. Không có tác dụng gì; nó chỉ là một dòng chú thích
- C. Xóa các phiên bản cũ của script
- D. Biến script thành tệp ẩn

### Câu 189. Làm thế nào để chạy script backup.sh (đã có quyền thực thi) nằm trong thư mục hiện tại?

- A. `open backup.sh`
- B. `run backup.sh`
- C. `./backup.sh`
- D. `backup.sh.exe`

### Câu 190. Lệnh nào hiển thị các lệnh bạn đã chạy trước đó trong shell?

- A. `last`
- B. `previous`
- C. `recent`
- D. `history`

### Câu 191. Lệnh `alias ll='ls -l'` có tác dụng gì?

- A. Đổi tên chương trình ls thành ll
- B. Xóa lệnh ll
- C. Tạo lối tắt để khi gõ `ll` thì lệnh `ls -l` được chạy
- D. Liệt kê tất cả các alias hiện có

### Câu 192. Tệp nào thường được dùng để tùy biến Bash cho một người dùng, ví dụ để thêm alias?

- A. `/bin/bash`
- B. `/etc/passwd`
- C. `~/.config.txt`
- D. `~/.bashrc`

### Câu 193. Lệnh nào giúp một biến của shell có thể được dùng bởi các chương trình khởi chạy từ shell đó?

- A. `share`
- B. `export`
- C. `global`
- D. `public`

### Câu 194. Trong Bash, biến đặc biệt `$?` chứa giá trị gì?

- A. Số lượng tham số truyền vào script
- B. Mã thoát (exit status) của lệnh vừa chạy (0 nghĩa là thành công)
- C. PID của tiến trình hiện tại
- D. Tên của người dùng hiện tại

### Câu 195. Lệnh nào tạo tệp nén backup.tar.gz từ thư mục docs?

- A. `tar -xzf backup.tar.gz docs`
- B. `gzip -r docs backup.tar.gz`
- C. `tar -czf backup.tar.gz docs`
- D. `zip -x backup.tar.gz docs`

### Câu 196. Lệnh nào giải nén tệp archive.tar.gz?

- A. `tar -czf archive.tar.gz`
- B. `tar -xzf archive.tar.gz`
- C. `tar -tzf archive.tar.gz`
- D. `untar archive.tar.gz`

### Câu 197. Lệnh nào nén một tệp tên report thành report.gz?

- A. `compress -gz report`
- B. `tar report`
- C. `gunzip report`
- D. `gzip report`

### Câu 198. Cron được dùng để làm gì?

- A. Lên lịch để các lệnh tự động chạy vào thời điểm định sẵn
- B. Giám sát lưu lượng mạng
- C. Nén tệp
- D. Soạn thảo tệp văn bản

### Câu 199. Lệnh nào dùng để chỉnh sửa các tác vụ cron đã lên lịch của người dùng hiện tại?

- A. `schedule -e`
- B. `crontab -e`
- C. `crontab -l`
- D. `cron --edit`

### Câu 200. Trong `cmd1 && cmd2`, khi nào cmd2 được chạy?

- A. Cùng lúc với cmd1
- B. Chỉ khi cmd1 thất bại
- C. Chỉ khi cmd1 chạy thành công
- D. Không bao giờ; && là một dòng chú thích

[↑ Về mục lục](#muc-luc)

---
