import MenuSection from "../../components/sections/menu/MenuSection"
import { MenuProvider } from "../../contexts/MenuContext"
import { Roles } from "../../types/auth.interface"

const ModifyMenu = () => {
  return (
    <main>
      <MenuProvider>
        <MenuSection role={Roles.admin} />
      </MenuProvider>
    </main>
  )
}

export default ModifyMenu