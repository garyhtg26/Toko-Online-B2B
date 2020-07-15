<template>
    <div>
		<article class="card mb-3">
			<div class="card-body">
				<b-tabs content-class="mt-3">
					<b-tab title="Biodata Diri" active>
						<div class="container">
					<div class="row mt-4">
						<div class="col-md-4">
							<div class="well">
								<img v-bind:src="src" class="img-sm">
								<hr class="mb-4">
							<b-button style="width:100%;color:#333230; background-color:white;">Pilih Foto</b-button>
							<div class="clear-b mt-1">
								<small class="muted"> 
									Besar file: maksimum 1 MB
									
								</small>
							</div>
							</div>
							<div class="clear-b">
								<b-button class="btn btn-success btn-block"> <i class="fa fa-key mr-1"></i>Ganti Password</b-button>
							</div>
							
						</div>
						<div class="col-md-8">
							<b-form @submit.prevent="handleSubmit">
									<h7>Ubah Biodata Diri</h7>
									<b-row class="mt-2">
									<b-col sm="3">
									<label class="mt-1">Nama:</label>
									</b-col>
									<b-col sm="9">
									<b-form-group>
									<b-form-input size="sm"
								
									></b-form-input>
									</b-form-group>
									</b-col>
									</b-row>

									<b-row class="mt-2">
									<b-col sm="3">
									<label class="mt-1">Tanggal Lahir:</label>
									</b-col>
									<b-col sm="9">
									<b-form-group>
									<b-form-input size="sm"
								
									></b-form-input>
									</b-form-group>
									</b-col>
									</b-row>

									<b-row class="mt-2">
									<b-col sm="3">
									<label class="mt-1">Jenis Kelamin:</label>
									</b-col>
									<b-col sm="9">
									<b-form-group>
									<b-form-input size="sm"
								
									></b-form-input>
									</b-form-group>
									</b-col>
									</b-row>
									<br>
									<h7 class="">Ubah Kontak</h7>

									<b-row class="mt-2">
									<b-col sm="3">
									<label class="mt-1">Email:</label>
									</b-col>
									<b-col sm="9">
									<b-form-group>
									<b-form-input v-model="userEmail" size="sm">
										
									</b-form-input>
									</b-form-group>
									</b-col>
									</b-row>

									<b-row class="mt-2">
									<b-col sm="3">
									<label class="mt-1">No Hp:</label>
									</b-col>
									<b-col sm="9">
									<b-form-group>
									<b-form-input size="sm"
								
									></b-form-input>
									</b-form-group>
									</b-col>
									</b-row>
							</b-form>
		</div>
					</div>
				</div>
					</b-tab>
					<b-tab title="Daftar Alamat">
						
						<div class="row mb-2">
							<div class="col-md-3">
								<div class="pull left mt-2">
									<b-button class="btn btn-success"><i class="fa fa-plus mr-1"></i>Tambah alamat</b-button>
								</div>
							</div>

						</div>
						<table class="table table-address">
        <thead>
            <tr>
                <th></th>
                <th>Penerima</th>
                <th>Alamat Pengiriman</th>
                <th >Daerah pengiriman</th>
          
                <th style="width:175px;"></th>
            </tr>
        </thead>
        <tbody>
            
                
                    <tr>
                        <td>
                            <div class="log-radio-small log-radio-dimension pt-5">
                                <input type="radio" id="default-48920984" name="radio-address" class="set-default-address-button" checked="checked">
                                <label id="default-48920984" class="log-radio-label" for="default-48920984">
                                    <span data-hover="tooltip" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Jadikan Alamat Utama"></span>
                                </label>
                            </div>
                        </td>
                        <td class="fs-12">
                            <div><strong>gary</strong></div>
                            <div>6289683354920</div>
                        </td>
                        <td class="fs-12">
                            <span><strong>kosan</strong></span>
                            <p>Jl. Sukabirus no 7, citeurep. (d gallery kost)</p>
                        </td>
                        <td class="fs-12">
                            <p>Jawa Barat, Kab. Bandung, Dayeuhkolot 40238<br>Indonesia</p>
                        </td>
                   
                        <td class="action-button">
                          <b-button class="button btn btn-success btn-sm"><i class="fa fa-pencil-square-o"></i>Ubah</b-button>
							<b-button class="button btn btn-light btn-sm"><i class="fa fa-trash"></i>Hapus</b-button>
                       </td>
                    </tr>
                
                    <tr>
                        <td>
                            <div class="log-radio-small log-radio-dimension pt-5">
                                <input type="radio" id="default-115624114" name="radio-address" class="set-default-address-button">
                                <label id="default-115624114" class="log-radio-label" for="default-115624114">
                                    <span data-hover="tooltip" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Jadikan Alamat Utama"></span>
                                </label>
                            </div>
                        </td>
                        <td class="fs-12">
                            <div><strong>Gary</strong></div>
                            <div>6281383316926</div>
                        </td>
                        <td class="fs-12">
                            <span><strong>Rumah</strong></span>
                            <p>Jl. Candi goa gajah blok AJ 6 no 8, Pondok benda, Tangerang selatan, Pamulang, Banten</p>
                        </td>
                        <td class="fs-12">
                            <p>Banten, Kota Tangerang Selatan, Pamulang 15417<br>Indonesia</p>
                        </td>
                     
                        <td class="action-button">
                            <b-button class="button btn btn-success btn-sm"><i class="fa fa-pencil-square-o"></i>Ubah</b-button>
							<b-button class="button btn btn-light btn-sm"><i class="fa fa-trash"></i>Hapus</b-button>
                        </td>
                    </tr>
                
            
        </tbody>
    </table>





					</b-tab>
					
				</b-tabs>
				

			</div> <!-- card-body .// -->
		</article> <!-- card.// -->

		<article class="card  mb-3">
			<div class="card-body">
				<h5 class="card-title mb-4">Recent orders </h5>	

				<div class="row">
				<div class="col-md-6">
					<figure class="itemside  mb-3">
						<div class="aside"><img v-bind:src="item1" class="border img-sm"></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
							<p>Great item name goes here </p>
							<span class="text-warning">Pending</span>
						</figcaption>
					</figure>
				</div> <!-- col.// -->
				<div class="col-md-6">
					<figure class="itemside  mb-3">
						<div class="aside"><img v-bind:src="item2" class="border img-sm"></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
							<p>Machine for kitchen to blend </p>
							<span class="text-success">Departured</span>
						</figcaption>
					</figure>
				</div> <!-- col.// -->
				<div class="col-md-6">
					<figure class="itemside mb-3">
						<div class="aside"><img v-bind:src="item3" class="border img-sm"></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
							<p>Ladies bag original leather </p>
							<span class="text-success">Shipped  </span>
						</figcaption>
					</figure>
				</div> <!-- col.// -->
			</div> <!-- row.// -->

			<a href="#" class="btn btn-outline-primary"> See all orders  </a>
			</div> <!-- card-body .// -->
		</article> <!-- card.// -->

    </div>
