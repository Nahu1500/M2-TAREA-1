<template>
    <v-container fluid fill-height class="principal">
        <v-layout column>
            <v-flex  class="display-2 text-xs-center my-3">Upcoming Events</v-flex>
            <v-flex>
                <h2 class="headline mt-3">August 4</h2>
                <p class="subheading mt-3">NYSL Fundraiser</p>
            </v-flex>
            <v-flex>
                <h2 class="headline mt-3">August 16</h2>
                <p class="subheading mt-3">Season Kick-off: Meet the Teams</p>
            </v-flex>
            <v-flex>
                <h2 class="headline mt-3">September 1</h2>
                <p class="subheading mt-3">First game of the Season (Check Game Schedule for details)</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'principal'
};
</script>

<style scoped>
.principal{
	background: url('../assets/fondo3.jpg');
	background-size: cover;
}
</style>
