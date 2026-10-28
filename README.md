# Trắc nghiệm Linux · Linux Quiz

A small, dependency-free web app with 200 beginner-level multiple-choice questions about Linux,
in **Vietnamese (default) and English**. Every question has its correct answer and a short explanation
in both languages; switch with the **VI / EN** buttons in the header.

## Features

- **Luyện tập / Practice** – choose a topic (or all 10), pick 10 / 20 / 50 / all questions, and get instant feedback with an explanation after every answer.
- **Kết quả / Results** – score, breakdown by topic, a review of every mistake, and one-click "retry missed questions".
- **Danh sách câu hỏi / All Questions** – all 200 questions on one page, laid out like `dap-an.md` (contents table, numbered questions, options A–D). Answers stay hidden until you pick an option or press “Xem đáp án”; the page then shows “Đáp án đúng” and “Giải thích”.
- Keyboard shortcuts (`1`–`4` / `A`–`D` to answer, `←` `→` to navigate), light/dark theme, mobile friendly.
- The language can be switched at any time, even in the middle of a quiz.

## Running it

Open `index.html` in any modern browser – no build step or server required.

To serve it locally instead:

```bash
python -m http.server 8000
```

then visit <http://localhost:8000>.

## Files

| File           | Purpose                                         |
| -------------- | ----------------------------------------------- |
| `index.html`   | Page shell                                      |
| `styles.css`   | Styling (light and dark themes)                 |
| `app.js`       | Quiz, results, question bank and UI text (VI/EN) |
| `questions.js` | The 10 topics and 200 questions in both languages |
| `dap-an.md`    | Printable answer key with explanations (Vietnamese) |
| `cau-hoi.md`   | Printable question sheet without answers (Vietnamese) |

## Topics (20 questions each)

| Tiếng Việt               | English                  |
| ------------------------ | ------------------------ |
| Kiến thức cơ bản         | Linux Basics             |
| Hệ thống tệp & Điều hướng | File System & Navigation |
| Quản lý tệp              | Managing Files           |
| Xem & Soạn thảo văn bản  | Viewing & Editing Text   |
| Phân quyền               | Permissions              |
| Người dùng & Nhóm        | Users & Groups           |
| Tiến trình & Hệ thống    | Processes & System       |
| Quản lý gói phần mềm     | Package Management       |
| Mạng                     | Networking               |
| Shell & Viết script      | Shell & Scripting        |

## Adding or editing questions

Each entry in `questions.js` looks like this. Both languages must list the options in the **same order**,
because a single `answer` index is shared:

```js
{
  id: 201,
  topic: "shell",            // one of the ids in TOPICS
  answer: 2,                 // zero-based index of the correct option
  en: {
    question: "What does `pwd` print?",   // text in `backticks` is shown as code
    options: ["...", "...", "...", "..."],
    explanation: "..."
  },
  vi: {
    question: "Lệnh `pwd` in ra gì?",
    options: ["...", "...", "...", "..."],
    explanation: "..."
  }
}
```
