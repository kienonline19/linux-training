// Question bank: 200 beginner-level Linux multiple-choice questions (20 per topic),
// in English (en) and Vietnamese (vi). Both languages share the same option order.
// `answer` is the zero-based index of the correct option.
// Text wrapped in backticks is displayed as code.

const TOPICS = [
  { id: "basics", name: { en: "Linux Basics", vi: "Kiến thức cơ bản" } },
  { id: "navigation", name: { en: "File System & Navigation", vi: "Hệ thống tệp & Điều hướng" } },
  { id: "files", name: { en: "Managing Files", vi: "Quản lý tệp" } },
  { id: "text", name: { en: "Viewing & Editing Text", vi: "Xem & Soạn thảo văn bản" } },
  { id: "permissions", name: { en: "Permissions", vi: "Phân quyền" } },
  { id: "users", name: { en: "Users & Groups", vi: "Người dùng & Nhóm" } },
  { id: "processes", name: { en: "Processes & System", vi: "Tiến trình & Hệ thống" } },
  { id: "packages", name: { en: "Package Management", vi: "Quản lý gói phần mềm" } },
  { id: "networking", name: { en: "Networking", vi: "Mạng" } },
  { id: "shell", name: { en: "Shell & Scripting", vi: "Shell & Viết script" } }
];

