function generateTable() {
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("columns").value);
    let tableContainer = document.getElementById("table-container");
    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
        tableContainer.innerHTML = "<p>Please enter valid numbers for rows and columns.</p>";
        return;
    }
    let table = "<table>";
    for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < cols; j++) {
            table += `<td>Row ${i+1}, Col ${j+1}</td>`;
        }
        table += "</tr>";
    }
    table += "</table>";
    tableContainer.innerHTML = table;
}
