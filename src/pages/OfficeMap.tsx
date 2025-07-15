
import { useState } from 'react'
import { MapPin, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

const OfficeMap = () => {
  const [selectedFloor, setSelectedFloor] = useState('2nd Floor')

  const floors = ['1st Floor', '2nd Floor', '3rd Floor']
  
  const colleagues = [
    { name: 'Sarah J.', position: { x: 25, y: 30 }, zone: 'UX Wing' },
    { name: 'Mike C.', position: { x: 70, y: 40 }, zone: 'Dev Zone' },
    { name: 'Emma D.', position: { x: 45, y: 60 }, zone: 'Marketing' },
    { name: 'James W.', position: { x: 75, y: 25 }, zone: 'Dev Zone' },
  ]

  const myDesk = { position: { x: 30, y: 45 }, zone: 'UX Wing' }

  const zones = [
    { name: 'UX Wing', color: 'bg-purple-100 border-purple-300', position: { x: 15, y: 20, width: 30, height: 35 } },
    { name: 'Dev Zone', color: 'bg-blue-100 border-blue-300', position: { x: 55, y: 15, width: 35, height: 40 } },
    { name: 'Marketing', color: 'bg-green-100 border-green-300', position: { x: 20, y: 60, width: 40, height: 25 } },
    { name: 'Collaboration', color: 'bg-yellow-100 border-yellow-300', position: { x: 70, y: 65, width: 25, height: 20 } },
  ]

  return (
    <div className="p-4 pb-20 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-900">Office Map</h1>
        <p className="text-gray-500">Interactive floor plan</p>
      </div>

      {/* Floor Selection */}
      <Card>
        <CardContent className="p-4">
          <Select value={selectedFloor} onValueChange={setSelectedFloor}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {floors.map(floor => (
                <SelectItem key={floor} value={floor}>{floor}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin size={20} />
            {selectedFloor} Layout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-gray-50 rounded-lg aspect-square border-2 border-gray-200 overflow-hidden">
            {/* Zones */}
            {zones.map(zone => (
              <div
                key={zone.name}
                className={`absolute border-2 rounded ${zone.color} flex items-center justify-center text-xs font-medium text-gray-700`}
                style={{
                  left: `${zone.position.x}%`,
                  top: `${zone.position.y}%`,
                  width: `${zone.position.width}%`,
                  height: `${zone.position.height}%`,
                }}
              >
                {zone.name}
              </div>
            ))}

            {/* My Desk */}
            <div
              className="absolute w-4 h-4 bg-blue-500 border-2 border-blue-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${myDesk.position.x}%`,
                top: `${myDesk.position.y}%`,
              }}
              title="Your Desk"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Colleagues */}
            {colleagues.map((colleague, index) => (
              <div
                key={index}
                className="absolute w-3 h-3 bg-green-500 border-2 border-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  left: `${colleague.position.x}%`,
                  top: `${colleague.position.y}%`,
                }}
                title={`${colleague.name} - ${colleague.zone}`}
              ></div>
            ))}

            {/* Available Desks */}
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gray-300 border border-gray-400 rounded transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${20 + (i * 8)}%`,
                  top: `${85}%`,
                }}
                title="Available Desk"
              ></div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 border-2 border-blue-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm">Your Desk</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 border-2 border-green-600 rounded-full"></div>
              <span className="text-sm">Colleagues Present</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gray-300 border border-gray-400 rounded"></div>
              <span className="text-sm">Available Desks</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Floor Stats */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Users size={20} className="text-gray-600" />
              <span className="text-sm font-medium">People on this floor</span>
            </div>
            <Badge variant="secondary">{colleagues.length + 1}</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OfficeMap
