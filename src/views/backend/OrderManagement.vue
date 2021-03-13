<template>
  <div>
    <div class="row mt-4">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <div class="row no-gutters align-item-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-uppercase mb-1">
                  <button
                    type="button"
                    class="btn btn-warning"
                    @click="order = 'uncompleted'"
                  >
                    未完成訂單數量
                  </button>
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-3">
                  {{ orders.length }}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-shipping-fast fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <div class="row no-gutters align-item-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-uppercase mb-1">
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="order = 'completed'"
                  >
                    已完成訂單數量
                  </button>
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-3">
                  2
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-check fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <div class="row no-gutters align-item-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-uppercase mb-1">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="order = 'refund'"
                  >
                    退貨訂單
                  </button>
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-3">2</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-shopping-bag fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <div class="row no-gutters align-item-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-uppercase mb-1">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="order = 'complaint'"
                  >
                    *客訴案件
                  </button>
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800 mt-3">1</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-angry fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="table-responsive" v-if="order == 'uncompleted'">
      <h2 class="mt-5">未完成訂單</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>購買日期</th>
            <th>購買款項</th>
            <th>應付金額</th>
            <th>付款狀態</th>
            <th>備註</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.create_at }}</td>
            <td>{{ item.create_at | timestamptrans }}</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }}
                  {{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td>{{ item.total | currency }}</td>
            <td>
              <span v-if="item.is_paid" class="text-success"> 已付款 </span>
              <span v-else class="text-danger"> 尚未付款 </span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-responsive" v-if="order == 'completed'">
      <h2 class="mt-5">已完成訂單</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>購買日期</th>
            <th>付款狀態</th>
            <th>配送狀態</th>
            <th>備註</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00001</td>
            <td>2021/01/01</td>
            <td>已付款</td>
            <td>已送達</td>
            <td></td>
          </tr>
          <tr>
            <td>00001</td>
            <td>2021/01/01</td>
            <td>已付款</td>
            <td>已送達</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-responsive" v-if="order == 'refund'">
      <h2 class="mt-5">退貨訂單</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>購買日期</th>
            <th>退貨原因</th>
            <th>回收狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00001</td>
            <td>2021/01/01</td>
            <td></td>
            <td>已回收</td>
          </tr>
          <tr>
            <td>00001</td>
            <td>2021/01/01</td>
            <td></td>
            <td>已回收</td>
          </tr>
          <tr>
            <td>00001</td>
            <td>2021/01/01</td>
            <td></td>
            <td>已回收</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-responsive" v-if="order == 'complaint'">
      <h2 class="mt-5">客訴案件</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>購買日期</th>
            <th>客訴原因</th>
            <th>處理狀況</th>
            <th>備註</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00001</td>
            <td>2021/01/01</td>
            <td>商品瑕疵</td>
            <td>換貨</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination
      v-if="pagination.total_pages > 1"
      :pagination="pagination"
      @emitPage="getOrders($event)"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'

export default {
  data () {
    return {
      orders: {
        user: {
          name: '',
          email: ''
        }
      },
      tempOrder: {},
      pagination: {},
      order: 'uncompleted'
    }
  },
  components: {
    Pagination
  },
  methods: {
    getOrders (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      vm.$http.get(api).then((response) => {
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
      })
    }
  },

  created () {
    this.getOrders()
  }
}
</script>

<style scoped>
  @media (max-width: 768px) {
    .table-responsive{
      overflow-x: auto;
    }
    .table{
      width: 768px;
    }
  }
</style>
