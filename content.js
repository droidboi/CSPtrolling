window.addEventListener('load', function () {
    if (window.location.href.includes("dylanp369")) {

        var allHisStuff = document.body.innerHTML.split(" ");
        newString = "";
        for (var i = 0; i < allHisStuff.length; i++) {
            if (allHisStuff[i].toLocaleLowerCase == "bee") {
                newString += '<h1 class="crazy">' + chance.word() + ' <h1>'
            } else {
                newString += allHisStuff[i] + " ";
            }
        }
        document.body.innerHTML = newString;
    }











});