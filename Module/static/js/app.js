// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build the Table Data
function buildTable(data) {
    // Clear the table
    tbody.html("");

    // loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append row to table body
        let row = tbody.append("tr");

        // loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filterdData = tableData;

    // Check if a data was entered and filter data using that date.
    if (date) {
        // Apply `filter` to table data to only keep rows where `datetime` value matches filter value
        filteredData = filterdData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date is entered then filteredData will be the original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
