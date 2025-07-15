import { useState } from 'react'
import { Calendar, Clock, MapPin, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

const BookDesk = () => {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [timeBlock, setTimeBlock] = useState('')
  const [floor, setFloor] = useState('')
  const [zone, setZone] = useState('')
  const [selectedDesk, setSelectedDesk] = useState<string | null>(null)

  const timeBlocks = [
    { value: 'morning', label: 'Morning (9:00 AM - 1:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (1:00 PM - 6:00 PM)' },
    { value: 'fullday', label: 'Full Day (9:00 AM - 6:00 PM)' }
  ]

  const floors = ['1st Floor', '2nd Floor', '3rd Floor']
  const zones = {
    '1st Floor': ['Reception Area', 'Lobby Workspaces'],
    '2nd Floor': ['UX Wing', 'Dev Zone', 'Collaboration Area'],
    '3rd Floor': ['Sales', 'Quality Assurance', 'Executive Suites']
  }

  const generateDesks = () => {
    const desks = []
    for (let i = 1; i <= 20; i++) {
      const status = Math.random() > 0.7 ? 'booked' : Math.random() > 0.8 ? 'unavailable' : 'available'
      desks.push({
        id: `${floor?.charAt(0)}${zone?.charAt(0)}-${i.toString().padStart(2, '0')}`,
        status,
        number: i
      })
    }
    return desks
  }

  const desks = floor && zone ? generateDesks() : []

  const getDeskColor = (status: string, isSelected: boolean) => {
    if (isSelected) return 'bg-blue-500 border-blue-600 text-white'
    switch (status) {
      case 'available': return 'bg-green-100 border-green-300 text-green-800 hover:bg-green-200'
      case 'booked': return 'bg-red-100 border-red-300 text-red-800 cursor-not-allowed'
      case 'unavailable': return 'bg-gray-100 border-gray-300 text-gray-600 cursor-not-allowed'
      default: return 'bg-gray-100 border-gray-300'
    }
  }

  const handleDeskSelect = (desk: any) => {
    if (desk.status === 'available') {
      setSelectedDesk(desk.id)
    }
  }

  const canBook = selectedDate && timeBlock && floor && zone && selectedDesk

  return (
    <div className="p-4 pb-20 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-900">Book a Desk</h1>
        <p className="text-gray-500">Reserve your workspace</p>
      </div>

      {/* Date Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar size={20} />
            Select Date & Time
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Time Block</label>
            <Select value={timeBlock} onValueChange={setTimeBlock}>
              <SelectTrigger>
                <SelectValue placeholder="Select time block" />
              </SelectTrigger>
              <SelectContent>
                {timeBlocks.map(block => (
                  <SelectItem key={block.value} value={block.value}>
                    {block.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Location Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin size={20} />
            Select Location
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Floor</label>
            <Select value={floor} onValueChange={(value) => { setFloor(value); setZone(''); setSelectedDesk(null); }}>
              <SelectTrigger>
                <SelectValue placeholder="Select floor" />
              </SelectTrigger>
              <SelectContent>
                {floors.map(f => (
                  <SelectItem key={f} value={f}>{f}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {floor && (
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Zone</label>
              <Select value={zone} onValueChange={(value) => { setZone(value); setSelectedDesk(null); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select zone" />
                </SelectTrigger>
                <SelectContent>
                  {zones[floor as keyof typeof zones]?.map(z => (
                    <SelectItem key={z} value={z}>{z}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Desk Grid */}
      {floor && zone && (
        <Card>
          <CardHeader>
            <CardTitle>Available Desks</CardTitle>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                <span>Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
                <span>Unavailable</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2">
              {desks.map(desk => (
                <button
                  key={desk.id}
                  onClick={() => handleDeskSelect(desk)}
                  disabled={desk.status !== 'available'}
                  className={cn(
                    "aspect-square rounded-lg border-2 text-xs font-medium transition-colors flex items-center justify-center",
                    getDeskColor(desk.status, selectedDesk === desk.id)
                  )}
                >
                  {desk.number}
                  {selectedDesk === desk.id && (
                    <Check size={12} className="ml-1" />
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Booking Summary & Confirm */}
      {canBook && (
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Date:</span> {selectedDate && format(selectedDate, "PPP")}</p>
              <p><span className="font-medium">Time:</span> {timeBlocks.find(b => b.value === timeBlock)?.label}</p>
              <p><span className="font-medium">Location:</span> {floor} - {zone}</p>
              <p><span className="font-medium">Desk:</span> {selectedDesk}</p>
            </div>
            <Button className="w-full" size="lg">
              <Check size={20} className="mr-2" />
              Confirm Booking
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default BookDesk
