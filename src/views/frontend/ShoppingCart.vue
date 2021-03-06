<template>
  <div>
    <AlertMessage />
    <h2 class="mt-3 ml-3 h2 font-weight-bold">購物車清單</h2>
    <div class="col-md-8 ml-auto mr-auto shoppingcar">
      <div
        v-if="cart.carts.length < 1"
        class="text-center bg-warning text-light"
      >
        無商品
      </div>
      <table class="table mt-4">
        <thead>
          <tr class="text-center">
            <th>產品名稱</th>
            <th width="120">售價</th>
            <th width="100">數量</th>
            <th width="100">合計</th>
            <th width="80">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id">
            <td class="d-flex">
              <div
                class="mr-1"
                style="
                  height: 50px;
                  width: 100px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ backgroundImage: `url(${item.product.image})` }"
              ></div>
              {{ item.product.title }}
              <div class="text-success ml-1" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td class="text-right">
              {{ item.product.price | currency }}
            </td>
            <td class="text-center">
              {{ item.qty }}
            </td>
            <td class="text-right">
              {{ (item.product.price * item.qty) | currency }}
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="removeCartItem(item.id)"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="text-right">總計</td>
            <td class="text-right">{{ cart.total }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="4" class="text-right text-success">折扣後價格</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input
          type="text"
          class="form-control"
          v-model="coupon_code"
          placeholder="請輸入優惠碼"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-success"
            type="button"
            @click="addCouponCode()"
          >
            套用優惠碼
          </button>
        </div>
      </div>

      <div class="my-5 row justify-content-center">
        <validation-observer class="col-md-6" v-slot="{ invalid }">
          <form>
            <validation-provider
              rules="required|email"
              v-slot="{ errors, classes }"
            >
              <div class="form-group">
                <!-- 輸入框 -->
                <label for="email">*Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  v-model="form.user.email"
                  class="form-control"
                  :class="classes"
                  placeholder="請輸入電子信箱"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </div>
            </validation-provider>

            <validation-provider rules="required" v-slot="{ errors, classes }">
              <div class="form-group">
                <label for="username">*收件人姓名</label>
                <input
                  id="username"
                  type="text"
                  name="name"
                  v-model="form.user.name"
                  class="form-control"
                  :class="classes"
                  placeholder="請輸入姓名"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </div>
            </validation-provider>

            <validation-provider
              rules="required|numeric"
              v-slot="{ errors, classes }"
            >
              <div class="form-group">
                <label for="usertel">*收件人電話</label>
                <input
                  id="usertel"
                  type="tel"
                  name="tel"
                  v-model="form.user.tel"
                  class="form-control"
                  :class="classes"
                  placeholder="請輸入電話"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </div>
            </validation-provider>

            <validation-provider rules="required" v-slot="{ errors, classes }">
              <div class="form-group">
                <label for="usertel">*收件人地址</label>
                <input
                  id="useraddress"
                  type="address"
                  name="address"
                  v-model="form.user.address"
                  class="form-control"
                  :class="classes"
                  placeholder="請輸入地址"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </div>
            </validation-provider>

            <div class="form-group">
              <label for="useraddress">留言</label>
              <textarea
                name=""
                id=""
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-right">
              <button type="button" class="btn btn-danger" :disabled="invalid" @click.prevent="creatOrder()">
                送出訂單
              </button>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
import AlertMessage from '@/components/AlertMessage'
export default {
  data () {
    return {
      cart: {},
      isLoading: false,
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data
      })
    },
    removeCartItem (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      this.$http.delete(url).then((response) => {
        vm.getCart()
        this.$bus.$emit('message:push', '已成功移除商品', 'success')
      })
      vm.checkCart()
    },
    checkCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data.carts
      })
    },
    addCouponCode () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.coupon_code
      }
      vm.isLoading = true
      vm.$http.post(url, { data: coupon }).then((response) => {
        if (response.data.success) {
          this.$bus.$emit('message:push', '成功套用優惠券', 'success')
        } else {
          this.$bus.$emit('message:push', '優惠券套用失敗請重新確認', 'danger')
        }
        vm.getCart()
        vm.isLoading = false
      })
    },
    creatOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.isLoading = true
      vm.$http.post(url, { data: order }).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$bus.$emit('message:push', '建立訂單', 'success')
          vm.isLoading = false
          vm.$router.push(`/customer_checkout/${response.data.orderId}`)
        } else {
          vm.$bus.$emit('message:push', '建立訂單失敗，請重新確認', 'danger')
        }
      })
    }
  },
  components: {
    AlertMessage
  },
  created () {
    this.getCart()
  }
}
</script>
