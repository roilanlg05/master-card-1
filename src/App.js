
Vue.createApp({
  data(){
    return{
      search: '',
      products: null
    }
  },
  created(){
    this.fetchData('api.json')
    this.prueba()
  },
  methods:{
    async fetchData(API){
      try {
        let res = await fetch(API)
        let products = await res.json()
        console.log(products)
      } catch (er) {
        console.log(er)
      }
    },
    
    prueba(){
      
      let a =[a,s,d,r,g,h]
      let n =[g,a,d,g,y,g]
      let i =[]
      
      for (d,b in a,n){
        if(d==b){
          i.push(d)
        }
      }
      console.log(i)
    }
  }
}).mount('#app')
