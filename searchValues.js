function searchValues() {
    var property = document.getElementById("properties").value;
    var propValue = document.getElementById("elements").value;

    var s = document.getElementById("properties");
    //var dbValue = (s[s.selectedIndex].value); // get value
    var dbID = (s[s.selectedIndex].id);

    var i = 0;
    var matchedListing = Array();
    var fileNum = 0;


    for (i = 0; i < listings[dbID].length; i++) {
        if (listings[dbID][i][property] == propValue) {
            matchedListing.push(listings[dbID][i]);
        }
    }

    var narratives = Array();

    for (i = 0; i < matchedListing.length; i++) {
        //Comes from ai code
        narratives.push(general_narrative(matchedListing[i]));

        // narratives.push(i);

        //for

        document.getElementById("foundListings").innerHTML += matchedListing[i] + "\n";
    }


    //let resultDiv = document.createElement("div");
    //resultDiv.className = "resultDiv";
    //resultDiv.id = "result";
    //document.getElementById("body").appendChild(resultDiv);
    //document.getElementById("result").innerHTML = narratives[0];

    document.getElementById("body").innerHTML = "<div class=\"resultDiv\"><div class=\"resultsText\">" + narratives[0] + "</div></div>";

    let bbtn = document.createElement("button");
    bbtn.value = "Back";
    bbtn.id = "back";
    bbtn.onclick = function () { location.reload() };

    document.getElementById("resultDiv").appendChild(bbtn);
    document.getElementById("back").innerHTML = "Back";


    console.log(narratives);

}