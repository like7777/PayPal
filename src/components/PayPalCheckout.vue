<template>
	<div>
		<button @click="paymentAuthorized()"></button>
	</div>
</template>

<script>
	import PayPal from "vue-paypal-checkout"
	export default {
		name:'demo',
		data() {
			return {
			 credentials: {
				sandbox: "AXFu2vIVBJKB8VzdXPUqpcfT1q_drKNkSr0M_vpFcceKo8SkR08CHfbMBCWwLcjvdm8pynCr649f9J2n",
				production: "填写线上环境client_id"
			 },
			 
			 buttonStyle: {
				label: "pay",
				size: "small",
				shape: "rect",
				color: "yellow"
			 }
			}
		},
		components: {
			PayPal
		},
	 
		methods: {
			paymentAuthorized (data) {
			// 授权完成的回调，可以拿到订单id
				console.log(data);
			},
	
			paymentCompleted (data) {
				// 用户支付完成的回调，可以拿到订单id
				console.log(data);
			},
	
			paymentCancelled (data) {
				// 用户取消交易的回调
				console.log(data);
			}
		}
	}
</script>

<style>
</style>
