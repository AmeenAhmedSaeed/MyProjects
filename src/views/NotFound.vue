<template>
    <div>
        <div>
        <h1><span>N</span>ot Found</h1>
        <p>Oops we couldn't find that page. try going
            <router-link :to="{name: 'home'}">home</router-link>
        </p>
        </div>
    </div>
</template>
<script>
export default {
  name:'notfound'
}
</script>
<style lang="scss" scoped>
  div{
    height: 100vh;
    display: grid;
    place-content: center;
    & span{
      color:red;
      font-size: 48px;
    }
    p{
      font-size: 26px;
    }
  }
</style>