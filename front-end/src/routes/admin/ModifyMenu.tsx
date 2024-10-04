import MenuSection from "../../components/sections/MenuSection"
import { MenuProvider } from "../../context/MenuContext"
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