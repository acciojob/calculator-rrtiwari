let input = document.getElementById("input");

for (let i = 0; i <= 9; i++) {
  document.getElementById("block" + i).addEventListener("click", () => {
    input.value += i;
  });
}

document.getElementById("plus").onclick = () => {
  input.value += "+";
};

document.getElementById("minus").onclick = () => {
  input.value += "-";
};

document.getElementById("multiply").onclick = () => {
  input.value += "*";
};

document.getElementById("divide").onclick = () => {
  input.value += "/";
};

document.getElementById("dot").onclick = () => {
  input.value += ".";
};

document.getElementById("open").onclick = () => {
  input.value += "(";
};

document.getElementById("close").onclick = () => {
  input.value += ")";
};

document.getElementById("clr").onclick = () => {
  input.value = "";
};

document.getElementById("back").onclick = () => {
  input.value = input.value.slice(0, -1);
};

document.getElementById("ans").onclick = () => {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
};
