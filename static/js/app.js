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
