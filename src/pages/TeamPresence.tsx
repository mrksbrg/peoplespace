
import { useState } from 'react'
import { Users, ToggleLeft, ToggleRight, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const TeamPresence = () => {
  const [selectedTeam, setSelectedTeam] = useState('UX Design')
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')

  const teams = ['UX Design', 'Engineering', 'Quality Assurance', 'Sales', 'Product']

  const teamMembers = {
    'UX Design': [
      { name: 'Sarah Johnson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'SJ' },
      { name: 'Alex Rivera', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'AR' },
      { name: 'Jordan Kim', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'JK' },
      { name: 'Taylor Brown', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'TB' },
      { name: 'Morgan Lee', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'ML' },
    ],
    'Engineering': [
      { name: 'Mike Chen', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'MC' },
      { name: 'James Wilson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'JW' },
      { name: 'Sam Patel', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'SP' },
      { name: 'Casey Wong', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'CW' },
    ],
    'Quality Assurance': [
      { name: 'Emma Davis', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'ED' },
      { name: 'Ryan Scott', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'RS' },
      { name: 'Maya Singh', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'MS' },
    ],
    'Sales': [
      { name: 'Lisa Anderson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'LA' },
      { name: 'David Miller', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'DM' },
    ],
    'Product': [
      { name: 'Chris Taylor', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'CT' },
      { name: 'Nicole Chang', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'NC' },
    ]
  }

  const currentTeam = teamMembers[selectedTeam as keyof typeof teamMembers] || []
  const inOfficeCount = currentTeam.filter(member => member.status === 'In Office').length
  const totalCount = currentTeam.length

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Office': return 'bg-green-100 text-green-800'
      case 'Remote': return 'bg-blue-100 text-blue-800'
      case 'Out Today': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const zones = [
    { name: 'UX Wing', position: { x: 15, y: 20, width: 30, height: 35 } },
    { name: 'Dev Zone', position: { x: 55, y: 15, width: 35, height: 40 } },
    { name: 'Test rigs', position: { x: 20, y: 60, width: 40, height: 25 } },
    { name: 'Sales', position: { x: 70, y: 65, width: 25, height: 20 } },
  ]

  const getPositionForLocation = (location: string | null) => {
    if (!location) return null
    
    if (location.includes('UX Wing')) return { x: 30, y: 37 }
    if (location.includes('Dev Zone')) return { x: 72, y: 35 }
    if (location.includes('Test rigs')) return { x: 40, y: 72 }
    if (location.includes('Sales')) return { x: 82, y: 75 }
    if (location.includes('Collaboration')) return { x: 50, y: 50 }
    
    return null
  }

  return (
    <div className="p-4 pb-20 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-900">Team Presence</h1>
        <p className="text-gray-500">See who's in the office</p>
      </div>

      {/* Team Selection */}
      <Card>
        <CardContent className="p-4">
          <Select value={selectedTeam} onValueChange={setSelectedTeam}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {teams.map(team => (
                <SelectItem key={team} value={team}>{team}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users size={20} className="text-gray-600" />
              <span className="font-medium">{inOfficeCount} of {totalCount} team members are in today</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* View Toggle */}
      <div className="flex items-center justify-center gap-2">
        <Button
          variant={viewMode === 'list' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setViewMode('list')}
        >
          List View
        </Button>
        <Button
          variant={viewMode === 'map' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setViewMode('map')}
        >
          Map View
        </Button>
      </div>

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-3">
          {currentTeam.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{member.name}</p>
                    
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getStatusColor(member.status)}>
                        {member.status}
                      </Badge>
                      
                      {member.location && (
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin size={12} />
                          {member.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Map View */}
      {viewMode === 'map' && (
        <Card>
          <CardHeader>
            <CardTitle>Team Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gray-50 rounded-lg aspect-square border-2 border-gray-200 overflow-hidden">
              {/* Zones */}
              {zones.map(zone => (
                <div
                  key={zone.name}
                  className="absolute border-2 bg-gray-100 border-gray-300 rounded flex items-center justify-center text-xs font-medium text-gray-700"
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

              {/* Team Members */}
              {currentTeam
                .filter(member => member.status === 'In Office')
                .map((member, index) => {
                  const position = getPositionForLocation(member.location)
                  if (!position) return null
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-8 h-8 bg-blue-500 border-2 border-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                      }}
                      title={`${member.name} - ${member.location}`}
                    >
                      {member.initials}
                    </div>
                  )
                })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default TeamPresence
