<template>
  <div class="container mt-4">
    <h3>Gestión de Productos</h3>
    
    <div class="mb-3">
      <input v-model="nuevo.nombre" class="form-control mb-2" placeholder="Nombre" />
      <input v-model="nuevo.precio" class="form-control mb-2" placeholder="Precio" type="number" />
      <button class="btn btn-success" @click="agregar">Agregar</button>
    </div>
    
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in productos" :key="i">
          <td>{{ p.nombre }}</td>
          <td>{{ p.precio }}</td>
          <td>
            <button @click="eliminar(i)" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [],
      nuevo: { nombre: '', precio: '' }
    }
  },
  
  // Hook llamado después de que la instancia ha sido creada
  created() {
    // 1. Obtener los datos almacenados en localStorage
    const data = localStorage.getItem('productos')
    
    // 2. Si hay datos, parsearlos y asignarlos a 'this.productos', si no, usar un array vacío
    this.productos = data ? JSON.parse(data) : []
  },
  
  methods: {
    agregar() {
      // 1. Verificar que tanto nombre como precio no estén vacíos
      if (this.nuevo.nombre && this.nuevo.precio) {
        // 2. Agregar una copia del nuevo producto al array 'productos'
        this.productos.push({ ...this.nuevo })
        
        // 3. Persistir el array actualizado en localStorage
        localStorage.setItem('productos', JSON.stringify(this.productos))
        
        // 4. Limpiar el formulario
        this.nuevo = { nombre: '', precio: '' }
      }
    },
    
    eliminar(index) {
      // 1. Eliminar el producto del array por su índice
      this.productos.splice(index, 1)
      
      // 2. Persistir el array actualizado en localStorage
      localStorage.setItem('productos', JSON.stringify(this.productos))
    }
  }
}
</script>