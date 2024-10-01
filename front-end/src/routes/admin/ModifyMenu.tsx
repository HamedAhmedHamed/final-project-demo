import MenuSection from "../../components/sections/MenuSection"
import { Roles } from "../../types/auth.interface"

const ModifyMenu = () => {
  return (
    <main>
      <MenuSection role={Roles.admin} />
    </main>
  )
}

export default ModifyMenu