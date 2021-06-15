window.onload = function () {
    index = 0;
    arr = [];
    var In = document.getElementById("in");
    var search = document.getElementById("search");
    In.onclick = Input;
    search.onclick = Search;
}

function Input() {
    var input = document.getElementById("input").value;
    var split = input.split(/\s|,|，|、|\r|\n/);
    for (let i = 0; i < split.length; i++) {
        arr[index] = split[i];
        var ul = document.getElementById("output");
        var li = document.createElement("li");
        li.innerHTML = arr[index];
        li.className = "writeLi";
        ul.appendChild(li);
        index++;
    }
}

function Search() {
    var searchInput = document.getElementById("searchInput").value;
    var reg = eval("/" + searchInput + "/");
    var li = document.getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++) {
        li[i].style.backgroundColor = "pink";
        li[i].style.color = "black";
    }
    for (let i = 0; i < arr.length; i++) {
        if (reg.test(arr[i])) {
            li[i].style.backgroundColor = "red";
            li[i].style.color = "white";
        }
    }
}