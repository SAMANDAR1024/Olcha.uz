import { Link } from 'react-router'
import Olcha from '../../assets/OlchaLogo.png'

function OlchaLogo() {
  return (
   <Link to={'/'}>
    <img className='w-32 cursor-pointer ' src={Olcha} alt="" />
   </Link>
  )
}

export default OlchaLogo