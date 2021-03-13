<template>
  <div>
    <div class="text-right mt-3">
      <button
        type="button"
        class="btn btn-success"
        @click="openCouponModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <div class="div">
      <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openCouponModal(false, item, false)"
            >
              編輯
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger btn-sm"
              @click="openCouponModal(false, item, true)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                placeholder="請輸入標題"
              />
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="coupon_code"
                v-model="tempCoupon.code"
                placeholder="請輸入優惠碼"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                v-model="due_date"
              />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                type="number"
                class="form-control"
                id="price"
                v-model="tempCoupon.percent"
                placeholder="請輸入折扣百分比 例如打8折設定80"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer" v-if="isNew">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateCoupon()"
            >
              新增優惠券
            </button>
          </div>
          <div class="modal-footer" v-if="!isNew">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateCoupon()"
            >
              修改優惠券
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="deleteCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger"></strong>
            優惠(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteCoupon()"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: ''
      },
      due_date: new Date(),
      isNew: false
    }
  },
  watch: {
    due_date () {
      const vm = this
      const timestamp = Math.floor(new Date(vm.due_date) / 1000)
      vm.tempCoupon.due_date = timestamp
    }
  },
  methods: {
    openCouponModal (isNew, item, del) {
      if (isNew) {
        this.tempCoupon = {}
        this.isNew = true
      } else {
        this.tempCoupon = Object.assign(...item)
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
          .toISOString()
          .split('T')
        this.due_date = dateAndTime[0]
        this.isNew = false
      }
      if (del) {
        $('#deleteCouponModal').modal('show')
      } else {
        $('#couponModal').modal('show')
      }
    },
    getCoupons () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons`
      vm.$http.get(url, vm.tempCoupon).then((response) => {
        vm.coupons = response.data.coupons
      })
    },
    updateCoupon () {
      const vm = this
      if (vm.isNew) {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
        vm.$http.post(url, { data: vm.tempCoupon }).then((response) => {
          $('#couponModal').modal('hide')
          vm.$bus.$emit('message:push', '新增成功', 'success')
          vm.getCoupons()
        })
      } else {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        vm.due_date = new Date(vm.tempCoupon.due_date * 1000)
        vm.$http.put(url, { data: vm.tempCoupon }).then((response) => {
          $('#couponModal').modal('hide')
          vm.$bus.$emit('message:push', '修改成功', 'success')
          vm.getCoupons()
        })
      }
    },
    deleteCoupon () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      vm.$http.delete(url).then((response) => {
        if (response.data.success) {
          $('#deleteCouponModal').modal('hide')
          vm.getCoupons()
          vm.$bus.$emit('message:push', '刪除成功', 'success')
        } else {
          vm.$bus.$emit('message:push', '刪除失敗', 'danger')
        }
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>

<style scoped>
  @media (max-width: 768px) {
    .div{
      overflow-x: auto;
    }
    .table{
      width: 768px;
    }
  }
</style>
