function searchValues()
{
    var property = document.getElementById("properties").value;
    var propValue = document.getElementById("elements").value;

    var i = 0;
    var matchedListing = Array();
    for (i = 0; i < listings.length; i++)
    {
        if(listings[i][property] == propValue)
        {
            matchedListing.push(listings[i]);
        }
    }

    var narratives = Array();

    for(i=0; i < matchedListing.length; i++)
    {
        //Comes from ai code
        //narratives.push(general_narrative(matchedListing[i]));

        narratives.push(i);

        //for

        document.getElementById("foundListings").innerHTML += matchedListing[i] + "\n";
    }

    sessionStorage.setItem("narratives", JSON.stringify(narratives));

    window.location.href = "./page2.html";

}