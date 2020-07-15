<template>
  <div>
    <app-seller-header></app-seller-header>
    <div class="container p-5">
      <h4 style="margin-bottom:20px">Onboarding</h4>
   <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Informasi Toko">
        
           <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">Nama Toko</label>
        </b-col>
        <b-col sm="10">
           <b-form-group
        id="input-nama-produk"
       
      >
        <b-form-input
          id="input-nt"
          v-model="form.email"
          type="Nama"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
        </b-col>
      </b-row>

 <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">Url Toko</label>
        </b-col>
        <b-col sm="10">
           <b-form-group
        id="input-nama-produk"
        description="Generate dari nama toko"
      >
        <b-form-input
          id="input-ut"
          v-model="form.email"
          type=""
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
        </b-col>
      </b-row>

       <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">Nama Pemilik</label>
        </b-col>
        <b-col sm="10">
           <b-form-group
        id="input-nama-produk"

      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="Nama"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
        </b-col>
      </b-row>

       <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">Tahun Berdiri</label>
        </b-col>
        <b-col sm="10">
           <b-form-group
        id="input-nama-produk"

      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="number"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
        </b-col>
      </b-row>

        <b-row class="mt-2">
        <b-col sm="2">
          <label>Jenis Usaha</label>
        </b-col>
        <b-col sm="10">
        <b-form-group id="input-kategori" >
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">Alamat</label>
        </b-col>
        <b-col sm="10">
           <b-form-group
        id="input-nama-produk"

      >
        <b-form-textarea
        id="textarea-default"
        placeholder=""
      ></b-form-textarea>
  
      </b-form-group>
        </b-col>
      </b-row>
 <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">Pengiriman</label>
        </b-col>
        <b-col sm="10">
           <b-form-group id="input-group-4" >
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">JNE</b-form-checkbox>
          <b-form-checkbox value="that">GO-SEND</b-form-checkbox>
          <b-form-checkbox value="that">TIKI</b-form-checkbox>
          <b-form-checkbox value="that">SiCepat</b-form-checkbox>
          <b-form-checkbox value="that">Ninja</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
        </b-col>
      </b-row>
      <br>
       <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">KTP</label>
        </b-col>
        <b-col sm="10">
           <b-form-group
        id="input-nama-produk"
        description="File max 1 MB"
      >
       <b-form-file
      v-model="file"

      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  
      </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">NPWP</label>
        </b-col>
        <b-col sm="10">
           <b-form-group
        id="input-nama-produk"
        description="File max 1 MB"
      >
        <b-form-file
      v-model="file"

      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  
      </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label description="test">Logo Toko</label>
        </b-col>
        <b-col sm="10">
           <b-form-group
        id="input-nama-produk"
        description="File max 1 MB"
      >
       <b-form-file
      v-model="file"

      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  
      </b-form-group>
        </b-col>
      </b-row>

      
     
    </b-form>
  


        </b-tab>
      
        <b-tab title="Informasi Pembayaran">
        

        <b-row class="mt-2">
        <b-col sm="2">
          <label>Nama Bank</label>
        </b-col>
        <b-col sm="10">
        <b-form-group id="input-kategori" >
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label>Nama Pemilik</label>
        </b-col>
        <b-col sm="10">
        <b-form-group id="input-kategori" >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="Nama"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label>No Rek</label>
        </b-col>
        <b-col sm="10">
        <b-form-group id="input-kategori" >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="number"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>
        </b-col>
      </b-row>



        </b-tab>
        <b-tab title="Syarat dan Ketentuan">
