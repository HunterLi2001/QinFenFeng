window.onload = function () {
    if (!document.getElementsByTagName) return false;
    var li = document.getElementsByTagName("li");
    about = [];
    for (let i = 0; i < li.length; i++) {
        about[i] = li[i].innerHTML;
    }
    var b = document.getElementsByTagName("b");
    index = [];
    for (let i = 0; i < about.length; i++) {
        index[i] = b[i].innerHTML;
    }
    var sort_btn = document.getElementById("sort-btn");
    sort_btn.onclick = Sort;
}

function Sort() {
    for (var i = 0; i < index.length - 1; i++) {
        for (var j = 0; j < index.length - 1 - i; j++) {
            if (index[j] < index[j + 1]) {
                var temp1 = index[j];
                index[j] = index[j + 1];
                index[j + 1] = temp1;
                var temp2 = about[j];
                about[j] = about[j + 1];
                about[j + 1] = temp2;
            } //end if
        } //end for 次数
    } //end for 轮数
    build(about);
    var sort_btn = document.getElementById("sort-btn");
    sort_btn.style.display = "none";
}

function build() {
    var ul = document.getElementById("resort");
    for (let i = 0; i < about.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = about[i];
        ul.appendChild(li);
    }
}