<template>
  <div class="container">
    <h2>購物車</h2>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td style="width: 200px">
          <!-- 用style綁定背景圖 -->
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="
              height: 100px;
              background-size: cover;
              background-position: center;
            "
          ></div>
        </td>
        <td>
          {{ product.title }}
        </td>
        <td>
          <!-- 用v-if顯示不同情況 -->
          <div class="h5" v-if="product.price === product.origin_price">
            {{ product.price }} 元
          </div>
          <div v-else>
            <del class="h6">原價 {{ product.origin_price }} 元</del>
            <div class="h5">現在只要 {{ product.price }} 元</div>
          </div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <!-- 點擊時把id加進來 -->
            <button
              type="button"
              @click="openProductModal(product.id)"
              :disabled="isLoadingItem === product.id"
              class="btn btn-outline-secondary"
            >
              查看更多
            </button>
            <!-- 新增判斷，如果是一樣的id為她套用disabled的狀態 -->
            <button
              type="button"
              @click="addToCart(product.id)"
              :disabled="isLoadingItem === product.id"
              class="btn btn-outline-danger"
            >
              <!-- 加上讀取的按鈕，用v-show判斷觸發條件-->
              <span
                v-show="isLoadingItem === product.id"
                class="spinner-grow spinner-grow-sm"
              ></span>
              加到購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
   <!-- 購物車列表 -->
          <div class="text-end">
              <!-- 綁定刪除方法 -->
            <button class="btn btn-outline-danger" type="button" @click="deleteAllCarts">
                <!-- 加上讀取的按鈕，用v-show判斷觸發條件-->
                <span v-show="isLoadingItem" class="spinner-grow spinner-grow-sm"></span>
                清空購物車</button>
          </div>
          <!-- 為了看購物車資訊有沒有成功在畫面上寫的 -->
          <!-- <div>
              {{ cartData }}
          </div> -->
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
                <!-- 購物車列表內容 -->
              <template v-if="cartData.carts">
                <tr v-for="item in cartData.carts" :key="item.id">
                  <td>
                    <!-- 綁定移除方法 -->
                    <button type="button" :disabled="isLoadingItem === item.id" @click="removeCartItem(item.id)" class="btn btn-outline-danger btn-sm">
                      x
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <!-- <div class="text-success">
                      已套用優惠券
                    </div> -->
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <div class="input-group mb-3">
                        <!-- 用v-model綁定數量 -->
                        <!-- <input min="1" type="number" class="form-control" v-model="item.qty"> -->
                        <select id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)" :disabled="isLoadingItem === item.id">
                            <option :value="num" v-for="num in 20" :key="`${num}-${item.id}`" >{{num}}</option>
                        </select>
                        <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <!-- <small class="text-success">折扣價：</small> -->
                    {{ item.total  }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ cartData.total }}</td>
              </tr>
              <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{  }}</td>
              </tr> -->
            </tfoot>
          </table>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cartData: {},
      products: [],
      isLoadingItem: ''
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`).then((res) => {
        console.log(res)
        this.products = res.data.products
      })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data }).then((res) => {
        console.log(res)
        this.isLoadingItem = ''
        emitter.emit('get-cart')
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
