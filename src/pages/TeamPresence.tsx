
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
      // Swedish names
      { name: 'Erik Andersson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'EA' },
      { name: 'Anna Lindberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AL' },
      { name: 'Oskar Nilsson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'ON' },
      { name: 'Sara Johansson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SJ' },
      { name: 'Gustaf Larsson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'GL' },
      { name: 'Emma Karlsson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'EK' },
      { name: 'Viktor Petersson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VP' },
      { name: 'Maja Svensson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'MS' },
      { name: 'Lucas Berg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LB' },
      { name: 'Astrid Gustafsson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AG' },
      { name: 'Felix Holm', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'FH' },
      { name: 'Ida Nordström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'IN' },
      { name: 'William Hedberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'WH' },
      { name: 'Elin Forsberg', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'EF' },
      { name: 'Alexander Strand', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AS' },
      { name: 'Olivia Nyberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'OV' },
      { name: 'Hugo Blomqvist', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'HB' },
      { name: 'Alva Ekström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AE' },
      { name: 'Noah Sandberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'NS' },
      // International names
      { name: 'Li Wei', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'LW' },
      { name: 'Priya Sharma', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'PS' },
      { name: 'Ahmed Hassan', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AH' },
      { name: 'Marko Petrović', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'MP' },
      { name: 'Klaus Weber', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'KW' },
      { name: 'Fatima Ali', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'FA' },
    ],
    'Engineering': [
      // Swedish names
      { name: 'Johan Åberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'JÅ' },
      { name: 'Linus Engström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LE' },
      { name: 'Hanna Wickström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'HW' },
      { name: 'Sebastian Lindqvist', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SL' },
      { name: 'Rebecka Holmberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'RH' },
      { name: 'Anton Mårtensson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AM' },
      { name: 'Klara Davidsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'KD' },
      { name: 'Mattias Öhman', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'MÖ' },
      { name: 'Isabelle Lundgren', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'IL' },
      { name: 'Carl Ericsson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'CE' },
      { name: 'Lovisa Sjögren', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LS' },
      { name: 'Adrian Wallin', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'AW' },
      { name: 'Thea Falk', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'TF' },
      { name: 'Nils Henriksson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'NH' },
      { name: 'Stella Håkansson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'SH' },
      { name: 'Marcus Lindberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'ML' },
      { name: 'Tilde Öberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'TÖ' },
      { name: 'Elias Nordahl', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'EN' },
      { name: 'Moa Lundberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'ML2' },
      { name: 'Benjamin Nyström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'BN' },
      { name: 'Cornelia Viklund', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'CV' },
      { name: 'Filip Andersson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'FA2' },
      { name: 'Agnes Dahlberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AD' },
      { name: 'Leo Hedström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'LH' },
      { name: 'Nellie Isaksson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'NI' },
      { name: 'Charlie Månsson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'CM' },
      { name: 'Vera Lundström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VL' },
      { name: 'Leon Blomberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'LB2' },
      { name: 'Wilma Eklund', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'WE' },
      { name: 'Theodor Fransson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'TF2' },
      { name: 'Tuva Nordin', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'TN' },
      { name: 'Isak Johansson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'IJ' },
      { name: 'Ellen Ström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'ES' },
      // International names
      { name: 'Chen Ming', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'CM2' },
      { name: 'Arjun Patel', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'AP' },
      { name: 'Muhammad Khan', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'MK' },
      { name: 'Amina Begović', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AB' },
      { name: 'Stefan Mueller', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'SM' },
      { name: 'Lucia Romano', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LR' },
      { name: 'Omar Al-Rashid', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'OR' },
      { name: 'Rajesh Kumar', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'RK' },
      { name: 'Emir Hadzic', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'EH' },
      { name: 'Hans Fischer', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'HF' },
      { name: 'Wang Lei', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'WL' },
      { name: 'Aisha Malik', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'AM2' },
    ],
    'Quality Assurance': [
      // Swedish names
      { name: 'Saga Holmström', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'SH2' },
      { name: 'Theodor Lindahl', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'TL' },
      { name: 'Ingrid Sundström', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'IS' },
      { name: 'Vilhelm Carlsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VC' },
      { name: 'Sigrid Blomberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'SB' },
      { name: 'Gustav Martinsson', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'GM' },
      { name: 'Hedvig Westberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'HV' },
      { name: 'Albin Rydberg', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'AR2' },
      { name: 'Siri Lund', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SL2' },
      { name: 'Edvin Palmberg', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'EP' },
      { name: 'Nova Lindström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'NL' },
      { name: 'Melvin Hjelm', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'MH' },
      { name: 'Iris Andersson', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'IA' },
      { name: 'Vincent Holmqvist', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VH' },
      { name: 'Juni Persson', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'JP' },
      // International names
      { name: 'Yang Xiao', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'YX' },
      { name: 'Kavya Singh', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'KS' },
      { name: 'Amir Hussein', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AH2' },
      { name: 'Petra Kovačević', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'PK' },
      { name: 'Marco Bianchi', status: 'In Office', location: '2nd Floor – Test rigs', avatar: '/placeholder.svg', initials: 'MB' },
    ],
    'Sales': [
      // Swedish names
      { name: 'Matilda Stenberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'MS2' },
      { name: 'Eddie Lundqvist', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'EL' },
      { name: 'Freja Thorsson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'FT' },
      { name: 'Alfred Samuelsson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AS2' },
      { name: 'Molly Lindgren', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'ML3' },
      { name: 'Max Fredriksson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'MF' },
      { name: 'Alba Nyman', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AN' },
      { name: 'Sigge Åkerlund', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'SÅ' },
      { name: 'Elvira Backman', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'EB' },
      { name: 'Melker Jansson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'MJ' },
      { name: 'Lovis Lundberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'LL' },
      { name: 'Ville Sundberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VS' },
      { name: 'Svea Magnusson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'SM2' },
      { name: 'Walter Dahlström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'WD' },
      { name: 'Lova Karlberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'LK' },
      { name: 'Valter Axelsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VA' },
      { name: 'Celine Björk', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'CB' },
      { name: 'Sigurd Hedberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'SH3' },
      { name: 'Selma Palmgren', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SP2' },
      { name: 'Otto Norberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'ON2' },
      { name: 'Disa Hallberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'DH' },
      { name: 'Dante Bergman', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'DB' },
      { name: 'Stina Öhman', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SÖ' },
      // International names
      { name: 'Liu Jiajia', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'LJ' },
      { name: 'Deepak Gupta', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'DG' },
      { name: 'Sabrina Jovic', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SJ2' },
      { name: 'Ingrid Schmidt', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'IS2' },
      { name: 'Zara Ahmad', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'ZA' },
      { name: 'Francesco Rossi', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'FR' },
      { name: 'Layla Al-Zahra', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LZ' },
    ],
    'Product': [
      // Swedish names
      { name: 'Arvid Eklöf', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'AE2' },
      { name: 'Alma Hedström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AH3' },
      { name: 'Milton Norberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'MN' },
      { name: 'Edith Sandström', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'ES2' },
      { name: 'Hampus Lindahl', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'HL' },
      { name: 'Vera Svensson', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'VS2' },
      { name: 'Sixten Holm', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SH4' },
      { name: 'Elsa Bergström', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'EB2' },
      { name: 'Frank Olsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'FO' },
      { name: 'Tyra Lindqvist', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'TL2' },
      { name: 'Folke Andersen', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'FA3' },
      { name: 'Tove Sundqvist', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'TS' },
      { name: 'Ivar Lindberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'IV' },
      { name: 'Saga Eriksson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SE' },
      { name: 'Ture Blomqvist', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'TB2' },
      { name: 'Smilla Karlsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SK' },
      { name: 'Noel Hedberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'NH2' },
      { name: 'Rut Lindström', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'RL' },
      { name: 'Viggo Sandberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VG' },
      { name: 'Ester Sköld', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'EL2' },
      { name: 'Ludvig Blomberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LB3' },
      { name: 'Lilly Holmberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'LH2' },
      { name: 'Alve Nilsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AV' },
      // International names
      { name: 'Zhou Lin', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'ZL' },
      { name: 'Neha Verma', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'NV' },
      { name: 'Hasan Mehic', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'HM' },
      { name: 'Martina Berger', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'MA' },
      { name: 'Saad Al-Mansouri', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SA' },
      { name: 'Giulia Ferrari', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'GF' },
      { name: 'Tariq Hassan', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'TH' },
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
