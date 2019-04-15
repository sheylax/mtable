Vue.use(VueResource);

const store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store } });



Vue.use(vuexI18n.plugin, store);

new Vue({
  el: '#app',
  data: {
    dataUrl: 'https://gist.githubusercontent.com/sheylax/3b975e6edebbc05de171f1ffe8635160/raw/ee48ce60ef232ae728fdef064d1b1a083bc84e8e/data.json',
    table: null,
    locales: [],
  },

  created() {
    this.loadData();
  },
  methods: {

    loadData() {
      this.$http.get(this.dataUrl).then(response => {
        this.table = response.body.table;
        this.table.push({ elements: response.body.lanthanoids });
        this.table.push({ elements: response.body.actinoids });
                                                    },
                                        );
              },
          } 
});