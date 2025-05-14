import { Link } from "react-router-dom"
import Header from "../header"



export default function Home(){
    return (
        <div>
            <Header></Header>
            <h1>Welcome page Home!</h1>
            <Link to="/about">About</Link>
        </div>
    )
}