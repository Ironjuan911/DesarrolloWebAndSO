  async function cargarComponente(id, url) {
    const resp = await fetch(url); // Solicitamos el archivo HTML
    const html = await resp.text(); // Obtenemos el contenido como texto
    document.getElementById(id).innerHTML = html; // Insertamos el HTML en el elemento con el ID especificado
  }


let components = ["header", "footer", "content"]; // Array con los nombres de los componentes a cargar

for (let componente of components) { // Ejecutamos el metodo, entregamos el id donde se destinara el header y su ubicación en el proyecto
    cargarComponente(componente, `components/${componente}.html`);
}