<template>
    <v-container fluid>
        <nav>
        	<navegador/>
        </nav>
        <div>
        	<navmatches/>
        </div>
        <footer>
            <piepag/>
        </footer>
    </v-container>
</template>

<script>
import piepag from '../components/piepag'
import navegador from '../components/navegador'
import navmatches from '../components/navmatches'
export default {
    name: 'matches',
    components: {
    	piepag,navegador,navmatches
    }
};
</script>

<style scoped>
</style>