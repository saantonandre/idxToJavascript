# idxToJavascript
###  Converts idx files into JS objects 

> The IDX file format is a simple format for vectors and multidimensional matrices of various numerical types.

------------

I'm working on a neural network in vanilla JS, and haven't found many resources in regards of translating the IDX files into javascript.  
Because of this I have made my own implementation, following the instructions as described in the [MNIST database](http://yann.lecun.com/exdb/mnist/ "MNIST database") website and the MDN documentation about ArrayBuffers and TypedArrays.

## Usage:
Import the `convertIdx` function from the `idxConverter.js` file.

` convertIdx(fileURL).then(result => { myDataSet = result.dataSet })`

Mind that the `convertIdx` function returns a promise (it needs to wait for the XMLHttpRequest to resolve), so you have to work around that.
A better description/example of the usage can be found in the `main.js` file.
