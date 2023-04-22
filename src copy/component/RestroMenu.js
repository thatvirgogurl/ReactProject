import { useParams } from "react-router-dom"
import { useEffect,useState} from "react"
export default function RestroMenu() {
    const [restro,setRestro]=useState({})
    useEffect(()=>{
        getRestro()
    })
    async function getRestro(){
        const data= await fetch("")
        const json= await data.json
        setRestro(json.data)
    }
    const params=useParams()
    const {id}=params
  return (
    <div>
        <h1>restro id:{id}</h1>
        <h2>Namste Restro</h2>
    </div>
  )
}
