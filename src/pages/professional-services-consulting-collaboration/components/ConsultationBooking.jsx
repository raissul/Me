import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    consultationType: '',
    projectDescription: '',
    urgency: ''
  });

  // Mock available time slots
  const availableSlots = [
    { date: '2025-01-22', day: 'Wednesday', slots: ['09:00', '11:00', '14:00', '16:00'] },
    { date: '2025-01-23', day: 'Thursday', slots: ['10:00', '13:00', '15:00'] },
    { date: '2025-01-24', day: 'Friday', slots: ['09:00', '11:00', '14:00'] },
    { date: '2025-01-27', day: 'Monday', slots: ['09:00', '10:00', '13:00', '15:00', '16:00'] },
    { date: '2025-01-28', day: 'Tuesday', slots: ['11:00', '14:00', '16:00'] }
  ];

  const consultationTypes = [
    { value: 'technical-consultation', label: 'Technical Consultation ($200/hour)' },
    { value: 'system-diagnostic', label: 'System Diagnostic Assessment ($2,500)' },
    { value: 'performance-optimization', label: 'Performance Optimization ($1,500/day)' },
    { value: 'architecture-review', label: 'Architecture Review ($3,000)' }
  ];

  const urgencyLevels = [
    { value: 'critical', label: 'Critical - Need immediate attention' },
    { value: 'high', label: 'High - Within 2 weeks' },
    { value: 'medium', label: 'Medium - Within 1 month' },
    { value: 'low', label: 'Low - Planning for future' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock booking submission
    alert(`Consultation booked for ${selectedDate} at ${selectedTime}. Confirmation email will be sent to ${formData.email}.`);
  };

  const selectedSlot = availableSlots.find(slot => slot.date === selectedDate);

  return (
    <div className="bg-card rounded-technical border border-border shadow-elevation">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 bg-accent rounded-technical flex items-center justify-center">
            <Icon name="Calendar" size={20} color="white" strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-heading font-bold text-primary">
            Schedule Consultation
          </h2>
        </div>
        <p className="text-text-secondary">
          Book a technical consultation to discuss your specific needs and challenges.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Company"
            type="text"
            placeholder="Your company name"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            required
          />
          <Input
            label="Role/Title"
            type="text"
            placeholder="e.g., CTO, Engineering Manager"
            value={formData.role}
            onChange={(e) => handleInputChange('role', e.target.value)}
            required
          />
        </div>

        {/* Consultation Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Consultation Type"
            options={consultationTypes}
            value={formData.consultationType}
            onChange={setFormData.consultationType}
            placeholder="Select consultation type"
            required
          />
          <Select
            label="Urgency Level"
            options={urgencyLevels}
            value={formData.urgency}
            onChange={setFormData.urgency}
            placeholder="Select urgency level"
            required
          />
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Project Description
          </label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-technical focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            rows="4"
            placeholder="Briefly describe your technical challenges, current system, and what you hope to achieve..."
            value={formData.projectDescription}
            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
            required
          />
        </div>

        {/* Date Selection */}
        <div>
          <h3 className="text-lg font-medium text-primary mb-4">
            Select Available Date & Time
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {availableSlots.map((slot) => (
              <button
                key={slot.date}
                type="button"
                onClick={() => {
                  setSelectedDate(slot.date);
                  setSelectedTime('');
                }}
                className={`p-3 rounded-technical border text-left transition-all duration-200 ${
                  selectedDate === slot.date
                    ? 'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50 hover:bg-surface'
                }`}
              >
                <div className="font-medium">{slot.day}</div>
                <div className="text-sm text-text-secondary">
                  {new Date(slot.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="text-xs text-text-muted mt-1">
                  {slot.slots.length} slots available
                </div>
              </button>
            ))}
          </div>

          {/* Time Selection */}
          {selectedSlot && (
            <div>
              <h4 className="text-md font-medium text-primary mb-3">
                Available Times for {selectedSlot.day}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {selectedSlot.slots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 rounded-technical border text-center transition-all duration-200 ${
                      selectedTime === time
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border hover:border-accent/50 hover:bg-surface'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking Summary */}
        {selectedDate && selectedTime && (
          <div className="bg-surface rounded-technical p-4">
            <h4 className="font-medium text-primary mb-2">Booking Summary</h4>
            <div className="space-y-1 text-sm text-text-secondary">
              <div className="flex justify-between">
                <span>Date:</span>
                <span>{new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span>{selectedTime} (EST)</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span>60 minutes</span>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4 border-t border-border">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            iconName="Calendar"
            iconPosition="left"
            disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
          >
            Confirm Consultation Booking
          </Button>
          <p className="text-xs text-text-muted text-center mt-2">
            You'll receive a calendar invitation and Zoom link via email
          </p>
        </div>
      </form>
    </div>
  );
};

export default ConsultationBooking;