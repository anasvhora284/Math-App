let arrOfX = [];
let arrOfY = [];

function login() {
  location.href = "main_screen.html";
}

function flip() {
  document.getElementById("welcome_card").classList.toggle("hide");
  document.getElementById("welcome_card_back").classList.toggle("show");
}

function pflip() {
  document.getElementById("welcome_card").classList.toggle("show");
  document.getElementById("welcome_card_back").classList.toggle("hide");
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
  document.getElementById("welcome_card_back").style = "display: none;";
  document.getElementById("hello_there").classList.toggle("outputCardDesign");

  let tHead = document.getElementById("output_table_head");
  let tBody = document.getElementById("output_table_body");
  let sOfX = 0,
    sOfY = 0,
    sOfXY = 0,
    mean = 0;

  if (document.getElementById("rd1").checked == true) {
    document.getElementById("welcome_card_back").classList.toggle("hide");
    document.getElementById("output").classList.toggle("show");

    tHead.innerHTML = "<th>Xi</th> <th>Yi</th> <th>Xi*Yi</th>";

    arrOfX.forEach((ValueOfX, index) => {
      sOfX += ValueOfX;
      sOfY += arrOfY[index];
      sOfXY += ValueOfX * arrOfY[index];

      tBody.innerHTML += `
      <tr>
        <td>${ValueOfX}</td>
        <td>${arrOfY[index]}</td>
        <td>${ValueOfX * ValueOfX}</td>
      </tr>`;
    });

    mean = sOfXY / sOfY;

    document.getElementById("sOfX").innerHTML = "The sum of Xi=" + sOfX;
    document.getElementById("sOfY").innerHTML = "The sum of Yi=" + sOfY;
    document.getElementById("sOfXY").innerHTML = "The sum of Xi*Yi=" + sOfXY;
    document.getElementById("main_output").innerHTML =
      "The Mean of the data=" + mean.toFixed(4);
  } /////////* For Median*/////////
  else if (document.getElementById("rd2").checked == true) {
    document.getElementById("welcome_card_back").classList.toggle("hide");
    document.getElementById("output").classList.toggle("show");

    tHead.innerHTML = "<th>Xi</th> <th>Yi</th> <th>C.F</th>";

    arrOfX.forEach((ValueOfX, index) => {
      sOfX += ValueOfX;
      sOfY += arrOfY[index];
      sOfXY += ValueOfX * arrOfY[index];

      tBody.innerHTML += `
      <tr>
        <td>${ValueOfX}</td>
        <td>${arrOfY[index]}</td>
        <td>${sOfY}</td>
      </tr>`;
    });

    document.getElementById("sOfY").innerHTML =
      "The sum of  Yi aka N = " + sOfY;

    let ans = sOfY / 2;
    document.getElementById("n/2").innerHTML = "N/2 = " + ans;

    sOfY = 0;

    for (let index = 0; index < arrOfX.length; index++) {
      sOfY += arrOfY[index];

      if (sOfY < ans) {
        continue;
      } else {
        document.getElementById("main_output").innerHTML =
          "Median of the given data is = " + arrOfX[index];
        break;
      }
    }
  } /////////* For Mod*/////////
  else if (document.getElementById("rd3").checked == true) {
    document.getElementById("welcome_card_back").classList.toggle("hide");
    document.getElementById("output").classList.toggle("show");

    tHead.innerHTML = "<th>Xi</th> <th>Yi</th>";

    arrOfX.forEach((ValueOfX, index) => {
      sOfX += ValueOfX;
      sOfY += arrOfY[index];
      sOfXY += ValueOfX * arrOfY[index];

      tBody.innerHTML += `
      <tr>
        <td>${ValueOfX}</td>
        <td>${arrOfY[index]}</td>
      </tr>`;
    });

    let ans = Math.max(...arrOfY);

    for (let index = 0; index < arrOfX.length; index++) {
      if (arrOfY[index] === ans) {
        document.getElementById(
          "main_output"
        ).innerHTML = `Median of the given data is = ${arrOfX[index]} <br> As it has the highest frequency. `;
        break;
      } else {
        continue;
      }
    }
  } /*////////////////*Standard Deviation*/ ////////////////////////////*/
  else if (document.getElementById("rd4").checked == true) {
    document.getElementById("welcome_card_back").classList.toggle("hide");
    document.getElementById("output").classList.toggle("show");

    let ans = 0;

    tHead.innerHTML =
      "<th>Xi</th> <th>Yi</th> <th>Xi*Yi</th> <th>(Xi - mean)<sup>2</sup></th>";

    arrOfX.forEach((ValueOfX, index) => {
      sOfX += ValueOfX;
      sOfY += arrOfY[index];
      sOfXY += ValueOfX * arrOfY[index];
    });
    mean = sOfXY / sOfY;

    arrOfX.forEach((ValueOfX, index) => {
      tBody.innerHTML += `
      <tr>
      <td>${ValueOfX}</td>
      <td>${arrOfY[index]}</td>
      <td>${ValueOfX * arrOfY[index]}</td>
      <td>${Math.pow(ValueOfX - mean, 2).toFixed(4)}</td>
      </tr>`;
    });

    arrOfX.forEach((ValueOfX, index) => {
      ans = Math.pow(ValueOfX - mean, 2);
    });

    let standardDeviation = Math.sqrt(ans / (arrOfY.length - 1));

    document.getElementById(
      "main_output"
    ).innerHTML = `Mean of the data is ${mean.toFixed(4)} 
    <br>So, according to formula of S.D = square root of (&sum; (Xi - mean)<sup>2</sup> / n-1).
    <br>So, according to formula of 
    S.D = &radic; ${ans}/ ${arrOfY.length} - 1.  
    <br> Standard Deviation of the data is = ${standardDeviation.toFixed(4)}`;
  } else if (document.getElementById("rd5").checked == true) {
    console.log(5);
    document.getElementById("welcome_card_back").classList.toggle("hide");
  } else if (document.getElementById("rd6").checked == true) {
    console.log(6);
    document.getElementById("welcome_card_back").classList.toggle("hide");
  } else {
    console.log("Please select any one");
  }
}

function previous() {
  document.getElementById("output").style = "display: none";
  document.getElementById("welcome_card_back").style = "display: block";
}