</template>

<script>
import {   mapGetters
} from 'vuex';
export default {
	
	computed: {
    ...mapGetters(['isLoggedIn', 'cartValue', 'currentUser', 'cartItemList']),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total
      }, 0);
    },
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : ''
    }
  },
data() {
      return {
        src: require('@/assets/images/profile.png'),
        item1: require('@/assets/images/items/1.jpg'),
        item2: require('@/assets/images/items/2.jpg'),
		item3: require('@/assets/images/items/3.jpg'),
		user:{
        name: '',
        email:  '',
        mobile: '',
        city: '',
        password: '',
        confirmation: '',
        hobbies: []
    }
      }
	},
methods: {
    handleSubmit () {
      console.log(this.user);
    }
  },
}
</script>

<style>
.action-button{
	border-top: 0;
    padding-top: 20px;
}
.table-address .button {
    display: inline-block;
    min-width: 50px;
    margin: 0 0 10px;
    padding: 9px 15px 7px;
    font-size: 11px;

    border-radius: 3px;
    border: solid 1px #e0e0e0;
}
.table {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
}
table, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.table-address thead tr {
    border-bottom: solid 1px #e0e0e0;
}
.table-address thead tr th {
    padding-bottom: 20px;
}
.table thead th {
    vertical-align: bottom;
}
.table th {
    font-weight: 700;
}
.table th, .table td {
    padding: 8px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #ddd;
}
label {
	color: grey;
}

.muted {
    color: rgba(0,0,0,.38);
}
.clear-b {
    clear: both;
}


.well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f7f7f7;
    border: 1px solid rgba(0,0,0,.15);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}
.img-sm {
    width: 200px;
    height: 200px;
}
.btn-link {
    font-weight: 400;
    color: green !important;
    text-decoration: none;
}
.icontext {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    vertical-align: middle;
}
.icontext .icon {
    position: relative;
    margin-right: 10px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
}
.icontext .text {
    width: 100%;
    line-height: 1.2;
    color: #212529;
}
.itemside {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}
.itemside .info {
    padding-left: 15px;
    padding-right: 7px;
}
figure {
    margin-bottom: 0;
}
.btn-outline-primary {
    color: green !important;
}
.btn-outline-primary:hover {
    color: white !important;
}
</style>