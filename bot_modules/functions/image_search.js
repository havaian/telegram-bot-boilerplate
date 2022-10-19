// Importing imports
const { 
	gis 
} = require('../modules');

// IMAGE SEARCH TEST
gis('Isaac Azimov - Foundation', logResults);

function logResults(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(JSON.stringify(results, null, '  '));
  }
}

// Exporting logResults function
module.exports = {
	logResults
}