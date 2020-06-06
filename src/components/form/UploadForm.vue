<template>
<div>
  <app-header></app-header>
  <div class="container">
    <h5 style="padding-top: 60px; padding-bottom: 15px;">Tambah Produk</h5>
      <div class="card card-default">
        <div class="card-header">
          <strong>Upload Product</strong> <span class="badge badge-secondary">Wajib</span>
          <br>
          <small>Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px (Maximal 5 gambar)</small>
        </div>
        <div class="card-body">

          <!-- Standar Form -->
          
          <form action="" method="post" enctype="multipart/form-data" id="js-upload-form">
            <div class="form-inline">
              <div class="form-group">
                <input type="file" name="files[]" id="js-upload-files" multiple>
              </div>
              <button type="submit" class="btn btn-sm btn-primary" id="js-upload-submit">Upload files</button>
            </div>
          </form>

          <!-- Drop Zone -->
          <br>
          <div class="upload-drop-zone" id="drop-zone">
            Just drag and drop files here
          </div>

          <!-- Progress Bar -->
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
              <span class="sr-only">60% Complete</span>
            </div>
          </div>

          <!-- Upload Finished -->
          <div class="js-upload-finished">
            <h3>Processed files</h3>
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>image-01.jpg</a>
              <a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>image-02.jpg</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-default">
        <div class="card-header">
          <strong>Informasi Product</strong> 
          <br>

        </div>
        <div class="card-body">
            <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Nama Product:"
        label-for="input-1"
        description="Nama produk min. 5 kata dan terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="Nama"
          required
          placeholder="Contoh: Sepatu Pria"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Kategori:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

     
    </b-form>
    
  </div>

          <!-- Standar Form -->
          
         
        </div>
      </div>
      <div class="card card-default">
        <div class="card-header">
          <strong>Deskripsi Product</strong> 
          <br>

        </div>
        <div class="card-body">
            <div>

      <b-form-group id="input-group-4" label="Kondisi">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Baru</b-form-checkbox>
          <b-form-checkbox value="that">Bekas</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

     <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-default">Default:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-default"
        placeholder="Default textarea"
      ></b-form-textarea>
    </b-col>
  </b-row>
    
  </div>

          <!-- Standar Form -->
          
         
        </div>
      </div>
       <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </div>
    <app-footer></app-footer>
</div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components//Footer.vue'
  
  
  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
    },
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Pilih Kategori', value: null }, 'Buku', 'Fashion Wanita', 'Fashion Pria', 'Electronik'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
.card {
  margin-bottom: 25px;
}

.upload-drop-zone {
  height: 200px;
  border-width: 2px;
  margin-bottom: 20px;
}

/* skin.css Style*/
.upload-drop-zone {
  color: #ccc;
  border-style: dashed;
  border-color: #ccc;
  line-height: 200px;
  text-align: center
}
.upload-drop-zone.drop {
  color: #222;
  border-color: #222;
}
</style>