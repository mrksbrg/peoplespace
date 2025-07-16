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
        { name: 'Showroom', color: 'bg-blue-100 border-blue-300', position: { x: 15, y: 50, width: 30, height: 25 } },
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
        { name: 'Anna K.', position: { x: 22, y: 58 }, zone: 'Showroom' },
        { name: 'Paul M.', position: { x: 7, y: 6 }, zone: 'Meeting Room' },
        { name: 'Emma H.', position: { x: 6, y: 4 }, zone: 'Meeting Room' },
        { name: 'Kelly S.', position: { x: 93, y: 7 }, zone: 'Meeting Room' },
        { name: 'Jett M.', position: { x: 6, y: 53 }, zone: 'Meeting Room' },
      ],
      myDesk: { position: { x: 20, y: 25 }, zone: 'Reception' },
      availableDesks: [
        { position: { x: 22, y: 68 }, zone: 'Showroom' },
        { position: { x: 25, y: 58 }, zone: 'Showroom' },
        { position: { x: 36, y: 55 }, zone: 'Showroom' },
        { position: { x: 38, y: 66 }, zone: 'Showroom' },
        { position: { x: 42, y: 58 }, zone: 'Showroom' },
        { position: { x: 20, y: 70 }, zone: 'Showroom' },
        { position: { x: 40, y: 70 }, zone: 'Showroom' },
        { position: { x: 26, y: 53 }, zone: 'Showroom' },
        { position: { x: 34, y: 72 }, zone: 'Showroom' },
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
        // UX Wing (9 people) - Organized in desk islands
        // Island 1 - Left Collaborative Hub
        { name: 'Sarah J.', position: { x: 19, y: 28 }, zone: 'UX Wing' },
        { name: 'Maya C.', position: { x: 22, y: 28 }, zone: 'UX Wing' },
        { name: 'Lucas R.', position: { x: 25, y: 28 }, zone: 'UX Wing' },
        { name: 'Zoe K.', position: { x: 19, y: 32 }, zone: 'UX Wing' },
        { name: 'Ryan P.', position: { x: 22, y: 32 }, zone: 'UX Wing' },
        // Island 2 - Right Focus Area  
        { name: 'Lily M.', position: { x: 36, y: 47 }, zone: 'UX Wing' },
        { name: 'Noah T.', position: { x: 39, y: 47 }, zone: 'UX Wing' },
        // Island 3 - Senior Corner
        { name: 'Grace H.', position: { x: 39, y: 27 }, zone: 'UX Wing' },
        { name: 'Ethan W.', position: { x: 42, y: 27 }, zone: 'UX Wing' },
        
        // Dev Zone (19 people) - Organized in 4 desk islands
        // Island 1 - Front Left (Team A)
        { name: 'Mike C.', position: { x: 58, y: 20 }, zone: 'Dev Zone' },
        { name: 'James W.', position: { x: 61, y: 20 }, zone: 'Dev Zone' },
        { name: 'Sofia B.', position: { x: 64, y: 20 }, zone: 'Dev Zone' },
        { name: 'Aaron L.', position: { x: 58, y: 24 }, zone: 'Dev Zone' },
        { name: 'Mia G.', position: { x: 61, y: 24 }, zone: 'Dev Zone' },
        { name: 'Owen D.', position: { x: 64, y: 24 }, zone: 'Dev Zone' },
        
        // Island 2 - Front Right (Team B) 
        { name: 'Chloe F.', position: { x: 78, y: 20 }, zone: 'Dev Zone' },
        { name: 'Ian S.', position: { x: 81, y: 20 }, zone: 'Dev Zone' },
        { name: 'Hazel N.', position: { x: 84, y: 20 }, zone: 'Dev Zone' },
        { name: 'Blake R.', position: { x: 78, y: 24 }, zone: 'Dev Zone' },
        { name: 'Vera J.', position: { x: 81, y: 24 }, zone: 'Dev Zone' },
        
        // Island 3 - Back Left (Team C)
        { name: 'Kai M.', position: { x: 58, y: 44 }, zone: 'Dev Zone' },
        { name: 'Ruby V.', position: { x: 61, y: 44 }, zone: 'Dev Zone' },
        { name: 'Felix Q.', position: { x: 64, y: 44 }, zone: 'Dev Zone' },
        { name: 'Iris C.', position: { x: 58, y: 48 }, zone: 'Dev Zone' },
        { name: 'Jude A.', position: { x: 61, y: 48 }, zone: 'Dev Zone' },
        
        // Island 4 - Back Right (Senior Team)
        { name: 'Sage E.', position: { x: 78, y: 44 }, zone: 'Dev Zone' },
        { name: 'Rex O.', position: { x: 81, y: 44 }, zone: 'Dev Zone' },
        { name: 'Ivy T.', position: { x: 84, y: 44 }, zone: 'Dev Zone' },
        
        // Test Rigs (9 people) - Organized in 3 desk islands
        // Island 1 - Left Testing Hub
        { name: 'Emma D.', position: { x: 24, y: 64 }, zone: 'Test Rigs' },
        { name: 'Cole Z.', position: { x: 27, y: 64 }, zone: 'Test Rigs' },
        { name: 'Nora X.', position: { x: 30, y: 64 }, zone: 'Test Rigs' },
        { name: 'Dean Y.', position: { x: 24, y: 68 }, zone: 'Test Rigs' },
        
        // Island 2 - Right QA Area
        { name: 'Tess U.', position: { x: 50, y: 64 }, zone: 'Test Rigs' },
        { name: 'Cruz I.', position: { x: 53, y: 64 }, zone: 'Test Rigs' },
        { name: 'Lane K.', position: { x: 56, y: 64 }, zone: 'Test Rigs' },
        
        // Island 3 - Back Performance Team
        { name: 'Jade P.', position: { x: 36, y: 78 }, zone: 'Test Rigs' },
        { name: 'Ford L.', position: { x: 39, y: 78 }, zone: 'Test Rigs' },
        
        // Collaboration (13 people) - Organized in 3 desk islands
        // Island 1 - Left Creative Hub
        { name: 'Eve R.', position: { x: 72, y: 68 }, zone: 'Collaboration' },
        { name: 'Clay S.', position: { x: 75, y: 68 }, zone: 'Collaboration' },
        { name: 'Rose T.', position: { x: 78, y: 68 }, zone: 'Collaboration' },
        { name: 'Jack V.', position: { x: 72, y: 72 }, zone: 'Collaboration' },
        { name: 'Skye W.', position: { x: 75, y: 72 }, zone: 'Collaboration' },
        
        // Island 2 - Right Innovation Area
        { name: 'Reid X.', position: { x: 88, y: 68 }, zone: 'Collaboration' },
        { name: 'Luna Y.', position: { x: 91, y: 68 }, zone: 'Collaboration' },
        { name: 'Beck Z.', position: { x: 94, y: 68 }, zone: 'Collaboration' },
        { name: 'Wren A.', position: { x: 88, y: 72 }, zone: 'Collaboration' },
        { name: 'Knox B.', position: { x: 91, y: 72 }, zone: 'Collaboration' },
        
        // Island 3 - Back Strategy Corner
        { name: 'Faye C.', position: { x: 80, y: 80 }, zone: 'Collaboration' },
        { name: 'Zane D.', position: { x: 83, y: 80 }, zone: 'Collaboration' },
        { name: 'Sage F.', position: { x: 86, y: 80 }, zone: 'Collaboration' },
        
        // Meeting Rooms - 2nd Floor Meeting Room 2 (2 people meeting)
        { name: 'Alex B.', position: { x: 9, y: 18 }, zone: 'Meeting Room' },
        { name: 'Crew P.', position: { x: 7, y: 32 }, zone: 'Meeting Room' },
        { name: 'Knox S.', position: { x: 10, y: 34 }, zone: 'Meeting Room' },
        { name: 'Sam P.', position: { x: 55, y: 9 }, zone: 'Meeting Room' },
        { name: 'Rita H.', position: { x: 92, y: 23 }, zone: 'Meeting Room' },
        { name: 'Nick L.', position: { x: 70, y: 89 }, zone: 'Meeting Room' },
      ],
      myDesk: { position: { x: 30, y: 45 }, zone: 'UX Wing' },
      availableDesks: [
        // UX Wing - Available desks in organized islands
        { position: { x: 25, y: 32 }, zone: 'UX Wing' }, // Island 1 - remaining spot
        { position: { x: 42, y: 47 }, zone: 'UX Wing' }, // Island 2 - remaining spot  
        { position: { x: 39, y: 30 }, zone: 'UX Wing' }, // Island 3 - remaining spot
        // Dev Zone - Available desks organized in islands
        { position: { x: 58, y: 28 }, zone: 'Dev Zone' }, // Island 1 - remaining spot
        { position: { x: 84, y: 24 }, zone: 'Dev Zone' }, // Island 2 - remaining spot
        { position: { x: 64, y: 48 }, zone: 'Dev Zone' }, // Island 3 - remaining spot  
        { position: { x: 78, y: 48 }, zone: 'Dev Zone' }, // Island 4 - remaining spot
        // Test Rigs - Available desks organized in islands
        { position: { x: 27, y: 68 }, zone: 'Test Rigs' }, // Island 1 - remaining spot
        { position: { x: 50, y: 68 }, zone: 'Test Rigs' }, // Island 2 - remaining spot
        { position: { x: 42, y: 78 }, zone: 'Test Rigs' }, // Island 3 - remaining spot
        // Collaboration - Available desks organized in islands
        { position: { x: 78, y: 72 }, zone: 'Collaboration' }, // Island 1 - remaining spot
        { position: { x: 94, y: 72 }, zone: 'Collaboration' }, // Island 2 - remaining spot
      ]
    },
    '3rd Floor': {
      zones: [
        { name: 'Executive Offices', color: 'bg-purple-100 border-purple-300', position: { x: 15, y: 15, width: 35, height: 30 } },
        { name: 'Finance & Sales', color: 'bg-blue-100 border-blue-300', position: { x: 55, y: 20, width: 30, height: 25 } },
        { name: 'HR Department', color: 'bg-green-100 border-green-300', position: { x: 20, y: 55, width: 25, height: 30 } },
        { name: 'Collaboration', color: 'bg-yellow-100 border-yellow-300', position: { x: 55, y: 60, width: 35, height: 25 } },
      ],
      meetingRooms: [
        { position: { x: 5, y: 20, width: 10, height: 8 } },
        { position: { x: 85, y: 15, width: 12, height: 9 } },
        { position: { x: 5, y: 80, width: 12, height: 9 } },
      ],
      colleagues: [
        // Executive Offices (5 people) - Separated into individual offices
        // CEO Office (top-left)
        { name: 'David L.', position: { x: 20, y: 20 }, zone: 'Executive Offices' },
        // CTO Office (top-right) 
        { name: 'Mark T.', position: { x: 45, y: 20 }, zone: 'Executive Offices' },
        // CFO Office (bottom-left)
        { name: 'Sarah C.', position: { x: 20, y: 40 }, zone: 'Executive Offices' },
        // COO & VP Meeting (bottom-right - in discussion)
        { name: 'James R.', position: { x: 42, y: 38 }, zone: 'Executive Offices' },
        { name: 'Lisa M.', position: { x: 46, y: 40 }, zone: 'Executive Offices' },
        
         // Finance & Sales (8 people) - Organized in 2 desk islands
        // Island 1 - Front Sales Team
        { name: 'Carol M.', position: { x: 58, y: 26 }, zone: 'Finance & Sales' },
        { name: 'Ava Q.', position: { x: 61, y: 26 }, zone: 'Finance & Sales' },
        { name: 'Leo H.', position: { x: 64, y: 26 }, zone: 'Finance & Sales' },
        { name: 'Finn K.', position: { x: 58, y: 30 }, zone: 'Finance & Sales' },
        { name: 'Bree L.', position: { x: 61, y: 30 }, zone: 'Finance & Sales' },
        
        // Island 2 - Back Finance Team
        { name: 'Dove N.', position: { x: 78, y: 38 }, zone: 'Finance & Sales' },
        { name: 'Zara O.', position: { x: 81, y: 38 }, zone: 'Finance & Sales' },
        { name: 'Saya R.', position: { x: 84, y: 38 }, zone: 'Finance & Sales' },
        
        // HR Department (5 people) - Organized in 2 desk islands
        // Island 1 - Left Recruitment Team
        { name: 'Robert K.', position: { x: 24, y: 60 }, zone: 'HR Department' },
        { name: 'Oliver P.', position: { x: 27, y: 60 }, zone: 'HR Department' },
        { name: 'Grace W.', position: { x: 24, y: 64 }, zone: 'HR Department' },
        
        // Island 2 - Right Operations Team
        { name: 'Lucas D.', position: { x: 38, y: 78 }, zone: 'HR Department' },
        { name: 'Mia F.', position: { x: 41, y: 78 }, zone: 'HR Department' },
        
        // Collaboration (2 people) - Organized in desk islands
        // Island 1 - Left Creative Hub
        { name: 'Diana S.', position: { x: 58, y: 68 }, zone: 'Collaboration' },
        // Island 2 - Right Innovation Area  
        { name: 'Willa T.', position: { x: 82, y: 68 }, zone: 'Collaboration' },
        
        // Meeting Rooms - 3rd Floor Meeting Room 1 (4 people executive meeting)
        { name: 'CEO J.', position: { x: 9, y: 24 }, zone: 'Meeting Room' },
        { name: 'Mae J.', position: { x: 12, y: 22 }, zone: 'Meeting Room' },
        { name: 'Jett M.', position: { x: 8, y: 26 }, zone: 'Meeting Room' },
        { name: 'Crew P.', position: { x: 11, y: 25 }, zone: 'Meeting Room' },
        { name: 'Knox S.', position: { x: 10, y: 22 }, zone: 'Meeting Room' },
        { name: 'VP K.', position: { x: 89, y: 19 }, zone: 'Meeting Room' },
      ],
      myDesk: { position: { x: 10, y: 24 }, zone: 'Meeting Room' },
      availableDesks: [
        // Finance & Sales - Available desks organized in islands
        { position: { x: 64, y: 30 }, zone: 'Finance & Sales' }, // Island 1 - remaining spot
        { position: { x: 78, y: 42 }, zone: 'Finance & Sales' }, // Island 2 - remaining spot
        // HR Department - Available desks organized in islands
        { position: { x: 27, y: 64 }, zone: 'HR Department' }, // Island 1 - remaining spot
        { position: { x: 30, y: 60 }, zone: 'HR Department' }, // Island 1 - remaining spot
        { position: { x: 38, y: 82 }, zone: 'HR Department' }, // Island 2 - remaining spot
        { position: { x: 41, y: 82 }, zone: 'HR Department' }, // Island 2 - remaining spot
        // Collaboration - Available desks organized in islands
        // Island 1 - Left Creative Hub
        { position: { x: 58, y: 72 }, zone: 'Collaboration' },
        { position: { x: 61, y: 68 }, zone: 'Collaboration' },
        { position: { x: 61, y: 72 }, zone: 'Collaboration' },
        { position: { x: 58, y: 76 }, zone: 'Collaboration' },
        { position: { x: 61, y: 76 }, zone: 'Collaboration' },
        
        // Island 2 - Right Innovation Area
        { position: { x: 82, y: 72 }, zone: 'Collaboration' },
        { position: { x: 85, y: 68 }, zone: 'Collaboration' },
        { position: { x: 85, y: 72 }, zone: 'Collaboration' },
        { position: { x: 82, y: 76 }, zone: 'Collaboration' },
        { position: { x: 85, y: 76 }, zone: 'Collaboration' },
        
        // Island 3 - Back Strategy Corner
        { position: { x: 70, y: 80 }, zone: 'Collaboration' },
        { position: { x: 73, y: 80 }, zone: 'Collaboration' },
        { position: { x: 76, y: 80 }, zone: 'Collaboration' },
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
              <span className="text-sm">Showroom</span>
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
