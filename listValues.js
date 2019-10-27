function onLoad() {
   getCSVdata();
   generateSearch();
}

function generateSearch() {
   var divOutputs = "";
   var i = 0;

   //console.log(cols);
   //console.log(cols.lenght)
   for (fileNum = 0; fileNum < files.length; fileNum++) {
      for (i = 0; i < cols[fileNum].length; i++) {
         //  console.log(i);
         let options = document.createElement("option");
         options.value = cols[fileNum][i];
         options.innerHTML = cols[fileNum][i];
         options.id = fileNum;
         document.getElementById("properties").appendChild(options);
         // options += "<options value=cols[j]>cols[j]</options>" ;
         // console.log(cols[i]);
      }
      //console.log(divOutputs);

   }
}


function generateSearch2() {

   var i = 0;

   var s = document.getElementById("properties");
   var dbValue = (s[s.selectedIndex].value); // get value
   var dbID = (s[s.selectedIndex].id);


   //let dropBoxValue = document.getElementById("properties").value;
   //let dropBox
   //*****WE ADDED 2 BECAUSE IT WORKS */
   let x = properityEntries[dbID][dbValue];
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