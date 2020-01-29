// from data.js
var tableData = data;

let tbody = d3.select("tbody");

// Build the table
function buildTable(data) {
    tbody.html("")
//Loop through the data
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        
//Add cell with it's value to each row        
        let cell = row.append("td");
        cell.text(val);
    });
})
}
// Button click to trigger an event
function handleClick() {
    d3.event.preventDefault();
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

// Filter data using date entered to return rows where datetime value equals filter value
    if (date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);
buildTable(tableData);