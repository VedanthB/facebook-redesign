import './Login.css'
import Button from '@material-ui/core/Button'
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

export default function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        //sign in...
        auth 
          .signInWithPopup(provider)
          .then(result => {
              dispatch({ 
                  type: actionTypes.SET_USER,
                  user: result.user,
              })
          })
          .catch(error => alert(error.message))
    }

    
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
                  onClick={signIn} 
                  >Login with Google </Button>
            </div>


            {/* <ParticlesBg type="random" bg={true}/> */}
        </div>
    )
}
