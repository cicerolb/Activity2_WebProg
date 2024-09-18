import Navbar from './Navbar'
import './css/Layout.css'

export default function About(){
    return(
        <div>
            <Navbar/>
            <h2 className='general'>
                This website features a contact form, increment and decrement counter, and a Not Found page. <br/> Made by: Cicero Barasi
            </h2>
        </div>
    )
}
