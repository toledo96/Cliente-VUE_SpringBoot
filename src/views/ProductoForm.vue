<template>
  <div class="productoform container">
    <h1>Agregar Producto</h1>

    <form @submit.prevent="submitForm" class="mt-3">
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
        <label for="C">Precio</label>
        <input
          v-model="form.precio"
          type="text"
          class="form-control"
          id=""
          required
        />
      </div>


      <div class="mb-3">
        <label for="C">Stock</label>
        <input
          v-model="form.stock"
          type="text"
          class="form-control"
          id=""
          required
        />
      </div>

      <div class="mb-3">
        <label for="C">Presentacion</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="form.presentacion"
          required
        >
          <option disabled value="">Seleccione un elemento</option>
          <option
            v-for="(result, key) in presentaciones" :key="key" 
            v-bind:value="result.id">
            {{ result.nombre }}
          </option>
        </select>
      </div>
       <button class="btn btn-primary btn-lg btn-block mb-3">
            Dar de alta
        </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductoForm",
  components: {
    // HelloWorld
  },
  methods: {
      formdatasend() {
      const formData = new FormData();
      formData.append("nombre", this.form.nombre);
      formData.append("descripcion", this.form.descripcion);
      formData.append("precio", this.form.precio);
      formData.append("stock", this.form.stock);
      formData.append("presentacion", this.form.presentacion);
      return formData;
    },
    submitForm() {
      axios
        .post(
          "http://localhost:9090/productos",this.formdatasend(),{
            headers: {
            'Content-Type': 'application/json'
            }
          }
        )
        .then(() => {
          //Perform Success Action
          alert("producto Agregado")
        })
        .catch((e) => {
          // error.response.status Check status code
          console.log(e)
        })
        .finally(() => {
          //Perform action in always
        });
    }
  },

  data() {
    return {
        form: {        
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        presentacion: ""
      },        
        presentaciones: [],
    };
  },

  mounted: function () {
    axios.get("http://localhost:9090/presentacion/").then((data) => {
      this.presentaciones = data.data;
      console.log(data.data);
    });
  },
};
</script>
