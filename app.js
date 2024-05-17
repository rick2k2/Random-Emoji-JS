const emojis = [
  "😂",
  "😀",
  "😒",
  "😢",
  "😎",
  "😁",
  "😉",
  "😆",
  "🥰",
  "😙",
  "😗",
  "🥲",
  "🤗",
  "🙂",
  "😚",
  "🤩",
  "🙄",
  "😏",
  "😣",
  "😥",
  "😮",
  "🫠",
  "🙃",
  "😭",
  "😮‍💨",
  "😬",
  "😰",
  "😩",
  "😨",
  "😊",
  "🤞",
  "😘",
  "😍",
  "🤣",
  "🧑",
  "❤️",
  "😉",
];

const emoji = document.querySelector(".emoji");

emoji.addEventListener("mouseover", () => {
  const r = Math.floor(Math.random() * emojis.length);
  console.log(r);
  emoji.innerText = emojis[r];
});
