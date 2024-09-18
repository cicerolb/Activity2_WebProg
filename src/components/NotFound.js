import Navbar from './Navbar'
import './css/Layout.css';

export default function NotFound(){
    return(
        <div>
            <Navbar />
            <div className='error'>
                <h1>404!</h1>
                <h3>Page Not Found</h3>
            </div>
        </div>
        
    )
}