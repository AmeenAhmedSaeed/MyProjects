<template>
  <div>
    <GmapMap 
      :center="{lat:10 , lng:10}"
      :zoom="7"
      style="width:100%; height:399.48px; border-radius:10px; border:5px solid #DDD;">
    </GmapMap>
  </div>
</template>

<script>
export default {
  name:'googlemapping',
    data(){
       return{
          coordinates:{
            lat:0,
            lng:0,
          }
       }
    },
    created(){
        this.$getLocation({})
        .then(coordinates =>{
          this.coordinates = coordinates;
        })
        
    }
}
</script>

<style lang="sass" scoped>
</style>