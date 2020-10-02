<template>
    <v-app>
        <v-container fill-height fluid class="mt-12 mt-md-0">
            <v-row justify="center" align="center">
                <v-col cols="12" class="text-center">
                    <v-avatar :size="[$vuetify.breakpoint.smAndDown ? 250 : 300 ]">
                        <img src="https://firebasestorage.googleapis.com/v0/b/ananda-vj.appspot.com/o/avatar.jpg?alt=media&token=16513231-b63e-4116-9935-c73846165d7f">
                    </v-avatar>
                    <div style="font-size:1.5em" class="mt-4 font-italic fontSecondary--text">Ananda Prabu Tritya Vijaya</div>
                    <div style="font-size:1em" class="font-italic fontSecondary--text">Fullstack Web Developer</div>
                </v-col>
                <v-col cols="12" class="text-center">
                    <div :class="[$vuetify.breakpoint.smAndDown ? 'text-h6' : 'text-h5' ]">Computer Science Student <span class="secondary--text">•</span> Software Engineering Enthusiast <span class="secondary--text">•</span> Javascript Dev.</div>
                    <div :class="[$vuetify.breakpoint.smAndDown ? 'mt-3 text-subtitle-2' : 'mt-3 text-subtitle-1' ]">Coding Change My Life <span class="font-italic">In a Good Way</span></div>
                </v-col>
                <v-col cols="12" class="text-center">
                    <div>
                        <span v-for="(contact,idx) in contacts" :key="idx" class="iconClass">
                            <v-icon @click="openLink(contact.link)" x-large class="secondary--text">{{contact.icon}}</v-icon>
                        </span>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

export default {
    name: 'Home',

    metaInfo: {
        title: "Ananda Vj's Portofolio",
        meta: [
            {
                vmid:'Home',
                name: "Ananda Vj's Portofolio",
                content: "Ananda Vj's Portofolio"
            }
        ]
    },

    data() {
        return {
            contacts: [
                {
                    name: "Github",
                    icon: "mdi-github",
                    link: "https://github.com/anandavj"
                },
                {
                    name: "Email",
                    icon: "mdi-email-outline",
                    link: "https://mail.google.com/mail/?view=cm&fs=1&to=anandaprabu.trityavijaya@gmail.com"
                },
                {
                    name: "Linkedin",
                    icon: "mdi-linkedin",
                    link: "https://www.linkedin.com/in/anandavj/"
                },
                {
                    name: "Instagram",
                    icon: "mdi-instagram",
                    link: "https://www.instagram.com/anandavj/"
                },
            ]
        }
    },

    methods: {
        openLink(link) {
            window.open(link,'_blank');
        }
    }
}
</script>

<style>
.iconClass:not(:last-child) {
    margin-right: 20px;
}
</style>