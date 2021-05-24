var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

function listPollutedCity() {
    if (!document.createElement || !document.createTextNode) return false;
    console.log(aqiData);
    var pollutedCity = [];
    var j = 0;
    for (var i = 0; i < aqiData.length; i++) {
        if (aqiData[i][1] > 60) {
            pollutedCity[j] = aqiData[i];
            j++;
        }
    }
    pollutedCity.sort(function num(a, b) {
        return b[1] - a[1];
    });
    //输出
    var ul = document.getElementById("aqi-list");
    for (var k = 0; k < pollutedCity.length; k++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        var txt = "第" + (k + 1) + "名：" + pollutedCity[k][0] + "，" + pollutedCity[k][1];
        var text = document.createTextNode(txt);
        li.appendChild(text);
    }
}
window.onload = listPollutedCity;