const table = document.createElement("table");
const tableRow = document.createElement("tr");
const tableHeader1 = document.createElement("th");
const tableHeader2 = document.createElement("th");

table.appendChild(tableRow);
tableRow.appendChild(tableHeader1);
tableRow.appendChild(tableHeader2);

const appElement = document.getElementById("webjs-container");
appElement.appendChild(table);
const tableHeaders = document.querySelectorAll("th");
tableHeaders.forEach(header => {
  header.style.padding = "4px";
  header.style.textAlign = "left";
  header.style.border = "1px solid black";
});

tableHeader1.innerHTML = "Data Element";
tableHeader2.innerHTML = "Value";

table.style.border = "1px solid black";
table.style.width = "100%";
table.style.borderCollapse = "collapse";
table.style.margin = "16px 0";

const displayData = ({ RTW }) => {
  while (table.childNodes.length > 1) {
    table.removeChild(table.lastChild);
  }
  for (const [key, value] of Object.entries(RTW)) {
    const tableRow = document.createElement("tr");
    const tableCell1 = document.createElement("td");
    const tableCell2 = document.createElement("td");
    tableRow.appendChild(tableCell1);
    tableRow.appendChild(tableCell2);
    tableCell1.innerHTML = key;
    tableCell2.innerHTML = value;
    table.appendChild(tableRow);
  }
  const tableRows = document.querySelectorAll("tr");
  const tableCells = document.querySelectorAll("td");
  tableRows.forEach(row => {
    row.style.borderBottom = "1px solid black";
  })
  tableCells.forEach(cell => {
    cell.style.padding = "4px";
    cell.style.border = "1px solid black";
  })
};