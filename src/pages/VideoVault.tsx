
import { useState } from "react"
import { Search, Plus, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { VideoCard } from "@/components/VideoCard"
import { Badge } from "@/components/ui/badge"

const mockVideos = [
  {
    id: "1",
    title: "เครื่องสาวไหมพลังงานแสงอาทิตย์",
    thumbnail: "/lovable-uploads/2c114833-2cdb-49a5-8000-192cdce9b160.png",
    duration: "15:30",
    uploadDate: "2024-01-15",
    views: 1250,
    category: "นวัตกรรม",
    description: "เครื่องสาวไหมพลังงานแสงอาทิตย์สำหรับการไทยได้อย่างสะดวก ในพลังงานนโนเดียลฟรีด"
  },
  {
    id: "2", 
    title: "ระบบรดน้ำอัจฉริยะ",
    thumbnail: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=500&h=300&fit=crop",
    duration: "12:45",
    uploadDate: "2024-01-10",
    views: 890,
    category: "เกษตรกรรม",
    description: "ระบบรดน้ำอัตโนมัติที่ใช้เซนเซอร์ตรวจสอบความชื้นในดิน"
  },
  {
    id: "3",
    title: "เครื่องแยกขยะอัตโนมัติ",
    thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&h=300&fit=crop",
    duration: "18:20",
    uploadDate: "2024-01-05",
    views: 2100,
    category: "สิ่งแวดล้อม",
    description: "นวัตกรรมการแยกขยะด้วยระบบ AI และเซนเซอร์อัจฉริยะ"
  },
  {
    id: "4",
    title: "แอปพลิเคชันจัดการฟาร์ม",
    thumbnail: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
    duration: "25:15",
    uploadDate: "2023-12-28",
    views: 1680,
    category: "เทคโนโลยี",
    description: "แอปพลิเคชันสำหรับจัดการฟาร์มและติดตามผลผลิตการเกษตร"
  }
]

const categories = ["ทั้งหมด", "นวัตกรรม", "เกษตรกรรม", "สิ่งแวดล้อม", "เทคโนโลยี"]

export default function VideoVault() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredVideos = mockVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "ทั้งหมด" || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">คลังสิ่งประดิษฐ์</h1>
              <p className="text-gray-600 mt-1">จัดเก็บและจัดการวิดีโอนวัตกรรมและสิ่งประดิษฐ์</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มวิดีโอ
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="ค้นหาวิดีโอ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="เลือกหมวดหมู่" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex border rounded-lg bg-white">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{filteredVideos.length} วิดีโอ</Badge>
            {selectedCategory !== "ทั้งหมด" && (
              <Badge variant="outline">หมวดหมู่: {selectedCategory}</Badge>
            )}
          </div>
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Video className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่พบวิดีโอ</h3>
            <p className="text-gray-600">ลองค้นหาด้วยคำหลักอื่นหรือเปลี่ยนหมวดหมู่</p>
          </div>
        ) : (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
            : "space-y-4"
          }>
            {filteredVideos.map(video => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
