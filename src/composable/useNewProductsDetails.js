import api from '../api'
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();



export function UseDetails(){
    
    const backPage = () => {
        router.go(-1)
      }


    const news = ref(null)
    const error = ref(null)



fetchDetails=()=>{
    api.get(`/products/${route.params.id}`)
    .then((res) => {
        news.value = res.data
          })
          .catch((err) => {
          console.log(err)
          error.value=err
        })
}


return{backPage,news,error,fetchDetails }

}