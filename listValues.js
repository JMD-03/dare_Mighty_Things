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
      document.getElementById("properties").appendChild(options);
      // options += "<options value=cols[j]>cols[j]</options>" ;
      // console.log(cols[i]);
   }
   //console.log(divOutputs);
}