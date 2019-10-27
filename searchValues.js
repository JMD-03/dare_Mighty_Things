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

    for(i=0; i < matchedListing.length; i++)
    {
        //Comes from ai code
        general_narrative(matchedListing[i]);

        //for

        document.getElementById("foundListings").innerHTML += matchedListing[i] + "\n";
    }

}