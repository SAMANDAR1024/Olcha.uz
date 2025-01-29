import Kirish from './Kirish'
import Savatcha from './Savatcha'
import Sevimlilar from './Sevimlilar'
import Taqqoslash from './Taqqoslash'

function NavbarButtons() {
  return (
    <div className='flex cursor-pointer items-center gap-5'>
        <Taqqoslash/>
        <Sevimlilar/>
        <Savatcha/>
        <Kirish/>
    </div>
  )
}

export default NavbarButtons