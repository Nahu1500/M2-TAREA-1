<template>
  <div class="home">
  	<nav>
  		<navegador/>
  	</nav>
  	<main>
  		<principal/>
  	</main>
  	<footer>
  		<piepag/>
  	</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import navegador from '../components/navegador'
import principal from '../components/principal'
import piepag from '../components/piepag'
export default {
  name: "Home",
  components: {
    navegador,principal,piepag
  }
};
</script>
