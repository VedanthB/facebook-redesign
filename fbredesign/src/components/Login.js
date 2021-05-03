import './Login.css'
import ParticlesBg from "particles-bg";
import Button from '@material-ui/core/Button'


export default function Login() {
    return (
        <div className="login">

             <div className="login__container" >
                <img 
                 src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=300&h=300" 
                 alt="" 
                 />
                 <Button 
                  variant="contained" 
                  color='primary' 
                  onClick='' 
                  >Login with Google </Button>
            </div>


            {/* <ParticlesBg type="random" bg={true}/> */}
        </div>
    )
}
