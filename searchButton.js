let input=document.querySelector(".search-bar").value;

document.querySelector(".search button").addEventListener("click", ()=>{
    input=document.querySelector(".search-bar").value;
    let city=["臺北市","南投縣", "嘉義市", "嘉義縣","基隆市", "宜蘭市", "屏東縣", "彰化縣", "新北市", "新竹市", "新竹縣", "桃園市", "澎湖縣",
            "臺中市", "臺南市", "台東縣", "花蓮縣", "苗栗縣", "連江縣", "金門縣", "雲林縣", "高雄市"];
    if (city.includes(input)){
        getApiFetch(input);
    }else{
        showErrorMessage();
    };
})