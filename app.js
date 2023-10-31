const input = document.getElementById("input");
const output = document.getElementById("outPut");
function capital() {
  if (input.value == "") {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.innerHTML = "Enter Your Prompt☝️";
    para.style.color ='red'
    para.style.fontWeight=bolder;
    output.appendChild(para);
   
  } else {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.classList.add("capital");
    para.innerHTML = input.value;
    output.appendChild(para);
    input.value = "";
  }
}

function first() {
  if (input.value == "") {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.innerHTML = "Enter Your Prompt☝️";
    para.style.color = "red";
    output.appendChild(para);
  }
   else {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.classList.add("first");
    para.innerHTML = input.value;
    output.appendChild(para);
    input.value = "";

  }
}

function lower() {
  if (input.value == "") {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.innerHTML = "Enter Your Prompt☝️";
    para.style.color = "red";
    output.appendChild(para);
    input.value = "";
  } else {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.classList.add("lower");
    para.innerHTML = input.value;
    output.appendChild(para);
    input.value = "";
  }
}

function bolder() {
  if (input.value == "") {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.innerHTML = "Enter Your Prompt☝️";
    para.style.color = "red";
    output.appendChild(para);
    input.value = "";
  } else {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.classList.add("bolder");
    para.innerHTML = input.value;
    output.appendChild(para);
    input.value = "";
  }
}

function italic() {
  if (input.value == "") {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.innerHTML = "Enter Your Prompt☝️";
    para.style.color = "red";
    output.appendChild(para);
    input.value = "";
  } else {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.classList.add("italic");
    para.innerHTML = input.value;
    output.appendChild(para);
    input.value = "";
  }
}

function underLine() {
  if (input.value == "") {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.innerHTML = "Enter Your Prompt☝️";
    para.style.color = "red";
    output.appendChild(para);
    input.value = "";
  } else {
    output.innerHTML = "";
    let para = document.createElement("p");
    para.classList.add("under-line");
    para.innerHTML = input.value;
    output.appendChild(para);
    input.value = "";
  }
}