const input = document.getElementById("value-cal-1");
const btn = document.getElementsByTagName("button");
const sinal = document.getElementById("sinal");
const firstValue = document.getElementById("first-value");
const secondValue = document.getElementById("second-value");
const igual = document.getElementById("igual");

btn[0].addEventListener("click", () => {
    input.value += 1;
})
btn[1].addEventListener("click", () => {
    input.value += 2;
})
btn[2].addEventListener("click", () => {
    input.value += 3;
})
btn[3].addEventListener("click", () => {
    firstValue.innerHTML = input.value;
    sinal.innerHTML = "+";
    setTimeout(() => {
        input.value = "";
    }, 200)
})
btn[4].addEventListener("click", () => {
    input.value += 4;
})
btn[5].addEventListener("click", () => {
    input.value += 5;
})
btn[6].addEventListener("click", () => {
    input.value += 6;
})
btn[7].addEventListener("click", () => {
    firstValue.innerHTML = input.value;
    sinal.innerHTML = "-";
    setTimeout(() => {
        input.value = "";
    }, 200)
})
btn[8].addEventListener("click", () => {
    input.value += 7;
})
btn[9].addEventListener("click", () => {
    input.value += 8;
})
btn[10].addEventListener("click", () => {
    input.value += 9;
})
btn[11].addEventListener("click", () => {
    firstValue.innerHTML = input.value;
    sinal.innerHTML = "*";
    setTimeout(() => {
        input.value = "";
    }, 200)
})
btn[12].addEventListener("click", () => {
    firstValue.innerHTML = input.value;
    sinal.innerHTML = "/";
    setTimeout(() => {
        input.value = "";
    }, 200)
})
btn[13].addEventListener("click", () => {
    input.value += 0;
})
btn[14].addEventListener("click", () => {
    sinal.innerHTML = "";
    firstValue.innerHTML = "";
    secondValue.innerHTML = "";
    igual.hidden = true;
    input.value = "";
})
btn[15].addEventListener("click", res);

function res() {

    secondValue.innerHTML = input.value;

    let first = Number(firstValue.innerHTML);
    let second = Number(secondValue.innerHTML);

    if(sinal.innerHTML === "+") {
        input.value = soma(first, second);
    } else if(sinal.innerHTML === "-") {
        input.value = sub(first, second);
    } else if(sinal.innerHTML === "*") {
        input.value = mult(first, second);
    } else if(sinal.innerHTML === "/") {
        input.value = divisao(first, second);
    }

    igual.hidden = false;

}

function soma(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mult(x, y) {
    return x * y;
}
function divisao(x, y) {
    return x / y;
}