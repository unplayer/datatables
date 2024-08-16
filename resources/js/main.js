
$(document).ready(function () {

  const config = {
    tableName: 'table',
    dataset: [
        ['John', 'Doe', 'john@example.com'],
        ['Jane', 'Doe', 'jane@example.com'],
        ['Bob', 'Smith', 'bob@example.com'],
        ['Alice', 'Johnson', 'alice@example.com']
        //... more data...
    ],
    columns: [
        { title: "First Name" },
        { title: "Last Name" },
        { title: "Email" }
    ],
    paging: true,
    pageLength: 10,
    ordering: true,
    searching: true,
    language: 'spanish',
    buttons: [
      { extend: 'copyHtml5'}, //, exportOptions: this.exportFormatter 
      { extend: 'excelHtml5'},
      { extend: 'pdfHtml5'}
  ]};
  const mytable = new Tabla( config );
  
});