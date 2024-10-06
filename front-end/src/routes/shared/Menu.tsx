import MenuSection from '../../components/sections/menu/MenuSection'
import Brands from '../../components/sections/menu/Brands'
import { Roles } from '../../types/auth.interface'
import { MenuProvider } from '../../contexts/MenuContext'

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