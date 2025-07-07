
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="h-20 bg-red-600 text-white flex items-center px-6 border-b">
      <SidebarTrigger className="text-white hover:bg-red-700 mr-4" />
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div>
          <h1 className="text-xl font-bold">สิ่งประดิษฐ์และนวัตกรรมคณะเทคโนโลยีอุตสาหกรรม</h1>
          <p className="text-red-100 text-sm">Inventions and Innovations Faculty of Industrial Technology</p>
        </div>
      </div>

      <div className="ml-auto">
        <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
          <h3 className="font-semibold">เข้าสู่ระบบ</h3>
        </div>
      </div>
    </header>
  )
}
