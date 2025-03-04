import { NavBarExpand } from './navbar-expand';

interface SideNavbarProps {
  collapsed?: boolean
}
export function SideNavbar({ collapsed = false }: SideNavbarProps) {
  return <NavBarExpand />
}
