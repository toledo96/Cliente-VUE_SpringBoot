<template>
  <div class="productoform container">
    <h1>Agregar Presentacion</h1>

    <form @submit.prevent="submitForm" class="mt-3">

      <div class="mb-3">
        <label for="C">Nombre</label>
        <input
          v-model="form.nombre"
          type="text"
          class="form-control"
          id=""
          required
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Descripcion</label>
        <input
          v-model="form.descripcion"
          type="text"
          class="form-control"
          id=""
          aria-describedby="emailHelp"
          required
        />
      </div>

      <button class="btn btn-primary btn-lg btn-block mb-3">Dar de alta</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PresentacionForm",
  components: {
    // HelloWorld
  },
  methods: {
    formdatasend() {
      const formData = new FormData();
      formData.append("nombre", this.form.nombre);
      formData.append("descripcion", this.form.descripcion);
      return formData;
    },
    submitForm() {
      axios
        .post("https://apispring.uc.r.appspot.com/presentacion", this.formdatasend(), {
          headers: {
            "Accept": "application/json",
          },
        })
        .then(() => {
          //Perform Success Action
          window.location.reload();
        })
        .catch((e) => {
          // error.response.status Check status code
          console.log(e);
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },

  data() {
    return {
      form: {
        nombre: "",
        descripcion: "",
      },
    };
  },

  mounted: function () {
    // axios.get("http://localhost:9090/presentacion/").then((data) => {
    //   this.presentaciones = data.data;
    //   console.log(data.data);
    // });
  },
};
</script>
