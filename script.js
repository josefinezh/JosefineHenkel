// to get dynamic content from the cms server that the customer can edit in the crm

onload = async function () {


    var url = "https://framed.timopictur.es/cms/"
    var prjid = "656e5133db0037003ed0127d"

    var dyns = document.getElementsByClassName("dynamic");
    console.log(dyns)
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
                let element = document.getElementById(vid);

                // Check if the element has innerHTML property
                if (element.innerHTML) {
                    element.innerHTML = text.replace(/\n/g, '<br/>');
                } else {
                    // Use textContent for other types of elements
                    element.textContent = text;
                }            })
        });


        
    // insert magic mouse .js like effect of circle following mouse
    var cursor = document.getElementById('cursor');
    var delay = 75; // Delay in milliseconds
    if (cursor)
        document.addEventListener('mousemove', function (e) {
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.opacity = 1;

            setTimeout(function () {
                cursor.style.left = x + "px";
                cursor.style.top = y + "px";
            }, delay);
        });
}

