/**
 * 2021-12-30
 * 
 * @file Example usage of the IdxConverter.
 * @author Andrea Santona
 * 
 */

// Import the convertIdx function from its module
import { convertIdx } from './idxConverter/idxConverter.js'

// Define the url of the idx file
let fileURL = "train-images.idx3-ubyte";


// Have a variable where to store the data
let dataSet;

// Call the convert function with the desired file URL (returns a promise)
convertIdx(fileURL).then(result => {
    // Inside here you define what happens when the dataSet is ready


    // Logs the data as intended by the idx header
    console.log(result.data);
    // Logs the entries as a flattened mono-dimensional array
    console.log(result.rawData);
    // Save the data inside a previously declared variable
    dataSet = result;
})