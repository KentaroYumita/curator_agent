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
      <td><img alt="exhibitionA" src="../assets/exhibitionA.jpg" class="example1"> </td>
      <router-link to="/exhibitionInfo">Delete</router-link>
    </tr>
    <tr>
      <td>展示B</td>
      <td><img alt="exhibitionB" src="../assets/exhibitionB.jpg" class="example1"> </td>
      <router-link to="/exhibitionInfo">Delete</router-link>
    </tr>
  </table>
  </div>

  <router-link to="/exhibitionInfo">Add</router-link>
</template>

<script>
export default {
  name: "exhibitionList"
}
</script>

<style>
img.example1 {
  width: 96px;
  height: 65px;
}


.centering_item {
  margin: 0 auto; /* 中央寄せ */
}
</style>