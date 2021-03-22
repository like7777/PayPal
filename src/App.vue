<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		<div id="paypal-button-container"></div>
  </div>
</template>

<script>

import PayPal from "vue-paypal-checkout"
import demo from './components/PayPalCheckout.vue'

export default {
  name: 'app',
  components:{
		demo
	},
	created(){
		paypal.Buttons({
		  createOrder: function(data, actions) {
		    // This function sets up the details of the transaction, including the amount and line item details.
		    return actions.order.create({
		      purchase_units: [{
		        amount: {
		          value: '0.01'
		        }
		      }]
		    });
		  },
		  onApprove: function(data, actions) {
		    // This function captures the funds from the transaction.
		    return actions.order.capture().then(function(details) {
		      // This function shows a transaction success message to your buyer.
		      alert('Transaction completed by ' + details.payer.name.given_name);
		    });
		  }
		}).render('#paypal-button-container');
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
