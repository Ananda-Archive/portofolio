import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: '#161616',
                secondary: '#7B318A',
                fontSecondary: '#8D8D8D'
            },
        },
        dark: true
    },
});
