window.onload = function () {
    var leftIn = document.getElementById("leftIn");
    var rightIn = document.getElementById("rightIn");
    var leftOut = document.getElementById("leftOut");
    var rightOut = document.getElementById("rightOut");
    leftIn.onclick = leftInput;
    rightIn.onclick = rightInput;
    leftOut.onclick = leftOutput;
    rightOut.onclick = rightOutput;
}

function leftInput() {
    var input = document.getElementById("input").value;
    if (check(input) == false) {
        return;
    }
    var ul = document.getElementById("output");
    var li = document.createElement("li");
    li.innerHTML = input;
    li.className = "writeLi";
    ul.insertBefore(li, document.getElementsByTagName("li")[0]);
}

function rightInput() {
    var input = document.getElementById("input").value;
    if (check(input) == false) {
        return;
    }
    var ul = document.getElementById("output");
    var li = document.createElement("li");
    li.innerHTML = input;
    li.className = "writeLi";
    ul.appendChild(li);
}

function leftOutput() {
    var deleteElement = document.getElementsByTagName("li")[0];
    if (deleteElement == undefined) {
        alert("列表已经清空！");
        return;
    } else {
        alert(deleteElement.innerHTML);
    }
    deleteElement.parentNode.removeChild(deleteElement);
}

function rightOutput() {
    var deleteElement = document.getElementsByTagName("li")[document.getElementsByTagName("li").length - 1];
    if (deleteElement == undefined) {
        alert("列表已经清空！");
        return;
    } else {
        alert(deleteElement.innerHTML);
    }
    deleteElement.parentNode.removeChild(deleteElement);
}

//检查输入内容是否符合要求
function check(input) {
    var reg = /^(0|[1-9][0-9]*)$/;
    if (!reg.test(input)) {
        alert("输入数字不符合要求");
        return false;
    }
    return true;
}