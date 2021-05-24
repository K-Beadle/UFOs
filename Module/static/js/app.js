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

