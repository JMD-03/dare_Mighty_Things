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

    document.write(narratives[0]);
    console.log(narratives);

}