<template>
  <div id="logo-div">
    <div id="logo-text">
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    setTimeout(()=>{
      this.$router.push({
        path: '/tv'
      })
    },5000)
  }
};
</script>

<style scoped>
#logo-div {
  background-image: url(https://api.dujin.org/bing/1920.php);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
}
#logo-text{
  padding-bottom: 50px;
}
</style>