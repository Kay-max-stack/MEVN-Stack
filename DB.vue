<template>
 <div >
   <h1>Inhalte aus der Datenbank</h1>
   <DBComponent />
 </div>
</template>

<script>
import DBComponent from '../components/DBComponent';
export default {
  name: 'DB',
  components: {
    DBComponent
  }
}
</script>
<style scoped >
div {
  background-color: rgb(8, 185, 255);
}
h1 {
  color:white;
  margin-bottom: 3%;
  padding-top:3%;
}
</style>