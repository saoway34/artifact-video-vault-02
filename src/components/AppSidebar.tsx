
import { Home, Video, Search, User, Plus } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "หน้าหลัก", url: "/", icon: Home },
  { title: "คลังสิ่งประดิษฐ์", url: "/video-vault", icon: Video },
  { title: "แบบสอบถาม", url: "/survey", icon: Search },
]

export function AppSidebar() {
  const { collapsed } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-blue-100 text-blue-700 font-medium border-r-2 border-blue-700" : "hover:bg-gray-100"

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <SidebarContent className="bg-gray-50">
        <div className="p-4 border-b">
          <h2 className={`font-semibold text-gray-800 ${collapsed ? 'hidden' : 'block'}`}>
            Menu
          </h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => `flex items-center p-3 rounded-none ${getNavCls({ isActive })}`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4 border-t bg-white">
            <div className="text-sm text-gray-600">
              จำนวนผู้เข้าชม : 1775
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