const QUESTIONS = [
  {
    id: 1,
    topic: "basics",
    answer: 0,
    en: {
      question: "Who created the Linux kernel?",
      options: ["Linus Torvalds", "Richard Stallman", "Dennis Ritchie", "Steve Jobs"],
      explanation: "Linus Torvalds started Linux as a hobby project while studying in Finland and announced it in 1991."
    },
    vi: {
      question: "Ai là người tạo ra nhân (kernel) Linux?",
      options: ["Linus Torvalds", "Richard Stallman", "Dennis Ritchie", "Steve Jobs"],
      explanation: "Linus Torvalds bắt đầu viết Linux như một dự án sở thích khi còn là sinh viên ở Phần Lan và công bố nó vào năm 1991."
    }
  },
  {
    id: 2,
    topic: "basics",
    answer: 3,
    en: {
      question: "In which year was the first version of the Linux kernel released?",
      options: ["1985", "2001", "1995", "1991"],
      explanation: "Linux 0.01 was released in September 1991."
    },
    vi: {
      question: "Phiên bản đầu tiên của nhân Linux được phát hành vào năm nào?",
      options: ["1985", "2001", "1995", "1991"],
      explanation: "Linux 0.01 được phát hành vào tháng 9 năm 1991."
    }
  },
  {
    id: 3,
    topic: "basics",
    answer: 3,
    en: {
      question: "What is the Linux kernel?",
      options: ["A graphical desktop environment", "A web browser", "A text editor", "The core of the operating system that manages hardware, memory and processes"],
      explanation: "The kernel sits between the hardware and your programs. It manages the CPU, memory, devices and running processes."
    },
    vi: {
      question: "Nhân (kernel) Linux là gì?",
      options: ["Một môi trường đồ họa cho máy tính để bàn", "Một trình duyệt web", "Một trình soạn thảo văn bản", "Phần lõi của hệ điều hành, quản lý phần cứng, bộ nhớ và các tiến trình"],
      explanation: "Nhân nằm giữa phần cứng và các chương trình của bạn. Nó quản lý CPU, bộ nhớ, thiết bị và các tiến trình đang chạy."
    }
  },
  {
    id: 4,
    topic: "basics",
    answer: 3,
    en: {
      question: "Under which license is the Linux kernel distributed?",
      options: ["A proprietary, paid license", "Apache License 2.0", "MIT License", "GNU General Public License version 2 (GPLv2)"],
      explanation: "The kernel is released under GPLv2, which keeps its source code free to use, study, modify and share."
    },
    vi: {
      question: "Nhân Linux được phân phối theo giấy phép nào?",
      options: ["Một giấy phép độc quyền, phải trả phí", "Giấy phép Apache 2.0", "Giấy phép MIT", "Giấy phép Công cộng GNU phiên bản 2 (GPLv2)"],
      explanation: "Nhân Linux được phát hành theo GPLv2, giấy phép bảo đảm mã nguồn luôn được tự do sử dụng, nghiên cứu, chỉnh sửa và chia sẻ."
    }
  },
  {
    id: 5,
    topic: "basics",
    answer: 1,
    en: {
      question: "What is a Linux distribution (\"distro\")?",
      options: ["A version of the Windows kernel", "A complete operating system built from the Linux kernel plus tools, software and a package manager", "A single Linux command", "A type of computer hardware"],
      explanation: "Distributions such as Ubuntu, Fedora and Debian package the kernel together with system tools, applications and a way to install software."
    },
    vi: {
      question: "Một bản phân phối Linux (\"distro\") là gì?",
      options: ["Một phiên bản của nhân Windows", "Một hệ điều hành hoàn chỉnh gồm nhân Linux cùng các công cụ, phần mềm và trình quản lý gói", "Một lệnh Linux đơn lẻ", "Một loại phần cứng máy tính"],
      explanation: "Các bản phân phối như Ubuntu, Fedora và Debian đóng gói nhân Linux cùng các công cụ hệ thống, ứng dụng và cách thức cài đặt phần mềm."
    }
  },
  {
    id: 6,
    topic: "basics",
    answer: 1,
    en: {
      question: "Which of these is a Linux distribution?",
      options: ["Windows 11", "Ubuntu", "iOS", "macOS"],
      explanation: "Ubuntu is one of the most popular Linux distributions. macOS and iOS are Apple systems and Windows is from Microsoft."
    },
    vi: {
      question: "Đâu là một bản phân phối Linux?",
      options: ["Windows 11", "Ubuntu", "iOS", "macOS"],
      explanation: "Ubuntu là một trong những bản phân phối Linux phổ biến nhất. macOS và iOS là hệ điều hành của Apple, còn Windows là của Microsoft."
    }
  },
  {
    id: 7,
    topic: "basics",
    answer: 3,
    en: {
      question: "What is the official mascot of Linux?",
      options: ["A fox named Foxy", "A gopher named Go", "A whale named Moby", "A penguin named Tux"],
      explanation: "Tux the penguin has been the Linux mascot since 1996."
    },
    vi: {
      question: "Linh vật chính thức của Linux là gì?",
      options: ["Chú cáo tên Foxy", "Chú chuột túi má (gopher) tên Go", "Chú cá voi tên Moby", "Chú chim cánh cụt tên Tux"],
      explanation: "Chim cánh cụt Tux là linh vật của Linux từ năm 1996."
    }
  },
  {
    id: 8,
    topic: "basics",
    answer: 2,
    en: {
      question: "What is a shell in Linux?",
      options: ["A hardware driver", "The metal case around the computer", "A program that reads the commands you type and asks the operating system to run them", "A type of file system"],
      explanation: "The shell is a command interpreter. Bash, Zsh and Fish are examples of shells."
    },
    vi: {
      question: "Shell trong Linux là gì?",
      options: ["Một trình điều khiển phần cứng (driver)", "Lớp vỏ kim loại bên ngoài máy tính", "Chương trình đọc các lệnh bạn gõ và yêu cầu hệ điều hành thực thi chúng", "Một loại hệ thống tệp"],
      explanation: "Shell là trình thông dịch lệnh. Bash, Zsh và Fish là các ví dụ về shell."
    }
  },
  {
    id: 9,
    topic: "basics",
    answer: 3,
    en: {
      question: "Which shell is the default on most Linux distributions?",
      options: ["Command Prompt (cmd.exe)", "PowerShell", "Finder", "Bash"],
      explanation: "Bash (Bourne Again SHell) is the default interactive shell on most Linux distributions."
    },
    vi: {
      question: "Shell nào là shell mặc định trên hầu hết các bản phân phối Linux?",
      options: ["Command Prompt (cmd.exe)", "PowerShell", "Finder", "Bash"],
      explanation: "Bash (Bourne Again SHell) là shell tương tác mặc định trên hầu hết các bản phân phối Linux."
    }
  },
  {
    id: 10,
    topic: "basics",
    answer: 0,
    en: {
      question: "What does \"Bash\" stand for?",
      options: ["Bourne Again SHell", "Basic Shell", "Binary Access Shell", "Background Automated Shell"],
      explanation: "Bash is a free replacement for the original Bourne shell (sh), hence the pun \"Bourne Again\"."
    },
    vi: {
      question: "\"Bash\" là viết tắt của cụm từ nào?",
      options: ["Bourne Again SHell", "Basic Shell", "Binary Access Shell", "Background Automated Shell"],
      explanation: "Bash là bản thay thế tự do cho Bourne shell (sh) ban đầu, vì thế mới có cách chơi chữ \"Bourne Again\" (đọc giống \"born again\" – \"tái sinh\")."
    }
  },
  {
    id: 11,
    topic: "basics",
    answer: 0,
    en: {
      question: "Which user account has full administrative control over a Linux system?",
      options: ["root", "guest", "owner", "admin"],
      explanation: "The root user (UID 0) can do anything on the system, so it should be used with care."
    },
    vi: {
      question: "Tài khoản người dùng nào có toàn quyền quản trị hệ thống Linux?",
      options: ["root", "guest", "owner", "admin"],
      explanation: "Người dùng root (UID 0) có thể làm mọi việc trên hệ thống, vì vậy cần sử dụng thật cẩn thận."
    }
  },
  {
    id: 12,
    topic: "basics",
    answer: 3,
    en: {
      question: "What is the main difference between a CLI and a GUI?",
      options: ["A GUI is always faster than a CLI", "A CLI can only be used on servers", "There is no difference between them", "A CLI uses typed text commands, while a GUI uses windows, icons and a mouse"],
      explanation: "CLI means Command-Line Interface and GUI means Graphical User Interface. Linux supports both."
    },
    vi: {
      question: "Điểm khác biệt chính giữa CLI và GUI là gì?",
      options: ["GUI luôn nhanh hơn CLI", "CLI chỉ dùng được trên máy chủ", "Hai loại này không có gì khác nhau", "CLI dùng các lệnh gõ bằng văn bản, còn GUI dùng cửa sổ, biểu tượng và chuột"],
      explanation: "CLI là giao diện dòng lệnh (Command-Line Interface), GUI là giao diện đồ họa (Graphical User Interface). Linux hỗ trợ cả hai."
    }
  },
  {
    id: 13,
    topic: "basics",
    answer: 3,
    en: {
      question: "Which of these is a popular Linux desktop environment?",
      options: ["Explorer", "Metro", "Aqua", "GNOME"],
      explanation: "GNOME, KDE Plasma, Xfce and Cinnamon are common Linux desktop environments. Aqua is the macOS interface."
    },
    vi: {
      question: "Đâu là một môi trường máy tính để bàn (desktop environment) phổ biến trên Linux?",
      options: ["Explorer", "Metro", "Aqua", "GNOME"],
      explanation: "GNOME, KDE Plasma, Xfce và Cinnamon là các môi trường desktop phổ biến trên Linux. Aqua là giao diện của macOS."
    }
  },
  {
    id: 14,
    topic: "basics",
    answer: 0,
    en: {
      question: "Linux is \"open source\". What does that mean?",
      options: ["Its source code is publicly available to view, modify and share", "It has no security features", "It is only available as a free trial", "It can only run on open hardware"],
      explanation: "Open-source software publishes its source code so anyone can study, improve and redistribute it."
    },
    vi: {
      question: "Linux là phần mềm \"mã nguồn mở\". Điều đó có nghĩa là gì?",
      options: ["Mã nguồn của nó được công khai để mọi người xem, chỉnh sửa và chia sẻ", "Nó không có tính năng bảo mật", "Nó chỉ được cung cấp dưới dạng bản dùng thử miễn phí", "Nó chỉ chạy được trên phần cứng mở"],
      explanation: "Phần mềm mã nguồn mở công bố mã nguồn để bất kỳ ai cũng có thể nghiên cứu, cải tiến và phân phối lại."
    }
  },
  {
    id: 15,
    topic: "basics",
    answer: 2,
    en: {
      question: "Ubuntu is based on which Linux distribution?",
      options: ["Slackware", "Fedora", "Debian", "Arch Linux"],
      explanation: "Ubuntu is built on Debian and uses the same .deb package format and APT tools."
    },
    vi: {
      question: "Ubuntu được xây dựng dựa trên bản phân phối Linux nào?",
      options: ["Slackware", "Fedora", "Debian", "Arch Linux"],
      explanation: "Ubuntu được xây dựng trên Debian và dùng chung định dạng gói .deb cùng bộ công cụ APT."
    }
  },
  {
    id: 16,
    topic: "basics",
    answer: 2,
    en: {
      question: "What does pressing the Tab key do while typing a command in Bash?",
      options: ["Indents the command by four spaces", "Runs the command immediately", "Auto-completes command names and file names", "Opens a new terminal tab"],
      explanation: "Tab completion saves typing and avoids mistakes. Press Tab twice to see all possible matches."
    },
    vi: {
      question: "Nhấn phím Tab khi đang gõ lệnh trong Bash có tác dụng gì?",
      options: ["Thụt lề lệnh vào bốn dấu cách", "Chạy lệnh ngay lập tức", "Tự động hoàn thành tên lệnh và tên tệp", "Mở một tab terminal mới"],
      explanation: "Tự động hoàn thành bằng phím Tab giúp gõ nhanh hơn và tránh sai sót. Nhấn Tab hai lần để xem tất cả các khả năng phù hợp."
    }
  },
  {
    id: 17,
    topic: "basics",
    answer: 0,
    en: {
      question: "Which company develops and supports Ubuntu?",
      options: ["Canonical", "SUSE", "Red Hat", "Google"],
      explanation: "Canonical Ltd. founded and maintains Ubuntu. Red Hat is behind Fedora and RHEL; SUSE makes SUSE Linux Enterprise and sponsors openSUSE."
    },
    vi: {
      question: "Công ty nào phát triển và hỗ trợ Ubuntu?",
      options: ["Canonical", "SUSE", "Red Hat", "Google"],
      explanation: "Canonical Ltd. sáng lập và duy trì Ubuntu. Red Hat đứng sau Fedora và RHEL; SUSE phát triển SUSE Linux Enterprise và tài trợ cho dự án openSUSE."
    }
  },
  {
    id: 18,
    topic: "basics",
    answer: 3,
    en: {
      question: "Linux file names are case-sensitive. What does that mean?",
      options: ["Commands can be typed in upper or lower case", "Files must be stored inside folders called cases", "File names can only contain lowercase letters", "`File.txt` and `file.txt` are treated as two different files"],
      explanation: "Linux distinguishes upper and lower case in file names and commands. `LS` is not the same as `ls`."
    },
    vi: {
      question: "Tên tệp trong Linux phân biệt chữ hoa và chữ thường. Điều đó có nghĩa là gì?",
      options: ["Có thể gõ lệnh bằng chữ hoa hay chữ thường đều được", "Tệp phải được lưu trong các thư mục gọi là \"case\"", "Tên tệp chỉ được chứa chữ thường", "`File.txt` và `file.txt` được coi là hai tệp khác nhau"],
      explanation: "Linux phân biệt chữ hoa và chữ thường trong tên tệp và tên lệnh. `LS` không giống với `ls`."
    }
  },
  {
    id: 19,
    topic: "basics",
    answer: 0,
    en: {
      question: "Which command opens the manual page for another command, for example `ls`?",
      options: ["`man ls`", "`help-me ls`", "`doc ls`", "`guide ls`"],
      explanation: "`man` shows the manual for a command. Press `q` to quit the manual viewer. Many commands also support `--help`."
    },
    vi: {
      question: "Lệnh nào mở trang hướng dẫn sử dụng (manual) của một lệnh khác, ví dụ `ls`?",
      options: ["`man ls`", "`help-me ls`", "`doc ls`", "`guide ls`"],
      explanation: "`man` hiển thị tài liệu hướng dẫn của một lệnh. Nhấn `q` để thoát trình xem. Nhiều lệnh còn hỗ trợ tùy chọn `--help`."
    }
  },
  {
    id: 20,
    topic: "basics",
    answer: 3,
    en: {
      question: "Which command shows the version of the running Linux kernel?",
      options: ["`kernel --version`", "`linux -v`", "`version`", "`uname -r`"],
      explanation: "`uname -r` prints the kernel release, for example 6.8.0-45-generic. `uname -a` shows more system details."
    },
    vi: {
      question: "Lệnh nào hiển thị phiên bản nhân Linux đang chạy?",
      options: ["`kernel --version`", "`linux -v`", "`version`", "`uname -r`"],
      explanation: "`uname -r` in ra phiên bản nhân, ví dụ 6.8.0-45-generic. `uname -a` hiển thị thêm nhiều thông tin hệ thống."
    }
  },
  {
    id: 21,
    topic: "navigation",
    answer: 2,
    en: {
      question: "Which command prints the current working directory?",
      options: ["`here`", "`where`", "`pwd`", "`cwd`"],
      explanation: "`pwd` stands for \"print working directory\" and shows the full path of the directory you are in."
    },
    vi: {
      question: "Lệnh nào in ra thư mục làm việc hiện tại?",
      options: ["`here`", "`where`", "`pwd`", "`cwd`"],
      explanation: "`pwd` là viết tắt của \"print working directory\" và hiển thị đường dẫn đầy đủ của thư mục bạn đang đứng."
    }
  },
  {
    id: 22,
    topic: "navigation",
    answer: 1,
    en: {
      question: "Which command lists the files in a directory?",
      options: ["`cat`", "`ls`", "`show`", "`list`"],
      explanation: "`ls` lists directory contents. Add options like `-l` or `-a` for more detail."
    },
    vi: {
      question: "Lệnh nào liệt kê các tệp trong một thư mục?",
      options: ["`cat`", "`ls`", "`show`", "`list`"],
      explanation: "`ls` liệt kê nội dung thư mục. Thêm các tùy chọn như `-l` hoặc `-a` để xem chi tiết hơn."
    }
  },
  {
    id: 23,
    topic: "navigation",
    answer: 1,
    en: {
      question: "What does `cd ..` do?",
      options: ["Lists hidden files", "Moves up one level to the parent directory", "Moves to your home directory", "Moves to the root directory"],
      explanation: "`..` always refers to the parent of the current directory."
    },
    vi: {
      question: "Lệnh `cd ..` có tác dụng gì?",
      options: ["Liệt kê các tệp ẩn", "Di chuyển lên một cấp, tới thư mục cha", "Di chuyển tới thư mục chính (home) của bạn", "Di chuyển tới thư mục gốc"],
      explanation: "`..` luôn chỉ thư mục cha của thư mục hiện tại."
    }
  },
  {
    id: 24,
    topic: "navigation",
    answer: 1,
    en: {
      question: "What does `cd ~` do?",
      options: ["Changes to the root directory", "Changes to your home directory", "Does nothing", "Changes to the previous directory"],
      explanation: "`~` is a shortcut for your home directory, such as /home/alice. Running `cd` with no arguments does the same."
    },
    vi: {
      question: "Lệnh `cd ~` có tác dụng gì?",
      options: ["Chuyển tới thư mục gốc", "Chuyển tới thư mục chính (home) của bạn", "Không làm gì cả", "Chuyển về thư mục trước đó"],
      explanation: "`~` là cách viết tắt của thư mục chính của bạn, ví dụ /home/alice. Chạy `cd` không kèm tham số cũng cho kết quả tương tự."
    }
  },
  {
    id: 25,
    topic: "navigation",
    answer: 3,
    en: {
      question: "What does `cd -` do?",
      options: ["Moves to the parent directory", "Deletes the current directory", "Moves to the root directory", "Switches back to the previous directory you were in"],
      explanation: "`cd -` toggles between the current and the previous working directory."
    },
    vi: {
      question: "Lệnh `cd -` có tác dụng gì?",
      options: ["Di chuyển tới thư mục cha", "Xóa thư mục hiện tại", "Di chuyển tới thư mục gốc", "Quay lại thư mục bạn vừa ở trước đó"],
      explanation: "`cd -` chuyển qua lại giữa thư mục hiện tại và thư mục làm việc trước đó."
    }
  },
  {
    id: 26,
    topic: "navigation",
    answer: 2,
    en: {
      question: "What does the `/` directory represent?",
      options: ["The current user's home directory", "The trash folder", "The root (top) of the entire file system", "The current directory"],
      explanation: "Everything in Linux lives under `/`, the root directory. Linux has no drive letters like C: or D:."
    },
    vi: {
      question: "Thư mục `/` đại diện cho điều gì?",
      options: ["Thư mục chính của người dùng hiện tại", "Thư mục thùng rác", "Gốc (đỉnh) của toàn bộ hệ thống tệp", "Thư mục hiện tại"],
      explanation: "Mọi thứ trong Linux đều nằm dưới `/`, tức thư mục gốc. Linux không dùng ký tự ổ đĩa như C: hay D:."
    }
  },
  {
    id: 27,
    topic: "navigation",
    answer: 0,
    en: {
      question: "In a path, what does a single dot `.` refer to?",
      options: ["The current directory", "The root directory", "The home directory", "The parent directory"],
      explanation: "`.` means \"here\". For example, `./script.sh` runs script.sh from the current directory."
    },
    vi: {
      question: "Trong một đường dẫn, dấu chấm đơn `.` chỉ điều gì?",
      options: ["Thư mục hiện tại", "Thư mục gốc", "Thư mục chính (home)", "Thư mục cha"],
      explanation: "`.` nghĩa là \"tại đây\". Ví dụ, `./script.sh` chạy tệp script.sh nằm trong thư mục hiện tại."
    }
  },
  {
    id: 28,
    topic: "navigation",
    answer: 0,
    en: {
      question: "Which option makes `ls` show hidden files?",
      options: ["`ls -a`", "`ls -h`", "`ls -r`", "`ls -s`"],
      explanation: "`-a` (all) includes entries whose names start with a dot."
    },
    vi: {
      question: "Tùy chọn nào giúp `ls` hiển thị cả các tệp ẩn?",
      options: ["`ls -a`", "`ls -h`", "`ls -r`", "`ls -s`"],
      explanation: "`-a` (all – tất cả) hiển thị cả những mục có tên bắt đầu bằng dấu chấm."
    }
  },
  {
    id: 29,
    topic: "navigation",
    answer: 0,
    en: {
      question: "How are hidden files identified in Linux?",
      options: ["Their names start with a dot, such as `.bashrc`", "They have no permissions", "They have a .hidden extension", "They are stored in a /hidden directory"],
      explanation: "Any file or directory whose name begins with `.` is hidden from a normal `ls`."
    },
    vi: {
      question: "Tệp ẩn trong Linux được nhận biết như thế nào?",
      options: ["Tên của chúng bắt đầu bằng dấu chấm, ví dụ `.bashrc`", "Chúng không có quyền truy cập nào", "Chúng có phần mở rộng .hidden", "Chúng được lưu trong thư mục /hidden"],
      explanation: "Bất kỳ tệp hay thư mục nào có tên bắt đầu bằng `.` đều bị ẩn khi chạy `ls` thông thường."
    }
  },
  {
    id: 30,
    topic: "navigation",
    answer: 1,
    en: {
      question: "What does `ls -l` show?",
      options: ["Only the last file in the directory", "A long listing with permissions, owner, size and modification date", "All files on a single line", "Only symbolic links"],
      explanation: "The long format shows one file per line with its permissions, link count, owner, group, size and timestamp."
    },
    vi: {
      question: "Lệnh `ls -l` hiển thị gì?",
      options: ["Chỉ tệp cuối cùng trong thư mục", "Danh sách chi tiết gồm quyền, chủ sở hữu, kích thước và ngày sửa đổi", "Tất cả các tệp trên một dòng", "Chỉ các liên kết mềm (symbolic link)"],
      explanation: "Định dạng dài hiển thị mỗi tệp trên một dòng với quyền, số liên kết, chủ sở hữu, nhóm, kích thước và thời gian sửa đổi."
    }
  },
  {
    id: 31,
    topic: "navigation",
    answer: 3,
    en: {
      question: "What does `ls -lh` add compared to `ls -l`?",
      options: ["It shows only the largest files", "It shows the files in reverse order", "It shows hidden files", "It shows file sizes in human-readable units like K, M and G"],
      explanation: "`-h` (human-readable) prints sizes like 4.0K or 2.3M instead of raw byte counts."
    },
    vi: {
      question: "So với `ls -l`, lệnh `ls -lh` bổ sung điều gì?",
      options: ["Chỉ hiển thị các tệp lớn nhất", "Hiển thị các tệp theo thứ tự ngược lại", "Hiển thị các tệp ẩn", "Hiển thị kích thước tệp theo đơn vị dễ đọc như K, M, G"],
      explanation: "`-h` (human-readable – dễ đọc) in kích thước dạng 4.0K hoặc 2.3M thay vì số byte thô."
    }
  },
  {
    id: 32,
    topic: "navigation",
    answer: 2,
    en: {
      question: "Which directory contains the home directories of regular users?",
      options: ["`/root`", "`/users`", "`/home`", "`/usr`"],
      explanation: "Regular users get a directory such as /home/alice. The root user's home is /root."
    },
    vi: {
      question: "Thư mục nào chứa thư mục chính (home) của những người dùng thông thường?",
      options: ["`/root`", "`/users`", "`/home`", "`/usr`"],
      explanation: "Mỗi người dùng thông thường có một thư mục như /home/alice. Thư mục chính của người dùng root là /root."
    }
  },
  {
    id: 33,
    topic: "navigation",
    answer: 3,
    en: {
      question: "Which directory mainly stores system-wide configuration files?",
      options: ["`/tmp`", "`/var`", "`/bin`", "`/etc`"],
      explanation: "/etc holds configuration files such as /etc/passwd, /etc/hosts and /etc/fstab."
    },
    vi: {
      question: "Thư mục nào chủ yếu lưu các tệp cấu hình của toàn hệ thống?",
      options: ["`/tmp`", "`/var`", "`/bin`", "`/etc`"],
      explanation: "/etc chứa các tệp cấu hình như /etc/passwd, /etc/hosts và /etc/fstab."
    }
  },
  {
    id: 34,
    topic: "navigation",
    answer: 2,
    en: {
      question: "Which directory holds variable data such as log files?",
      options: ["`/etc`", "`/boot`", "`/var`", "`/opt`"],
      explanation: "/var stores data that changes often. System logs are usually found in /var/log."
    },
    vi: {
      question: "Thư mục nào chứa dữ liệu thay đổi thường xuyên, chẳng hạn như tệp nhật ký (log)?",
      options: ["`/etc`", "`/boot`", "`/var`", "`/opt`"],
      explanation: "/var lưu dữ liệu hay thay đổi. Nhật ký hệ thống thường nằm trong /var/log."
    }
  },
  {
    id: 35,
    topic: "navigation",
    answer: 1,
    en: {
      question: "Which directory is used for temporary files?",
      options: ["`/swap`", "`/tmp`", "`/temp`", "`/trash`"],
      explanation: "Programs and users can write temporary files to /tmp. It is often cleared on reboot."
    },
    vi: {
      question: "Thư mục nào được dùng cho các tệp tạm thời?",
      options: ["`/swap`", "`/tmp`", "`/temp`", "`/trash`"],
      explanation: "Chương trình và người dùng có thể ghi tệp tạm vào /tmp. Thư mục này thường được dọn sạch khi khởi động lại máy."
    }
  },
  {
    id: 36,
    topic: "navigation",
    answer: 3,
    en: {
      question: "What is the home directory of the root user?",
      options: ["`/admin`", "`/`", "`/home/root`", "`/root`"],
      explanation: "The root user's home is /root, kept separate from /home so it stays available even if /home is unavailable."
    },
    vi: {
      question: "Thư mục chính (home) của người dùng root là gì?",
      options: ["`/admin`", "`/`", "`/home/root`", "`/root`"],
      explanation: "Thư mục chính của root là /root, được tách riêng khỏi /home để vẫn dùng được ngay cả khi /home gặp sự cố hoặc không khả dụng."
    }
  },
  {
    id: 37,
    topic: "navigation",
    answer: 0,
    en: {
      question: "Which directory contains the files needed to start the system, such as the kernel?",
      options: ["`/boot`", "`/kernel`", "`/init`", "`/start`"],
      explanation: "/boot holds the kernel image, the initial RAM disk and boot loader files."
    },
    vi: {
      question: "Thư mục nào chứa các tệp cần thiết để khởi động hệ thống, chẳng hạn như nhân Linux?",
      options: ["`/boot`", "`/kernel`", "`/init`", "`/start`"],
      explanation: "/boot chứa tệp nhân (kernel), đĩa RAM khởi tạo (initramfs) và các tệp của trình nạp khởi động (boot loader)."
    }
  },
  {
    id: 38,
    topic: "navigation",
    answer: 3,
    en: {
      question: "Which of these is an absolute path?",
      options: ["`../alice`", "`docs/notes.txt`", "`./script.sh`", "`/home/alice/docs`"],
      explanation: "Absolute paths start with `/` and describe the location from the root directory. The others are relative paths."
    },
    vi: {
      question: "Đâu là một đường dẫn tuyệt đối?",
      options: ["`../alice`", "`docs/notes.txt`", "`./script.sh`", "`/home/alice/docs`"],
      explanation: "Đường dẫn tuyệt đối bắt đầu bằng `/` và mô tả vị trí tính từ thư mục gốc. Các đáp án còn lại là đường dẫn tương đối."
    }
  },
  {
    id: 39,
    topic: "navigation",
    answer: 2,
    en: {
      question: "Which directory represents hardware devices as special files?",
      options: ["`/devices`", "`/drivers`", "`/dev`", "`/hw`"],
      explanation: "/dev contains device files such as /dev/sda (a disk) and /dev/null."
    },
    vi: {
      question: "Thư mục nào biểu diễn các thiết bị phần cứng dưới dạng tệp đặc biệt?",
      options: ["`/devices`", "`/drivers`", "`/dev`", "`/hw`"],
      explanation: "/dev chứa các tệp thiết bị như /dev/sda (một ổ đĩa) và /dev/null."
    }
  },
  {
    id: 40,
    topic: "navigation",
    answer: 1,
    en: {
      question: "Where are removable media like USB drives usually mounted automatically on desktop systems?",
      options: ["Under `/boot`", "Under `/media`", "Under `/usb`", "Under `/etc`"],
      explanation: "Ubuntu and Debian mount removable drives under /media/username/ (some distributions, such as Fedora, use /run/media/username/). /mnt is traditionally used for manual, temporary mounts."
    },
    vi: {
      question: "Trên máy tính để bàn, các thiết bị lưu trữ di động như USB thường được tự động gắn (mount) vào đâu?",
      options: ["Bên trong `/boot`", "Bên trong `/media`", "Bên trong `/usb`", "Bên trong `/etc`"],
      explanation: "Ubuntu và Debian tự động gắn ổ di động vào /media/tên_người_dùng/ (một số bản phân phối như Fedora dùng /run/media/tên_người_dùng/). Thư mục /mnt theo truyền thống dùng để gắn thủ công, tạm thời."
    }
  },
  {
    id: 41,
    topic: "files",
    answer: 0,
    en: {
      question: "Which command creates a new directory?",
      options: ["`mkdir`", "`newdir`", "`touch`", "`makefolder`"],
      explanation: "`mkdir projects` creates a directory named projects."
    },
    vi: {
      question: "Lệnh nào tạo một thư mục mới?",
      options: ["`mkdir`", "`newdir`", "`touch`", "`makefolder`"],
      explanation: "`mkdir projects` tạo một thư mục tên là projects."
    }
  },
  {
    id: 42,
    topic: "files",
    answer: 1,
    en: {
      question: "Which command creates an empty file, or updates the timestamp of an existing one?",
      options: ["`mkfile`", "`touch`", "`new`", "`create`"],
      explanation: "`touch notes.txt` creates notes.txt if it does not exist, or updates its modification time if it does."
    },
    vi: {
      question: "Lệnh nào tạo một tệp rỗng, hoặc cập nhật thời gian sửa đổi của một tệp đã có?",
      options: ["`mkfile`", "`touch`", "`new`", "`create`"],
      explanation: "`touch notes.txt` tạo tệp notes.txt nếu chưa tồn tại, hoặc cập nhật thời gian sửa đổi nếu tệp đã có."
    }
  },
  {
    id: 43,
    topic: "files",
    answer: 2,
    en: {
      question: "Which command copies files?",
      options: ["`mv`", "`copy`", "`cp`", "`cpy`"],
      explanation: "`cp source.txt dest.txt` copies a file. `mv` moves or renames instead."
    },
    vi: {
      question: "Lệnh nào dùng để sao chép tệp?",
      options: ["`mv`", "`copy`", "`cp`", "`cpy`"],
      explanation: "`cp source.txt dest.txt` sao chép một tệp. Còn `mv` thì di chuyển hoặc đổi tên tệp."
    }
  },
  {
    id: 44,
    topic: "files",
    answer: 3,
    en: {
      question: "Which command moves or renames files?",
      options: ["`ren`", "`cp`", "`move`", "`mv`"],
      explanation: "`mv` moves a file to a new location; moving it to a new name in the same directory renames it."
    },
    vi: {
      question: "Lệnh nào dùng để di chuyển hoặc đổi tên tệp?",
      options: ["`ren`", "`cp`", "`move`", "`mv`"],
      explanation: "`mv` di chuyển tệp tới vị trí mới; di chuyển tệp sang một tên mới trong cùng thư mục chính là đổi tên."
    }
  },
  {
    id: 45,
    topic: "files",
    answer: 0,
    en: {
      question: "Which command deletes a file?",
      options: ["`rm`", "`delete`", "`erase`", "`del`"],
      explanation: "`rm file.txt` removes a file. There is no recycle bin in the terminal, so be careful."
    },
    vi: {
      question: "Lệnh nào dùng để xóa một tệp?",
      options: ["`rm`", "`delete`", "`erase`", "`del`"],
      explanation: "`rm file.txt` xóa một tệp. Trên terminal không có thùng rác, vì vậy hãy cẩn thận."
    }
  },
  {
    id: 46,
    topic: "files",
    answer: 3,
    en: {
      question: "How do you delete a directory and everything inside it?",
      options: ["`rmdir --all dirname`", "`del /s dirname`", "`rm dirname`", "`rm -r dirname`"],
      explanation: "`-r` (recursive) removes the directory and all of its contents. Plain `rm` refuses to delete directories."
    },
    vi: {
      question: "Làm thế nào để xóa một thư mục cùng toàn bộ nội dung bên trong?",
      options: ["`rmdir --all dirname`", "`del /s dirname`", "`rm dirname`", "`rm -r dirname`"],
      explanation: "`-r` (recursive – đệ quy) xóa thư mục và mọi thứ bên trong. Lệnh `rm` không kèm tùy chọn này sẽ từ chối xóa thư mục."
    }
  },
  {
    id: 47,
    topic: "files",
    answer: 3,
    en: {
      question: "What does `rmdir` do?",
      options: ["Renames a directory", "Removes a directory and all of its contents", "Lists directories", "Removes an empty directory"],
      explanation: "`rmdir` only works on empty directories, which makes it a safe way to clean up."
    },
    vi: {
      question: "Lệnh `rmdir` có tác dụng gì?",
      options: ["Đổi tên một thư mục", "Xóa một thư mục cùng toàn bộ nội dung bên trong", "Liệt kê các thư mục", "Xóa một thư mục rỗng"],
      explanation: "`rmdir` chỉ hoạt động với thư mục rỗng, vì vậy đây là cách dọn dẹp an toàn."
    }
  },
  {
    id: 48,
    topic: "files",
    answer: 3,
    en: {
      question: "Which command creates the nested directories a/b/c in one step?",
      options: ["`mkdir a b c`", "`mkdir -r a/b/c`", "`mkdir -n a/b/c`", "`mkdir -p a/b/c`"],
      explanation: "`-p` (parents) creates any missing parent directories. `mkdir a b c` would create three separate directories."
    },
    vi: {
      question: "Lệnh nào tạo các thư mục lồng nhau a/b/c chỉ trong một bước?",
      options: ["`mkdir a b c`", "`mkdir -r a/b/c`", "`mkdir -n a/b/c`", "`mkdir -p a/b/c`"],
      explanation: "`-p` (parents) tự tạo các thư mục cha còn thiếu. Còn `mkdir a b c` sẽ tạo ba thư mục riêng biệt."
    }
  },
  {
    id: 49,
    topic: "files",
    answer: 0,
    en: {
      question: "How do you copy a directory together with all its contents?",
      options: ["`cp -r source dest`", "`cp -d source dest`", "`cp source dest`", "`cp -f source dest`"],
      explanation: "`-r` (recursive) is needed to copy directories. Without it, `cp` skips directories."
    },
    vi: {
      question: "Làm thế nào để sao chép một thư mục cùng toàn bộ nội dung bên trong?",
      options: ["`cp -r source dest`", "`cp -d source dest`", "`cp source dest`", "`cp -f source dest`"],
      explanation: "Cần dùng `-r` (đệ quy) để sao chép thư mục. Nếu thiếu tùy chọn này, `cp` sẽ bỏ qua thư mục."
    }
  },
  {
    id: 50,
    topic: "files",
    answer: 0,
    en: {
      question: "What does `rm -i file.txt` do?",
      options: ["Asks for confirmation before deleting the file", "Deletes the file without asking", "Ignores the file", "Moves the file to the trash"],
      explanation: "`-i` (interactive) prompts before each removal."
    },
    vi: {
      question: "Lệnh `rm -i file.txt` có tác dụng gì?",
      options: ["Hỏi xác nhận trước khi xóa tệp", "Xóa tệp mà không hỏi", "Bỏ qua tệp", "Chuyển tệp vào thùng rác"],
      explanation: "`-i` (interactive – tương tác) hỏi lại trước mỗi lần xóa."
    }
  },
  {
    id: 51,
    topic: "files",
    answer: 0,
    en: {
      question: "Which command creates a symbolic (soft) link?",
      options: ["`ln -s target linkname`", "`sym target linkname`", "`ln target linkname`", "`mklink target linkname`"],
      explanation: "`ln -s` creates a symbolic link (a shortcut). `ln` without `-s` creates a hard link; `mklink` is a Windows command."
    },
    vi: {
      question: "Lệnh nào tạo một liên kết mềm (symbolic link)?",
      options: ["`ln -s target linkname`", "`sym target linkname`", "`ln target linkname`", "`mklink target linkname`"],
      explanation: "`ln -s` tạo liên kết mềm (giống lối tắt). `ln` không có `-s` sẽ tạo liên kết cứng (hard link); `mklink` là lệnh của Windows."
    }
  },
  {
    id: 52,
    topic: "files",
    answer: 1,
    en: {
      question: "Which command searches the /home directory tree for a file named notes.txt?",
      options: ["`grep /home notes.txt`", "`find /home -name \"notes.txt\"`", "`ls --find notes.txt`", "`search /home notes.txt`"],
      explanation: "`find` walks through directories and matches files by name, size, type, date and more."
    },
    vi: {
      question: "Lệnh nào tìm trong cây thư mục /home một tệp tên là notes.txt?",
      options: ["`grep /home notes.txt`", "`find /home -name \"notes.txt\"`", "`ls --find notes.txt`", "`search /home notes.txt`"],
      explanation: "`find` duyệt qua các thư mục và tìm tệp theo tên, kích thước, loại, ngày tháng và nhiều tiêu chí khác."
    }
  },
  {
    id: 53,
    topic: "files",
    answer: 1,
    en: {
      question: "What does the wildcard `*` match in a file name?",
      options: ["Only hidden files", "Any number of characters, including none", "Only numbers", "Exactly one character"],
      explanation: "For example, `*.log` matches every file ending in .log."
    },
    vi: {
      question: "Ký tự đại diện `*` khớp với gì trong tên tệp?",
      options: ["Chỉ các tệp ẩn", "Bất kỳ số lượng ký tự nào, kể cả không có ký tự nào", "Chỉ các chữ số", "Đúng một ký tự"],
      explanation: "Ví dụ, `*.log` khớp với mọi tệp có đuôi .log."
    }
  },
  {
    id: 54,
    topic: "files",
    answer: 1,
    en: {
      question: "What does the wildcard `?` match in a file name?",
      options: ["Nothing at all", "Exactly one character", "Any number of characters", "Only a literal question mark"],
      explanation: "`file?.txt` matches file1.txt and fileA.txt, but not file10.txt."
    },
    vi: {
      question: "Ký tự đại diện `?` khớp với gì trong tên tệp?",
      options: ["Không khớp với gì cả", "Đúng một ký tự", "Bất kỳ số lượng ký tự nào", "Chỉ đúng dấu chấm hỏi"],
      explanation: "`file?.txt` khớp với file1.txt và fileA.txt, nhưng không khớp với file10.txt."
    }
  },
  {
    id: 55,
    topic: "files",
    answer: 1,
    en: {
      question: "What does `ls *.txt` list?",
      options: ["Only hidden .txt files", "All files ending in .txt in the current directory", "The text inside every file", "Only a file literally named *.txt"],
      explanation: "The shell expands `*.txt` into the list of matching file names before running `ls`."
    },
    vi: {
      question: "Lệnh `ls *.txt` liệt kê những gì?",
      options: ["Chỉ các tệp .txt bị ẩn", "Tất cả các tệp có đuôi .txt trong thư mục hiện tại", "Nội dung văn bản bên trong mọi tệp", "Chỉ một tệp có tên đúng là *.txt"],
      explanation: "Shell mở rộng `*.txt` thành danh sách các tên tệp phù hợp trước khi chạy `ls`."
    }
  },
  {
    id: 56,
    topic: "files",
    answer: 2,
    en: {
      question: "Which command tells you what kind of data a file contains (text, image, program, etc.)?",
      options: ["`kind`", "`typeof`", "`file`", "`format`"],
      explanation: "`file photo.jpg` might print \"JPEG image data\". Linux does not rely on extensions to know a file's type."
    },
    vi: {
      question: "Lệnh nào cho biết một tệp chứa loại dữ liệu gì (văn bản, hình ảnh, chương trình, ...)?",
      options: ["`kind`", "`typeof`", "`file`", "`format`"],
      explanation: "`file photo.jpg` có thể in ra \"JPEG image data\". Linux không dựa vào phần mở rộng để xác định loại tệp."
    }
  },
  {
    id: 57,
    topic: "files",
    answer: 3,
    en: {
      question: "What does `cp -i` do?",
      options: ["Copies only images", "Ignores all errors", "Copies only invisible files", "Asks before overwriting an existing file"],
      explanation: "`-i` (interactive) helps prevent accidentally overwriting files."
    },
    vi: {
      question: "Lệnh `cp -i` có tác dụng gì?",
      options: ["Chỉ sao chép hình ảnh", "Bỏ qua mọi lỗi", "Chỉ sao chép các tệp ẩn", "Hỏi trước khi ghi đè lên một tệp đã tồn tại"],
      explanation: "`-i` (interactive) giúp tránh vô tình ghi đè lên tệp."
    }
  },
  {
    id: 58,
    topic: "files",
    answer: 1,
    en: {
      question: "What does `mv old.txt new.txt` do when both names are in the same directory?",
      options: ["Deletes both files", "Renames old.txt to new.txt", "Merges the two files", "Copies old.txt to new.txt"],
      explanation: "Linux has no separate rename command for basic use; `mv` is used to rename files."
    },
    vi: {
      question: "Lệnh `mv old.txt new.txt` làm gì khi cả hai tên nằm trong cùng một thư mục?",
      options: ["Xóa cả hai tệp", "Đổi tên old.txt thành new.txt", "Gộp hai tệp lại với nhau", "Sao chép old.txt thành new.txt"],
      explanation: "Với nhu cầu cơ bản, Linux dùng `mv` để đổi tên tệp chứ không cần một lệnh đổi tên riêng."
    }
  },
  {
    id: 59,
    topic: "files",
    answer: 1,
    en: {
      question: "Which command shows detailed information about a file, such as its size, inode and timestamps?",
      options: ["`fileinfo`", "`stat`", "`about`", "`details`"],
      explanation: "`stat file.txt` shows the file's size, permissions, owner, inode number and access/modify/change times."
    },
    vi: {
      question: "Lệnh nào hiển thị thông tin chi tiết về một tệp, như kích thước, inode và các mốc thời gian?",
      options: ["`fileinfo`", "`stat`", "`about`", "`details`"],
      explanation: "`stat file.txt` hiển thị kích thước, quyền, chủ sở hữu, số inode và các thời điểm truy cập/sửa đổi/thay đổi của tệp."
    }
  },
  {
    id: 60,
    topic: "files",
    answer: 0,
    en: {
      question: "Which command quickly finds files by name using a prebuilt database?",
      options: ["`locate`", "`where`", "`seek`", "`find`"],
      explanation: "`locate` searches an index that is updated periodically (with `updatedb`), so it is very fast. `find` searches the disk live."
    },
    vi: {
      question: "Lệnh nào tìm tệp theo tên rất nhanh nhờ một cơ sở dữ liệu được tạo sẵn?",
      options: ["`locate`", "`where`", "`seek`", "`find`"],
      explanation: "`locate` tìm trong một chỉ mục được cập nhật định kỳ (bằng `updatedb`), nên rất nhanh. Còn `find` tìm trực tiếp trên ổ đĩa."
    }
  },
  {
    id: 61,
    topic: "text",
    answer: 3,
    en: {
      question: "Which command displays the entire contents of a file in the terminal?",
      options: ["`show`", "`print`", "`open`", "`cat`"],
      explanation: "`cat file.txt` prints the whole file. It is short for \"concatenate\"."
    },
    vi: {
      question: "Lệnh nào hiển thị toàn bộ nội dung của một tệp ra terminal?",
      options: ["`show`", "`print`", "`open`", "`cat`"],
      explanation: "`cat file.txt` in ra toàn bộ tệp. Tên lệnh là viết tắt của \"concatenate\" (nối)."
    }
  },
  {
    id: 62,
    topic: "text",
    answer: 2,
    en: {
      question: "Which command shows a file one screen at a time and lets you scroll up and down?",
      options: ["`cat`", "`touch`", "`less`", "`echo`"],
      explanation: "`less` is a pager. Use the arrow keys or Space to scroll, `/` to search and `q` to quit."
    },
    vi: {
      question: "Lệnh nào hiển thị tệp theo từng trang màn hình và cho phép cuộn lên xuống?",
      options: ["`cat`", "`touch`", "`less`", "`echo`"],
      explanation: "`less` là trình phân trang. Dùng phím mũi tên hoặc Space để cuộn, `/` để tìm kiếm và `q` để thoát."
    }
  },
  {
    id: 63,
    topic: "text",
    answer: 1,
    en: {
      question: "Which command shows the first 10 lines of a file by default?",
      options: ["`top`", "`head`", "`tail`", "`first`"],
      explanation: "`head file.txt` prints the first 10 lines. Use `head -n 5` for a different number."
    },
    vi: {
      question: "Theo mặc định, lệnh nào hiển thị 10 dòng đầu tiên của một tệp?",
      options: ["`top`", "`head`", "`tail`", "`first`"],
      explanation: "`head file.txt` in ra 10 dòng đầu. Dùng `head -n 5` để chọn số dòng khác."
    }
  },
  {
    id: 64,
    topic: "text",
    answer: 3,
    en: {
      question: "Which command shows the last 10 lines of a file by default?",
      options: ["`head`", "`last`", "`end`", "`tail`"],
      explanation: "`tail file.txt` prints the last 10 lines. (`last` is a different command that shows recent logins.)"
    },
    vi: {
      question: "Theo mặc định, lệnh nào hiển thị 10 dòng cuối cùng của một tệp?",
      options: ["`head`", "`last`", "`end`", "`tail`"],
      explanation: "`tail file.txt` in ra 10 dòng cuối. (`last` là một lệnh khác, dùng để xem các lần đăng nhập gần đây.)"
    }
  },
  {
    id: 65,
    topic: "text",
    answer: 2,
    en: {
      question: "What does `tail -f /var/log/syslog` do?",
      options: ["Deletes the log file", "Shows the first lines of the file", "Shows the end of the file and keeps printing new lines as they are added", "Fixes formatting errors in the file"],
      explanation: "`-f` (follow) is very useful for watching log files in real time. Press Ctrl+C to stop."
    },
    vi: {
      question: "Lệnh `tail -f /var/log/syslog` có tác dụng gì?",
      options: ["Xóa tệp nhật ký", "Hiển thị các dòng đầu tiên của tệp", "Hiển thị phần cuối của tệp và tiếp tục in ra các dòng mới khi chúng được thêm vào", "Sửa lỗi định dạng trong tệp"],
      explanation: "`-f` (follow – theo dõi) rất hữu ích để theo dõi tệp nhật ký theo thời gian thực. Nhấn Ctrl+C để dừng."
    }
  },
  {
    id: 66,
    topic: "text",
    answer: 2,
    en: {
      question: "Which command searches for a text pattern inside files?",
      options: ["`find`", "`search`", "`grep`", "`locate`"],
      explanation: "`grep \"error\" app.log` prints every line in app.log that contains \"error\"."
    },
    vi: {
      question: "Lệnh nào tìm kiếm một mẫu văn bản bên trong các tệp?",
      options: ["`find`", "`search`", "`grep`", "`locate`"],
      explanation: "`grep \"error\" app.log` in ra mọi dòng trong app.log có chứa \"error\"."
    }
  },
  {
    id: 67,
    topic: "text",
    answer: 0,
    en: {
      question: "What does `grep -i \"error\" app.log` do?",
      options: ["Searches for \"error\" while ignoring upper and lower case", "Inserts \"error\" into the file", "Shows only lines that do not contain \"error\"", "Counts the lines in the file"],
      explanation: "`-i` (ignore case) matches \"error\", \"Error\" and \"ERROR\"."
    },
    vi: {
      question: "Lệnh `grep -i \"error\" app.log` có tác dụng gì?",
      options: ["Tìm \"error\" mà không phân biệt chữ hoa, chữ thường", "Chèn \"error\" vào tệp", "Chỉ hiển thị các dòng không chứa \"error\"", "Đếm số dòng trong tệp"],
      explanation: "`-i` (ignore case – bỏ qua hoa/thường) khớp với cả \"error\", \"Error\" và \"ERROR\"."
    }
  },
  {
    id: 68,
    topic: "text",
    answer: 3,
    en: {
      question: "What does `grep -v \"debug\" app.log` do?",
      options: ["Shows only the lines that contain \"debug\"", "Shows the grep version", "Prints the file verbosely", "Shows the lines that do NOT contain \"debug\""],
      explanation: "`-v` inverts the match, which is handy for filtering out noise."
    },
    vi: {
      question: "Lệnh `grep -v \"debug\" app.log` có tác dụng gì?",
      options: ["Chỉ hiển thị các dòng có chứa \"debug\"", "Hiển thị phiên bản của grep", "In tệp ra kèm nhiều thông tin chi tiết", "Hiển thị các dòng KHÔNG chứa \"debug\""],
      explanation: "`-v` đảo ngược kết quả khớp, rất tiện để lọc bỏ những dòng không cần thiết."
    }
  },
  {
    id: 69,
    topic: "text",
    answer: 2,
    en: {
      question: "What does `wc -l file.txt` print?",
      options: ["The number of words in the file", "The number of characters in the file", "The number of lines in the file", "The last line of the file"],
      explanation: "`wc` (word count) counts lines (`-l`), words (`-w`) and bytes (`-c`)."
    },
    vi: {
      question: "Lệnh `wc -l file.txt` in ra gì?",
      options: ["Số từ trong tệp", "Số ký tự trong tệp", "Số dòng trong tệp", "Dòng cuối cùng của tệp"],
      explanation: "`wc` (word count) đếm số dòng (`-l`), số từ (`-w`) và số byte (`-c`)."
    }
  },
  {
    id: 70,
    topic: "text",
    answer: 2,
    en: {
      question: "Which command sorts lines of text alphabetically?",
      options: ["`order`", "`uniq`", "`sort`", "`arrange`"],
      explanation: "`sort names.txt` prints the lines in order. Use `-r` to reverse and `-n` for numeric sorting."
    },
    vi: {
      question: "Lệnh nào sắp xếp các dòng văn bản theo thứ tự bảng chữ cái?",
      options: ["`order`", "`uniq`", "`sort`", "`arrange`"],
      explanation: "`sort names.txt` in ra các dòng đã được sắp xếp. Dùng `-r` để đảo ngược thứ tự và `-n` để sắp xếp theo số."
    }
  },
  {
    id: 71,
    topic: "text",
    answer: 2,
    en: {
      question: "What does the `uniq` command do?",
      options: ["Counts the users on the system", "Shuffles lines randomly", "Removes repeated lines that are next to each other", "Renames a file to a unique name"],
      explanation: "Because `uniq` only removes adjacent duplicates, it is usually used after `sort`, as in `sort list.txt | uniq`."
    },
    vi: {
      question: "Lệnh `uniq` có tác dụng gì?",
      options: ["Đếm số người dùng trên hệ thống", "Xáo trộn các dòng một cách ngẫu nhiên", "Loại bỏ các dòng lặp lại nằm liền kề nhau", "Đổi tên tệp thành một tên duy nhất"],
      explanation: "Vì `uniq` chỉ loại bỏ các dòng trùng nằm liền nhau, nó thường được dùng sau `sort`, ví dụ `sort list.txt | uniq`."
    }
  },
  {
    id: 72,
    topic: "text",
    answer: 1,
    en: {
      question: "Which command prints a line of text to the terminal?",
      options: ["`say`", "`echo`", "`show`", "`output`"],
      explanation: "`echo \"Hello\"` prints Hello. It is commonly used in scripts."
    },
    vi: {
      question: "Lệnh nào in một dòng văn bản ra terminal?",
      options: ["`say`", "`echo`", "`show`", "`output`"],
      explanation: "`echo \"Hello\"` in ra Hello. Lệnh này thường được dùng trong các script."
    }
  },
  {
    id: 73,
    topic: "text",
    answer: 0,
    en: {
      question: "Which of these is a simple, beginner-friendly terminal text editor?",
      options: ["`nano`", "`curl`", "`gcc`", "`vlc`"],
      explanation: "`nano` shows its keyboard shortcuts at the bottom of the screen, which makes it easy to learn."
    },
    vi: {
      question: "Đâu là một trình soạn thảo văn bản trên terminal đơn giản, thân thiện với người mới bắt đầu?",
      options: ["`nano`", "`curl`", "`gcc`", "`vlc`"],
      explanation: "`nano` hiển thị các phím tắt ở cuối màn hình nên rất dễ học."
    }
  },
  {
    id: 74,
    topic: "text",
    answer: 0,
    en: {
      question: "In vim, which command saves the file and quits?",
      options: ["`:wq`", "`:q!`", "`Ctrl+C`", "`:s`"],
      explanation: "`:w` writes (saves) and `:q` quits, so `:wq` does both. Press Esc first to make sure you are in Normal mode."
    },
    vi: {
      question: "Trong vim, lệnh nào lưu tệp rồi thoát?",
      options: ["`:wq`", "`:q!`", "`Ctrl+C`", "`:s`"],
      explanation: "`:w` ghi (lưu) và `:q` thoát, nên `:wq` làm cả hai việc. Hãy nhấn Esc trước để chắc chắn đang ở chế độ Normal."
    }
  },
  {
    id: 75,
    topic: "text",
    answer: 1,
    en: {
      question: "In vim, what does `:q!` do?",
      options: ["Opens a new file", "Quits without saving changes", "Saves and quits", "Saves without quitting"],
      explanation: "The `!` forces vim to quit and discard any unsaved changes."
    },
    vi: {
      question: "Trong vim, lệnh `:q!` có tác dụng gì?",
      options: ["Mở một tệp mới", "Thoát mà không lưu các thay đổi", "Lưu rồi thoát", "Lưu mà không thoát"],
      explanation: "Dấu `!` buộc vim thoát và bỏ qua mọi thay đổi chưa lưu."
    }
  },
  {
    id: 76,
    topic: "text",
    answer: 2,
    en: {
      question: "In vim, which key switches to Insert mode so you can type text?",
      options: ["`x`", "`:`", "`i`", "`d`"],
      explanation: "Press `i` to insert text and Esc to return to Normal mode."
    },
    vi: {
      question: "Trong vim, phím nào chuyển sang chế độ Insert để bạn có thể gõ văn bản?",
      options: ["`x`", "`:`", "`i`", "`d`"],
      explanation: "Nhấn `i` để chèn văn bản và nhấn Esc để quay lại chế độ Normal."
    }
  },
  {
    id: 77,
    topic: "text",
    answer: 0,
    en: {
      question: "In nano, which shortcut exits the editor?",
      options: ["`Ctrl+X`", "`Ctrl+Z`", "`Ctrl+Q`", "`Esc`"],
      explanation: "Ctrl+X exits nano; it will ask whether to save any unsaved changes first."
    },
    vi: {
      question: "Trong nano, phím tắt nào dùng để thoát khỏi trình soạn thảo?",
      options: ["`Ctrl+X`", "`Ctrl+Z`", "`Ctrl+Q`", "`Esc`"],
      explanation: "Ctrl+X thoát nano; nếu còn thay đổi chưa lưu, nano sẽ hỏi bạn có muốn lưu không."
    }
  },
  {
    id: 78,
    topic: "text",
    answer: 1,
    en: {
      question: "What does `cat file1 file2 > combined.txt` do?",
      options: ["Compares the two files", "Joins file1 and file2 into a new file called combined.txt", "Deletes both files", "Copies combined.txt into both files"],
      explanation: "`cat` concatenates files, and `>` redirects the result into combined.txt."
    },
    vi: {
      question: "Lệnh `cat file1 file2 > combined.txt` có tác dụng gì?",
      options: ["So sánh hai tệp", "Nối file1 và file2 vào một tệp mới tên là combined.txt", "Xóa cả hai tệp", "Sao chép combined.txt vào cả hai tệp"],
      explanation: "`cat` nối các tệp lại với nhau, và `>` chuyển hướng kết quả vào combined.txt."
    }
  },
  {
    id: 79,
    topic: "text",
    answer: 3,
    en: {
      question: "Which command shows the differences between two text files line by line?",
      options: ["`delta`", "`match`", "`compare`", "`diff`"],
      explanation: "`diff old.txt new.txt` lists the lines that were added, removed or changed."
    },
    vi: {
      question: "Lệnh nào hiển thị sự khác biệt giữa hai tệp văn bản theo từng dòng?",
      options: ["`delta`", "`match`", "`compare`", "`diff`"],
      explanation: "`diff old.txt new.txt` liệt kê các dòng đã được thêm, xóa hoặc thay đổi."
    }
  },
  {
    id: 80,
    topic: "text",
    answer: 2,
    en: {
      question: "What does `cut -d: -f1 /etc/passwd` print?",
      options: ["The file without its first character", "The first line of the file", "The first field (the username) of each line, using \":\" as the separator", "The number of users on the system"],
      explanation: "`-d:` sets the delimiter to a colon and `-f1` selects the first field."
    },
    vi: {
      question: "Lệnh `cut -d: -f1 /etc/passwd` in ra gì?",
      options: ["Nội dung tệp sau khi bỏ ký tự đầu tiên", "Dòng đầu tiên của tệp", "Trường đầu tiên (tên người dùng) của mỗi dòng, dùng \":\" làm ký tự phân cách", "Số lượng người dùng trên hệ thống"],
      explanation: "`-d:` đặt ký tự phân cách là dấu hai chấm và `-f1` chọn trường thứ nhất."
    }
  },
  {
    id: 81,
    topic: "permissions",
    answer: 3,
    en: {
      question: "In the permission string `-rwxr-xr--`, what can the owner do?",
      options: ["Read and execute only", "Nothing", "Read only", "Read, write and execute"],
      explanation: "The first group of three characters after the file type (`rwx`) belongs to the owner."
    },
    vi: {
      question: "Trong chuỗi quyền `-rwxr-xr--`, chủ sở hữu (owner) có những quyền gì?",
      options: ["Chỉ đọc và thực thi", "Không có quyền nào", "Chỉ đọc", "Đọc, ghi và thực thi"],
      explanation: "Nhóm ba ký tự đầu tiên sau ký tự loại tệp (`rwx`) là quyền của chủ sở hữu."
    }
  },
  {
    id: 82,
    topic: "permissions",
    answer: 3,
    en: {
      question: "In the permission string `-rwxr-xr--`, what can \"others\" (everyone else) do?",
      options: ["Read, write and execute", "Execute only", "Read and write", "Read only"],
      explanation: "The last three characters (`r--`) belong to others: read is allowed, write and execute are not."
    },
    vi: {
      question: "Trong chuỗi quyền `-rwxr-xr--`, \"những người khác\" (others) có những quyền gì?",
      options: ["Đọc, ghi và thực thi", "Chỉ thực thi", "Đọc và ghi", "Chỉ đọc"],
      explanation: "Ba ký tự cuối (`r--`) là quyền của những người khác: được đọc, không được ghi và không được thực thi."
    }
  },
  {
    id: 83,
    topic: "permissions",
    answer: 1,
    en: {
      question: "In `drwxr-xr-x`, what does the first character `d` mean?",
      options: ["The item is disabled", "The item is a directory", "The item is a disk device", "The item has been deleted"],
      explanation: "The first character shows the file type: `-` for a regular file, `d` for a directory and `l` for a symbolic link."
    },
    vi: {
      question: "Trong `drwxr-xr-x`, ký tự đầu tiên `d` có nghĩa là gì?",
      options: ["Mục này đã bị vô hiệu hóa", "Mục này là một thư mục", "Mục này là một thiết bị ổ đĩa", "Mục này đã bị xóa"],
      explanation: "Ký tự đầu tiên cho biết loại tệp: `-` là tệp thông thường, `d` là thư mục và `l` là liên kết mềm."
    }
  },
  {
    id: 84,
    topic: "permissions",
    answer: 3,
    en: {
      question: "What is the numeric (octal) value of the read permission?",
      options: ["1", "2", "7", "4"],
      explanation: "Read = 4, write = 2, execute = 1. Add them together to get a permission digit."
    },
    vi: {
      question: "Giá trị số (hệ bát phân) của quyền đọc (read) là bao nhiêu?",
      options: ["1", "2", "7", "4"],
      explanation: "Đọc = 4, ghi = 2, thực thi = 1. Cộng các giá trị lại để được một chữ số quyền."
    }
  },
  {
    id: 85,
    topic: "permissions",
    answer: 0,
    en: {
      question: "What is the numeric (octal) value of the write permission?",
      options: ["2", "3", "1", "4"],
      explanation: "Read = 4, write = 2, execute = 1. For example, read + write = 6."
    },
    vi: {
      question: "Giá trị số (hệ bát phân) của quyền ghi (write) là bao nhiêu?",
      options: ["2", "3", "1", "4"],
      explanation: "Đọc = 4, ghi = 2, thực thi = 1. Ví dụ, đọc + ghi = 6."
    }
  },
  {
    id: 86,
    topic: "permissions",
    answer: 2,
    en: {
      question: "What is the numeric (octal) value of the execute permission?",
      options: ["4", "2", "1", "0"],
      explanation: "Read = 4, write = 2, execute = 1. For example, read + execute = 5."
    },
    vi: {
      question: "Giá trị số (hệ bát phân) của quyền thực thi (execute) là bao nhiêu?",
      options: ["4", "2", "1", "0"],
      explanation: "Đọc = 4, ghi = 2, thực thi = 1. Ví dụ, đọc + thực thi = 5."
    }
  },
  {
    id: 87,
    topic: "permissions",
    answer: 2,
    en: {
      question: "Which permissions does `chmod 755 script.sh` set?",
      options: ["Everyone: rwx", "Owner: r-x; group and others: rwx", "Owner: rwx; group and others: r-x", "Owner: rw-; group and others: r--"],
      explanation: "7 = 4+2+1 (rwx) and 5 = 4+1 (r-x). 755 is common for scripts and directories."
    },
    vi: {
      question: "Lệnh `chmod 755 script.sh` thiết lập những quyền nào?",
      options: ["Mọi người: rwx", "Chủ sở hữu: r-x; nhóm và người khác: rwx", "Chủ sở hữu: rwx; nhóm và người khác: r-x", "Chủ sở hữu: rw-; nhóm và người khác: r--"],
      explanation: "7 = 4+2+1 (rwx) và 5 = 4+1 (r-x). 755 thường dùng cho script và thư mục."
    }
  },
  {
    id: 88,
    topic: "permissions",
    answer: 2,
    en: {
      question: "Which permissions does `chmod 644 notes.txt` set?",
      options: ["Owner: rwx; group: r--; others: no access", "Owner: r--; group and others: rw-", "Owner: rw-; group and others: r--", "Everyone: rw-"],
      explanation: "6 = 4+2 (rw-) and 4 = read only (r--). 644 is typical for regular files."
    },
    vi: {
      question: "Lệnh `chmod 644 notes.txt` thiết lập những quyền nào?",
      options: ["Chủ sở hữu: rwx; nhóm: r--; người khác: không có quyền", "Chủ sở hữu: r--; nhóm và người khác: rw-", "Chủ sở hữu: rw-; nhóm và người khác: r--", "Mọi người: rw-"],
      explanation: "6 = 4+2 (rw-) và 4 = chỉ đọc (r--). 644 là quyền thường gặp của các tệp thông thường."
    }
  },
  {
    id: 89,
    topic: "permissions",
    answer: 2,
    en: {
      question: "Which command makes a script executable for its owner?",
      options: ["`exec script.sh`", "`chown +x script.sh`", "`chmod u+x script.sh`", "`chmod u-x script.sh`"],
      explanation: "`u` means user (owner), `+` adds a permission and `x` is execute."
    },
    vi: {
      question: "Lệnh nào cấp quyền thực thi script cho chủ sở hữu của nó?",
      options: ["`exec script.sh`", "`chown +x script.sh`", "`chmod u+x script.sh`", "`chmod u-x script.sh`"],
      explanation: "`u` là user (chủ sở hữu), `+` là thêm quyền và `x` là thực thi."
    }
  },
  {
    id: 90,
    topic: "permissions",
    answer: 3,
    en: {
      question: "Which command changes the owner of a file?",
      options: ["`chgrp`", "`chmod`", "`owner`", "`chown`"],
      explanation: "`chown` = change owner. `chmod` changes permissions and `chgrp` changes only the group."
    },
    vi: {
      question: "Lệnh nào thay đổi chủ sở hữu của một tệp?",
      options: ["`chgrp`", "`chmod`", "`owner`", "`chown`"],
      explanation: "`chown` = change owner (đổi chủ sở hữu). `chmod` đổi quyền, còn `chgrp` chỉ đổi nhóm."
    }
  },
  {
    id: 91,
    topic: "permissions",
    answer: 0,
    en: {
      question: "Which command changes only the group of a file?",
      options: ["`chgrp`", "`groupmod`", "`setgroup`", "`chmod g`"],
      explanation: "`chgrp developers app.py` sets the file's group to developers. (`groupmod` modifies a group itself, not a file.)"
    },
    vi: {
      question: "Lệnh nào chỉ thay đổi nhóm của một tệp?",
      options: ["`chgrp`", "`groupmod`", "`setgroup`", "`chmod g`"],
      explanation: "`chgrp developers app.py` đặt nhóm của tệp thành developers. (`groupmod` dùng để sửa chính một nhóm, không phải tệp.)"
    }
  },
  {
    id: 92,
    topic: "permissions",
    answer: 0,
    en: {
      question: "What does `chmod 777 file` do?",
      options: ["Gives read, write and execute permission to everyone", "Makes the file read-only", "Removes all permissions", "Hides the file"],
      explanation: "777 means rwx for owner, group and others. It is usually a security risk and should be avoided."
    },
    vi: {
      question: "Lệnh `chmod 777 file` có tác dụng gì?",
      options: ["Cấp quyền đọc, ghi và thực thi cho tất cả mọi người", "Biến tệp thành chỉ đọc", "Gỡ bỏ mọi quyền", "Ẩn tệp"],
      explanation: "777 nghĩa là rwx cho chủ sở hữu, nhóm và người khác. Đây thường là rủi ro bảo mật và nên tránh."
    }
  },
  {
    id: 93,
    topic: "permissions",
    answer: 3,
    en: {
      question: "What does `sudo` do?",
      options: ["Switches the keyboard layout", "Shuts down the system", "Shows disk usage", "Runs a command with administrator (root) privileges"],
      explanation: "`sudo` (\"superuser do\") lets permitted users run single commands as root, usually after entering their own password."
    },
    vi: {
      question: "Lệnh `sudo` có tác dụng gì?",
      options: ["Đổi bố cục bàn phím", "Tắt hệ thống", "Hiển thị dung lượng ổ đĩa đã dùng", "Chạy một lệnh với quyền quản trị (root)"],
      explanation: "`sudo` (\"superuser do\") cho phép những người dùng được cấp phép chạy từng lệnh với quyền root, thường sau khi nhập mật khẩu của chính họ."
    }
  },
  {
    id: 94,
    topic: "permissions",
    answer: 0,
    en: {
      question: "Linux file permissions are set separately for which three categories?",
      options: ["Owner (user), group and others", "Local, remote and system", "Admin, guest and root", "Read, write and execute"],
      explanation: "Each category gets its own read, write and execute bits (`ugo` in chmod: user, group, others)."
    },
    vi: {
      question: "Quyền trên tệp Linux được thiết lập riêng cho ba nhóm đối tượng nào?",
      options: ["Chủ sở hữu (user), nhóm (group) và người khác (others)", "Cục bộ, từ xa và hệ thống", "Quản trị viên, khách và root", "Đọc, ghi và thực thi"],
      explanation: "Mỗi đối tượng có các bit đọc, ghi, thực thi riêng (`ugo` trong chmod: user, group, others)."
    }
  },
  {
    id: 95,
    topic: "permissions",
    answer: 0,
    en: {
      question: "What does `chmod o-w file.txt` do?",
      options: ["Removes write permission for others", "Removes write permission for the owner", "Adds write permission for others", "Gives write permission to the owner"],
      explanation: "`o` = others, `-` = remove, `w` = write."
    },
    vi: {
      question: "Lệnh `chmod o-w file.txt` có tác dụng gì?",
      options: ["Gỡ quyền ghi của những người khác", "Gỡ quyền ghi của chủ sở hữu", "Thêm quyền ghi cho những người khác", "Cấp quyền ghi cho chủ sở hữu"],
      explanation: "`o` = others (người khác), `-` = gỡ bỏ, `w` = ghi."
    }
  },
  {
    id: 96,
    topic: "permissions",
    answer: 1,
    en: {
      question: "What does `chmod g+r report.txt` do?",
      options: ["Makes the group \"r\" the owner", "Adds read permission for the group", "Adds read permission for everyone", "Removes read permission for the group"],
      explanation: "`g` = group, `+` = add, `r` = read."
    },
    vi: {
      question: "Lệnh `chmod g+r report.txt` có tác dụng gì?",
      options: ["Đặt nhóm \"r\" làm chủ sở hữu", "Thêm quyền đọc cho nhóm", "Thêm quyền đọc cho tất cả mọi người", "Gỡ quyền đọc của nhóm"],
      explanation: "`g` = group (nhóm), `+` = thêm, `r` = đọc."
    }
  },
  {
    id: 97,
    topic: "permissions",
    answer: 2,
    en: {
      question: "What does the execute (x) permission on a directory allow?",
      options: ["Running the directory as a program", "Deleting the directory", "Entering the directory (with `cd`) and accessing the files inside it", "Listing only hidden files"],
      explanation: "For directories, `r` lets you list names, `w` lets you create or delete entries and `x` lets you enter and access them."
    },
    vi: {
      question: "Quyền thực thi (x) trên một thư mục cho phép làm gì?",
      options: ["Chạy thư mục như một chương trình", "Xóa thư mục", "Vào thư mục (bằng `cd`) và truy cập các tệp bên trong", "Chỉ liệt kê các tệp ẩn"],
      explanation: "Với thư mục, `r` cho phép liệt kê tên, `w` cho phép tạo hoặc xóa mục bên trong, còn `x` cho phép đi vào và truy cập."
    }
  },
  {
    id: 98,
    topic: "permissions",
    answer: 1,
    en: {
      question: "What does `umask` control?",
      options: ["The user's password", "The default permissions given to newly created files and directories", "The network subnet mask", "The screen brightness"],
      explanation: "A common umask is 022, which results in 644 for new files and 755 for new directories."
    },
    vi: {
      question: "`umask` kiểm soát điều gì?",
      options: ["Mật khẩu của người dùng", "Quyền mặc định gán cho các tệp và thư mục mới được tạo", "Mặt nạ mạng con (subnet mask)", "Độ sáng màn hình"],
      explanation: "Giá trị umask phổ biến là 022, khi đó tệp mới có quyền 644 và thư mục mới có quyền 755."
    }
  },
  {
    id: 99,
    topic: "permissions",
    answer: 1,
    en: {
      question: "Which command shows the permissions of a file?",
      options: ["`cat -p file.txt`", "`ls -l file.txt`", "`chmod file.txt`", "`perm file.txt`"],
      explanation: "The first column of `ls -l` output shows the file type and permissions, such as -rw-r--r--."
    },
    vi: {
      question: "Lệnh nào hiển thị quyền của một tệp?",
      options: ["`cat -p file.txt`", "`ls -l file.txt`", "`chmod file.txt`", "`perm file.txt`"],
      explanation: "Cột đầu tiên trong kết quả của `ls -l` cho biết loại tệp và quyền, ví dụ -rw-r--r--."
    }
  },
  {
    id: 100,
    topic: "permissions",
    answer: 3,
    en: {
      question: "How do you make user alice the owner and dev the group of file.txt in one command?",
      options: ["`chown dev:alice file.txt`", "`chmod alice:dev file.txt`", "`chgrp alice dev file.txt`", "`chown alice:dev file.txt`"],
      explanation: "`chown` accepts `user:group`, so both are changed at once. It usually requires `sudo`."
    },
    vi: {
      question: "Làm thế nào để đặt người dùng alice làm chủ sở hữu và nhóm dev làm nhóm của file.txt chỉ bằng một lệnh?",
      options: ["`chown dev:alice file.txt`", "`chmod alice:dev file.txt`", "`chgrp alice dev file.txt`", "`chown alice:dev file.txt`"],
      explanation: "`chown` chấp nhận dạng `user:group`, nên đổi được cả hai cùng lúc. Lệnh này thường cần dùng `sudo`."
    }
  },
  {
    id: 101,
    topic: "users",
    answer: 0,
    en: {
      question: "Which command shows the username you are currently using?",
      options: ["`whoami`", "`myname`", "`userid`", "`whois`"],
      explanation: "`whoami` prints your effective username. (`whois` looks up domain registration information.)"
    },
    vi: {
      question: "Lệnh nào hiển thị tên người dùng mà bạn đang sử dụng?",
      options: ["`whoami`", "`myname`", "`userid`", "`whois`"],
      explanation: "`whoami` in ra tên người dùng hiện tại của bạn. (`whois` dùng để tra cứu thông tin đăng ký tên miền.)"
    }
  },
  {
    id: 102,
    topic: "users",
    answer: 0,
    en: {
      question: "Which file stores basic information about user accounts, such as username, UID and home directory?",
      options: ["`/etc/passwd`", "`/etc/users`", "`/home/users`", "`/var/accounts`"],
      explanation: "Each line of /etc/passwd describes one account. Despite its name, it no longer stores the passwords themselves."
    },
    vi: {
      question: "Tệp nào lưu thông tin cơ bản về các tài khoản người dùng, như tên đăng nhập, UID và thư mục chính?",
      options: ["`/etc/passwd`", "`/etc/users`", "`/home/users`", "`/var/accounts`"],
      explanation: "Mỗi dòng trong /etc/passwd mô tả một tài khoản. Dù có tên như vậy, tệp này không còn lưu mật khẩu nữa."
    }
  },
  {
    id: 103,
    topic: "users",
    answer: 0,
    en: {
      question: "On modern Linux systems, where are users' hashed passwords stored?",
      options: ["`/etc/shadow`", "`/etc/passwd`", "`/root/passwords`", "`/etc/password`"],
      explanation: "Regular users cannot read /etc/shadow; only root and privileged system tools can, which keeps the password hashes safe."
    },
    vi: {
      question: "Trên các hệ thống Linux hiện đại, mật khẩu (dạng đã băm) của người dùng được lưu ở đâu?",
      options: ["`/etc/shadow`", "`/etc/passwd`", "`/root/passwords`", "`/etc/password`"],
      explanation: "Người dùng thông thường không đọc được /etc/shadow; chỉ root và các công cụ hệ thống có đặc quyền mới đọc được, nhờ đó các bản băm mật khẩu được giữ an toàn."
    }
  },
  {
    id: 104,
    topic: "users",
    answer: 1,
    en: {
      question: "Which command changes a user's password?",
      options: ["`setpw`", "`passwd`", "`chpwd`", "`password`"],
      explanation: "Run `passwd` to change your own password, or `sudo passwd username` to change someone else's."
    },
    vi: {
      question: "Lệnh nào dùng để đổi mật khẩu của người dùng?",
      options: ["`setpw`", "`passwd`", "`chpwd`", "`password`"],
      explanation: "Chạy `passwd` để đổi mật khẩu của chính bạn, hoặc `sudo passwd username` để đổi mật khẩu của người khác."
    }
  },
  {
    id: 105,
    topic: "users",
    answer: 2,
    en: {
      question: "Which command is commonly used to create a new user account?",
      options: ["`usercreate`", "`newuser`", "`useradd`", "`addaccount`"],
      explanation: "`sudo useradd -m alice` creates user alice with a home directory. Debian and Ubuntu also offer the friendlier `adduser`."
    },
    vi: {
      question: "Lệnh nào thường được dùng để tạo tài khoản người dùng mới?",
      options: ["`usercreate`", "`newuser`", "`useradd`", "`addaccount`"],
      explanation: "`sudo useradd -m alice` tạo người dùng alice kèm thư mục chính. Debian và Ubuntu còn có lệnh `adduser` thân thiện hơn."
    }
  },
  {
    id: 106,
    topic: "users",
    answer: 0,
    en: {
      question: "Which command deletes a user account?",
      options: ["`userdel`", "`killuser`", "`userrm`", "`removeuser`"],
      explanation: "`sudo userdel -r alice` deletes the account; `-r` also removes the user's home directory."
    },
    vi: {
      question: "Lệnh nào dùng để xóa một tài khoản người dùng?",
      options: ["`userdel`", "`killuser`", "`userrm`", "`removeuser`"],
      explanation: "`sudo userdel -r alice` xóa tài khoản; `-r` xóa luôn thư mục chính của người dùng đó."
    }
  },
  {
    id: 107,
    topic: "users",
    answer: 2,
    en: {
      question: "Which command adds the existing user bob to the docker group without removing him from his other groups?",
      options: ["`sudo useradd docker bob`", "`sudo chgrp bob docker`", "`sudo usermod -aG docker bob`", "`sudo groupadd bob docker`"],
      explanation: "`-G` sets supplementary groups and `-a` appends instead of replacing. The change applies at bob's next login."
    },
    vi: {
      question: "Lệnh nào thêm người dùng bob (đã có sẵn) vào nhóm docker mà không xóa bob khỏi các nhóm khác?",
      options: ["`sudo useradd docker bob`", "`sudo chgrp bob docker`", "`sudo usermod -aG docker bob`", "`sudo groupadd bob docker`"],
      explanation: "`-G` đặt các nhóm phụ, còn `-a` (append) giúp thêm vào thay vì thay thế. Thay đổi có hiệu lực từ lần đăng nhập tiếp theo của bob."
    }
  },
  {
    id: 108,
    topic: "users",
    answer: 3,
    en: {
      question: "Which command creates a new group?",
      options: ["`newgroup`", "`mkgroup`", "`groupnew`", "`groupadd`"],
      explanation: "`sudo groupadd developers` creates a group named developers."
    },
    vi: {
      question: "Lệnh nào tạo một nhóm mới?",
      options: ["`newgroup`", "`mkgroup`", "`groupnew`", "`groupadd`"],
      explanation: "`sudo groupadd developers` tạo một nhóm tên là developers."
    }
  },
  {
    id: 109,
    topic: "users",
    answer: 1,
    en: {
      question: "Which command lists the groups a user belongs to?",
      options: ["`listgroups`", "`groups`", "`whogroup`", "`mygroups`"],
      explanation: "`groups` shows your groups; `groups alice` shows alice's groups."
    },
    vi: {
      question: "Lệnh nào liệt kê các nhóm mà một người dùng tham gia?",
      options: ["`listgroups`", "`groups`", "`whogroup`", "`mygroups`"],
      explanation: "`groups` hiển thị các nhóm của bạn; `groups alice` hiển thị các nhóm của alice."
    }
  },
  {
    id: 110,
    topic: "users",
    answer: 3,
    en: {
      question: "Which command shows a user's UID, GID and group memberships?",
      options: ["`userinfo`", "`whoami -a`", "`uid`", "`id`"],
      explanation: "`id` prints output such as uid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo)."
    },
    vi: {
      question: "Lệnh nào hiển thị UID, GID và các nhóm của một người dùng?",
      options: ["`userinfo`", "`whoami -a`", "`uid`", "`id`"],
      explanation: "`id` in ra kết quả dạng uid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo)."
    }
  },
  {
    id: 111,
    topic: "users",
    answer: 3,
    en: {
      question: "What is the UID (user ID) of the root user?",
      options: ["100", "1", "1000", "0"],
      explanation: "The system recognizes root by UID 0, not by the name \"root\"."
    },
    vi: {
      question: "UID (mã người dùng) của người dùng root là bao nhiêu?",
      options: ["100", "1", "1000", "0"],
      explanation: "Hệ thống nhận diện root nhờ UID 0, chứ không phải nhờ cái tên \"root\"."
    }
  },
  {
    id: 112,
    topic: "users",
    answer: 0,
    en: {
      question: "Which file stores the list of groups on the system?",
      options: ["`/etc/group`", "`/etc/groups`", "`/home/groups`", "`/var/group`"],
      explanation: "Each line in /etc/group contains a group name, its GID and its member list."
    },
    vi: {
      question: "Tệp nào lưu danh sách các nhóm trên hệ thống?",
      options: ["`/etc/group`", "`/etc/groups`", "`/home/groups`", "`/var/group`"],
      explanation: "Mỗi dòng trong /etc/group chứa tên nhóm, GID và danh sách thành viên."
    }
  },
  {
    id: 113,
    topic: "users",
    answer: 1,
    en: {
      question: "What does `su - alice` do?",
      options: ["Deletes the user alice", "Switches to user alice with alice's full login environment", "Shows alice's files", "Sends a message to alice"],
      explanation: "`su` means \"switch user\". The `-` loads the target user's environment as if they had logged in."
    },
    vi: {
      question: "Lệnh `su - alice` có tác dụng gì?",
      options: ["Xóa người dùng alice", "Chuyển sang người dùng alice với đầy đủ môi trường đăng nhập của alice", "Hiển thị các tệp của alice", "Gửi tin nhắn cho alice"],
      explanation: "`su` nghĩa là \"switch user\" (chuyển người dùng). Dấu `-` nạp môi trường của người dùng đích như thể họ vừa đăng nhập."
    }
  },
  {
    id: 114,
    topic: "users",
    answer: 3,
    en: {
      question: "Which command shows who is currently logged in to the system?",
      options: ["`whoami`", "`id`", "`pwd`", "`who`"],
      explanation: "`who` lists logged-in users along with their terminals and login times. `whoami` shows only your own name."
    },
    vi: {
      question: "Lệnh nào cho biết những ai đang đăng nhập vào hệ thống?",
      options: ["`whoami`", "`id`", "`pwd`", "`who`"],
      explanation: "`who` liệt kê những người dùng đang đăng nhập cùng terminal và thời điểm đăng nhập. `whoami` chỉ hiển thị tên của chính bạn."
    }
  },
  {
    id: 115,
    topic: "users",
    answer: 2,
    en: {
      question: "Which command shows a list of recent user logins?",
      options: ["`history`", "`first`", "`last`", "`logs`"],
      explanation: "`last` reads the login records and shows who logged in and when. `history` shows your previously typed commands."
    },
    vi: {
      question: "Lệnh nào hiển thị danh sách các lần đăng nhập gần đây?",
      options: ["`history`", "`first`", "`last`", "`logs`"],
      explanation: "`last` đọc bản ghi đăng nhập và cho biết ai đã đăng nhập vào lúc nào. Còn `history` hiển thị các lệnh bạn đã gõ trước đó."
    }
  },
  {
    id: 116,
    topic: "users",
    answer: 2,
    en: {
      question: "Where is a regular user's home directory usually located?",
      options: ["`/etc/username`", "`/var/username`", "`/home/username`", "`/usr/username`"],
      explanation: "For example, user alice normally has the home directory /home/alice."
    },
    vi: {
      question: "Thư mục chính (home) của một người dùng thông thường thường nằm ở đâu?",
      options: ["`/etc/username`", "`/var/username`", "`/home/username`", "`/usr/username`"],
      explanation: "Ví dụ, người dùng alice thường có thư mục chính là /home/alice."
    }
  },
  {
    id: 117,
    topic: "users",
    answer: 2,
    en: {
      question: "Which file controls which users are allowed to use sudo?",
      options: ["`/etc/admins`", "`/etc/rootusers`", "`/etc/sudoers`", "`/etc/passwd`"],
      explanation: "/etc/sudoers (plus files in /etc/sudoers.d/) defines sudo rules. On Ubuntu, members of the sudo group are allowed by default."
    },
    vi: {
      question: "Tệp nào quy định những người dùng nào được phép dùng sudo?",
      options: ["`/etc/admins`", "`/etc/rootusers`", "`/etc/sudoers`", "`/etc/passwd`"],
      explanation: "/etc/sudoers (cùng các tệp trong /etc/sudoers.d/) định nghĩa các quy tắc sudo. Trên Ubuntu, thành viên nhóm sudo mặc định được phép dùng sudo."
    }
  },
  {
    id: 118,
    topic: "users",
    answer: 0,
    en: {
      question: "Which command should be used to safely edit the sudoers file?",
      options: ["`visudo`", "`sudoconf`", "`sudo-edit`", "`editsudo`"],
      explanation: "`visudo` checks the syntax before saving, so a typo cannot lock you out of sudo."
    },
    vi: {
      question: "Nên dùng lệnh nào để chỉnh sửa tệp sudoers một cách an toàn?",
      options: ["`visudo`", "`sudoconf`", "`sudo-edit`", "`editsudo`"],
      explanation: "`visudo` kiểm tra cú pháp trước khi lưu, nên một lỗi đánh máy sẽ không khiến bạn bị khóa khỏi sudo."
    }
  },
  {
    id: 119,
    topic: "users",
    answer: 0,
    en: {
      question: "On most modern distributions, regular (non-system) user accounts start at which UID?",
      options: ["1000", "65535", "1", "0"],
      explanation: "The first user created on Ubuntu, Debian or Fedora usually gets UID 1000. Lower numbers are reserved for root and system accounts."
    },
    vi: {
      question: "Trên hầu hết các bản phân phối hiện đại, tài khoản người dùng thông thường (không phải tài khoản hệ thống) bắt đầu từ UID nào?",
      options: ["1000", "65535", "1", "0"],
      explanation: "Người dùng đầu tiên được tạo trên Ubuntu, Debian hoặc Fedora thường có UID 1000. Các số nhỏ hơn được dành cho root và các tài khoản hệ thống."
    }
  },
  {
    id: 120,
    topic: "users",
    answer: 3,
    en: {
      question: "In /etc/passwd, what does the last field of each line (for example `/bin/bash`) represent?",
      options: ["The user's home directory", "The user's password", "The user's group name", "The user's login shell"],
      explanation: "A line looks like alice:x:1000:1000:Alice:/home/alice:/bin/bash. The final field is the shell started at login."
    },
    vi: {
      question: "Trong /etc/passwd, trường cuối cùng của mỗi dòng (ví dụ `/bin/bash`) biểu thị điều gì?",
      options: ["Thư mục chính của người dùng", "Mật khẩu của người dùng", "Tên nhóm của người dùng", "Shell đăng nhập của người dùng"],
      explanation: "Một dòng có dạng alice:x:1000:1000:Alice:/home/alice:/bin/bash. Trường cuối cùng là shell được khởi chạy khi đăng nhập."
    }
  },
  {
    id: 121,
    topic: "processes",
    answer: 3,
    en: {
      question: "Which command shows a snapshot of the currently running processes?",
      options: ["`tasks`", "`pl`", "`proc`", "`ps`"],
      explanation: "`ps aux` is a common form that lists every process on the system."
    },
    vi: {
      question: "Lệnh nào hiển thị ảnh chụp nhanh (snapshot) các tiến trình đang chạy?",
      options: ["`tasks`", "`pl`", "`proc`", "`ps`"],
      explanation: "`ps aux` là dạng thường dùng để liệt kê mọi tiến trình trên hệ thống."
    }
  },
  {
    id: 122,
    topic: "processes",
    answer: 0,
    en: {
      question: "Which command shows a live, continuously updating view of processes and resource usage?",
      options: ["`top`", "`live`", "`head`", "`ps`"],
      explanation: "`top` refreshes every few seconds and shows CPU and memory usage. Press `q` to quit. `htop` is a friendlier alternative."
    },
    vi: {
      question: "Lệnh nào hiển thị trực tiếp, liên tục cập nhật các tiến trình và mức sử dụng tài nguyên?",
      options: ["`top`", "`live`", "`head`", "`ps`"],
      explanation: "`top` làm mới sau mỗi vài giây và hiển thị mức sử dụng CPU, bộ nhớ. Nhấn `q` để thoát. `htop` là một lựa chọn thay thế thân thiện hơn."
    }
  },
  {
    id: 123,
    topic: "processes",
    answer: 3,
    en: {
      question: "What is a PID?",
      options: ["A Program Installation Directory", "A Partition ID on a disk", "A Primary Internet Domain", "A Process ID: a unique number that identifies a running process"],
      explanation: "Every process gets a PID, which commands such as `kill` use to target it."
    },
    vi: {
      question: "PID là gì?",
      options: ["Program Installation Directory: thư mục cài đặt chương trình", "Partition ID: mã định danh phân vùng trên ổ đĩa", "Primary Internet Domain: tên miền Internet chính", "Process ID: một số duy nhất dùng để nhận diện một tiến trình đang chạy"],
      explanation: "Mỗi tiến trình được gán một PID, và các lệnh như `kill` dùng PID này để chọn đúng tiến trình."
    }
  },
  {
    id: 124,
    topic: "processes",
    answer: 1,
    en: {
      question: "Which command sends a signal to a process, usually to stop it, using its PID?",
      options: ["`end`", "`kill`", "`close`", "`stop`"],
      explanation: "`kill 1234` sends the TERM signal to process 1234, asking it to exit politely."
    },
    vi: {
      question: "Lệnh nào gửi tín hiệu tới một tiến trình (thường để dừng nó) dựa trên PID?",
      options: ["`end`", "`kill`", "`close`", "`stop`"],
      explanation: "`kill 1234` gửi tín hiệu TERM tới tiến trình 1234, yêu cầu nó kết thúc một cách \"lịch sự\"."
    }
  },
  {
    id: 125,
    topic: "processes",
    answer: 3,
    en: {
      question: "What does `kill -9 1234` do?",
      options: ["Kills 9 processes", "Restarts process 1234", "Pauses process 1234 for 9 seconds", "Forcefully terminates process 1234 (SIGKILL)"],
      explanation: "Signal 9 (SIGKILL) cannot be ignored by the process. Use it only when a normal `kill` does not work."
    },
    vi: {
      question: "Lệnh `kill -9 1234` có tác dụng gì?",
      options: ["Kết thúc 9 tiến trình", "Khởi động lại tiến trình 1234", "Tạm dừng tiến trình 1234 trong 9 giây", "Buộc kết thúc ngay tiến trình 1234 (SIGKILL)"],
      explanation: "Tín hiệu 9 (SIGKILL) không thể bị tiến trình bỏ qua. Chỉ dùng khi lệnh `kill` thông thường không hiệu quả."
    }
  },
  {
    id: 126,
    topic: "processes",
    answer: 2,
    en: {
      question: "Which command can stop processes by their name instead of their PID?",
      options: ["`pskill`", "`namekill`", "`pkill`", "`killname`"],
      explanation: "`pkill firefox` sends a signal to every process named firefox. `killall` works in a similar way."
    },
    vi: {
      question: "Lệnh nào có thể dừng tiến trình dựa theo tên thay vì PID?",
      options: ["`pskill`", "`namekill`", "`pkill`", "`killname`"],
      explanation: "`pkill firefox` gửi tín hiệu tới mọi tiến trình có tên firefox. `killall` hoạt động tương tự."
    }
  },
  {
    id: 127,
    topic: "processes",
    answer: 0,
    en: {
      question: "How do you start a command so it runs in the background?",
      options: ["Add `&` at the end of the command", "Start the command with `bg:`", "Add `#` at the end of the command", "Add `>>` at the end of the command"],
      explanation: "For example, `sleep 60 &` returns your prompt immediately while the command keeps running."
    },
    vi: {
      question: "Làm thế nào để chạy một lệnh ở chế độ nền (background)?",
      options: ["Thêm `&` vào cuối lệnh", "Bắt đầu lệnh bằng `bg:`", "Thêm `#` vào cuối lệnh", "Thêm `>>` vào cuối lệnh"],
      explanation: "Ví dụ, `sleep 60 &` trả lại dấu nhắc lệnh ngay lập tức trong khi lệnh vẫn tiếp tục chạy."
    }
  },
  {
    id: 128,
    topic: "processes",
    answer: 1,
    en: {
      question: "Which key combination interrupts (stops) the command running in the foreground?",
      options: ["`Ctrl+V`", "`Ctrl+C`", "`Ctrl+P`", "`Ctrl+A`"],
      explanation: "Ctrl+C sends the interrupt signal (SIGINT), which normally ends the running program."
    },
    vi: {
      question: "Tổ hợp phím nào ngắt (dừng) lệnh đang chạy ở tiền cảnh (foreground)?",
      options: ["`Ctrl+V`", "`Ctrl+C`", "`Ctrl+P`", "`Ctrl+A`"],
      explanation: "Ctrl+C gửi tín hiệu ngắt (SIGINT), thường làm chương trình đang chạy kết thúc."
    }
  },
  {
    id: 129,
    topic: "processes",
    answer: 2,
    en: {
      question: "What does `Ctrl+Z` do to a command running in the foreground?",
      options: ["Undoes the last command", "Kills it immediately", "Suspends (pauses) it", "Moves it to another terminal"],
      explanation: "A suspended job can be resumed with `fg` (foreground) or `bg` (background)."
    },
    vi: {
      question: "Tổ hợp phím `Ctrl+Z` có tác dụng gì với một lệnh đang chạy ở tiền cảnh?",
      options: ["Hoàn tác lệnh vừa chạy", "Kết thúc lệnh đó ngay lập tức", "Tạm dừng lệnh đó", "Chuyển lệnh đó sang một terminal khác"],
      explanation: "Lệnh bị tạm dừng có thể được tiếp tục bằng `fg` (tiền cảnh) hoặc `bg` (chạy nền)."
    }
  },
  {
    id: 130,
    topic: "processes",
    answer: 0,
    en: {
      question: "Which command brings a background or suspended job back to the foreground?",
      options: ["`fg`", "`front`", "`bg`", "`up`"],
      explanation: "`fg` resumes the most recent job in the foreground; `fg %2` resumes job number 2."
    },
    vi: {
      question: "Lệnh nào đưa một tác vụ đang chạy nền hoặc đang tạm dừng trở lại tiền cảnh?",
      options: ["`fg`", "`front`", "`bg`", "`up`"],
      explanation: "`fg` tiếp tục tác vụ gần nhất ở tiền cảnh; `fg %2` tiếp tục tác vụ số 2."
    }
  },
  {
    id: 131,
    topic: "processes",
    answer: 1,
    en: {
      question: "Which command lists the jobs started from the current shell?",
      options: ["`work`", "`jobs`", "`list`", "`tasks`"],
      explanation: "`jobs` shows background and suspended jobs with job numbers like [1] and [2]."
    },
    vi: {
      question: "Lệnh nào liệt kê các tác vụ (job) được khởi chạy từ shell hiện tại?",
      options: ["`work`", "`jobs`", "`list`", "`tasks`"],
      explanation: "`jobs` hiển thị các tác vụ đang chạy nền và đang tạm dừng, kèm số thứ tự như [1] và [2]."
    }
  },
  {
    id: 132,
    topic: "processes",
    answer: 1,
    en: {
      question: "Which command shows how much memory (RAM) is used and free?",
      options: ["`mem`", "`free -h`", "`ram`", "`df -h`"],
      explanation: "`free -h` shows total, used and available memory in human-readable units. `df` reports disk space instead."
    },
    vi: {
      question: "Lệnh nào cho biết bộ nhớ (RAM) đã dùng và còn trống?",
      options: ["`mem`", "`free -h`", "`ram`", "`df -h`"],
      explanation: "`free -h` hiển thị tổng bộ nhớ, bộ nhớ đã dùng và còn khả dụng theo đơn vị dễ đọc. Còn `df` báo cáo dung lượng ổ đĩa."
    }
  },
  {
    id: 133,
    topic: "processes",
    answer: 0,
    en: {
      question: "Which command shows the free and used disk space on mounted file systems?",
      options: ["`df -h`", "`du -h`", "`disk -h`", "`free -h`"],
      explanation: "`df` stands for \"disk free\". `du` measures the size of specific files and directories."
    },
    vi: {
      question: "Lệnh nào hiển thị dung lượng đã dùng và còn trống của các hệ thống tệp đã được gắn (mount)?",
      options: ["`df -h`", "`du -h`", "`disk -h`", "`free -h`"],
      explanation: "`df` là viết tắt của \"disk free\". Còn `du` đo kích thước của từng tệp và thư mục cụ thể."
    }
  },
  {
    id: 134,
    topic: "processes",
    answer: 0,
    en: {
      question: "Which command shows how much disk space a particular directory uses?",
      options: ["`du -sh dirname`", "`space dirname`", "`df -h dirname`", "`free dirname`"],
      explanation: "`du` means \"disk usage\"; `-s` gives a single total and `-h` makes it human-readable."
    },
    vi: {
      question: "Lệnh nào cho biết một thư mục cụ thể chiếm bao nhiêu dung lượng ổ đĩa?",
      options: ["`du -sh dirname`", "`space dirname`", "`df -h dirname`", "`free dirname`"],
      explanation: "`du` nghĩa là \"disk usage\"; `-s` cho ra một con số tổng và `-h` hiển thị dạng dễ đọc."
    }
  },
  {
    id: 135,
    topic: "processes",
    answer: 3,
    en: {
      question: "Which command shows how long the system has been running since the last boot?",
      options: ["`time`", "`runtime`", "`since`", "`uptime`"],
      explanation: "`uptime` also shows the number of logged-in users and the load average."
    },
    vi: {
      question: "Lệnh nào cho biết hệ thống đã chạy được bao lâu kể từ lần khởi động gần nhất?",
      options: ["`time`", "`runtime`", "`since`", "`uptime`"],
      explanation: "`uptime` cũng hiển thị số người dùng đang đăng nhập và tải trung bình (load average) của hệ thống."
    }
  },
  {
    id: 136,
    topic: "processes",
    answer: 2,
    en: {
      question: "On most modern distributions, which program runs as PID 1, the first process started by the kernel?",
      options: ["cron", "login", "systemd", "bash"],
      explanation: "systemd (or the traditional init on older systems) starts and manages all other services."
    },
    vi: {
      question: "Trên hầu hết các bản phân phối hiện đại, chương trình nào chạy với PID 1 – tiến trình đầu tiên được nhân khởi động?",
      options: ["cron", "login", "systemd", "bash"],
      explanation: "systemd (hoặc init truyền thống trên các hệ thống cũ) khởi động và quản lý mọi dịch vụ khác."
    }
  },
  {
    id: 137,
    topic: "processes",
    answer: 1,
    en: {
      question: "On systemd-based systems, which command starts, stops and checks services?",
      options: ["`servicectl`", "`systemctl`", "`sysrun`", "`servctl`"],
      explanation: "For example, `sudo systemctl restart nginx` or `systemctl status ssh`."
    },
    vi: {
      question: "Trên các hệ thống dùng systemd, lệnh nào dùng để khởi động, dừng và kiểm tra các dịch vụ?",
      options: ["`servicectl`", "`systemctl`", "`sysrun`", "`servctl`"],
      explanation: "Ví dụ, `sudo systemctl restart nginx` hoặc `systemctl status ssh`."
    }
  },
  {
    id: 138,
    topic: "processes",
    answer: 2,
    en: {
      question: "Which command makes the nginx service start automatically at boot on a systemd system?",
      options: ["`sudo systemctl auto nginx`", "`sudo systemctl start nginx`", "`sudo systemctl enable nginx`", "`sudo systemctl boot nginx`"],
      explanation: "`enable` sets the service to start at boot, while `start` only starts it now. `enable --now` does both."
    },
    vi: {
      question: "Trên hệ thống systemd, lệnh nào giúp dịch vụ nginx tự động chạy mỗi khi khởi động máy?",
      options: ["`sudo systemctl auto nginx`", "`sudo systemctl start nginx`", "`sudo systemctl enable nginx`", "`sudo systemctl boot nginx`"],
      explanation: "`enable` cấu hình dịch vụ tự chạy khi khởi động, còn `start` chỉ chạy dịch vụ ngay lúc đó. `enable --now` làm cả hai việc."
    }
  },
  {
    id: 139,
    topic: "processes",
    answer: 2,
    en: {
      question: "On systemd systems, which command reads the system logs (the journal)?",
      options: ["`showlogs`", "`logread`", "`journalctl`", "`syslogview`"],
      explanation: "`journalctl -u nginx` shows logs for one service, and `journalctl -f` follows new entries as they arrive."
    },
    vi: {
      question: "Trên hệ thống systemd, lệnh nào dùng để đọc nhật ký hệ thống (journal)?",
      options: ["`showlogs`", "`logread`", "`journalctl`", "`syslogview`"],
      explanation: "`journalctl -u nginx` hiển thị nhật ký của một dịch vụ, còn `journalctl -f` theo dõi các dòng nhật ký mới khi chúng xuất hiện."
    }
  },
  {
    id: 140,
    topic: "processes",
    answer: 2,
    en: {
      question: "Which command restarts the computer?",
      options: ["`sudo reload`", "`sudo restart`", "`sudo reboot`", "`sudo again`"],
      explanation: "`sudo reboot` restarts the system. `sudo shutdown now` or `sudo poweroff` turns it off."
    },
    vi: {
      question: "Lệnh nào khởi động lại máy tính?",
      options: ["`sudo reload`", "`sudo restart`", "`sudo reboot`", "`sudo again`"],
      explanation: "`sudo reboot` khởi động lại hệ thống. `sudo shutdown now` hoặc `sudo poweroff` sẽ tắt máy."
    }
  },
  {
    id: 141,
    topic: "packages",
    answer: 2,
    en: {
      question: "Which package manager is used by Debian and Ubuntu?",
      options: ["`dnf`", "`pacman`", "`apt`", "`zypper`"],
      explanation: "APT (Advanced Package Tool) installs .deb packages on Debian-based systems."
    },
    vi: {
      question: "Debian và Ubuntu sử dụng trình quản lý gói nào?",
      options: ["`dnf`", "`pacman`", "`apt`", "`zypper`"],
      explanation: "APT (Advanced Package Tool) cài đặt các gói .deb trên các hệ thống dựa trên Debian."
    }
  },
  {
    id: 142,
    topic: "packages",
    answer: 1,
    en: {
      question: "Which package manager is used by modern Fedora and Red Hat Enterprise Linux?",
      options: ["`apt`", "`dnf`", "`brew`", "`pacman`"],
      explanation: "`dnf` replaced the older `yum` and installs .rpm packages."
    },
    vi: {
      question: "Fedora và Red Hat Enterprise Linux hiện đại sử dụng trình quản lý gói nào?",
      options: ["`apt`", "`dnf`", "`brew`", "`pacman`"],
      explanation: "`dnf` đã thay thế `yum` cũ và dùng để cài đặt các gói .rpm."
    }
  },
  {
    id: 143,
    topic: "packages",
    answer: 0,
    en: {
      question: "Which package manager is used by Arch Linux?",
      options: ["`pacman`", "`yum`", "`apt`", "`emerge`"],
      explanation: "`pacman` is Arch's package manager. `emerge` belongs to Gentoo."
    },
    vi: {
      question: "Arch Linux sử dụng trình quản lý gói nào?",
      options: ["`pacman`", "`yum`", "`apt`", "`emerge`"],
      explanation: "`pacman` là trình quản lý gói của Arch. `emerge` thuộc về Gentoo."
    }
  },
  {
    id: 144,
    topic: "packages",
    answer: 1,
    en: {
      question: "On Ubuntu, which command refreshes the list of available packages from the repositories?",
      options: ["`sudo apt refresh`", "`sudo apt update`", "`sudo apt upgrade`", "`sudo apt list`"],
      explanation: "`apt update` downloads the latest package lists but does not install anything."
    },
    vi: {
      question: "Trên Ubuntu, lệnh nào làm mới danh sách các gói có sẵn từ kho phần mềm?",
      options: ["`sudo apt refresh`", "`sudo apt update`", "`sudo apt upgrade`", "`sudo apt list`"],
      explanation: "`apt update` tải về danh sách gói mới nhất nhưng không cài đặt gì cả."
    }
  },
  {
    id: 145,
    topic: "packages",
    answer: 3,
    en: {
      question: "On Ubuntu, which command installs newer versions of the packages already installed?",
      options: ["`sudo apt newer`", "`sudo apt install`", "`sudo apt update`", "`sudo apt upgrade`"],
      explanation: "Run `sudo apt update` first to refresh the lists, then `sudo apt upgrade` to apply the updates."
    },
    vi: {
      question: "Trên Ubuntu, lệnh nào cài đặt phiên bản mới hơn cho các gói đã được cài?",
      options: ["`sudo apt newer`", "`sudo apt install`", "`sudo apt update`", "`sudo apt upgrade`"],
      explanation: "Hãy chạy `sudo apt update` trước để làm mới danh sách, sau đó chạy `sudo apt upgrade` để áp dụng các bản cập nhật."
    }
  },
  {
    id: 146,
    topic: "packages",
    answer: 1,
    en: {
      question: "How do you install the package htop on Ubuntu?",
      options: ["`sudo install htop`", "`sudo apt install htop`", "`sudo apt get htop`", "`sudo apt add htop`"],
      explanation: "`apt install` downloads the package and its dependencies and installs them."
    },
    vi: {
      question: "Làm thế nào để cài đặt gói htop trên Ubuntu?",
      options: ["`sudo install htop`", "`sudo apt install htop`", "`sudo apt get htop`", "`sudo apt add htop`"],
      explanation: "`apt install` tải gói cùng các gói phụ thuộc của nó về rồi cài đặt."
    }
  },
  {
    id: 147,
    topic: "packages",
    answer: 2,
    en: {
      question: "How do you remove an installed package on Ubuntu?",
      options: ["`sudo apt uninstall packagename`", "`sudo rm packagename`", "`sudo apt remove packagename`", "`sudo apt delete packagename`"],
      explanation: "`apt remove` uninstalls the package but keeps its system-wide configuration files."
    },
    vi: {
      question: "Làm thế nào để gỡ bỏ một gói đã cài đặt trên Ubuntu?",
      options: ["`sudo apt uninstall packagename`", "`sudo rm packagename`", "`sudo apt remove packagename`", "`sudo apt delete packagename`"],
      explanation: "`apt remove` gỡ cài đặt gói nhưng vẫn giữ lại các tệp cấu hình hệ thống của gói đó."
    }
  },
  {
    id: 148,
    topic: "packages",
    answer: 3,
    en: {
      question: "What does `sudo apt purge nginx` do compared to `sudo apt remove nginx`?",
      options: ["It reinstalls the package", "It only clears the download cache", "It only removes the configuration files", "It removes the package and also its configuration files"],
      explanation: "Use `purge` when you want a completely clean removal."
    },
    vi: {
      question: "So với `sudo apt remove nginx`, lệnh `sudo apt purge nginx` khác ở điểm nào?",
      options: ["Cài đặt lại gói", "Chỉ xóa bộ nhớ đệm tải về", "Chỉ xóa các tệp cấu hình", "Gỡ bỏ gói và xóa luôn cả các tệp cấu hình của nó"],
      explanation: "Dùng `purge` khi bạn muốn gỡ bỏ hoàn toàn, sạch sẽ."
    }
  },
  {
    id: 149,
    topic: "packages",
    answer: 0,
    en: {
      question: "Which file extension do Debian and Ubuntu packages use?",
      options: ["`.deb`", "`.exe`", "`.rpm`", "`.pkg`"],
      explanation: "Debian-based systems use .deb files; Red Hat-based systems use .rpm files."
    },
    vi: {
      question: "Các gói của Debian và Ubuntu có phần mở rộng (đuôi tệp) là gì?",
      options: ["`.deb`", "`.exe`", "`.rpm`", "`.pkg`"],
      explanation: "Các hệ thống dựa trên Debian dùng tệp .deb; các hệ thống dựa trên Red Hat dùng tệp .rpm."
    }
  },
  {
    id: 150,
    topic: "packages",
    answer: 2,
    en: {
      question: "Which file extension do Red Hat, Fedora and openSUSE packages use?",
      options: ["`.deb`", "`.msi`", "`.rpm`", "`.apk`"],
      explanation: "RPM originally stood for \"Red Hat Package Manager\"."
    },
    vi: {
      question: "Các gói của Red Hat, Fedora và openSUSE có phần mở rộng là gì?",
      options: ["`.deb`", "`.msi`", "`.rpm`", "`.apk`"],
      explanation: "RPM ban đầu là viết tắt của \"Red Hat Package Manager\"."
    }
  },
  {
    id: 151,
    topic: "packages",
    answer: 1,
    en: {
      question: "Which low-level command installs a local .deb file?",
      options: ["`sudo deb install package.deb`", "`sudo dpkg -i package.deb`", "`sudo apt-file package.deb`", "`sudo rpm -i package.deb`"],
      explanation: "`dpkg` is the low-level Debian package tool. `sudo apt install ./package.deb` also works and resolves dependencies."
    },
    vi: {
      question: "Lệnh cấp thấp nào dùng để cài đặt một tệp .deb có sẵn trên máy?",
      options: ["`sudo deb install package.deb`", "`sudo dpkg -i package.deb`", "`sudo apt-file package.deb`", "`sudo rpm -i package.deb`"],
      explanation: "`dpkg` là công cụ quản lý gói cấp thấp của Debian. Lệnh `sudo apt install ./package.deb` cũng dùng được và còn tự xử lý các gói phụ thuộc."
    }
  },
  {
    id: 152,
    topic: "packages",
    answer: 2,
    en: {
      question: "Which command searches the repositories for packages by keyword on Ubuntu?",
      options: ["`apt look keyword`", "`apt find keyword`", "`apt search keyword`", "`apt grep keyword`"],
      explanation: "`apt search` lists packages whose names or descriptions match. `apt show name` displays details about one package."
    },
    vi: {
      question: "Trên Ubuntu, lệnh nào tìm kiếm gói trong kho phần mềm theo từ khóa?",
      options: ["`apt look keyword`", "`apt find keyword`", "`apt search keyword`", "`apt grep keyword`"],
      explanation: "`apt search` liệt kê các gói có tên hoặc mô tả phù hợp. `apt show name` hiển thị thông tin chi tiết về một gói."
    }
  },
  {
    id: 153,
    topic: "packages",
    answer: 2,
    en: {
      question: "Which command installs a package on Fedora?",
      options: ["`sudo pacman -S packagename`", "`sudo fedora install packagename`", "`sudo dnf install packagename`", "`sudo apt install packagename`"],
      explanation: "Fedora uses `dnf`. `apt` is for Debian/Ubuntu and `pacman` is for Arch Linux."
    },
    vi: {
      question: "Lệnh nào cài đặt một gói trên Fedora?",
      options: ["`sudo pacman -S packagename`", "`sudo fedora install packagename`", "`sudo dnf install packagename`", "`sudo apt install packagename`"],
      explanation: "Fedora dùng `dnf`. `apt` dành cho Debian/Ubuntu, còn `pacman` dành cho Arch Linux."
    }
  },
  {
    id: 154,
    topic: "packages",
    answer: 3,
    en: {
      question: "What does `sudo apt autoremove` do?",
      options: ["Removes every installed package", "Deletes the files in /tmp", "Uninstalls the apt program itself", "Removes packages that were installed as dependencies and are no longer needed"],
      explanation: "When you remove a program, its dependencies often stay behind; `autoremove` cleans them up."
    },
    vi: {
      question: "Lệnh `sudo apt autoremove` có tác dụng gì?",
      options: ["Gỡ bỏ mọi gói đã cài đặt", "Xóa các tệp trong /tmp", "Gỡ cài đặt chính chương trình apt", "Gỡ bỏ các gói từng được cài làm gói phụ thuộc nhưng nay không còn cần thiết"],
      explanation: "Khi bạn gỡ một chương trình, các gói phụ thuộc của nó thường vẫn còn lại; `autoremove` sẽ dọn dẹp chúng."
    }
  },
  {
    id: 155,
    topic: "packages",
    answer: 3,
    en: {
      question: "What is a \"repository\" in Linux package management?",
      options: ["A backup copy of the kernel", "A list of the system's users", "A folder for the user's documents", "A server or storage location that hosts packages you can download and install"],
      explanation: "Package managers download software from trusted repositories configured on your system."
    },
    vi: {
      question: "Trong quản lý gói Linux, \"kho phần mềm\" (repository) là gì?",
      options: ["Bản sao lưu của nhân Linux", "Danh sách người dùng của hệ thống", "Thư mục chứa tài liệu của người dùng", "Máy chủ hoặc nơi lưu trữ chứa các gói để bạn tải về và cài đặt"],
      explanation: "Trình quản lý gói tải phần mềm từ các kho tin cậy đã được cấu hình trên hệ thống của bạn."
    }
  },
  {
    id: 156,
    topic: "packages",
    answer: 0,
    en: {
      question: "On Debian and Ubuntu, where are the APT repository sources configured?",
      options: ["In `/etc/apt/sources.list` and files inside `/etc/apt/sources.list.d/`", "In `/etc/repos`", "In `/usr/apt/list`", "In `/var/apt/repos`"],
      explanation: "Newer Ubuntu releases store their main sources in /etc/apt/sources.list.d/ubuntu.sources."
    },
    vi: {
      question: "Trên Debian và Ubuntu, các nguồn kho phần mềm của APT được cấu hình ở đâu?",
      options: ["Trong `/etc/apt/sources.list` và các tệp bên trong `/etc/apt/sources.list.d/`", "Trong `/etc/repos`", "Trong `/usr/apt/list`", "Trong `/var/apt/repos`"],
      explanation: "Các phiên bản Ubuntu mới lưu nguồn chính trong tệp /etc/apt/sources.list.d/ubuntu.sources."
    }
  },
  {
    id: 157,
    topic: "packages",
    answer: 1,
    en: {
      question: "What is a package \"dependency\"?",
      options: ["A package that is out of date", "Another package that must be installed for a program to work", "A broken package", "A package that only runs on servers"],
      explanation: "Package managers like APT and DNF automatically install required dependencies."
    },
    vi: {
      question: "\"Gói phụ thuộc\" (dependency) là gì?",
      options: ["Một gói đã lỗi thời", "Một gói khác cần được cài đặt để chương trình có thể hoạt động", "Một gói bị hỏng", "Một gói chỉ chạy được trên máy chủ"],
      explanation: "Các trình quản lý gói như APT và DNF tự động cài đặt những gói phụ thuộc cần thiết."
    }
  },
  {
    id: 158,
    topic: "packages",
    answer: 2,
    en: {
      question: "Which command lists all installed packages on a Debian or Ubuntu system?",
      options: ["`apt get-list`", "`dpkg -i`", "`dpkg -l`", "`ls /packages`"],
      explanation: "`dpkg -l` lists installed packages. `apt list --installed` gives a similar result."
    },
    vi: {
      question: "Lệnh nào liệt kê tất cả các gói đã cài đặt trên hệ thống Debian hoặc Ubuntu?",
      options: ["`apt get-list`", "`dpkg -i`", "`dpkg -l`", "`ls /packages`"],
      explanation: "`dpkg -l` liệt kê các gói đã cài đặt. `apt list --installed` cho kết quả tương tự."
    }
  },
  {
    id: 159,
    topic: "packages",
    answer: 2,
    en: {
      question: "What are Snap and Flatpak?",
      options: ["Linux text editors", "Network monitoring tools", "Universal package formats that bundle applications with their dependencies", "File systems"],
      explanation: "Snap and Flatpak packages run on many different distributions because they carry what they need with them."
    },
    vi: {
      question: "Snap và Flatpak là gì?",
      options: ["Các trình soạn thảo văn bản trên Linux", "Các công cụ giám sát mạng", "Các định dạng gói đa nền tảng, đóng gói ứng dụng cùng với các thành phần phụ thuộc của nó", "Các hệ thống tệp"],
      explanation: "Gói Snap và Flatpak chạy được trên nhiều bản phân phối khác nhau vì chúng mang theo những gì cần thiết."
    }
  },
  {
    id: 160,
    topic: "packages",
    answer: 1,
    en: {
      question: "Which command installs a package on Arch Linux?",
      options: ["`sudo arch install packagename`", "`sudo pacman -S packagename`", "`sudo pacman -R packagename`", "`sudo pacman -Q packagename`"],
      explanation: "`-S` syncs (installs) a package, `-R` removes one and `-Q` queries installed packages."
    },
    vi: {
      question: "Lệnh nào cài đặt một gói trên Arch Linux?",
      options: ["`sudo arch install packagename`", "`sudo pacman -S packagename`", "`sudo pacman -R packagename`", "`sudo pacman -Q packagename`"],
      explanation: "`-S` đồng bộ (cài đặt) một gói, `-R` gỡ bỏ gói và `-Q` truy vấn các gói đã cài."
    }
  },
  {
    id: 161,
    topic: "networking",
    answer: 2,
    en: {
      question: "Which command checks whether a remote host is reachable over the network?",
      options: ["`check`", "`reach`", "`ping`", "`hello`"],
      explanation: "`ping google.com` sends small test packets and reports whether replies come back and how long they take."
    },
    vi: {
      question: "Lệnh nào kiểm tra xem có thể kết nối tới một máy ở xa qua mạng hay không?",
      options: ["`check`", "`reach`", "`ping`", "`hello`"],
      explanation: "`ping google.com` gửi các gói tin kiểm tra nhỏ và cho biết có nhận được phản hồi không, cũng như mất bao lâu."
    }
  },
  {
    id: 162,
    topic: "networking",
    answer: 2,
    en: {
      question: "Which modern command shows the IP addresses of your network interfaces?",
      options: ["`ipconfig`", "`showip`", "`ip addr`", "`netaddr`"],
      explanation: "`ip addr` (or `ip a`) replaces the older `ifconfig`. `ipconfig` is the Windows equivalent."
    },
    vi: {
      question: "Lệnh hiện đại nào hiển thị địa chỉ IP của các giao diện mạng?",
      options: ["`ipconfig`", "`showip`", "`ip addr`", "`netaddr`"],
      explanation: "`ip addr` (hoặc `ip a`) thay thế cho lệnh cũ `ifconfig`. `ipconfig` là lệnh tương đương trên Windows."
    }
  },
  {
    id: 163,
    topic: "networking",
    answer: 3,
    en: {
      question: "Which IP address is the loopback address that always refers to your own computer?",
      options: ["192.168.0.1", "8.8.8.8", "255.255.255.255", "127.0.0.1"],
      explanation: "127.0.0.1 (and the name localhost) point back to the local machine."
    },
    vi: {
      question: "Địa chỉ IP nào là địa chỉ loopback, luôn trỏ về chính máy tính của bạn?",
      options: ["192.168.0.1", "8.8.8.8", "255.255.255.255", "127.0.0.1"],
      explanation: "127.0.0.1 (và tên localhost) trỏ về chính máy cục bộ."
    }
  },
  {
    id: 164,
    topic: "networking",
    answer: 3,
    en: {
      question: "Which hostname always refers to your own computer?",
      options: ["home", "self", "myhost", "localhost"],
      explanation: "`localhost` resolves to the loopback address 127.0.0.1 (or ::1 for IPv6)."
    },
    vi: {
      question: "Tên máy (hostname) nào luôn chỉ chính máy tính của bạn?",
      options: ["home", "self", "myhost", "localhost"],
      explanation: "`localhost` được phân giải thành địa chỉ loopback 127.0.0.1 (hoặc ::1 với IPv6)."
    }
  },
  {
    id: 165,
    topic: "networking",
    answer: 3,
    en: {
      question: "Which command lets you securely log in to a remote computer?",
      options: ["`remote user@host`", "`login user@host`", "`ftp user@host`", "`ssh user@host`"],
      explanation: "SSH (Secure Shell) encrypts the whole session, including your password."
    },
    vi: {
      question: "Lệnh nào cho phép bạn đăng nhập an toàn vào một máy tính từ xa?",
      options: ["`remote user@host`", "`login user@host`", "`ftp user@host`", "`ssh user@host`"],
      explanation: "SSH (Secure Shell) mã hóa toàn bộ phiên làm việc, kể cả mật khẩu của bạn."
    }
  },
  {
    id: 166,
    topic: "networking",
    answer: 0,
    en: {
      question: "What is the default port number for SSH?",
      options: ["22", "21", "443", "80"],
      explanation: "SSH listens on TCP port 22 by default. Port 21 is used by FTP."
    },
    vi: {
      question: "Cổng mặc định của SSH là bao nhiêu?",
      options: ["22", "21", "443", "80"],
      explanation: "SSH lắng nghe trên cổng TCP 22 theo mặc định. Cổng 21 được FTP sử dụng."
    }
  },
  {
    id: 167,
    topic: "networking",
    answer: 0,
    en: {
      question: "What is the default port number for HTTP?",
      options: ["80", "443", "22", "25"],
      explanation: "Web servers serve plain HTTP on port 80. Port 25 is used for SMTP email."
    },
    vi: {
      question: "Cổng mặc định của HTTP là bao nhiêu?",
      options: ["80", "443", "22", "25"],
      explanation: "Máy chủ web phục vụ HTTP thông thường qua cổng 80. Cổng 25 được dùng cho email SMTP."
    }
  },
  {
    id: 168,
    topic: "networking",
    answer: 3,
    en: {
      question: "What is the default port number for HTTPS?",
      options: ["22", "8080", "80", "443"],
      explanation: "HTTPS (HTTP over TLS) uses port 443 by default."
    },
    vi: {
      question: "Cổng mặc định của HTTPS là bao nhiêu?",
      options: ["22", "8080", "80", "443"],
      explanation: "HTTPS (HTTP qua TLS) dùng cổng 443 theo mặc định."
    }
  },
  {
    id: 169,
    topic: "networking",
    answer: 1,
    en: {
      question: "Which command copies files securely between computers over SSH?",
      options: ["`cp -r`", "`scp`", "`mv --ssh`", "`ftp`"],
      explanation: "For example, `scp report.pdf alice@server:/home/alice/`. `rsync` is another popular option."
    },
    vi: {
      question: "Lệnh nào sao chép tệp một cách an toàn giữa các máy tính thông qua SSH?",
      options: ["`cp -r`", "`scp`", "`mv --ssh`", "`ftp`"],
      explanation: "Ví dụ, `scp report.pdf alice@server:/home/alice/`. `rsync` cũng là một lựa chọn phổ biến."
    }
  },
  {
    id: 170,
    topic: "networking",
    answer: 0,
    en: {
      question: "Which command downloads a file from a URL?",
      options: ["`wget`", "`get`", "`pull`", "`fetchurl`"],
      explanation: "`wget https://example.com/file.zip` saves the file to the current directory. `curl -O` does the same."
    },
    vi: {
      question: "Lệnh nào tải một tệp về từ một địa chỉ URL?",
      options: ["`wget`", "`get`", "`pull`", "`fetchurl`"],
      explanation: "`wget https://example.com/file.zip` lưu tệp vào thư mục hiện tại. `curl -O` cũng làm được điều tương tự."
    }
  },
  {
    id: 171,
    topic: "networking",
    answer: 1,
    en: {
      question: "Which file maps hostnames to IP addresses locally, before DNS is asked?",
      options: ["`/etc/hostname`", "`/etc/hosts`", "`/etc/dns.conf`", "`/etc/ips`"],
      explanation: "Entries like `127.0.0.1 localhost` live in /etc/hosts. /etc/hostname only holds this computer's own name."
    },
    vi: {
      question: "Tệp nào ánh xạ tên máy sang địa chỉ IP ngay trên máy cục bộ, trước khi hỏi DNS?",
      options: ["`/etc/hostname`", "`/etc/hosts`", "`/etc/dns.conf`", "`/etc/ips`"],
      explanation: "Các dòng như `127.0.0.1 localhost` nằm trong /etc/hosts. Còn /etc/hostname chỉ chứa tên của chính máy tính này."
    }
  },
  {
    id: 172,
    topic: "networking",
    answer: 1,
    en: {
      question: "Which file traditionally lists the DNS servers your system uses?",
      options: ["`/etc/hosts.allow`", "`/etc/resolv.conf`", "`/etc/network.conf`", "`/etc/dns`"],
      explanation: "/etc/resolv.conf contains `nameserver` lines. On many modern systems it is managed automatically."
    },
    vi: {
      question: "Theo truyền thống, tệp nào liệt kê các máy chủ DNS mà hệ thống sử dụng?",
      options: ["`/etc/hosts.allow`", "`/etc/resolv.conf`", "`/etc/network.conf`", "`/etc/dns`"],
      explanation: "/etc/resolv.conf chứa các dòng `nameserver`. Trên nhiều hệ thống hiện đại, tệp này được quản lý tự động."
    }
  },
  {
    id: 173,
    topic: "networking",
    answer: 0,
    en: {
      question: "Which command shows the system's hostname?",
      options: ["`hostname`", "`whoami`", "`myname`", "`hostinfo`"],
      explanation: "`hostname` prints the computer's name. On systemd systems, `hostnamectl` can view and change it."
    },
    vi: {
      question: "Lệnh nào hiển thị tên máy (hostname) của hệ thống?",
      options: ["`hostname`", "`whoami`", "`myname`", "`hostinfo`"],
      explanation: "`hostname` in ra tên của máy tính. Trên hệ thống systemd, `hostnamectl` có thể xem và thay đổi tên máy."
    }
  },
  {
    id: 174,
    topic: "networking",
    answer: 1,
    en: {
      question: "Which modern command lists listening ports and open network connections?",
      options: ["`ports -l`", "`ss -tuln`", "`ip ports`", "`listen -a`"],
      explanation: "`ss` replaces the older `netstat`. `-t` TCP, `-u` UDP, `-l` listening and `-n` numeric output."
    },
    vi: {
      question: "Lệnh hiện đại nào liệt kê các cổng đang lắng nghe và các kết nối mạng đang mở?",
      options: ["`ports -l`", "`ss -tuln`", "`ip ports`", "`listen -a`"],
      explanation: "`ss` thay thế cho lệnh cũ `netstat`. `-t` là TCP, `-u` là UDP, `-l` là đang lắng nghe và `-n` hiển thị dạng số."
    }
  },
  {
    id: 175,
    topic: "networking",
    answer: 2,
    en: {
      question: "Which command looks up the IP address of a domain name?",
      options: ["`iplookup example.com`", "`getip example.com`", "`nslookup example.com`", "`domain example.com`"],
      explanation: "`nslookup`, `dig` and `host` query DNS servers to resolve names into IP addresses."
    },
    vi: {
      question: "Lệnh nào tra cứu địa chỉ IP của một tên miền?",
      options: ["`iplookup example.com`", "`getip example.com`", "`nslookup example.com`", "`domain example.com`"],
      explanation: "`nslookup`, `dig` và `host` gửi truy vấn tới máy chủ DNS để phân giải tên miền thành địa chỉ IP."
    }
  },
  {
    id: 176,
    topic: "networking",
    answer: 2,
    en: {
      question: "Which command shows the route (each hop) that packets take to reach a host?",
      options: ["`hops`", "`pathping`", "`traceroute`", "`netpath`"],
      explanation: "`traceroute example.com` lists every router along the way. `pathping` is a Windows tool."
    },
    vi: {
      question: "Lệnh nào hiển thị đường đi (từng chặng) mà gói tin đi qua để tới một máy?",
      options: ["`hops`", "`pathping`", "`traceroute`", "`netpath`"],
      explanation: "`traceroute example.com` liệt kê từng router trên đường đi. `pathping` là công cụ của Windows."
    }
  },
  {
    id: 177,
    topic: "networking",
    answer: 3,
    en: {
      question: "Which command shows the system's routing table?",
      options: ["`routes`", "`showroute`", "`ip addr`", "`ip route`"],
      explanation: "`ip route` shows where traffic is sent, including the default gateway. `ip addr` shows interface addresses."
    },
    vi: {
      question: "Lệnh nào hiển thị bảng định tuyến (routing table) của hệ thống?",
      options: ["`routes`", "`showroute`", "`ip addr`", "`ip route`"],
      explanation: "`ip route` cho biết lưu lượng được gửi đi đâu, bao gồm cả cổng mặc định (default gateway). `ip addr` hiển thị địa chỉ của các giao diện mạng."
    }
  },
  {
    id: 178,
    topic: "networking",
    answer: 1,
    en: {
      question: "Which command creates a new SSH key pair?",
      options: ["`ssh --create-key`", "`ssh-keygen`", "`ssh-newkey`", "`keygen-ssh`"],
      explanation: "`ssh-keygen` creates a private key and a matching public key (.pub) that you can copy to servers."
    },
    vi: {
      question: "Lệnh nào tạo một cặp khóa SSH mới?",
      options: ["`ssh --create-key`", "`ssh-keygen`", "`ssh-newkey`", "`keygen-ssh`"],
      explanation: "`ssh-keygen` tạo một khóa riêng tư (private key) và một khóa công khai (.pub) tương ứng mà bạn có thể sao chép lên máy chủ."
    }
  },
  {
    id: 179,
    topic: "networking",
    answer: 1,
    en: {
      question: "Which command-line tool transfers data to and from URLs and is popular for testing web APIs?",
      options: ["`ping`", "`curl`", "`traceroute`", "`ssh`"],
      explanation: "For example, `curl https://api.example.com/users` prints the server's response."
    },
    vi: {
      question: "Công cụ dòng lệnh nào truyền dữ liệu tới/từ URL và thường được dùng để kiểm thử API web?",
      options: ["`ping`", "`curl`", "`traceroute`", "`ssh`"],
      explanation: "Ví dụ, `curl https://api.example.com/users` in ra phản hồi của máy chủ."
    }
  },
  {
    id: 180,
    topic: "networking",
    answer: 0,
    en: {
      question: "Which simple firewall tool is commonly used on Ubuntu?",
      options: ["`ufw`", "`safenet`", "`fwall`", "`blockit`"],
      explanation: "UFW means \"Uncomplicated Firewall\". For example: `sudo ufw allow 22` and `sudo ufw enable`."
    },
    vi: {
      question: "Công cụ tường lửa đơn giản nào thường được dùng trên Ubuntu?",
      options: ["`ufw`", "`safenet`", "`fwall`", "`blockit`"],
      explanation: "UFW nghĩa là \"Uncomplicated Firewall\" (tường lửa không phức tạp). Ví dụ: `sudo ufw allow 22` và `sudo ufw enable`."
    }
  },
  {
    id: 181,
    topic: "shell",
    answer: 0,
    en: {
      question: "What does the pipe symbol `|` do?",
      options: ["Sends the output of one command as the input of the next command", "Saves the output to a file", "Turns the rest of the line into a comment", "Runs two unrelated commands at the same time"],
      explanation: "For example, `ls | wc -l` counts the files in a directory."
    },
    vi: {
      question: "Ký hiệu pipe `|` có tác dụng gì?",
      options: ["Chuyển kết quả đầu ra của một lệnh thành dữ liệu đầu vào cho lệnh tiếp theo", "Lưu kết quả đầu ra vào một tệp", "Biến phần còn lại của dòng thành chú thích", "Chạy cùng lúc hai lệnh không liên quan"],
      explanation: "Ví dụ, `ls | wc -l` đếm số tệp trong một thư mục."
    }
  },
  {
    id: 182,
    topic: "shell",
    answer: 1,
    en: {
      question: "What does `>` do in `ls > files.txt`?",
      options: ["Appends the output to the end of files.txt", "Writes the output into files.txt, replacing its previous contents", "Compares the output with files.txt", "Reads input from files.txt"],
      explanation: "`>` redirects standard output into a file and overwrites it. Use `>>` to append instead."
    },
    vi: {
      question: "Trong lệnh `ls > files.txt`, ký hiệu `>` có tác dụng gì?",
      options: ["Nối thêm kết quả vào cuối files.txt", "Ghi kết quả vào files.txt, thay thế nội dung cũ của tệp", "So sánh kết quả với files.txt", "Đọc dữ liệu đầu vào từ files.txt"],
      explanation: "`>` chuyển hướng đầu ra chuẩn vào một tệp và ghi đè lên tệp đó. Dùng `>>` nếu muốn ghi nối thêm."
    }
  },
  {
    id: 183,
    topic: "shell",
    answer: 0,
    en: {
      question: "What does `>>` do in `echo \"done\" >> log.txt`?",
      options: ["Appends the output to the end of log.txt", "Runs the command twice", "Redirects only error messages", "Overwrites log.txt"],
      explanation: "`>>` keeps the existing contents of the file and adds the new output at the end."
    },
    vi: {
      question: "Trong lệnh `echo \"done\" >> log.txt`, ký hiệu `>>` có tác dụng gì?",
      options: ["Nối thêm kết quả vào cuối log.txt", "Chạy lệnh hai lần", "Chỉ chuyển hướng các thông báo lỗi", "Ghi đè lên log.txt"],
      explanation: "`>>` giữ nguyên nội dung hiện có của tệp và thêm kết quả mới vào cuối."
    }
  },
  {
    id: 184,
    topic: "shell",
    answer: 1,
    en: {
      question: "What does `2>` redirect?",
      options: ["The output of the second command only", "Error output (standard error)", "Input (standard input)", "Normal output (standard output)"],
      explanation: "Stream 1 is stdout and stream 2 is stderr, so `command 2> errors.txt` saves only the error messages."
    },
    vi: {
      question: "`2>` chuyển hướng luồng dữ liệu nào?",
      options: ["Chỉ đầu ra của lệnh thứ hai", "Đầu ra lỗi (standard error)", "Đầu vào (standard input)", "Đầu ra thông thường (standard output)"],
      explanation: "Luồng 1 là stdout và luồng 2 là stderr, vì vậy `command 2> errors.txt` chỉ lưu các thông báo lỗi."
    }
  },
  {
    id: 185,
    topic: "shell",
    answer: 0,
    en: {
      question: "What is `/dev/null`?",
      options: ["A special file that discards everything written to it", "The first hard drive", "A user account with no password", "A folder where deleted files are kept"],
      explanation: "`command > /dev/null` hides a command's output, like a black hole."
    },
    vi: {
      question: "`/dev/null` là gì?",
      options: ["Một tệp đặc biệt loại bỏ mọi dữ liệu được ghi vào nó", "Ổ cứng đầu tiên", "Một tài khoản người dùng không có mật khẩu", "Một thư mục chứa các tệp đã bị xóa"],
      explanation: "`command > /dev/null` ẩn đầu ra của lệnh, giống như một \"hố đen\"."
    }
  },
  {
    id: 186,
    topic: "shell",
    answer: 2,
    en: {
      question: "How do you print the value of a variable named NAME?",
      options: ["`echo NAME`", "`echo @NAME`", "`echo $NAME`", "`echo %NAME%`"],
      explanation: "The `$` tells the shell to replace the variable name with its value. `%NAME%` is Windows syntax."
    },
    vi: {
      question: "Làm thế nào để in ra giá trị của biến có tên NAME?",
      options: ["`echo NAME`", "`echo @NAME`", "`echo $NAME`", "`echo %NAME%`"],
      explanation: "Dấu `$` yêu cầu shell thay tên biến bằng giá trị của nó. `%NAME%` là cú pháp của Windows."
    }
  },
  {
    id: 187,
    topic: "shell",
    answer: 1,
    en: {
      question: "Which environment variable holds the list of directories the shell searches for commands?",
      options: ["`HOME`", "`PATH`", "`SHELL`", "`USER`"],
      explanation: "Directories in PATH are separated by colons, for example /usr/local/bin:/usr/bin:/bin."
    },
    vi: {
      question: "Biến môi trường nào chứa danh sách các thư mục mà shell tìm kiếm lệnh?",
      options: ["`HOME`", "`PATH`", "`SHELL`", "`USER`"],
      explanation: "Các thư mục trong PATH được phân tách bằng dấu hai chấm, ví dụ /usr/local/bin:/usr/bin:/bin."
    }
  },
  {
    id: 188,
    topic: "shell",
    answer: 0,
    en: {
      question: "What does the first line `#!/bin/bash` in a script do?",
      options: ["Tells the system to run the script with the Bash interpreter", "Nothing; it is just a comment", "Deletes older versions of the script", "Makes the script a hidden file"],
      explanation: "This line is called a \"shebang\". It chooses which program interprets the rest of the file."
    },
    vi: {
      question: "Dòng đầu tiên `#!/bin/bash` trong một script có tác dụng gì?",
      options: ["Cho hệ thống biết cần chạy script bằng trình thông dịch Bash", "Không có tác dụng gì; nó chỉ là một dòng chú thích", "Xóa các phiên bản cũ của script", "Biến script thành tệp ẩn"],
      explanation: "Dòng này được gọi là \"shebang\". Nó chọn chương trình sẽ thông dịch phần còn lại của tệp."
    }
  },
  {
    id: 189,
    topic: "shell",
    answer: 2,
    en: {
      question: "How do you run an executable script named backup.sh that is in the current directory?",
      options: ["`open backup.sh`", "`run backup.sh`", "`./backup.sh`", "`backup.sh.exe`"],
      explanation: "`./` tells the shell to look in the current directory, which is normally not in PATH. `bash backup.sh` also works."
    },
    vi: {
      question: "Làm thế nào để chạy script backup.sh (đã có quyền thực thi) nằm trong thư mục hiện tại?",
      options: ["`open backup.sh`", "`run backup.sh`", "`./backup.sh`", "`backup.sh.exe`"],
      explanation: "`./` báo cho shell tìm trong thư mục hiện tại – vốn thường không nằm trong PATH. Lệnh `bash backup.sh` cũng chạy được."
    }
  },
  {
    id: 190,
    topic: "shell",
    answer: 3,
    en: {
      question: "Which command shows the commands you have previously run in the shell?",
      options: ["`last`", "`previous`", "`recent`", "`history`"],
      explanation: "`history` lists past commands with numbers. `!42` re-runs command number 42, and the Up arrow recalls recent ones."
    },
    vi: {
      question: "Lệnh nào hiển thị các lệnh bạn đã chạy trước đó trong shell?",
      options: ["`last`", "`previous`", "`recent`", "`history`"],
      explanation: "`history` liệt kê các lệnh đã chạy kèm số thứ tự. `!42` chạy lại lệnh số 42, còn phím mũi tên Lên gọi lại các lệnh gần đây."
    }
  },
  {
    id: 191,
    topic: "shell",
    answer: 2,
    en: {
      question: "What does `alias ll='ls -l'` do?",
      options: ["Renames the ls program to ll", "Deletes the ll command", "Creates a shortcut so that typing `ll` runs `ls -l`", "Lists all existing aliases"],
      explanation: "Aliases save typing. Put them in ~/.bashrc to keep them across sessions."
    },
    vi: {
      question: "Lệnh `alias ll='ls -l'` có tác dụng gì?",
      options: ["Đổi tên chương trình ls thành ll", "Xóa lệnh ll", "Tạo lối tắt để khi gõ `ll` thì lệnh `ls -l` được chạy", "Liệt kê tất cả các alias hiện có"],
      explanation: "Alias giúp gõ lệnh nhanh hơn. Hãy đặt chúng trong ~/.bashrc để giữ lại cho các phiên làm việc sau."
    }
  },
  {
    id: 192,
    topic: "shell",
    answer: 3,
    en: {
      question: "Which file is commonly used to customize Bash for a user, for example to add aliases?",
      options: ["`/bin/bash`", "`/etc/passwd`", "`~/.config.txt`", "`~/.bashrc`"],
      explanation: "~/.bashrc runs every time a new interactive Bash shell starts. Run `source ~/.bashrc` to apply changes immediately."
    },
    vi: {
      question: "Tệp nào thường được dùng để tùy biến Bash cho một người dùng, ví dụ để thêm alias?",
      options: ["`/bin/bash`", "`/etc/passwd`", "`~/.config.txt`", "`~/.bashrc`"],
      explanation: "~/.bashrc được chạy mỗi khi một shell Bash tương tác mới khởi động. Chạy `source ~/.bashrc` để áp dụng thay đổi ngay lập tức."
    }
  },
  {
    id: 193,
    topic: "shell",
    answer: 1,
    en: {
      question: "Which command makes a shell variable available to programs started from that shell?",
      options: ["`share`", "`export`", "`global`", "`public`"],
      explanation: "For example, `export EDITOR=nano` makes EDITOR visible to child processes."
    },
    vi: {
      question: "Lệnh nào giúp một biến của shell có thể được dùng bởi các chương trình khởi chạy từ shell đó?",
      options: ["`share`", "`export`", "`global`", "`public`"],
      explanation: "Ví dụ, `export EDITOR=nano` giúp các tiến trình con nhìn thấy biến EDITOR."
    }
  },
  {
    id: 194,
    topic: "shell",
    answer: 1,
    en: {
      question: "In Bash, what does the special variable `$?` contain?",
      options: ["The number of script arguments", "The exit status of the last command (0 means success)", "The current process ID", "The current user's name"],
      explanation: "A non-zero value usually means the command failed. `$$` is the shell's PID and `$#` is the argument count."
    },
    vi: {
      question: "Trong Bash, biến đặc biệt `$?` chứa giá trị gì?",
      options: ["Số lượng tham số truyền vào script", "Mã thoát (exit status) của lệnh vừa chạy (0 nghĩa là thành công)", "PID của tiến trình hiện tại", "Tên của người dùng hiện tại"],
      explanation: "Giá trị khác 0 thường có nghĩa là lệnh bị lỗi. `$$` là PID của shell và `$#` là số lượng tham số."
    }
  },
  {
    id: 195,
    topic: "shell",
    answer: 2,
    en: {
      question: "Which command creates a compressed archive backup.tar.gz from the folder docs?",
      options: ["`tar -xzf backup.tar.gz docs`", "`gzip -r docs backup.tar.gz`", "`tar -czf backup.tar.gz docs`", "`zip -x backup.tar.gz docs`"],
      explanation: "`-c` create, `-z` compress with gzip, `-f` the archive file name."
    },
    vi: {
      question: "Lệnh nào tạo tệp nén backup.tar.gz từ thư mục docs?",
      options: ["`tar -xzf backup.tar.gz docs`", "`gzip -r docs backup.tar.gz`", "`tar -czf backup.tar.gz docs`", "`zip -x backup.tar.gz docs`"],
      explanation: "`-c` tạo mới (create), `-z` nén bằng gzip, `-f` chỉ định tên tệp lưu trữ."
    }
  },
  {
    id: 196,
    topic: "shell",
    answer: 1,
    en: {
      question: "Which command extracts the archive archive.tar.gz?",
      options: ["`tar -czf archive.tar.gz`", "`tar -xzf archive.tar.gz`", "`tar -tzf archive.tar.gz`", "`untar archive.tar.gz`"],
      explanation: "`-x` means extract. `-t` only lists the contents without extracting them."
    },
    vi: {
      question: "Lệnh nào giải nén tệp archive.tar.gz?",
      options: ["`tar -czf archive.tar.gz`", "`tar -xzf archive.tar.gz`", "`tar -tzf archive.tar.gz`", "`untar archive.tar.gz`"],
      explanation: "`-x` nghĩa là giải nén (extract). `-t` chỉ liệt kê nội dung mà không giải nén."
    }
  },
  {
    id: 197,
    topic: "shell",
    answer: 3,
    en: {
      question: "Which command compresses a single file named report into report.gz?",
      options: ["`compress -gz report`", "`tar report`", "`gunzip report`", "`gzip report`"],
      explanation: "`gzip` replaces the file with a compressed .gz version. `gunzip report.gz` restores it."
    },
    vi: {
      question: "Lệnh nào nén một tệp tên report thành report.gz?",
      options: ["`compress -gz report`", "`tar report`", "`gunzip report`", "`gzip report`"],
      explanation: "`gzip` thay tệp gốc bằng phiên bản nén .gz. Lệnh `gunzip report.gz` khôi phục lại tệp ban đầu."
    }
  },
  {
    id: 198,
    topic: "shell",
    answer: 0,
    en: {
      question: "What is cron used for?",
      options: ["Scheduling commands to run automatically at set times", "Monitoring network traffic", "Compressing files", "Editing text files"],
      explanation: "Cron runs scheduled jobs, for example a backup script every night at 2 AM."
    },
    vi: {
      question: "Cron được dùng để làm gì?",
      options: ["Lên lịch để các lệnh tự động chạy vào thời điểm định sẵn", "Giám sát lưu lượng mạng", "Nén tệp", "Soạn thảo tệp văn bản"],
      explanation: "Cron chạy các tác vụ đã lên lịch, ví dụ một script sao lưu vào 2 giờ sáng mỗi đêm."
    }
  },
  {
    id: 199,
    topic: "shell",
    answer: 1,
    en: {
      question: "Which command edits the current user's scheduled cron jobs?",
      options: ["`schedule -e`", "`crontab -e`", "`crontab -l`", "`cron --edit`"],
      explanation: "`crontab -e` opens your cron table in an editor. `crontab -l` only lists it."
    },
    vi: {
      question: "Lệnh nào dùng để chỉnh sửa các tác vụ cron đã lên lịch của người dùng hiện tại?",
      options: ["`schedule -e`", "`crontab -e`", "`crontab -l`", "`cron --edit`"],
      explanation: "`crontab -e` mở bảng cron của bạn trong trình soạn thảo. `crontab -l` chỉ liệt kê nội dung."
    }
  },
  {
    id: 200,
    topic: "shell",
    answer: 2,
    en: {
      question: "In `cmd1 && cmd2`, when does cmd2 run?",
      options: ["At the same time as cmd1", "Only if cmd1 fails", "Only if cmd1 succeeds", "Never; && is a comment"],
      explanation: "`&&` chains commands on success, as in `sudo apt update && sudo apt upgrade`. `||` runs the next command only on failure."
    },
    vi: {
      question: "Trong `cmd1 && cmd2`, khi nào cmd2 được chạy?",
      options: ["Cùng lúc với cmd1", "Chỉ khi cmd1 thất bại", "Chỉ khi cmd1 chạy thành công", "Không bao giờ; && là một dòng chú thích"],
      explanation: "`&&` nối các lệnh khi lệnh trước thành công, ví dụ `sudo apt update && sudo apt upgrade`. `||` chỉ chạy lệnh tiếp theo khi lệnh trước thất bại."
    }
  }
];
