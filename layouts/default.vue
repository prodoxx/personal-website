<template>
    <v-app dark>
        <v-app-bar elevate-on-scroll color="white" app>
            <v-toolbar-title id="logo" v-text="title" />
        </v-app-bar>
        <v-main>
            <BodyContainer>
                <Nuxt />
            </BodyContainer>
        </v-main>

        <p id="footer" class="mt-6 d-flex flex-row justify-center align-center">
            Made with
            <a class="mx-2" target="_blank" href="https://nuxtjs.org/"
                >NuxtJs</a
            >
            and published in
            <a class="mx-2" href="#">Github</a>
        </p>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            title: 'Reggie Escobar',
        }
    },
}
</script>
<style lang="scss" scoped>
#logo {
    color: #0084ff;
    font-size: 26px;
}
#footer {
    background: white;
    height: 3.5em;
    width: 100%;
    color: black;
    border-top: 1px solid #eeeeee;
    margin-bottom: 0px;
}
</style>
