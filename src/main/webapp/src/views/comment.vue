<template>
  <h1>Comment</h1>
  <h2>展示A</h2>
  <img alt="exhibitionA" src="../assets/exhibitionA.jpg" class="bigimg">

  <div class="centering_item">
    <textarea name="comment"></textarea >
    <table class="centering_item">
      <tr>
        <td><router-link to="/cutPicture">戻る</router-link></td>
        <td><router-link to="/exhibitionInfo">コメントを追加</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Comment"
}
</script>

<style scoped>
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