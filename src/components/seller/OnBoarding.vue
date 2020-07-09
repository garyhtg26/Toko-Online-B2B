<template>
<div>
    <app-seller-header></app-seller-header>

<section class="h-100">
  <header class="container h-100">
    <div class="d-flex align-items-center justify-content-center h-100">
      <div class="d-flex flex-column">
        <div class="row seller-profilling-buffer">
            <div class="mr-5">
                <b-card
    title="Perusahaan"
    img-src="https://img.freepik.com/free-vector/urban-buildings-with-cityscape-scenery_18591-51831.jpg?size=626&ext=jpg"
    img-alt="Image"
    img-height="180px"
    img-top
    tag="div"
    style="width: 300px;"
    align="center"
    
  >
    <b-card-text>
      Badan usaha yang telah terdaftar izinya (PT,CV,Firma,UD dan lainya)
    </b-card-text>

    <b-form-radio v-model="selected" name="some-radios" value="A"></b-form-radio>
  </b-card>
            </div>
            <div class="ml-5">
 <b-card
    title="Perseorangan"
    img-src="https://img.freepik.com/free-vector/business-character_48866-384.jpg?size=626&ext=jpg"
    img-alt="Image"
     img-height="180px"
    img-top
    tag="div"
    style="width: 300px;"
    align="center"
  >
    <b-card-text>
      Badan usaha yang dimiliki oleh individu atau skala kecil dan mikro
    </b-card-text>
    <b-form-radio v-model="selected" name="some-radios" value="B"></b-form-radio>
    
  </b-card>
            </div>

        </div>
        <button class="btn btn-danger btn-lg align-self-center" type="button" name="button">Lanjutkan</button>
      </div>
    </div>
  </header>
</section>
  
<div style="margin-bottom:100px;"></div>
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
    }
}
</script>

<style>
.seller-profilling-buffer {
    margin-top: 70px;
    margin-bottom: 50px;
}

.row {
    margin-left: auto !important;
    margin-right: auto !important;
    text-align: center !important;
}

</style>