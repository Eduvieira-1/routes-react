import { useParams } from "react-router-dom"



export default function Product(){
    const {id} = useParams();

    return(
       <div>
         <span>Produtos aqui</span>
         <span>Codigo do produto: {id}</span>
       </div>
    )
}