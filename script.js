// const squares = document.querySelectorAll("#square");
const one = document.querySelector("#one");

const tds = document.querySelectorAll("td");

let turn = [0];
const o = [];
const x = [];

function checkForWin(sqr) {
  if (sqr.innerText.includes("x")) {
    if (!x.includes(sqr.id)) {
      x.push(sqr.id);
    }
    console.log(x);
  }
}

tds.forEach((click) => {
  click.addEventListener("click", (e) => {
    if (e.path[0].innerText === "") {
      if (turn % 2 === 0) {
        e.path[0].innerText = "x";
      } else {
        e.path[0].innerText = "o";
      }
      turn++;
    }

    let sqr = e.path[0];
    checkForWin(sqr);
    //  console.log(sqr)
  });
});

// one.addEventListener("click", (e) => {
//   console.log("click1");
// });
