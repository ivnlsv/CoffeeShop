<template>
	<main>
		<div class="banner goodspage-banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<nav-bar-component />
					</div>
				</div>
				<header-title :text="text" />
			</div>
		</div>
		<section class="shop">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 offset-2">
						<img
							class="shop__girl"
							src="@/assets/img/coffee_goods.jpg"
							alt="girl"
						/>
					</div>
					<div class="col-lg-4">
						<div class="title">About our beans</div>
						<img
							class="beanslogo"
							src="@/assets/logo/Beans_logo_dark.svg"
							alt="Beans logo"
						/>
						<div class="shop__text">
							Extremity sweetness difficult behaviour he of. On disposal of as
							landlord horrible.
							<br /><br />
							Afraid at highly months do things on at. Situation recommend
							objection do intention<br />
							so questions. <br />
							As greatly removed calling pleased improve an. Last ask him cold
							feel<br />
							met spot shy want. Children me laughing we prospect answered
							followed. At it went<br />
							is song that held help face.
						</div>
					</div>
				</div>

				<div class="line"></div>

				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div class="shop__wrapper">
							<product-card
							    classItem="shop__item"
								v-for="coffee in goodsItems"
								:key = "coffee.id"
								:title="coffee.title"
								:price="coffee.price"
								:img="coffee.img"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
<script>
import HeaderTitle from '@/components/HeaderTitle.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import ProductCard from '@/components/ProductCard.vue';
export default {
	data() {
		return {
			text: 'For your pleasure',
			
		};
	}, 
	components: { NavBarComponent, ProductCard, HeaderTitle },
	computed: {
		goodsItems() { 
			return this.$store.getters['getGoodsItems']
		}
	} 
	  
};
</script>
