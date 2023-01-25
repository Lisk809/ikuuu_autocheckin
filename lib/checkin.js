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
    return yam + '-' + Date()
        .split(" ")[2] + ' ' + Date()
        .split(" ")[4]
}
var cwd = process.cwd()
const cookie = fs.readFileSync(`${cwd}/cookie.txt`).toString()
var a=axios({
                 url: "https:/ / ikuuu.dev / user / checkin ",
                 method:'post',
                 data:{},
                 headers:{
                 cookie:cookie
                 }
                 }
                 )
setTimeOut(()=>{
    const {data}=await a
    fs.writeFileSync('../logs/'+time()+'.log', `${time()}${JSON.stringify(data)}`)
}, 86400000)