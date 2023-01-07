let arrOfX = [];
let arrOfY = [];
function login() {
  location.href = "/main_screen.html";
}

function flip() {
  var flip = document.getElementById("hello_there");
  flip.classList.toggle("flipped");

  document.getElementById("welcome_card").classList.toggle("hide");
  document.getElementById("welcome_card_back").classList.toggle("show");
}

function input() {
  let dataOfX = document.getElementById("input_X");
  let errorOfX = document.getElementById("errorOfX");
  let dataOfY = document.getElementById("input_Y");
  let errorOfY = document.getElementById("errorOfY");
  let check = 0;

  if (dataOfX.value.trim().length) {
    arrOfX = dataOfX.value.replaceAll(" ", "").split(",");
  } else {
    errorOfX.innerHTML = "plese eneter valid input";
    check++;
  }

  for (let index = 0; index < arrOfX.length; index++) {
    if (arrOfX[index].length === 0) {
      arrOfX[index] = 0;
    } else {
      arrOfX[index] = parseInt(arrOfX[index]);
    }
  }

  if (dataOfY.value.trim().length) {
    arrOfY = dataOfY.value.replaceAll(" ", "").split(",");
  } else {
    errorOfY.innerHTML = "plese eneter valid input";
    check++;
  }

  for (let index = 0; index < arrOfY.length; index++) {
    if (arrOfY[index].length === 0) {
      arrOfY[index] = 0;
    } else {
      arrOfY[index] = parseInt(arrOfY[index]);
    }
  }

  arrOfX.forEach((value, index) => {
    if (!arrOfY[index]) {
      return (arrOfY[index] = 0);
    } else {
      return arrOfY[index];
    }
  });

  arrOfY.forEach((value, index) => {
    if (!arrOfX[index]) {
      return (arrOfX[index] = 0);
    } else {
      return arrOfX[index];
    }
  });

  if (check === 0) {
    flip();
  }

  return arrOfX, arrOfY;
}

function output() {
  let tHead = document.getElementById("output_table_head");
  let tBody = document.getElementById("output_table_body");

  if (document.getElementById("rd1").checked == true) {
    document.getElementById("hello_there").classList.toggle("hide");
    document.getElementById("output").classList.toggle("show");

    tHead.innerHTML = "<th>Xi</th> <th>Yi</th> <th>Xi*Yi</th>";

    arrOfX.forEach((ValueOfX, index) => {
      let sOfX = 0;
      sOfX += ValueOfX;
      tBody.innerHTML += `
      <tr>
        <td>${ValueOfX}</td>
        <td>${arrOfY[index]}</td>
        <td>${ValueOfX * ValueOfX}</td>
      </tr>`;
    });
  } else if (document.getElementById("rd2").checked == true) {
    console.log(2);
    document.getElementById("hello_there").classList.toggle("hide");
  } else if (document.getElementById("rd3").checked == true) {
    console.log(3);
    document.getElementById("hello_there").classList.toggle("hide");
  } else if (document.getElementById("rd4").checked == true) {
    console.log(4);
    document.getElementById("hello_there").classList.toggle("hide");
  } else if (document.getElementById("rd5").checked == true) {
    console.log(5);
    document.getElementById("hello_there").classList.toggle("hide");
  } else if (document.getElementById("rd6").checked == true) {
    console.log(6);
    document.getElementById("hello_there").classList.toggle("hide");
  } else {
    console.log("Please select any one");
  }
}
