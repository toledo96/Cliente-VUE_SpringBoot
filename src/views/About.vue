<template>
  <div class="about container">
    <h1>Presentaciones</h1>

    <router-link v-bind:to="'/presentform'">
      <button class="btn btn-primary btn-lg btn-block mt-4 mb-5" type="button">
        Agregar presentacion
      </button>
    </router-link>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>

          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, key) in results" :key="key">
          <th scope="row">{{ result.id }}</th>
          <td>{{ result.nombre }}</td>
          <td>{{ result.descripcion }}</td>
          <td>
            <button @click="deleteContact(result.id)">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>

            <router-link v-bind:to="'/editPresentacion/' + result.id">
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
        .delete("http://localhost:9090/presentacion/" + id)
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
    axios.get("http://localhost:9090/presentacion/").then((data) => {
      this.results = data.data;
      console.log(data.data);
    });
  },
};
</script>