<div class="container p-4">
<div class="col-xs-12">
                <h2 class="text-center title mb-4">Syarat dan Ketentuan</h2>
          
            <div class="col-xs-12">
                <p class="subtitle">PETUNJUK PENGEMASAN YANG DIANJURKAN</p>
            </div>
            <div class="col-xs-12">
                <p>
                    <label>Petunjuk ini dibuat untuk memastikan barang yang diterima oleh buyer dalam kondisi yang utuh, layak dan berfungsi.</label>
                    <label>Bila terjadi kerusakan barang dalam pengiriman yang disebabkan oleh packaging yang tidak sesuai dengan standard yang sudah dianjurkan dibawah ini, maka segala konsekuensinya akan menjadi tanggungan dari pihak Seller.</label>
                </p>
            </div>
            <div class="sub-content">
                <div class="col-xs-6">
                    <label class="subtitle">PENGEMASAN:</label> <br>
                    <label>1. Menggunakan kardus atau material pengemas lain yang bisa melindungi barang dari benturan dan kelembaban</label>
                </div>
                <div class="col-xs-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuoKqojD8AawpR1s_ZNsvfAtmtMRCgMEMETQ&usqp=CAU">
                </div>
                
                <div class="col-xs-6">
                    <label>2. Penggunaan material pelindung tambahan kemasan (seperti: bubble wrap, foam, gulungan kertas, dan lain-lain) sangat dianjurkan.</label>
                </div>
                <div class="col-xs-6">
                    
                </div>
                <div class="col-xs-12">
                    <p>
                        <label class="subtitle">PENYEGELAN :</label>
                        <label>Setelah memastikan semua barang sudah masuk kedalam kardus (atau material lainnya), pastikan kemasan tertutup dengan rapat menggunakan segel.</label>
                        <label>Material segel yang dianjurkan seperti: duct tape (lakban) atau material lain yang memang sudah didesign khusus untuk pengiriman barang, dipastikan menutupi semua sisi siku dari kardus yang terbuka.</label>
                        <label>Sangat tidak dianjurkan menggunakan tali atau tambang atau material pengikat lainnya.</label>
                    </p>
                </div>
                <div class="col-xs-12 text-center">
                 
                </div>
                <div class="col-xs-12">
                    <label class="subtitle">LABELLING</label>
                </div>
                <div class="col-xs-12">
                    <p>Label berupa sticker ataupun kertas (yang tidak mudah sobek dan anti lembab) dipastikan jelas terlihat dan mudah dibaca</p>
                </div>
                <div class="col-xs-12">
                    <ol>
                        <li>Label alamat tujuan pengiriman yang simple dan jelas. Dianjurkan untuk juga menempatkan tambahan label alamat tujuan pengiriman didalam kemasan</li>
                        <li>
                            Label peringatan khusus, sangat dianjurkan untuk ditambahkan. Seperti:
                            <div>- Penanganan barang dengan kehati-hatian</div>
                            <div>- Posisi atas dan bawah barang</div>
                            <div>- Barang mudah pecah</div>
                            <div>- Barang sensitif terhadap cuaca.</div>
                        </li>
                    </ol>
                </div>
                <div class="col-xs-8">
                    <label class="subtitle">PETUNJUK KHUSUS BILA MENGGUNAKAN PALLET</label>
                    <label>Untuk pengiriman barang dalam jumlah besar yang membutuhkan wadah khusus seperti pallet, dipastikan untuk memilih material pallet (kayu, plastik atau logam) yang memiliki kekuatan yang disesuaikan dengan berat dari keseluruhan barang.</label>
                    <label>Material pembungkus pallet menggunakan stretch wrap yang spesifikasinya sesuai dengan jenis dan berat barang dalam pallet tersebut.</label>
                </div>
                
            </div>
        </div>
        <div class="agreement">
            <div class="col-xs-8">
                <div class="box__checkbox--list">
                    <label class="checkbox-inline">
                        <input type="checkbox" class="box__checkbox"
                        ng-model="tnc.show.is_agree_tnc"
                        ng-true-value="'1'"
                        ng-false-value="'0'">
                        <span class="box__checkbox--smaller mr-2"></span>
                        <span class="box__checkbox--inline">Saya menyetujui verifikasi dan syarat dan ketentuan diatas</span>
                    </label>
                </div>
                <div class="box__checkbox--list">
                    <label class="checkbox-inline">
                        <input type="checkbox" class="box__checkbox"
                        ng-model="tnc.show.is_agree_transaction"
                        ng-true-value="'1'"
                        ng-false-value="'0'">
                        <span class="box__checkbox--smaller mr-2"></span>
                        <span class="box__checkbox--inline">Saya menyetujui  bahwa semua transaksi melalui kokolim.com akan dikenakan komisi</span>
                    </label>
                </div>
            </div>
        </div>
   
</div>
        </b-tab>
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button v-if="tabIndex!=0" @click="tabIndex--">Previous</b-button>
        <b-button @click="tabIndex++">Next</b-button>
      </b-button-group>

    </div>
  </div>
  </div>
  <app-seller-footer></app-seller-footer>
</div>
</template>

<script>
import SellerHeader from '@/components/templates/SellerHeader';
import SellerFooter from '@/components/templates/SellerFooter';
export default {
    components:{
        appSellerHeader: SellerHeader,
        appSellerFooter: SellerFooter,
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.namatoko = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
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
        show: true,
        tabIndex: 0
      }
    },
}
</script>

<style scoped>
body {
  font-family: "Noto Sans",Lato,"Helvetica Neue",Arial,sans-serif;
    font-size: 14px;
    line-height: 1.4285714286;
    color: #666;
}

.subtitle {
    font-size: 12px;
    font-weight: 700;
    color: #333;
}

.checkbox-inline, .radio-inline {
    display: inline-block;
    color: green;
    margin-bottom: 0;
    vertical-align: middle;
    font-weight: 500;
    cursor: pointer;
}
</style>