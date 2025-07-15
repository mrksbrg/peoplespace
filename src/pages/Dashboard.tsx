import { useState } from 'react'
import { MapPin, Calendar, Users, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [status, setStatus] = useState('In Office')
  const [location, setLocation] = useState('2nd Floor – UX Wing')

  const todaysBookings = [
    { time: '9:00 AM - 12:00 PM', location: 'Desk 2A-15', type: 'Desk' },
    { time: '2:00 PM - 4:00 PM', location: 'Meeting Room B', type: 'Room' },
  ]

  const statusOptions = ['In Office', 'Remote', 'Out Today']
  const locationOptions = [
    '1st Floor – Reception',
    '2nd Floor – UX Wing',
    '2nd Floor – Dev Zone',
    '3rd Floor – Sales',
    '3rd Floor – Quality Assurance'
  ]

  return (
    <div className="p-4 pb-20 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-900">PeopleSpace</h1>
        <p className="text-gray-500">Welcome back, Alex!</p>
      </div>

      {/* Status Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin size={20} />
            Your Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Current Status
            </label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        option === 'In Office' ? 'bg-green-500' :
                        option === 'Remote' ? 'bg-blue-500' : 'bg-gray-500'
                      }`} />
                      {option}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {status === 'In Office' && (
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Current Location
              </label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locationOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Today's Bookings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar size={20} />
            Today's Bookings
          </CardTitle>
        </CardHeader>
        <CardContent>
          {todaysBookings.length > 0 ? (
            <div className="space-y-3">
              {todaysBookings.map((booking, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{booking.location}</p>
                    <p className="text-sm text-gray-600">{booking.time}</p>
                  </div>
                  <Badge variant="secondary">{booking.type}</Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No bookings for today</p>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-3">
        <Link to="/book" className="block">
          <Button className="w-full flex items-center justify-center gap-2" size="lg">
            <Calendar size={20} />
            Book a Desk
          </Button>
        </Link>
        
        <Link to="/colleagues" className="block">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2" size="lg">
            <Users size={20} />
            Find a Colleague
          </Button>
        </Link>
        
        <Link to="/map" className="block">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2" size="lg">
            <Map size={20} />
            View Office Map
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
