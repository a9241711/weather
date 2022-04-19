async function getApiFetch(word){
  let taipei = new getApi();
  let data = await taipei.getFetch(word);
  let name = data.records.location[0].locationName;
  let description = data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
  let minTemp = data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
  let maxTemp = data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
  let precipitation = data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
  let comfortIndex = data.records.location[0].weatherElement[3].time[0].parameter.parameterName;
  // console.log(name,description,minTemp,maxTemp,precipitation,comfortIndex);
  document.querySelector(".city").innerText = name + " 天氣";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = minTemp + " °C - "+ maxTemp + " °C";
  document.querySelector(".humidity").innerText = "下雨機率 : " + precipitation + " %";
  document.querySelector(".weather").classList.remove("loading");
  document.querySelector(".wind").innerText = comfortIndex;
  document.body.style.backgroundImage =
  "url('./image/" + name + ".jpg')";
}

init()

function init() {
  getApiFetch("臺中市")
}