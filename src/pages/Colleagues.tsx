
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, MapPin, MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { teams, getAllColleagues } from '@/data/teamData'
import { extractFloor } from '@/utils/floorUtils'

const Colleagues = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [teamFilter, setTeamFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const colleagues = getAllColleagues()

  const filteredColleagues = colleagues.filter(colleague => {
    const matchesSearch = colleague.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         colleague.team.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTeam = teamFilter === 'all' || colleague.team === teamFilter
    const matchesStatus = statusFilter === 'all' || colleague.status === statusFilter
    
    return matchesSearch && matchesTeam && matchesStatus
  })

  return (
    <div className="p-4 pb-20 max-w-md mx-auto space-y-4">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-900">Find Colleagues</h1>
        <p className="text-gray-500">Search for team members</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          placeholder="Search by name, team, or project..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <Select value={teamFilter} onValueChange={setTeamFilter}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Teams</SelectItem>
            {teams.map(team => (
              <SelectItem key={team} value={team}>{team}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="In Office">In Office</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
            <SelectItem value="Out Today">Out Today</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {filteredColleagues.map(colleague => (
          <Card key={colleague.id}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={colleague.avatar} alt={`Profile picture of ${colleague.name}`} />
                  <AvatarFallback>{colleague.initials}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{colleague.name}</p>
                  <p className="text-sm text-gray-500">{colleague.team}</p>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <Badge 
                      variant={
                        colleague.status === 'In Office' ? 'default' :
                        colleague.status === 'Remote' ? 'secondary' : 'outline'
                      }
                      className={`text-xs ${
                        colleague.status === 'In Office' ? 'bg-green-100 text-green-800' :
                        colleague.status === 'Remote' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                      aria-label={`Status: ${colleague.status}`}
                    >
                      {colleague.status}
                    </Badge>
                    
                    {colleague.location && (
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin size={12} />
                        {colleague.location}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  {colleague.status === 'In Office' && (
                    <Link
                      to={`/map?floor=${encodeURIComponent(extractFloor(colleague.location || ''))}`}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 text-xs"
                    >
                      <MapPin size={14} />
                      Map
                    </Link>
                  )}
                  <Button size="sm" variant="outline" className="text-xs">
                    <MessageCircle size={14} className="mr-1" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredColleagues.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No colleagues found matching your search.</p>
        </div>
      )}
    </div>
  )
}

export default Colleagues
