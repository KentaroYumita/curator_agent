<template>
  <h1>Exhibition Info</h1>
  <h2>展示A</h2>
  <img alt="exhibitionA" src="../assets/exhibitionA.jpg" class="bigimg">

  <div class="centering_item">
    <table class="centering_item">
      <tr>
        <th>画像</th>
        <th>コメント</th>
      </tr>
      <tr>
        <td><img alt="exhibitionA" src="../assets/exhibitionA.jpg" class="miniimg"></td>
        <td>コメント</td>
      </tr>
      <tr>
        <td><img alt="exhibitionA" src="../assets/exhibitionA.jpg" class="miniimg"></td>
        <td>コメント</td>
      </tr>
      <tr>
        <td><router-link to="/exhibit/">戻る</router-link></td>
        <td><router-link to="/exhibit/1/crop">コメントを追加</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "exhibitionInfo"
}
</script>

<style >
img.bigimg {
  width: 200px;
  height: 130px;
}
img.miniimg {
  width: 96px;
  height: 65px;
}
.centering_item {
  margin: 0 auto; /* 中央寄せ */
}
</style>