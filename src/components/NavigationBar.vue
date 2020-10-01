<template>
        <v-app-bar dark app flat color="#121212" class="absolute px-0 px-md-6 pt-1">
            <v-toolbar-title @click="goTo('/')" class="text-h5 font-weight-bold secondary--text disable-select" style="cursor: pointer">anandavj.tech</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title v-if="!$vuetify.breakpoint.smAndDown"  @click="goTo('/')" class="mr-10 text-h5"><span :class="[this.$route.name == 'Home' ? 'selectedMenu' : 'hoverMenu']">Home</span></v-toolbar-title>
            <v-toolbar-title v-if="!$vuetify.breakpoint.smAndDown" @click="goTo('/Project')" class="text-h5"><span :class="[this.$route.name == 'Project' ? 'selectedMenu' : 'hoverMenu']">My Work</span></v-toolbar-title>
            <v-menu v-if="$vuetify.breakpoint.smAndDown">
                <template v-slot:activator="{ on,attrs }">
                    <v-icon large class="secondary--text" v-bind="attrs" v-on="on">
                        mdi-menu
                    </v-icon>
                </template>
                <v-list>
                    <v-list-item @click="goTo('/')">
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="goTo('/Project')">
                        <v-list-item-title>My Work</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
</template>

<script>
export default {
    methods: {
        goTo(path) {
            this.$router.push(path)
        },
    }
}
</script>

<style>
    .selectedMenu {
        cursor: pointer
    }
    .selectedMenu:after {
        content: '';
        display: block;
        margin: auto;
        height: 3px;
        width: 100%;
        background: #7B318A;
        transition: width .5s ease, background-color .5s ease;
    }
    .hoverMenu {
        cursor: pointer
    }
    .hoverMenu:after {
        content: '';
        display: block;
        margin: auto;
        height: 3px;
        width: 0px;
        background: transparent;
        transition: width .5s ease, background-color .5s ease;
    }
    .hoverMenu:hover:after {
        width: 100%;
        background: #7B318A;
    }
    .disable-select {
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
    }
</style>