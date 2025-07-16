import { useState } from 'react'
import { MapPin, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

const OfficeMap = () => {
  const [selectedFloor, setSelectedFloor] = useState('2nd Floor')

  const floors = ['1st Floor', '2nd Floor', '3rd Floor']
  
  // Helper function to create desk grid patterns
  const createDeskGrid = (startX: number, startY: number, rows: number, cols: number, spacing: number) => {
    const desks = []
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        desks.push({
          x: startX + (col * spacing),
          y: startY + (row * spacing)
        })
      }
    }
    return desks
  }

  // Helper function to create desk islands (4-desk clusters)
  const createDeskIslands = (centerX: number, centerY: number, count: number, spacing: number) => {
    const islands = []
    for (let i = 0; i < count; i++) {
      const offsetX = (i % 2) * spacing * 3
      const offsetY = Math.floor(i / 2) * spacing * 2.5
      
      // Create 4-desk island
      islands.push(
        { x: centerX + offsetX - 1, y: centerY + offsetY - 1 },
        { x: centerX + offsetX + 1, y: centerY + offsetY - 1 },
        { x: centerX + offsetX - 1, y: centerY + offsetY + 1 },
        { x: centerX + offsetX + 1, y: centerY + offsetY + 1 }
      )
    }
    return islands
  }

  // Floor-specific data with realistic desk layouts and ~100 employees
  const floorData = {
    '1st Floor': {
      zones: [
        { name: 'Reception', color: 'bg-purple-100 border-purple-300', position: { x: 10, y: 15, width: 35, height: 30 } },
        { name: 'Cafeteria', color: 'bg-orange-100 border-orange-300', position: { x: 50, y: 20, width: 40, height: 35 } },
        { name: 'Meeting Rooms', color: 'bg-blue-100 border-blue-300', position: { x: 15, y: 50, width: 30, height: 25 } },
        { name: 'Conference Center', color: 'bg-green-100 border-green-300', position: { x: 50, y: 60, width: 45, height: 30 } },
      ],
      colleagues: [
        // Reception area - linear desk arrangement
        ...createDeskGrid(15, 20, 2, 3, 4).map((pos, i) => ({ 
          name: `Reception ${i + 1}`, position: pos, zone: 'Reception' 
        })),
        // Cafeteria staff and visitors
        { name: 'Chef Maria', position: { x: 55, y: 25 }, zone: 'Cafeteria' },
        { name: 'Staff Tom', position: { x: 65, y: 30 }, zone: 'Cafeteria' },
        { name: 'Visitor A', position: { x: 75, y: 35 }, zone: 'Cafeteria' },
        { name: 'Visitor B', position: { x: 85, y: 40 }, zone: 'Cafeteria' },
        // Meeting rooms
        { name: 'Consultant J', position: { x: 20, y: 55 }, zone: 'Meeting Rooms' },
        { name: 'Client Rep', position: { x: 30, y: 60 }, zone: 'Meeting Rooms' },
        { name: 'Trainer K', position: { x: 40, y: 65 }, zone: 'Meeting Rooms' },
        // Conference center
        { name: 'Event Coord', position: { x: 60, y: 65 }, zone: 'Conference Center' },
        { name: 'AV Tech', position: { x: 80, y: 70 }, zone: 'Conference Center' },
      ],
      myDesk: { position: { x: 19, y: 24 }, zone: 'Reception' },
      availableDesks: [
        // 5 available desks on 1st floor
        { position: { x: 27, y: 24 }, zone: 'Reception' },
        { position: { x: 70, y: 45 }, zone: 'Cafeteria' },
        { position: { x: 25, y: 70 }, zone: 'Meeting Rooms' },
        { position: { x: 65, y: 75 }, zone: 'Conference Center' },
        { position: { x: 90, y: 80 }, zone: 'Conference Center' },
      ]
    },
    '2nd Floor': {
      zones: [
        { name: 'UX Wing', color: 'bg-purple-100 border-purple-300', position: { x: 15, y: 20, width: 30, height: 35 } },
        { name: 'Dev Zone', color: 'bg-blue-100 border-blue-300', position: { x: 55, y: 15, width: 35, height: 40 } },
        { name: 'Test rigs', color: 'bg-green-100 border-green-300', position: { x: 20, y: 60, width: 40, height: 25 } },
        { name: 'Collaboration', color: 'bg-yellow-100 border-yellow-300', position: { x: 70, y: 65, width: 25, height: 20 } },
      ],
      colleagues: [
        // UX Wing - desk islands pattern
        ...createDeskIslands(25, 35, 3, 3).map((pos, i) => ({ 
          name: `UX ${i + 1}`, position: pos, zone: 'UX Wing' 
        })),
        // Dev Zone - linear rows with islands
        ...createDeskGrid(60, 20, 3, 4, 3).map((pos, i) => ({ 
          name: `Dev ${i + 1}`, position: pos, zone: 'Dev Zone' 
        })),
        ...createDeskIslands(75, 35, 2, 4).map((pos, i) => ({ 
          name: `Sr Dev ${i + 1}`, position: pos, zone: 'Dev Zone' 
        })),
        // Test rigs - equipment stations
        ...createDeskGrid(25, 65, 2, 5, 4).map((pos, i) => ({ 
          name: `QA ${i + 1}`, position: pos, zone: 'Test rigs' 
        })),
        // Collaboration area
        { name: 'Scrum Master', position: { x: 75, y: 70 }, zone: 'Collaboration' },
        { name: 'Product Mgr', position: { x: 85, y: 75 }, zone: 'Collaboration' },
      ],
      myDesk: { position: { x: 26, y: 34 }, zone: 'UX Wing' },
      availableDesks: [
        // 30 available desks on main work floor
        ...createDeskGrid(18, 25, 2, 3, 4).slice(0, 6).map(pos => ({ position: pos, zone: 'UX Wing' })),
        ...createDeskGrid(58, 25, 3, 3, 4).slice(0, 9).map(pos => ({ position: pos, zone: 'Dev Zone' })),
        ...createDeskIslands(80, 25, 2, 4).slice(0, 8).map(pos => ({ position: pos, zone: 'Dev Zone' })),
        ...createDeskGrid(30, 70, 1, 4, 5).slice(0, 4).map(pos => ({ position: pos, zone: 'Test rigs' })),
        { position: { x: 72, y: 80 }, zone: 'Collaboration' },
        { position: { x: 88, y: 70 }, zone: 'Collaboration' },
        { position: { x: 92, y: 80 }, zone: 'Collaboration' },
      ]
    },
    '3rd Floor': {
      zones: [
        { name: 'Executive Offices', color: 'bg-purple-100 border-purple-300', position: { x: 15, y: 15, width: 35, height: 30 } },
        { name: 'Finance', color: 'bg-blue-100 border-blue-300', position: { x: 55, y: 20, width: 30, height: 25 } },
        { name: 'HR Department', color: 'bg-green-100 border-green-300', position: { x: 20, y: 55, width: 25, height: 30 } },
        { name: 'Private Meeting', color: 'bg-yellow-100 border-yellow-300', position: { x: 55, y: 60, width: 35, height: 25 } },
      ],
      colleagues: [
        // Executive offices - individual desks along walls
        ...createDeskGrid(18, 18, 2, 4, 6).map((pos, i) => ({ 
          name: `Exec ${i + 1}`, position: pos, zone: 'Executive Offices' 
        })),
        // Finance team - linear arrangement
        ...createDeskGrid(58, 25, 2, 3, 4).map((pos, i) => ({ 
          name: `Finance ${i + 1}`, position: pos, zone: 'Finance' 
        })),
        // HR Department - small clusters
        ...createDeskIslands(32, 65, 1, 4).map((pos, i) => ({ 
          name: `HR ${i + 1}`, position: pos, zone: 'HR Department' 
        })),
        // Additional HR staff
        { name: 'HR Director', position: { x: 25, y: 60 }, zone: 'HR Department' },
        { name: 'Recruiter A', position: { x: 35, y: 75 }, zone: 'HR Department' },
        { name: 'Recruiter B', position: { x: 40, y: 80 }, zone: 'HR Department' },
        // Private meeting rooms
        { name: 'Legal Counsel', position: { x: 60, y: 65 }, zone: 'Private Meeting' },
        { name: 'Strategy Lead', position: { x: 75, y: 70 }, zone: 'Private Meeting' },
        { name: 'Board Advisor', position: { x: 85, y: 75 }, zone: 'Private Meeting' },
      ],
      myDesk: { position: { x: 62, y: 29 }, zone: 'Finance' },
      availableDesks: [
        // 15 available desks on executive floor
        ...createDeskGrid(22, 22, 1, 3, 8).map(pos => ({ position: pos, zone: 'Executive Offices' })),
        { position: { x: 42, y: 30 }, zone: 'Executive Offices' },
        { position: { x: 45, y: 40 }, zone: 'Executive Offices' },
        ...createDeskGrid(70, 30, 1, 2, 8).map(pos => ({ position: pos, zone: 'Finance' })),
        { position: { x: 78, y: 40 }, zone: 'Finance' },
        ...createDeskGrid(28, 70, 1, 2, 6).map(pos => ({ position: pos, zone: 'HR Department' })),
        { position: { x: 65, y: 80 }, zone: 'Private Meeting' },
        { position: { x: 80, y: 82 }, zone: 'Private Meeting' },
        { position: { x: 90, y: 70 }, zone: 'Private Meeting' },
      ]
    }
  }

  const currentFloorData = floorData[selectedFloor as keyof typeof floorData]

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

            {/* My Desk */}
            <div
              className="absolute w-4 h-4 bg-blue-500 border-2 border-blue-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${currentFloorData.myDesk.position.x}%`,
                top: `${currentFloorData.myDesk.position.y}%`,
              }}
              title="Your Desk"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Colleagues */}
            {currentFloorData.colleagues.map((colleague, index) => (
              <div
                key={index}
                className="absolute w-3.5 h-3.5 bg-green-500 border-2 border-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
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
                className="absolute w-2.5 h-2.5 bg-gray-300 border border-gray-400 rounded transform -translate-x-1/2 -translate-y-1/2"
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
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-gray-600" />
                <span className="text-sm font-medium">People on this floor</span>
              </div>
              <Badge variant="secondary">{currentFloorData.colleagues.length + 1}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-gray-600" />
                <span className="text-sm font-medium">Available desks</span>
              </div>
              <Badge variant="outline">{currentFloorData.availableDesks.length}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OfficeMap
