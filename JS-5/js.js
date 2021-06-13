window.onload = function () {
    count = 0;
    var leftIn = document.getElementById("leftIn");
    var rightIn = document.getElementById("rightIn");
    var leftOut = document.getElementById("leftOut");
    var rightOut = document.getElementById("rightOut");
    var bubbleSort = document.getElementById("bubbleSort");
    leftIn.onclick = leftInput;
    rightIn.onclick = rightInput;
    leftOut.onclick = leftOutput;
    rightOut.onclick = rightOutput;
    bubbleSort.onclick = Sort;
}

function leftInput() {
    var input = document.getElementById("input").value;
    if (check(input) == false) {
        return;
    }
    var ul = document.getElementById("output");
    var li = document.createElement("li");
    li.style.height = input + "px";
    li.className = "writeLi";
    ul.insertBefore(li, document.getElementsByTagName("li")[0]);
    count++;
}

function rightInput() {
    var input = document.getElementById("input").value;
    if (check(input) == false) {
        return;
    }
    var ul = document.getElementById("output");
    var li = document.createElement("li");
    li.style.height = input + "px";
    li.className = "writeLi";
    ul.appendChild(li);
    count++;
}

function leftOutput() {
    var deleteElement = document.getElementsByTagName("li")[0];
    if (deleteElement == undefined) {
        alert("列表已经清空！");
        return;
    } else {
        alert(deleteElement.clientHeight);
    }
    deleteElement.parentNode.removeChild(deleteElement);
    count--;
}

function rightOutput() {
    var deleteElement = document.getElementsByTagName("li")[document.getElementsByTagName("li").length - 1];
    if (deleteElement == undefined) {
        alert("列表已经清空！");
        return;
    } else {
        alert(deleteElement.clientHeight);
    }
    deleteElement.parentNode.removeChild(deleteElement);
    count--;
}

//检查输入内容是否符合要求
function check(input) {
    var reg = /^(0|[1-9][0-9]*)$/;
    if (!reg.test(input)) {
        alert("输入数字不符合要求");
        return false;
    }
    if (input < 10 || input > 100) {
        alert("超出输入范围");
        return false;
    }
    if (count > 50) {
        alert("输入数量已大于50个");
        return false;
    }
    return true;
}
//冒泡排序
function Sort() {
    var li = document.getElementsByTagName("li");
    var arr = [];
    for (let i = 0; i < li.length; i++) {
        arr[i] = li[i].clientHeight;
    }
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
                var temp = arr[j + 1]; // 元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for (let i = 0; i < li.length; i++) {
        li[i].style.height = arr[i] + "px";
    }
}