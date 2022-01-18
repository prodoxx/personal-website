<template>
    <v-row class="mt-4">
        <v-col md="4" cols="12" class="d-sm-flex d-md-none justify-center">
            <Profile />
        </v-col>
        <v-col md="8" cols="12">
            <h1 id="title" class="mb-6">Hi, I'm <span>Reggie</span></h1>
            <ul id="about-me">
                <li>
                    I lived in
                    <a target="_blank" href="https://www.travelbelize.org/"
                        >Belize</a
                    >
                </li>
                <li>
                    I went to study in Taiwan & graduated with an MBA in
                    Technology Management.
                </li>
                <li>
                    I moved to Palo Alto, California to work as a Technical
                    Product Manager
                </li>
                <li>
                    Now I’m in either one of these countries/cities: Belize,
                    Taiwan, San Francisco, Toronto, or Mexico City
                </li>
                <li>
                    I read lots of books - mostly about tech and
                    self-improvement.
                </li>
                <li>
                    I’m always
                    <a target="_blank" href="https://github.com/prodoxx"
                        >writing code</a
                    >, whether it is for a company on a limited contract basis,
                    full-time as an employee, or on my free time trying to be a
                    wannabe-entrepreneur.
                </li>
                <li>
                    I worked on <a href="#">various projects</a> while I was
                    doing my Bsc. in Computer Science so my first job was as a
                    Senior Software Engineer where I built my first enterprise
                    system.
                </li>
                <li>
                    I was a Lead Full-stack developer at
                    <a target="_blank" href="https://unbanked.com">Unbanked.</a>
                </li>
                <li>I’m not anymore, but they’re still cool.</li>
                <li>
                    I enjoy building products; some are successful and some were
                    not so successful.
                </li>
                <li>
                    I’ve also lead many teams both on my personal projects and
                    working for companies.
                </li>
                <li>
                    My successful projects so far are:
                    <a target="_blank" href="https://giftcards.bz"
                        >Gift Cards Belize</a
                    >
                    &
                    <a target="_blank" href="https://nftplus.studio"
                        >NFT+ Studio</a
                    >.
                </li>
                <li>
                    I’ve been in the FinTech industry for a few years now; I
                    dabble a lot in Web3 and blockchain.
                </li>
                <li>
                    I am now looking to build or scale interesting products
                    especially in the FinTech space.
                </li>
                <li>
                    You can
                    <a href="mailto:contact@reggieescobar.com">contact me</a> to
                    get a copy of my nicely formatted resume.
                </li>
            </ul>
        </v-col>
        <v-col md="4" cols="12" class="d-none d-md-flex justify-center">
            <Profile />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'IndexPage',
};
</script>

<style lang="scss" scoped>
#title {
    font-weight: 300;
    font-size: 4em;
    font-family: Poppins, sans-serif;
    span {
        color: #0084ff;
    }
}
#about-me {
    li {
        margin-bottom: 0.5em;
        margin-left: 0.5em;
        font-size: 1.18em;
    }
}
</style>
