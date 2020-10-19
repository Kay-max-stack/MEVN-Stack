<template>
  <div class="mainContainer container">

    <div class=".col-md-2 test">
     
        <div
          v-for="(item, index) in entries"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="item._id"
           v-on:dblclick="deleteEntry(item._id)"
          class="thumbnail col-xs-2 "
        >     
          <p class="caption"><strong>{{item.title}}</strong></p>
          <hr>
          <p>{{item.snippet}}</p>
          <hr>
          <p>{{item.body}}</p>
          
        </div>
    </div>

<div class="container">
   <h1>Erstellen Sie ein neues Kartenelement</h1>
      <div>
        <hr>
      <div class="text-left box">
        <label  for="create-entry">Titel</label>
        <input class="form-control" type="text" v-model="title" placeholder="Titel eingeben"/>
      </div>
      <div class="text-left box">
        <label for="create-snippet">Snippet</label>
        <input class="form-control" type="text" v-model="snippet" placeholder="Snippet eingeben"/>
      </div>
      <div class="text-left box">
        <label for="create-body">Body</label>
        <textarea class="form-control" type="text" v-model="body" placeholder="Body eingeben"/>
      </div>
      <div>
        <button class="btn btn-primary button" v-on:click="createEntry">POST</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import FromFrontendToBackend from '../../FrontToBack';

export default {
  name: 'DBComponent',
  data() {
    return {
      entries: [],
      title: '',
      snippet: '',
      body: ''
    }
  },
  async created() {
    try{
      this.entries = await FromFrontendToBackend.getDB_Entries();
    }catch(err){
      console.log(err);
    }
  },
  methods: {
    async createEntry() {
      await FromFrontendToBackend.insertEntry({title: this.title, snippet: this.snippet,body: this.body});
      this.entries = await FromFrontendToBackend.getDB_Entries();
    },
    async deleteEntry(id) {
      await FromFrontendToBackend.deleteEntry(id);
      this.entries = await FromFrontendToBackend.getDB_Entries();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
  margin-top: 5%;
  margin-bottom: 5%;
  color: white;
}
button {
  margin-top: 5%;
  margin-bottom: 3%;
}
.mainContainer{
  display:flex;
  flex-direction: column;
}
.thumbnail{
  margin-right: 2%;
}
.box{
  margin-top: 2%;
  color: white;
}

</style>
