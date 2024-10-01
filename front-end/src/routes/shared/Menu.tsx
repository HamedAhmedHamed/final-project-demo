import MenuSection from '../../components/sections/MenuSection'
import Brands from '../../components/sections/Brands'
import { Roles } from '../../types/auth.interface'

const Menu = () => {
  return (
    <main>
      <MenuSection />
      <Brands />
    </main>
  )
}

export default Menu