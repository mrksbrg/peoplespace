import { useState } from 'react'
import { MapPin, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

const OfficeMap = () => {
  const [selectedFloor, setSelectedFloor] = useState('2nd Floor')

  const floors = ['1st Floor', '2nd Floor', '3rd Floor']
  
  // Floor-specific data
  const floorData = {
    '1st Floor': {
      zones: [
        { name: 'Reception', color: 'bg-purple-100 border-purple-300', position: { x: 10, y: 15, width: 35, height: 30 } },
        { name: 'Cafeteria', color: 'bg-orange-100 border-orange-300', position: { x: 50, y: 20, width: 40, height: 35 } },
        { name: 'Meeting Rooms', color: 'bg-blue-100 border-blue-300', position: { x: 15, y: 50, width: 30, height: 25 } },
        { name: 'Conference Center', color: 'bg-green-100 border-green-300', position: { x: 50, y: 60, width: 45, height: 30 } },
      ],
      meetingRooms: [
        { position: { x: 2, y: 2, width: 12, height: 8 } },
        { position: { x: 90, y: 2, width: 8, height: 10 } },
        { position: { x: 75, y: 10, width: 12, height: 9 } },
        { position: { x: 2, y: 85, width: 14, height: 8 } },
        { position: { x: 2, y: 50, width: 12, height: 8 } },
      ],
      colleagues: [
        { name: 'Lisa R.', position: { x: 18, y: 25 }, zone: 'Reception' },
        { name: 'Tom B.', position: { x: 58, y: 28 }, zone: 'Cafeteria' },
        { name: 'Anna K.', position: { x: 22, y: 58 }, zone: 'Meeting Rooms' },
        { name: 'Paul M.', position: { x: 7, y: 6 }, zone: 'Meeting Room' },
        { name: 'Kelly S.', position: { x: 93, y: 7 }, zone: 'Meeting Room' },
      ],
      myDesk: { position: { x: 20, y: 25 }, zone: 'Reception' },
      availableDesks: [
        { position: { x: 35, y: 35 }, zone: 'Reception' },
        { position: { x: 40, y: 25 }, zone: 'Reception' },
        { position: { x: 60, y: 30 }, zone: 'Cafeteria' },
        { position: { x: 80, y: 40 }, zone: 'Cafeteria' },
        { position: { x: 25, y: 70 }, zone: 'Meeting Rooms' },
        { position: { x: 65, y: 75 }, zone: 'Conference Center' },
      ]
    },
    '2nd Floor': {
      zones: [
        { name: 'UX Wing', color: 'bg-purple-100 border-purple-300', position: { x: 15, y: 20, width: 30, height: 35 } },
        { name: 'Dev Zone', color: 'bg-blue-100 border-blue-300', position: { x: 55, y: 15, width: 35, height: 40 } },
        { name: 'Test Rigs', color: 'bg-green-100 border-green-300', position: { x: 20, y: 60, width: 40, height: 25 } },
        { name: 'Collaboration', color: 'bg-yellow-100 border-yellow-300', position: { x: 70, y: 65, width: 25, height: 20 } },
      ],
      meetingRooms: [
        { position: { x: 5, y: 15, width: 8, height: 6 } },
        { position: { x: 5, y: 30, width: 8, height: 6 } },
        { position: { x: 5, y: 45, width: 8, height: 6 } },
        { position: { x: 5, y: 60, width: 8, height: 6 } },
        { position: { x: 50, y: 5, width: 10, height: 8 } },
        { position: { x: 75, y: 5, width: 10, height: 8 } },
        { position: { x: 90, y: 20, width: 8, height: 6 } },
        { position: { x: 90, y: 35, width: 8, height: 6 } },
        { position: { x: 65, y: 85, width: 10, height: 8 } },
        { position: { x: 85, y: 85, width: 10, height: 8 } },
      ],
      colleagues: [
        { name: 'Sarah J.', position: { x: 20, y: 25 }, zone: 'UX Wing' },
        { name: 'Mike C.', position: { x: 70, y: 40 }, zone: 'Dev Zone' },
        { name: 'Emma D.', position: { x: 30, y: 68 }, zone: 'Test Rigs' },
        { name: 'James W.', position: { x: 75, y: 25 }, zone: 'Dev Zone' },
        { name: 'Alex B.', position: { x: 9, y: 18 }, zone: 'Meeting Room' },
        { name: 'Sam P.', position: { x: 55, y: 9 }, zone: 'Meeting Room' },
        { name: 'Rita H.', position: { x: 92, y: 23 }, zone: 'Meeting Room' },
        { name: 'Nick L.', position: { x: 70, y: 89 }, zone: 'Meeting Room' },
      ],
      myDesk: { position: { x: 30, y: 45 }, zone: 'UX Wing' },
      availableDesks: [
        { position: { x: 20, y: 35 }, zone: 'UX Wing' },
        { position: { x: 35, y: 25 }, zone: 'UX Wing' },
        { position: { x: 40, y: 50 }, zone: 'UX Wing' },
        { position: { x: 60, y: 20 }, zone: 'Dev Zone' },
        { position: { x: 80, y: 35 }, zone: 'Dev Zone' },
        { position: { x: 65, y: 50 }, zone: 'Dev Zone' },
        { position: { x: 85, y: 45 }, zone: 'Dev Zone' },
        { position: { x: 25, y: 70 }, zone: 'Test Rigs' },
        { position: { x: 50, y: 75 }, zone: 'Test Rigs' },
        { position: { x: 35, y: 80 }, zone: 'Test Rigs' },
        { position: { x: 75, y: 70 }, zone: 'Collaboration' },
        { position: { x: 85, y: 80 }, zone: 'Collaboration' },
      ]
    },
    '3rd Floor': {
      zones: [
        { name: 'Executive Offices', color: 'bg-purple-100 border-purple-300', position: { x: 15, y: 15, width: 35, height: 30 } },
        { name: 'Finance', color: 'bg-blue-100 border-blue-300', position: { x: 55, y: 20, width: 30, height: 25 } },
        { name: 'HR Department', color: 'bg-green-100 border-green-300', position: { x: 20, y: 55, width: 25, height: 30 } },
        { name: 'Collaboration', color: 'bg-yellow-100 border-yellow-300', position: { x: 55, y: 60, width: 35, height: 25 } },
      ],
      meetingRooms: [
        { position: { x: 5, y: 20, width: 10, height: 8 } },
        { position: { x: 85, y: 15, width: 12, height: 9 } },
        { position: { x: 5, y: 80, width: 12, height: 9 } },
      ],
      colleagues: [
        { name: 'David L.', position: { x: 22, y: 22 }, zone: 'Executive Offices' },
        { name: 'Carol M.', position: { x: 78, y: 28 }, zone: 'Finance' },
        { name: 'Robert K.', position: { x: 25, y: 62 }, zone: 'HR Department' },
        { name: 'Diana S.', position: { x: 65, y: 65 }, zone: 'Collaboration' },
        { name: 'Mark T.', position: { x: 40, y: 25 }, zone: 'Executive Offices' },
        { name: 'CEO J.', position: { x: 9, y: 24 }, zone: 'Meeting Room' },
        { name: 'VP K.', position: { x: 89, y: 19 }, zone: 'Meeting Room' },
      ],
      myDesk: { position: { x: 65, y: 30 }, zone: 'Finance' },
      availableDesks: [
        { position: { x: 25, y: 40 }, zone: 'Executive Offices' },
        { position: { x: 45, y: 35 }, zone: 'Executive Offices' },
        { position: { x: 60, y: 30 }, zone: 'Finance' },
        { position: { x: 80, y: 40 }, zone: 'Finance' },
        { position: { x: 30, y: 60 }, zone: 'HR Department' },
        { position: { x: 65, y: 75 }, zone: 'Collaboration' },
        { position: { x: 80, y: 65 }, zone: 'Collaboration' },
      ]
    }
  }

  const currentFloorData = floorData[selectedFloor as keyof typeof floorData]

  return (
    <div className="p-4 pb-20 max-w-4xl mx-auto space-y-6">
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
          <div className="relative bg-gray-50 rounded-lg aspect-video border-2 border-gray-200 overflow-hidden">
            {/* Zones */}
            {currentFloorData.zones.map(zone => (
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

            {/* Meeting Rooms */}
            {currentFloorData.meetingRooms.map((room, index) => (
              <div
                key={`meeting-${index}`}
                className="absolute border-2 rounded bg-red-100 border-red-300"
                style={{
                  left: `${room.position.x}%`,
                  top: `${room.position.y}%`,
                  width: `${room.position.width}%`,
                  height: `${room.position.height}%`,
                }}
              ></div>
            ))}

            {/* My Desk */}
            <div
              className="absolute w-4 h-4 bg-blue-500 border-2 border-blue-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${currentFloorData.myDesk.position.x}%`,
                top: `${currentFloorData.myDesk.position.y}%`,
              }}
              title="Your Position"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Colleagues */}
            {currentFloorData.colleagues.map((colleague, index) => (
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
            {currentFloorData.availableDesks.map((desk, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gray-300 border border-gray-400 rounded transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${desk.position.x}%`,
                  top: `${desk.position.y}%`,
                }}
                title={`Available Desk - ${desk.zone}`}
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
              <span className="text-sm">Your Position</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 border-2 border-green-600 rounded-full"></div>
              <span className="text-sm">Colleagues Present</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gray-300 border border-gray-400 rounded"></div>
              <span className="text-sm">Available Desks</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-3 bg-red-100 border-2 border-red-300 rounded"></div>
              <span className="text-sm">Meeting Rooms</span>
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
            <Badge variant="secondary">{currentFloorData.colleagues.length + 1}</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OfficeMap
