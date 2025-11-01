<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="navbar-brand ps-3">Panel</div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/productos" class="nav-link">Productos</router-link>
        </li>
        <li class="nav-item">
          <a @click="logout" class="nav-link">Cerrar sesión</a>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // 1. Eliminar el estado de "logueado" del almacenamiento local
      localStorage.removeItem('logueado')
      
      // 2. Redirigir al usuario a la ruta raíz (o página de inicio de sesión)
      this.$router.push('/')
    }
  }
}
</script>