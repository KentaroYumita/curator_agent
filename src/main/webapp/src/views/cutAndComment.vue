<template>
  <h1>Cut and Comment</h1>
  <h2>展示A</h2>
  <img alt="exhibitionA" src="../assets/exhibitionA.jpg" class="bigimg">
  <div class="centering_item">
    <table class="centering_item">
      <tr>
        <td><router-link to="/exhibitionInfo">戻る</router-link></td>
        <td><button type="button">切り取る</button></td>
      </tr>
    </table>
  </div>

</template>

<script>
export default {
  name: "cutAndComment"
}
</script>

<style scoped>
img.bigimg {
  width: 200px;
  height: 130px;
}
</style>