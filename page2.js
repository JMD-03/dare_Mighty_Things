function page2onLoad()
{
    var narratives = JSON.parse(sessionStorage.getItem("narratives"));

    var i = 0;
    for (i = 0; i < narratives.length; i++)
    {
    document.getElementById("output").innerHTML += narratives[i];
    }

}