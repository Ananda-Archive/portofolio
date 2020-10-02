<template>
    <v-app>
        <v-main class="mt-10">
            <v-container fluid>
                <v-row justify="center" align="center" v-if="!$vuetify.breakpoint.smAndDown">
                    <v-col cols="7" class="text-center" v-for="(data,idx) in datas" :key="idx">
                        <div class="text-left text-h4 mb-6">{{data.title}}</div>
                        <v-card flat color="#1a1a1a" v-for="(item,index) in data.items" :key="index">
                            <v-alert outlined color="secondary">
                                <div class="d-flex flex-no-wrap justify-start">
                                    <div>
                                        <v-img @click="openLink(item.img)" :src="item.img" max-width="350px" height="200px" :lazy-src="item.img" style="cursor: pointer">
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-progress-circular indeterminate color="secondary"></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                    </div>
                                    <div class="white--text mt-n5">
                                        <v-card-title class="text-h5 text-left">{{item.title}}</v-card-title>
                                        <v-card-subtitle class="text-left mb-n6" v-if="data.title == 'Experience'">{{item.date}}</v-card-subtitle>
                                        <v-card-subtitle class="text-justify text-subtitle-2 font-weight-regular mt-n2">{{item.desc}} <span v-if="item.link != NULL"><a class="blue--text" :href="item.link" target="_blank">Here</a></span> </v-card-subtitle>
                                    </div>
                                </div>
                            </v-alert>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" v-else>
                    <v-col cols="11" class="text-center" v-for="(data,idx) in datas" :key="idx">
                        <div class="text-left text-h4 mb-6">{{data.title}}</div>
                        <v-card flat color="#1a1a1a" v-for="(item,index) in data.items" :key="index">
                            <v-alert outlined color="secondary">
                                <v-img @click="openLink(item.img)" :src="item.img" class="mx-auto" width="70vw" height="200px" :lazy-src="item.img" style="cursor: pointer">
                                    <template v-slot:placeholder>
                                        <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                        >
                                            <v-progress-circular indeterminate color="secondary"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <v-card-title class="text-h6 text-justify">{{item.title}}</v-card-title>
                                <v-card-subtitle class="text-left mb-n6" v-if="data.title == 'Experience'">{{item.date}}</v-card-subtitle>
                                <v-card-subtitle class="text-justify text-subtitle-2 font-weight-regular mt-n2">{{item.desc}} <span v-if="item.link != NULL"><a class="blue--text" :href="item.link" target="_blank">Here</a></span> </v-card-subtitle>
                            </v-alert>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "Project",

    metaInfo: {
        title: "Ananda Vj's Project",
        meta: [
            {
                vmid:'Project',
                name: "Ananda Vj's Project",
                content: "Ananda Vj's Project"
            }
        ]
    },

    data() {
        return {
            datas: [
                {
                    title: 'Project',
                    items: [
                        {
                            title: 'Fullstack Web Developer at Cari-rumah.com',
                            desc: 'This is my first big project. I use Vue.js as Front-end Framework, Firebase as authentication, and CodeIgniter 3 for REST API. The Deadline was 7 weeks. You can visit the website',
                            img: "https://firebasestorage.googleapis.com/v0/b/ananda-vj.appspot.com/o/carirumah.PNG?alt=media&token=5edeecd1-a3f7-4408-a84f-947c73d0dafa",
                            link: "https://cari-rumah.com"
                        },
                        {
                            title: 'Project Manager and Front-end Developer at BPI as Internship',
                            desc: "This time I worked as a team of 3 people. We made a Product, Stock, and Price Management Internal website at Buana Paksa Indonesia. As a Front-end web developer, my job is to design the web, manage the json data both sent and received. Also I worked as Project Manager. My job is to ensure that the website requirement fulfill the client wishes and manage the team. We use Vue.js as Front-end Framework, Firebase as authentication, and CodeIgniter 3 for REST API. This is classified project so I can't show you the complete project nor the source code.",
                            img: "https://firebasestorage.googleapis.com/v0/b/ananda-vj.appspot.com/o/bpi.PNG?alt=media&token=bc6ecbc0-977b-4529-961d-c1f2fa2e0ad0",
                            link: null
                        },
                    ]
                },
                {
                    title: 'Experience',
                    items: [
                        {
                            title: 'Core Team at Developer Student Clubs Diponegoro University',
                            date: 'September 2020 - Present',
                            desc: 'Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. Instagram Profile:',
                            img: 'https://firebasestorage.googleapis.com/v0/b/ananda-vj.appspot.com/o/dsc.png?alt=media&token=b3f92100-8ddd-4b05-96de-e3b05da5cdab',
                            link: 'https://dsc.community.dev/universitas-diponegoro/'
                        },
                        {
                            title: 'Fullstack Web Developer',
                            date: 'January 2020 - Present',
                            desc: 'Saraf Design is a service company. We offer service in Graphic Designing and Developing a Website. Our Profile:',
                            img: 'https://firebasestorage.googleapis.com/v0/b/ananda-vj.appspot.com/o/sarafdesign.jpg?alt=media&token=164152ae-274b-4b2e-8221-e644b7de94a2',
                            link: 'https://www.instagram.com/sarafdesign.id/'
                        },
                    ]
                },  
                {
                    title: 'Award',
                    items: [
                        {
                            title: 'First Runner Up One Heart TechXpert Day 2020',
                            desc: "It was a IT Case Competition with 3 maximum member each team. We developed an ClinicPlus, an integrated system for your corporate clinic. Proof:",
                            img: "https://firebasestorage.googleapis.com/v0/b/ananda-vj.appspot.com/o/kucingif.jpg?alt=media&token=765e385c-2ce3-4f50-a15a-f8d7705f4cd4",
                            link: "https://www.instagram.com/p/B-eYNlRjfPX/"
                        }
                    ]
                }
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
    .v-card__text, .v-card__title {
    word-break: normal; /* maybe !important  */
    }
</style>