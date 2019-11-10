window.addEventListener('load', function () {
    if (window.location.href.includes("dylanp369")) {
        var allHisStuff = [];
        allHisStuff = document.body.innerHTML.split(" ");
        newString = "";
        for (var i = 0; i < allHisStuff.length; i++) {
            if (["bee", "bees", "buzz"].includes(allHisStuff[i].toLowerCase)) {
                console.log("Reach");
                newString += '<h1 class="crazy">' + chance.word() + ' <h1>'
            } else {
                newString += allHisStuff[i] + " ";
            }
        }
        document.body.innerHTML = newString;
    }











});