<template>
  <MyResume />
</template>

<script>
import MyResume from "./components/MyResume.vue";

export default {
  name: "App",
  components: {
    MyResume,
  },
};
</script>

<style>
@import "./assets/reset.css";
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");

body {
  font-family: "Nunito", sans-serif;
}
</style>
