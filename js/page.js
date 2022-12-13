

document.querySelector('button.create').addEventListener('click', function (e) {
    e.preventDefault();

    // 创建文本内容
    var text = "开卡开卡!";

    // 创建 Blob 对象，其中包含文本内容
    var blob = new Blob([text], { type: "text/plain" });
    var url = URL.createObjectURL(blob)
    download(url,'开卡')
})


function download(url,name){
    var a = document.createElement('a')
    a.href = url // 给a标签赋上下载地址
    a.download = name
    a.style.display = 'none' // 让a标签不显示
    document.body.appendChild(a) // 将a标签append到文本中
    a.click()
}