var time = () => {
    var myDate = new Date();
    var tYear = myDate.getFullYear();
    var tMonth = myDate.getMonth();

    var m = tMonth + 1;
    if (m.toString()
        .length == 1) {
        m = "0" + m;
    }
    var yam = tYear + '-' + m;
    return yam + '-' + Date().split(" ")[2] + ' ' + Date().split(" ")[4]
}
var a=axios({
                 url: "https://ikuuu.dev/user/checkin",
                 method:'post',
                 data:{},
                 headers:{
                 cookie:"lang=zh-cn; _ga=GA1.2.1856465016.1672458441; uid=820172; email=3549916684%40qq.com; key=aeca62aa9880d6e3d5b5035dd5a28397e3ecd1bf0d232; ip=0b003f7985ca6bd7ed37f3f6d9d4ebb3; expire_in=1675251925; _gid=GA1.2.628989433.1674647128; _gat_gtag_UA_158605448_1=1"            
                 }
                 }
                 )
setTimeOut(()=>{
    const {data}=await a
    fs.writeFileSync('./log/'+time()+'.log', `${time()}${JSON.stringify(data)}`)
}, 86400000)