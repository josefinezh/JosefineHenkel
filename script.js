// to get dynamic content from the cms server that the customer can edit in the crm

onload = async function () {


    var url = "https://framed.timopictur.es/cms/"
    var prjid = "656e5133db0037003ed0127d"

    var dyns = document.getElementsByClassName("dynamic");
            for (var i = 0; i < dyns.length; i++) {
                vid = dyns.item(i).id
                await dynamicLoad(url, prjid, vid)
            }
}

async function dynamicLoad(url, prjid, vid) {
    var uri = url + prjid + "/" + vid
    await fetch(uri)
        .then(async function (response) {
            await response.text().then(function (text) {
                document.getElementById(vid).innerHTML = text.replace(/\n/g, '<br/>')

            })
        });

// insert magic mouse .js like effect of circle following mouse
var cursor = document.getElementById('cursor');
var cursor = document.getElementById('cursor');
var delay = 100; // Delay in milliseconds

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;

    setTimeout(function() {
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    }, delay);
});
}

