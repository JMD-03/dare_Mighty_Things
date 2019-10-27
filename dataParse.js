var cols = Array();
var listings = Array();
var aval;
var properityEntries = Array();



let files = ["PropertyDataSamples.csv", "SalesCompSamples.csv"];

function getCSVdata() {

   var fileNum = 0;
   for(fileNum = 0; fileNum < files.length; fileNum++)
   {

   filePath = files[fileNum];
   var result = null;
   var xmlhttp = new XMLHttpRequest();
   xmlhttp.open("GET", filePath, false);
   xmlhttp.send();
   if (xmlhttp.status == 200) {
      result = xmlhttp.responseText;
   }

   var lines = result.split('\n');
   cols.push(lines[0].split(','));
   properityEntries.push(Object());

   var i = 0;
   var j = 0;
   var k = 0;

   for (i = 1; i < lines.length; i++) {
      //checking for commas in quotes
      for (k = 0; k < lines[i].length; k++) {
         if (lines[i][k] == "\"") {
            //console.log(lines[i]);
            k++;
            while (lines[i][k] != "\"") {

               if (lines[i][k] == ",") {
                  //console.log(lines[i][k]);
                  //lines[i][k] = 1;


                  lines[i] = lines[i].substr(0, k) + " " + lines[i].substr(k + 1);

                  //console.log(i + " " + k);
                  //console.log(lines[i][k]);
               }
               k++;
            }
         }
      }
      //splits the properites on the current line

      var properties = lines[i].split(',');
      //var properties = lines[i].split(/([,]["].*[,].*["][,])/);
      //var properites = Regex.Split(lines[i], /[,]["].*[,].*["][,]/, RegexOptions.IgnoreCase);
      var listing = Object();
      for (j = 0; j < cols[fileNum].length; j++) {
         listing[cols[fileNum][j]] = properties[j];
         if (properityEntries[fileNum][cols[fileNum][j]]) {
            if (!properityEntries[fileNum][cols[fileNum][j]].includes(properties[j])) {
               properityEntries[fileNum][cols[fileNum][j]].push(properties[j]);
            }
         }
         else {
            properityEntries[fileNum][cols[fileNum][j]] = Array();

            properityEntries[fileNum][cols[fileNum][j]].push(properties[j]);
         }
      }

      if(!listings[fileNum])
      {
         listings.push(Array());
      }

      listings[fileNum].push(listing);
   }

}

}