<template>
  <div class="w-full lg:flex gray mt-14 lg:mt-0">
      <!-- Items Section  -->
      <div class="w-full lg:3/5 p-1">
        <div class="bg-white shadow rounded-sm">
            <!-- Content  -->
            <div v-for="(cart,i) in carts" :key="i" :class="i != 0 ? 'border-t' : ''" class="w-full flex justify-between pl-2 pt-4 pb-4 lg:pr-20">
                <button type="button" class="w-full lg:w-2/5 focus:outline-none">
                    <div class="flex justify-center">
                        <template v-if="Loading">
                            <center><image-loading /></center>
                        </template>
                        <template v-else>
                            <img class="w-1/2 object-cover rounded" :src="WebsiteAddress + cart.product.logo_url" alt="">
                        </template>
                    </div>
                    <div v-if="!Loading" class="w-full mt-2 font-medium">Price: ৳{{ cart.product.price }}</div>
                </button>
                <!-- Loading  -->
                <button v-if="Loading" type="button"  class="w-full lg:w-3/5 lg:grid lg:grid-cols-2 lg:gap-4 items-center focus:outline-none">
                    <div class="mr-4 lg:mr-0">
                        <cart-loading></cart-loading>
                    </div>
                    <div class="hidden lg:block">
                        <cart-loading></cart-loading>
                    </div>
                </button>
                <!-- Content  -->
                <button v-else type="button" class="w-full lg:w-3/5 lg:flex lg:justify-between lg:items-center focus:outline-none">
                    <div>
                        <div class="text-md text-left font-semibold">Name: {{ cart.product.name }}</div>
                        <div class="text-md text-left font-semibold flex items-center">
                            <div class="mr-3">Quantity: {{ cart.product_qty }} </div>
                            <div @click="QuantityDecremant(cart.id)" class="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-red-500 hover:text-red-300 bi bi-dash-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg>
                            </div>
                            <div @click="QuantityIncremant(cart.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-blue-500 hover:text-blue-300 bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="text-md text-left font-semibold">Size: None</div>
                    </div>
                    <div>
                        <div class="text-md text-left font-semibold"> Delivery Charge: 0 </div>
                        <div class="text-md text-left font-semibold"> Toatal Price: ৳{{ cart.product.price*cart.product_qty }} </div>
                        <div @click="Confirm(cart.id)" class="text-md text-left font-semibold">
                            <button class="bg-red-500 hover:bg-red-400 font-medium text-white p-0.5 px-2 focus:outline-none rounded flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 mr-1 bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                <div>
                                    Remove
                                </div>
                            </button>
                        </div>
                    </div>
                </button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import _  from 'lodash'
export default {
    metaInfo: {
        title: 'Cart Page',
    },
    data(){
        return{
            carts: [],
        }
    },
    mounted(){
        this.GetCart();
    },
    methods:{
        GetCart(){
            axios.get('/api/frontend/cart')
            .then(res =>{

                if(this.TotalProductsInCart === 0){

                    this.$store.commit('SET_TOAST', 'Warning');
                    this.$store.commit('SET_ToastMessage', 'No Product In Your Cart , Please Add Product');
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                    this.back();
                }
                this.carts = res.data.carts;
            })
        },

        
        QuantityIncremant: _.throttle(function(id){

            axios.post(`/api/frontend/cart/quantity/increment/${id}`)
            .then(res =>{
                if(res.data.success){

                    this.$store.commit('SET_TOAST', 'Success');
                    this.$store.commit('SET_ToastMessage', res.data.success);
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                    this.GetCart();
                }
            })
            .catch(e =>{
                this.$store.commit('SET_TOAST', 'Warning');
                this.$store.commit('SET_ToastMessage', 'Something Is Wrong !');
                setTimeout(() => {
                        this.$store.commit('SET_TOAST', false);
                }, 3000);
            })
        }),
        QuantityDecremant: _.throttle(function(id) {

            axios.post(`/api/frontend/cart/quantity/decrement/${id}`)
            .then(res =>{
                if(res.data.warning){

                    this.$store.commit('SET_TOAST', 'Warning');
                    this.$store.commit('SET_ToastMessage', res.data.warning);
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                    this.GetCart();
                }
            })
            .catch(e =>{
                this.$store.commit('SET_TOAST', 'Warning');
                this.$store.commit('SET_ToastMessage', 'Something Is Wrong !');
                setTimeout(() => {
                        this.$store.commit('SET_TOAST', false);
                }, 3000);
            })
        }),
    }


}
</script>

<style scoped>


</style>
