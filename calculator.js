const screen = document.getElementById("screen");
let 
  str = "",
  operator,
  resualtArr = [];

function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function dvi(num1, num2) {
  return num1 / num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function clr() {
  num1 = undefined;
  num2 = undefined;
  str = "";
  operator = undefined;
  screen.innerHTML = "";
  str = "";
  resualtArr = [];
}

function bulidingStr(number) {
  newBuildingStr(number);
}

function operatorFunc(action) {
  newBuildingStr(action);
}

function newBuildingStr(elm) {
  if (str.length == 0 && firstCase(elm)) {
    alert("Cna't without a number!");
  } else {
    let print = repeat(elm);
    print ? document.getElementById("screen").innerHTML += elm: "";
  }
}

function firstCase(elm) {
  return (
    elm == "." ||
    elm == "+" ||
    elm == "-" ||
    elm == "/" ||
    elm == "x" ||
    elm == "="
  );
}

function repeat(elm) {
  if (
    str[str.length - 1] != "." &&
    str[str.length - 1] != "+" &&
    str[str.length - 1] != "-" &&
    str[str.length - 1] != "x" &&
    str[str.length - 1] != "/"
  ) {
    str += elm;
    return true;
  } else if (Number(elm) >= 0 || Number(elm) <= 9) {
    str += elm;
    return true;
  }
  return false;
}

function result() {
  newBuildingStr("=");
  let startIndex = 0,num;
  for(let i = 0; i < str.length-1; i++){
    if(
      str[i] == "+" ||
      str[i] == "-" ||
      str[i] == "x" ||
      str[i] == "/"){
        num = Number(str.slice(startIndex,i));
        resualtArr.push(num);
        startIndex = i+1 ;
        resualtArr.push(str[i])
    }
  }
  num = Number(str.slice(startIndex,str.length-1));
  resualtArr.push(num);
  multiAndDivide();
  let finalResualt = sumAndSub();
  screen.innerHTML += " " + finalResualt;
  str = String(finalResualt);
  resualtArr=[];
}

function multiAndDivide() {
  let index = resualtArr.indexOf("x");

  while (index != -1) {
    nowResult = resualtArr[index - 1] * resualtArr[index + 1];
    resualtArr.splice(index-1,3,nowResult)
    index = resualtArr.indexOf("x");
  }

  index = resualtArr.indexOf("/");
  while (index != -1) {
    nowResult = parseFloat(resualtArr[index - 1]) / resualtArr[index + 1];
    resualtArr.splice(index-1,3,nowResult)
    index = resualtArr.indexOf("/");
  }
}

function sumAndSub(){
  for(let i = 0; i < resualtArr.length; i++){
      if(resualtArr[i] == "+" || resualtArr[i] == "-"){
        if(resualtArr[i] == "+"){
          nowResult = resualtArr[i - 1] + resualtArr[i + 1];
        }else{
          nowResult = resualtArr[i - 1] - resualtArr[i + 1];
        }
      resualtArr.splice(i-1,3,nowResult);
      i = 0;
      }
  }
  return resualtArr[0];
}
