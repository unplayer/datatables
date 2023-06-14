class DataTableGI {
    constructor(tableName) {
      this.tabla = $(`#${tableName}`).DataTable();
    }
  
    genericDataTable(dataArray) {
      this.tabla.clear().rows.add(dataArray).draw();
    }
  }
  
  var dataArray = [
    {
      "id": "1",
      "props": {
        "abc": "123",
        "def": "456",
        "ghi": "789"
      },
      "features": {
        "zxc": "01",
        "cvb": "02",
        "nmn": "03"
      }
    },
    {
      "id": "2",
      "props": {
        "abc": "002",
        "def": "258",
        "ghi": "965"
      },
      "features": {
        "zxc": "52",
        "cvb": "21",
        "nmn": "75"
      }
    },
    {
      "id": "3",
      "props": {
        "abc": "352",
        "def": "365",
        "ghi": "778"
      },
      "features": {
        "zxc": "21",
        "cvb": "45",
        "nmn": "03"
      }
    },
  ];
  
  $(document).ready(function() {
    let instancia = new DataTableGI("example");
    instancia.genericDataTable(dataArray);
});
