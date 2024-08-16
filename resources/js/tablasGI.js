
class Tabla {

  constructor(config) {
    this.tableName = config.tableName || 'defaultTable';
    this.dataset = config.dataset || [];
    this.paging = config.paging !== undefined ? config.paging : true;
    this.pageLength = config.pageLength || 10;
    this.ordering = config.ordering !== undefined ? config.ordering : true;
    this.searching = config.searching !== undefined ? config.searching : true;
    this.columns = config.columns || [];
    this.language = config.language == 'spanish' ? { url: 'resources/js/jQuery-3.6.0/Spanish.json' } : { url: '' };
    this.buttons = config.buttons !== undefined ? config.buttons : [];
    /*this.exportFormatter = {
      format: {
          body: function (data, row, column, node) {
              // Strip $ from salary column to make it numeric
              return column === 5 ? data.replace(/[$,]/g, '') : data;
          }
      }
  };*/
    this.initTable();
  }

  initTable() {
    // Create table element
    const table = document.createElement('table');
    table.id = this.tableName;
    table.classList.add('display');
    document.body.appendChild(table);

    // Initialize DataTable with configuration
    $(`#${this.tableName}`).DataTable({
      data: this.dataset,
      columns: this.columns,
      paging: this.paging,
      pageLength: this.pageLength,
      ordering: this.ordering,
      searching: this.searching,
      language: this.language,
      layout: {
        topStart: {
          buttons: this.buttons,
        }
      }
    });
  }
}