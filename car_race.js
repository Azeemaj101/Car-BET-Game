function myMove() {
  let cost1 = document.getElementById("wallet");

  if (Number(cost1.innerText) == 0) {
    let empty = document.getElementById("empty");
    let default_State = document.getElementById("default_State");
    let won = document.getElementById("won");
    let lost = document.getElementById("lost");
    won.style.display = "none";
    lost.style.display = "none";
    default_State.style.display = "none";
    empty.style.display = "block";
    $("#empty").fadeTo(100, 0.1).fadeTo(200, 1.0);
  } else {
    let id = null;
    let id1 = null;
    let id2 = null;

    let check = 0;
    let check1 = 0;
    let check2 = 0;

    // Values
    let cost = document.getElementById("wallet");
    let bet = document.getElementById("bet_value");

    // winning state
    let default_State = document.getElementById("default_State");
    let won = document.getElementById("won");
    let lost = document.getElementById("lost");

    // Disable both when click the play button
    won.style.display = "none";
    lost.style.display = "none";
    // Disable button when you click play button
    document.getElementById("submit").disabled = true;

    // Show value of checked button
    let guessedCar = $("input:radio:checked").val();

    // Car ID'S
    const elem = document.getElementById("animate");
    const elem1 = document.getElementById("animate1");
    const elem2 = document.getElementById("animate2");
    const pathLength = document.getElementById("car-path").offsetWidth - 120;

    // Positon of each car
    let pos = 0;
    let pos1 = 0;
    let pos2 = 0;

    function random_item(items) {
      return items[Math.floor(Math.random() * items.length)];
    }

    const myArray = [1, 5, 7];
    const winningOrder = [];
    for (var i = 1; i <= 3; i++) {
      var rand = random_item(myArray);
      const index = myArray.indexOf(rand);
      const x = myArray.splice(index, 1);
      winningOrder.push(x);
    }

    clearInterval(id);
    id = setInterval(frame, winningOrder[0]);
    function frame() {
      if (pos == pathLength) {
        clearInterval(id);
        check = 1;
        CheckEnd();
      } else {
        pos++;
        elem.style.left = pos + "px";
      }
    }

    clearInterval(id1);
    id1 = setInterval(frame1, winningOrder[1]);
    function frame1() {
      if (pos1 == pathLength) {
        clearInterval(id1);
        check1 = 1;
        CheckEnd();
      } else {
        pos1++;
        elem1.style.left = pos1 + "px";
      }
    }

    clearInterval(id2);
    id2 = setInterval(frame2, winningOrder[2]);
    function frame2() {
      if (pos2 == pathLength) {
        clearInterval(id2);
        check2 = 1;
        CheckEnd();
      } else {
        pos2++;
        elem2.style.left = pos2 + "px";
      }
    }

    function CheckEnd() {
      if (check == 1 && check1 == 1 && check2 == 1) {
        elem.style.left = 0 + "px";
        elem1.style.left = 0 + "px";
        elem2.style.left = 0 + "px";
        document.getElementById("submit").disabled = false;
        if (winningOrder[Number(guessedCar) - 1] == 1) {
          default_State.style.display = "none";
          won.style.display = "block";
          cost.innerText = Number(cost.innerText) + Number(15 * bet.innerText);
          $("#won").fadeTo(100, 0.1).fadeTo(200, 1.0);
        } else {
          default_State.style.display = "none";
          lost.style.display = "block";
          cost.innerText = Number(cost.innerText) - Number(bet.innerText);
          $("#lost").fadeTo(100, 0.1).fadeTo(200, 1.0);
        }
      }
    }
  }
}
function decrement() {
  let bet = document.getElementById("bet_value");
  if ((Number(bet.innerText) - 1) != 0) {
    bet.innerText--;
  }
}
function increment() {
  let cost = document.getElementById("wallet");
  let bet = document.getElementById("bet_value");
  if (Number(cost.innerText) > Number(bet.innerText)) {
    bet.innerText++;
  }
}
