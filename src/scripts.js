window.onload = function(){
    localStorage.clear()
    document.getElementById("scroll").onscroll = printScroll
    
}

function printScroll(){
    var el = document.getElementById("scroll")
    var height = el.scrollTop
    console.log(height)
    var maxH = (localStorage.maxH ? localStorage.maxH : 900)
    console.log(maxH)
    var close = (localStorage.close ? localStorage.close : false)
    var index = (localStorage.index ? localStorage.index : 1)
    if (height > maxH && !close){
        if(confirm("Do you accept?") && !close){
            if (!close){alert("Access Granted!")}
            localStorage.close = false;
            window.location.href = "https://google.com"
        }else{
            var bod = document.getElementById("b" + index.toString())
            var copyDiv = document.createElement("div")
            console.log("YO STYLE HEIGHT" + bod.style.height.toString())
            maxH = parseInt(maxH) + bod.clientHeight - 30
            localStorage.maxH = maxH
            copyDiv.innerHTML = bod.innerHTML
            el.append(copyDiv)
            console.log(copyDiv)
            localStorage.index = (parseInt(index) + 1) % 7
            if (parseInt(localStorage.index) == 0){
                localStorage.index = 1
            }
        }
    }
}
