<script>
export default {
  beforeCreate() {
    document.title = 'JazzResPOS';
    if(screen.width < 600) {
      alert('RJPOS is not Supported on Mobile/Tablet Devices!')
    }
  }
}
</script>

<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

:root {
  --peach: #f2bc94;
  --blue: #00154f;
  --yellow: #f4af1b;
}
* {
  font-family: 'Kanit', sans-serif;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 2.188vw;
}
.red {
    color: red !important;
}
.green {
    color: yellowgreen !important;
}
</style>
