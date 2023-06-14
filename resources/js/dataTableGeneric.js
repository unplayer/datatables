class DataTableGI {
	constructor(tableName, jsonData ) {
		 // Obtener las columnas dinámicamente
		let columns = Object.keys(jsonData.data[0]);
		columns.Actions ;
	  this.tabla = $(`#${tableName}`).DataTable({
		columns: columns.map(function(column) {
			if (column === 'Actions') {
			  return {
				data: null,
				render: function(data, type, row) {
				  return '<button class="btn btn-primary btn-sm btn-action" data-id="' + row.name + '">Action</button>';
				}
			  };
			} else {
			  return { data: column };
			}
		  })


		});
	}

	agregarDatosATabla(jsonData) {
	  // Limpiar la tabla antes de agregar nuevos datos
	  this.tabla.clear();
  
	  // Recorrer los datos del JSON
	  jsonData.data.forEach((dato) => {
		let randomDecimal = Math.random() * (1000 - 1) + 1;
		// Obtener los valores de las propiedades del objeto
		dato.Actions = `<button class="btn btn-primary btn-sm btn-action" data-id="${randomDecimal}">Action</button>`;
  
		// Agregar los valores a la tabla
		this.tabla.row.add(dato);
	  });
  
	  // Dibujar la tabla actualizada
	  this.tabla.draw();
	}

	onDraw(){

		this.tabla.on( 'draw', function () {
			table
				.search( this.value )
				.draw();
		} );
	}
  }
  
  let jsonData = {
	"data": [
	  {
		"name": "file1.html",
		"date": "2019-01-29T20:33:57.000163Z",
		"size": 348
	  },
	  {
		"name": "file2.xml",
		"date": "2019-01-29T20:33:57.000167Z",
		"size": 401
	  },
	  {
		"name": "file3.html",
		"date": "2019-01-29T20:33:57.000171Z",
		"size": 1314
	  }
	]
  };
  

    
  $(document).ready(function() {
	let instancia = new DataTableGI("example",jsonData);
	instancia.agregarDatosATabla(jsonData);
  });