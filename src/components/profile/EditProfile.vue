<template>
    <div>
        		<article class="card mb-3">
			<div class="card-body">
				
				<figure class="icontext">
						<div class="icon">
							<img class="rounded-circle img-sm border" v-bind:src="src">
						</div>
						<div class="text">
							<strong> Mr. Jackson Someone </strong> <br> 
							myloginname@gmail.com <br> 
							<a href="#" class="btn-link">Edit</a>
						</div>
				</figure>
				<hr>
				<p>
					<i class="fa fa-map-marker text-muted"></i> &nbsp; My address:  
                    <br>
					Tashkent city, Street name, Building 123, House 321  
					<a href="#" class="btn-link"> Edit</a>
				</p>

				

				<article class="card-group">
					<figure class="card bg">
						<div class="p-3">
                            <h5 class="card-title">38</h5>
							<span>Orders</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
                            <h5 class="card-title">5</h5>
							<span>Wishlists</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
                            <h5 class="card-title">12</h5>
							<span>Awaiting delivery</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
                            <h5 class="card-title">50</h5>
							<span>Delivered items</span>
						</div>
					</figure>
				</article>
				

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
export default {
data() {
      return {
        src: require('@/assets/images/profile.png'),
        item1: require('@/assets/images/items/1.jpg'),
        item2: require('@/assets/images/items/2.jpg'),
        item3: require('@/assets/images/items/3.jpg'),
      }
    },
}
</script>

<style>
.img-sm {
    width: 80px;
    height: 80px;
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