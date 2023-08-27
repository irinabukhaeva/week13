const button = document.getElementById("button");
let birthday = document.getElementById("birthday");
let message = document.getElementById("message");
let daysBeforeBirthday;
let dayChanged;

function calculateDaysBeforeBirthday() {
  let currentDay = Date.now();
  let timeDifference = new Date().getTimezoneOffset() * 60000;
  daysBeforeBirthday = Math.floor(
    (Date.parse(`${birthday.value}T23:59:59.999Z`) +
      timeDifference -
      currentDay) /
      1000 /
      3600 /
      24
  );
  return daysBeforeBirthday;
}

function changeDaysEnding() {
  if (
    daysBeforeBirthday == 1 ||
    (daysBeforeBirthday > 20 && daysBeforeBirthday % 10 == 1)
  ) {
    dayChanged = "день";
  } else if (
    daysBeforeBirthday == 2 ||
    daysBeforeBirthday == 3 ||
    daysBeforeBirthday == 4 ||
    (daysBeforeBirthday > 20 &&
      (daysBeforeBirthday % 10 == 2 ||
        daysBeforeBirthday % 10 == 3 ||
        daysBeforeBirthday % 10 == 4))
  ) {
    dayChanged = "дня";
  } else dayChanged = "дней";
  return dayChanged;
}

function showMessage() {
  if (birthday.value == "") {
    message.innerHTML =
      '<div class="red-message">Пожалуйста, введите дату рождения</div>';
  } else if (daysBeforeBirthday == 0) {
    message.innerHTML = '<div class="happy-birthday">С днем рождения!!!</div>';
  } else {
    message.innerHTML = `<div>До вашего дня рождения осталось: ${daysBeforeBirthday} ${dayChanged}</div>`;
  }
}

button.addEventListener("click", calculateDaysBeforeBirthday);
button.addEventListener("click", changeDaysEnding);
button.addEventListener("click", showMessage);
