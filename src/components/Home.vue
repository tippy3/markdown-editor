<template>
  <div class="home m-5">
    <h1>{{msg}}</h1>
    <p><button class="btn btn-primary" @click="googleLogin">Googleアカウントでログイン</button></p>
    <p><router-link :to="{name: 'terms'}">利用規約</router-link></p>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {
      msg: "これはVue.jsとFirebaseによって作られたマークダウンエディターです"
    };
  },
  methods: {
    googleLogin: function(){
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
};
</script>
