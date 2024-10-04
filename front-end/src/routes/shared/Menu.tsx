import MenuSection from '../../components/sections/MenuSection'
import Brands from '../../components/sections/Brands'
import { Roles } from '../../types/auth.interface'
import { MenuProvider } from '../../context/MenuContext'

const Menu = () => {
  return (
    <main>
      <MenuProvider>
        <MenuSection role={[Roles.admin, Roles.user, Roles.guest]} />
      </MenuProvider>
      <Brands />
    </main>
  )
}

export default Menu