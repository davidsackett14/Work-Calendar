const workHours = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
const amHours = [7, 8, 9, 10, 11];
const pmHours = [12, 1, 2, 3, 4, 5];
let scheduleText = "";
const timeBlock = $(".container");

let displaySource = moment().format("MMM Do YYYY");
console.log(displaySource);
$("p#currentDay").html(displaySource);

$.each(workHours, function (i, hour) {
  console.log(i);
  let date = moment().format("k");
  let numbDate = parseInt(date);

  if (i < 5) {
    timeBlock.append(
      `<div class= 'containerChild' id= "timeblock${i}">` +
        hour +
        ":00 PM" +
        `<div id= "scheduleItem${i}">` +
        "</div" +
        "</div>"
    );
  } else if (i == 6) {
    timeBlock.append(
      `<div class= 'containerChild' id= "timeblock${i}">` +
        hour +
        ":00 PM" +
        `<div id= "scheduleItem${i}">` +
        "</div" +
        "</div>"
    );
  } else {
    timeBlock.append(
      `<div class= 'containerChild' id= "timeblock${i}">` +
        hour +
        ":00 PM" +
        `<div id= "scheduleItem${i}">` +
        "</div" +
        "</div>"
    );
  }
  if (i + 7 < numbDate) {
    $(`#timeblock${i}`).css("background-color", "rgba(255,0,0, 0.7)");
    console.log(typeof i + i);
  } else if (i + 7 == numbDate) {
    $(`#timeblock${i}`).css("background-color", "rgba(50,150,200, 0.7)");
  } else {
    $(`#timeblock${i}`).css("background-color", "rgba(0,150,0, 0.7)");
  }
});

$.each(workHours, function (i, hour) {
  $(`#timeblock${i}`).click(function () {
    let words = prompt("?");
    $(`#scheduleItem${i}`).append(words + "  ");
    localStorage.setItem(`#scheduleItem${i}`, words);
  });
});

$.each(workHours, function (i, hour) {
  var conntent = localStorage.getItem(`#scheduleItem${i}`);
  document.getElementById(`scheduleItem${i}`).innerHTML = conntent;
});
