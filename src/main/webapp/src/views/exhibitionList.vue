<template>
  <h1>Exhibition List</h1>
  <div class="centering_item">
  <table class="centering_item">
    <tr>
      <th>名前</th>
      <th>展示</th>
      <th>詳細</th>
    </tr>
    <tr>
      <td>展示A</td>
      <td><img alt="exhibitionA" src="../assets/exhibitionA.jpg" class="miniimg"></td>
      <td><router-link to="/exhibitionInfo">詳細</router-link></td>
    </tr>
    <tr>
      <td>展示B</td>
      <td><img alt="exhibitionB" src="../assets/exhibitionB.jpg" class="miniimg"></td>
      <td><router-link to="/exhibitionInfo">詳細</router-link></td>
    </tr>
  </table>


    <table>
      <thead>
      <tr>
        <td>名前</td>
        <td>写真</td>
        <td>ルーター</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="exhibit in exhibits" :key="exhibit._id">
        <td>{{ exhibit.id }}</td>
        <td>{{ exhibit.name }}</td>
        <td>
          <router-link to="/exhibitionInfo">Edit</router-link>
        </td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
export default {
  data() {
    return {
      exhibits: []
    };
  },
  created: function() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      let uri = "/items";
      this.axios.get(uri).then(response => {
        this.items = response.data;
      });
    },
    deleteItem(id) {
      let uri = "/items/" + id;
      this.axios.delete(uri).then(() => {
        this.fetchItems();
      });
    }
  }
};
</script>

<style>
img.miniimg {
  width: 96px;
  height: 65px;
}


.centering_item {
  margin: 0 auto; /* 中央寄せ */
}
</style>