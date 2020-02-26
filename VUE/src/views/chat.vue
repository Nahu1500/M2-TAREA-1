<template>
    <v-container fluid>
        <nav>
        	<navegador/>
        </nav>
        <footer>
            <piepag/>
        </footer>
    </v-container>
</template>

<script>
import piepag from '../components/piepag'
import navegador from '../components/navegador'
export default {
    name: 'chat',
    components: {
    	piepag,navegador
    }
};
</script>

<style scoped>
</style>