var cols;
var listings;
var properityEntries = Object();

function getCSVdata() {

   filePath = "PropertyDataSamples.csv"
   var result = null;
   var xmlhttp = new XMLHttpRequest();
   xmlhttp.open("GET", filePath, false);
   xmlhttp.send();
   if (xmlhttp.status == 200) {
      result = xmlhttp.responseText;
   }

   var lines = result.split('\n');
   cols = lines[0].split(',');



   listings = Array();

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
      for (j = 0; j < cols.length; j++) {
         listing[cols[j]] = properties[j];
         if (properityEntries[cols[j]]) {
            if (!properityEntries[cols[j]].includes(properties[j])) {
               properityEntries[cols[j]].push(properties[j]);
            }
         }
         else {
            properityEntries[cols[j]] = Array();

            properityEntries[cols[j]].push(properties[j]);
         }
      }

      listings.push(listing);
   }
}