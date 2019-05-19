// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(tableData) {
  console.log(tableData);
});

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
});

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo object
    var cell = row.append("td");
    cell.text(value);
  });
});


data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(person => person.datetime === inputValue);
tbody.html("");

filteredData.forEach((person) => {
    var row = tbody.append("tr");
    Object.entries(person).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});


});


// // Select the submit button
// var submit = d3.select("#submitcity");

// submit.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#city");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

// //   console.log(inputValue);
// //   console.log(tableData);
//   var filteredData = tableData.filter(person => person.city === inputValue);
// tbody.html("");

// filteredData.forEach((person) => {
//     var row = tbody.append("tr");
//     Object.entries(person).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
// });


// });