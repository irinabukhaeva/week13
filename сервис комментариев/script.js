let userName = document.getElementById("username");
const avatar = document.getElementById("avatar");
const comment = document.getElementById("comment");
let chat = document.querySelector(".chat");
const button = document.querySelector(".button");
let time;
let hideName = document.getElementById("hideName");
let showName = document.getElementById("showName");
let commentName = document.getElementById("commentname");

function capitalize(userName) {
  const newName =
    userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

  return newName;
}

hideName.onchange = () => {
  document.getElementById("name_field").style.display = "none";
};
showName.onchange = () => {
  document.getElementById("name_field").style.display = "block";
};

function timeConverter() {
  let date = new Date();
  let day = date.getDay();
  let number = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (day == 0) day = "Вс";
  else if (day == 1) day = "Пн";
  else if (day == 2) day = "Вт";
  else if (day == 3) day = "Ср";
  else if (day == 4) day = "Чт";
  else if (day == 5) day = "Пт";
  else if (day == 6) day = "Сб";
  else day = "Неизвестный день";

  if (month == 0) month = "января";
  else if (month == 1) month = "февраля";
  else if (month == 2) month = "марта";
  else if (month == 3) month = "апреля";
  else if (month == 4) month = "мая";
  else if (month == 5) month = "июня";
  else if (month == 6) month = "июля";
  else if (month == 7) month = "августа";
  else if (month == 8) month = "сентября";
  else if (month == 9) month = "октября";
  else if (month == 10) month = "ноября";
  else if (month == 11) month = "декабря";
  else month = "Неизвестный месяц";

  if (hours < 10) hours = `0${hours}`;

  if (minutes < 10) minutes = `0${minutes}`;

  if (seconds < 10) seconds = `0${seconds}`;

  time = `${day}, ${number} ${month} ${year} в ${hours}:${minutes}:${seconds}`;

  return time;
}

function addNewComment() {
  chat.innerHTML = `<div class="message">
  <img src="${avatar.value}" alt="face">
  <p id="commentname">${capitalize(userName.value)}</p>
  <p class="date">${timeConverter()}</p>
  <p class="message">${comment.value.replace(/(xxx|viagra)/gi, "***")}</p>
  </div>`;
}

function setAnonim() {
  if (userName.value == null) {
    commentName.textContent = "Username";
  }
}
console.log(commentName);

function setRandomAvatar() {
  let photos = [
    "1659592293_1.jpg",
    "1659592344_2.jpg",
    "1659592345_7.jpg",
    "1659592349_6.jpg",
    "1659592369_3.jpg",
    "1659592393_27.jpg",
  ];
  let index = Math.floor(Math.random() * 6);
  avatar.value = photos[index];
}
if ((avatar.value = "")) setRandomAvatar();

function resetForm() {
  userName.value = "";
  avatar.value = "";
  comment.value = "";
}

button.addEventListener("click", addNewComment);
button.addEventListener("click", resetForm);
