<template>
    <div>
        <v-img
            width="351"
            style="margin: 0 auto"
            height="351"
            :src="require('~/assets/images/selfie.png')"
        />
        <p class="grey--text font-italic text-center mt-5 mb-8">
            Nerdy Hipster
        </p>
        <v-row justify="center">
            <v-col cols="4">
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/reggie-gian-escobar/"
                >
                    <v-img
                        width="46"
                        height="46"
                        :src="require('~/assets/icons/linkedin.svg')"
                    />
                </a>
            </v-col>
            <v-col cols="4">
                <a href="https://twitter.com/_reggieescobar">
                    <v-img
                        width="46"
                        height="46"
                        :src="require('~/assets/icons/twitter.svg')"
                    />
                </a>
            </v-col>
            <v-cols
                ><a href="https://github.com/prodoxx"
                    ><v-img
                        width="46"
                        height="46"
                        :src="require('~/assets/icons/github.svg')" /></a
            ></v-cols>
        </v-row>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
