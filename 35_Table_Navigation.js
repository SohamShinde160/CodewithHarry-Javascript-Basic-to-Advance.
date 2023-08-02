// Table Links
//   certain DOM elements provide additional PROPERTIES specific to their types for convenience

//  Table element support the following properties
//    table.rows --> Collection to tr element
//    table.captions --> reference to <caption>
//    table.thead   -->  reference to <thead>
//    table.tfont   -->  reference to <tfont>
//    table.tBodies -->  collection of <tBody> element
//    tbody.rows   -->  html collection of <tr> inside

//    tr.cells      -->  collection of td and th
//    tr.sectionRowIndex ---> index of tr inside encolsing element
//    tr.rowIndex   -->  row number starting from 0

//    td.cellIndex  -->  no. of cells inside the enclosing <tr>

let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tfoot)
console.log(t.tBodies)
console.log(t.rows[1].rowIndex)

