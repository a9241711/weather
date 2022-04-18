class getApi{
    constructor(keyword){
        this.keyword=keyword
    }
    async getFetch(keyword){
        let apiKey= "CWB-29315C46-7C48-4DD9-B7C2-CE6E89A08606";
        let time=new Date();
        let hh =(time.getHours()<10 ?'0' :'') +time.getHours();
        let dd=(time.getDate()<10 ?'0' :'') +time.getDate()
        let MM=(time.getMonth()+1 <10 ?'0' :'')+(time.getMonth()+1);
        let year=time.getFullYear();
        let mm =(time.getMinutes()<10 ?'0' :'') +time.getMinutes();
        let ss=(time.getSeconds()<10 ?'0' :'') +time.getSeconds();
        let today =year+'-'+MM+'-'+dd+'T'+hh+':'+mm+':'+ss;
        let todayOffset=year+'-'+MM+'-'+(Number(dd)+1)+'T00:00:00';//截止日設定為當天午夜
        try{
            let getData= await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apiKey}&limit=1&locationName=${keyword}&&timeFrom=${today}&timeFrom=${todayOffset}`)
            let data= await getData.json();
            return data
        }
        catch(mess){
            throw Error("err",mes)
        }
    }
}


//DEMO
// async function getApiFetch(){
//     let inputKeyword="臺北市"
//     let taipei =new getApi(inputKeyword);
//     let data = await taipei.getFetch()
//     console.log(taipei,data)
// }
// getApiFetch()