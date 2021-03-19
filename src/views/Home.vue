<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Reto CRUD</h1>

    <router-link v-bind:to="'/pform'">
      <button class="btn btn-primary btn-lg btn-block mt-4 mb-5" type="button">
        Agregar producto
      </button>
    </router-link>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th>
          <th scope="col">Stock</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, key) in results" :key="key">
          <th scope="row">{{ result.id }}</th>
          <td>{{ result.nombre }}</td>
          <td>{{ result.descripcion }}</td>
          <td>{{ result.precio }}</td>
          <td>{{ result.stock }}</td>
          <td>
            <button @click="deleteContact(result.id)">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>

            <router-link v-bind:to="'/editProducto/' + result.id">
              <button>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  methods: {
    deleteContact: function (id) {
      axios
        .delete("https://apispring.uc.r.appspot.com/productos/" + id)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },

  data() {
    return {
      results: [],
    };
  },

  mounted: function () {
    axios.get("https://apispring.uc.r.appspot.com/productos").then((data) => {
      this.results = data.data;
      console.log(data.data);
    });
  },
};
</script>
