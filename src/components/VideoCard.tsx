
import { Play, Download, Eye, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface VideoCardProps {
  id: string
  title: string
  thumbnail: string
  duration: string
  uploadDate: string
  views: number
  category: string
  description?: string
}

export function VideoCard({ 
  title, 
  thumbnail, 
  duration, 
  uploadDate, 
  views, 
  category,
  description 
}: VideoCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" className="bg-white/90 text-black hover:bg-white">
            <Play className="h-4 w-4 mr-2" />
            เล่น
          </Button>
        </div>
        <Badge className="absolute top-2 right-2 bg-black/70 text-white">
          {duration}
        </Badge>
        <Badge className="absolute top-2 left-2 bg-blue-600">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            {views.toLocaleString()} ครั้ง
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {uploadDate}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Play className="h-4 w-4 mr-2" />
            ดูวิดีโอ
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
