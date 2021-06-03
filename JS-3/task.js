/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData(cityName, aqi) { //添加对象
    aqiData[cityName] = aqi;
    console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    if (index == 0) { //制作表头
        var table = document.getElementById("aqi-table");
        var tr = document.createElement("tr");
        table.appendChild(tr);
        var th_city = document.createElement("td");
        tr.appendChild(th_city);
        var text_city = document.createTextNode("城市");
        th_city.appendChild(text_city);
        var th_aqi = document.createElement("td");
        tr.appendChild(th_aqi);
        var text_aqi = document.createTextNode("空气质量");
        th_aqi.appendChild(text_aqi);
        var th_oper = document.createElement("td");
        tr.appendChild(th_oper);
        var text_oper = document.createTextNode("操作");
        th_oper.appendChild(text_oper);
        index++;
    }
    //index++;
    var length = Object.getOwnPropertyNames(aqiData).length; //获取对象的属性的个数
    if (length != index) {
        alert("请修改表单中的值！");
        return;
    }
    var table = document.getElementById("aqi-table");
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var td_city = document.createElement("td");
    tr.appendChild(td_city);
    var cityName = Object.getOwnPropertyNames(aqiData)[index - 1];
    var txt_city = document.createTextNode(cityName);
    td_city.appendChild(txt_city);
    var td_aqi = document.createElement("td");
    tr.appendChild(td_aqi);
    var txt_aqi = document.createTextNode(aqiData[cityName]);
    td_aqi.appendChild(txt_aqi);
    var td_btn = document.createElement("td");
    tr.appendChild(td_btn);
    var btn = document.createElement("button");
    btn.setAttribute("class", "delete_table");
    td_btn.appendChild(btn);
    var txt_btn = document.createTextNode("删除");
    btn.appendChild(txt_btn);
    index++;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    var cityName = document.getElementById("aqi-city-input").value;
    if (cityName == "") {
        alert("请输入城市名称！");
        cityName = "";
        return;
    }
    var aqi = document.getElementById("aqi-value-input").value;
    var reg = /^[0-9]*$/;
    if (!reg.test(aqi) || parseFloat(aqi) <= 0 || parseFloat(aqi) - parseInt(aqi) != 0) {
        alert("您输入的aqi的值非法！请重新输入！");
        aqi = "";
        return;
    }
    addAqiData(cityName, aqi);
    document.getElementById("aqi-city-input").value = "";
    document.getElementById("aqi-value-input").value = "";
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(a) {
    var delete_tr = document.querySelectorAll("tr");
    delete_tr[a].remove();
    var cityName = Object.getOwnPropertyNames(aqiData);
    delete aqiData[cityName[a - 1]];
    index--;
}

function init() {
    if (!document.getElementsByClassName) return;
    var add_btn = document.getElementById("add-btn");
    add_btn.onclick = function () { //Tip:保证产生删除按钮后绑定对象
        addBtnHandle();
        var delete_table = document.querySelectorAll(".delete_table");
        for (let i = 0; i < delete_table.length; i++) { //Tip:let关键字
            delete_table[i].onclick = function () {
                delBtnHandle(i + 1); //Tip:遍历数组，保证数组中的每一个按钮都能触发事件//传递的参数始终等于delete_table.length
            };
        }
    }
}

var index = 0;
window.onload = init;