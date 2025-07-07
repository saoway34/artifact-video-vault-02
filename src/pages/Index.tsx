
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, TrendingUp, Users, Award } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Index() {
  const navigate = useNavigate()

  const stats = [
    { title: "วิดีโอทั้งหมด", value: "1,234", icon: Video, color: "bg-blue-500" },
    { title: "ยอดเข้าชม", value: "45,678", icon: TrendingUp, color: "bg-green-500" },
    { title: "ผู้ใช้งาน", value: "1,775", icon: Users, color: "bg-purple-500" },
    { title: "รางวัล", value: "89", icon: Award, color: "bg-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            ยินดีต้อนรับสู่คลังสิ่งประดิษฐ์และนวัตกรรม
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            ศูนย์รวมวิดีโอสิ่งประดิษฐ์และนวัตกรรมของคณะเทคโนโลยีอุตสาหกรรม
          </p>
          <Button 
            onClick={() => navigate('/video-vault')}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Video className="h-5 w-5 mr-2" />
            เข้าสู่คลังวิดีโอ
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.color}`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-blue-600" />
                วิดีโอล่าสุด
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">เครื่องสาวไหมพลังงานแสงอาทิตย์</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/video-vault')}
              >
                ดูวิดีโอทั้งหมด
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-orange-600" />
                รางวัลและความสำเร็จ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">รางวัลนวัตกรรมดีเด่น 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">รางวัลสิ่งประดิษฐ์คนรุ่นใหม่</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">รางวัลเทคโนโลยีเพื่อสังคม</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
