<template>
  <div>
    <AlertMessage />
    <div class="my-5 row justify-content-center">
      <form class="col-md-6">
        <div class="bg-main pt-1 pb-1 pl-2">
          <h2 class="text-light h2">購物車清單</h2>
        </div>
        <table class="table">
          <thead>
            <th>訂購品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">
                {{ item.qty }}/{{ item.product.unit }}
              </td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">總計</td>
              <td class="text-right">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table" v-if="!order.is_paid">
          <tbody>
            <tr>
              <th width="120">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span>尚未付款</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="order.is_paid" class="text-center mt-5">
          <i class="fas fa-shipping-fast fa-8x"></i>
          <h3 class="mt-4 h3 text-main">已接收到您的訂單囉，訂單正在製作中!!</h3>
          <p class="text-secondary mt-3">感謝您的訂購，商品預計30分鐘~1小時左右 如遇國定假日或尖峰時段等候時間請依現場時間為主謝謝。</p>
          <p class="text-secondary mt-3">有任何問題請撥打我們的客服專線+88 888 888。</p>
          <div class="mt-4 d-flex">
            <router-link to="/" class="btn btn-outline-info mr-auto">回首頁</router-link>
            <router-link to="/CustomerOrder" class="btn btn-main">繼續購物去!</router-link>
          </div>
        </div>
        <div class="text-right" v-if="!order.is_paid">
          <button type="button" class="btn btn-danger" @click.prevent="payOrder()">確認付款</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AlertMessage from '@/components/AlertMessage'

export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.$http.get(url).then((response) => {
        vm.order = response.data.order
      })
    },
    payOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', '付款完成', 'success')
          vm.getOrder()
        } else {
          vm.$bus.$emit('message:push', '付款失敗，請重新操作', 'danger')
        }
      })
    }
  },
  components: {
    AlertMessage
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
