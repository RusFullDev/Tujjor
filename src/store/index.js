import{defineStore} from "pinia"
export const useCounterStore = defineStore('counter', {
    state(){
        return{
            count: 1,
            price:0
        }
    },
    actions: {
      increment() {
        this.count++
      },
      decrement() {
        if (this.count > 0) {
            this.count--;
          }else{
            this.count=0
          }
        
        
      },
    },
  })