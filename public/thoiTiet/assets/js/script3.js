const imgs = {
    Sunset: "https://gcdnb.pbrd.co/images/ZW45IYZWZy6n.png",
    Rain: "https://gcdnb.pbrd.co/images/nZ26RX7qMh1q.png?o=1",
    Windy: "https://gcdnb.pbrd.co/images/zX3rfGlL5XSi.png?o=1",
    Sun: "https://gcdnb.pbrd.co/images/9PieLGcqwYSA.png?o=1",
};

var temperature = document.getElementById("temperature");
var uv = document.getElementById("uv");
var humi = document.getElementById("humi");
var wind = document.getElementById("wind");

var hourPrediction = document.getElementById('hourPrediction')
var duBaoNgay = document.getElementById('duBaoNgay')

var thongTinPhu = document.getElementById('thongTinPhu')

function getImageByCloudStatus(cloud_status) {
    let result = "";

    ///
    switch (cloud_status) {
        case "Cloudy":
        case "Mostly Cloudy":
            result = imgs.Sunset;
            break;
        case "Rain":
        case "Scattered Showers":
        case "Thunderstorm":
        case "Scattered Thunderstorms":
        case "Scattered Thunderstorms Night":
            result = imgs.Rain;
            break;

        default:
            result = imgs.Sun;
            break;
    }
    ///

    return result;
}

function renderNextHours(thoiTietJson) {
    console.log("next 24h: ", thoiTietJson.data.next_24h)

    let nexthours = ''

    thoiTietJson.data.next_24h.forEach(element => {
        let html = `
            <div class="holder">
                <p>${element.time}</p>
                <img style="width: 40px; height: auto;" src="${getImageByCloudStatus(element.cloud_status)}" alt="">
                <p>${element.temperature}</p>
            </div>`

        nexthours = nexthours + html

    });

    console.log("html su bao cac gio tiep theo: ", nexthours)
    hourPrediction.innerHTML = nexthours
}

function renderNextDay(thoiTietJson) {
    console.log("next day: ", thoiTietJson.data.next_10days)

    let nextday = ''

    thoiTietJson.data.next_10days.forEach(element => {
        let html = `
             <div class="col d-inline-flex flex-column justify-content-center align-items-center">
                <p>${element.date}</p>
                <img style="width: 60px; height: auto;" src="${getImageByCloudStatus(element.cloud_status)}" alt="">
                <div class="d-flex gap-2" style="font-size: 14px;">
                  <p>H: ${element.day.temperature}</p>
                  <p>L: ${element.night.temperature}</p>
                </div>
              </div>
`

        nextday = nextday + html

    });

    console.log("html su bao cac gio tiep theo: ", nextday)
    duBaoNgay.innerHTML = nextday
}


async function goiApiHaiPhong(cloud_status) {
   
        //lấy ra hành động gọi api và đợi nó chạy bằng cách dùng await
    const thoiTietResponse1 = await fetch(
        "https://api3.vnexpress.net/api/crawler?type=get_data&key=weather_dot_com&province=H%E1%BA%A3i%20Ph%C3%B2ng&app_id=d9b81e&date=2024-07-24",
    );
    //thực thi gọi api đến khi lấy được kết quả và đợi nó chạy xong bằng cách dùng await
    const thoiTietJson1 = await thoiTietResponse1.json();
    console.log("json1", thoiTietJson1);
    let haiPhong = '';

    
        let html = `
             <div class="item d-flex justify-content-center align-items-center">
          <div class="col d-inline-flex flex-column justify-content-center align-items-center">
            <h3>Hải Phòng</h3>
            <p class="font-weight-bold">Monday</p>
            <img style="width: 60px; height: auto" src="${getImageByCloudStatus(cloud_status)}">
            <h1>${thoiTietJson1.data.temperature}</h1>
            <div class="d-flex gap-2" style="font-size: 14px;">
              <p>H: ${thoiTietJson1.data.temperature_max}</p>
              <p>L: ${thoiTietJson1.data.temperature_min}</p>
            </div>
          </div>
        </div>
`;

        haiPhong = haiPhong + html;

    thongTinPhu.innerHTML += haiPhong;

}

async function goiApiHungYen(cloud_status) {
   
    //lấy ra hành động gọi api và đợi nó chạy bằng cách dùng await
const thoiTietResponse2 = await fetch(
    "https://api3.vnexpress.net/api/crawler?type=get_data&key=weather_dot_com&province=H%C6%B0ng%20Y%C3%AAn&app_id=d9b81e&date=2024-07-24",
);
//thực thi gọi api đến khi lấy được kết quả và đợi nó chạy xong bằng cách dùng await
const thoiTietJson2 = await thoiTietResponse2.json();
console.log("json2", thoiTietJson2);
let hungYen = '';


    let html = `
         <div class="item d-flex justify-content-center align-items-center">
      <div class="col d-inline-flex flex-column justify-content-center align-items-center">
        <h3>Hưng Yên</h3>
        <p class="font-weight-bold">Monday</p>
        <img style="width: 60px; height: auto" src="${getImageByCloudStatus(cloud_status)}">
        <h1>${thoiTietJson2.data.temperature}</h1>
        <div class="d-flex gap-2" style="font-size: 14px;">
          <p>H: ${thoiTietJson2.data.temperature_max}</p>
          <p>L: ${thoiTietJson2.data.temperature_min}</p>
        </div>
      </div>
    </div>
`;

hungYen += html;

thongTinPhu.innerHTML += hungYen;

}

goiApiHaiPhong()
    goiApiHungYen()


async function goiApi() {
    //lấy ra hành động gọi api và đợi nó chạy bằng cách dùng await
    const thoiTietResponse = await fetch(
        "https://api3.vnexpress.net/api/crawler?type=get_data&key=weather_dot_com&province=H%C3%A0%20N%E1%BB%99i&app_id=d9b81e&date=2024-07-24",
    );
    //thực thi gọi api đến khi lấy được kết quả và đợi nó chạy xong bằng cách dùng await
    const thoiTietJson = await thoiTietResponse.json();
    const statusCode = thoiTietResponse.status;

    console.log("statusCode gọi api: ", statusCode);
    console.log("kết quả gọi api: ", thoiTietJson.data);

    //render dữ liệu lên html
    temperature.innerHTML = thoiTietJson.data.temperature;
    uv.innerHTML = thoiTietJson.data.uv;
    humi.innerHTML = thoiTietJson.data.humidity;
    wind.innerHTML = thoiTietJson.data.wind;


    renderNextHours(thoiTietJson)
    renderNextDay(thoiTietJson)
   
 
}



goiApi();
setInterval(goiApi, 1000)

