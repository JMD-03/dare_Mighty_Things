function onLoad() {
   getCSVdata();
   generateSearch();
}

function generateSearch() {
   var divOutputs = "";
   var i = 0;

   //console.log(cols);
   //console.log(cols.lenght)

   for (i = 0; i < cols.length; i++) {
      //  console.log(i);
      let options = document.createElement("option");
      options.value = cols[i];
      options.innerHTML = cols[i];
      options.id = "building";
      document.getElementById("properties").appendChild(options);
      // options += "<options value=cols[j]>cols[j]</options>" ;
      // console.log(cols[i]);
   }
   //console.log(divOutputs);

}


function generateSearch2() {

   var divOutputs = "";
   var i = 0;
   let dropBox = document.getElementById("properties").value;
   let x = properityEntries[dropBox];
   document.getElementById("elements").innerHTML = "";
   for (i = 0; i < x.length; i++) {
      //  console.log(i);
      let options = document.createElement("option");
      options.value = x[i];
      options.innerHTML = x[i];
      document.getElementById("elements").appendChild(options);
      // options += "<options value=cols[j]>cols[j]</options>" ;
      // console.log(cols[i]);
   }
   //console.log(divOutputs);
}