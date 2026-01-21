'use client';

import { useState } from 'react';
import { services, beautyServices, hairServices } from '@/lib/services';
import { teamMembers } from '@/lib/team';
import { siteConfig } from '@/lib/site';
import { Check, Calendar, User, Scissors, Clock, Phone, Mail, MessageSquare } from 'lucide-react';

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceCategory: '',
    serviceId: '',
    stylistId: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isNewClient: 'yes',
    specialRequests: '',
  });

  const selectedService = services.find(s => s.id === formData.serviceId);
  const selectedStylist = teamMembers.find(t => t.id === formData.stylistId);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a booking system API
    alert('Booking request submitted! We\'ll contact you shortly to confirm your appointment.');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            BOOK APPOINTMENT
          </span>
          <h1 className="text-display mb-6">
            Schedule Your Visit
          </h1>
          <p className="text-subheading text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Book your appointment in just a few simple steps. We'll confirm your booking within 24 hours.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            {[
              { num: 1, label: 'Service', icon: Scissors },
              { num: 2, label: 'Stylist', icon: User },
              { num: 3, label: 'Date & Time', icon: Calendar },
              { num: 4, label: 'Your Info', icon: Phone },
              { num: 5, label: 'Confirm', icon: Check },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                        step >= item.num
                          ? 'bg-[var(--primary)] text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step > item.num ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-small mt-2 hidden sm:block">{item.label}</span>
                  </div>
                  {idx < 4 && (
                    <div
                      className={`h-1 w-8 md:w-16 mx-2 transition-all ${
                        step > item.num ? 'bg-[var(--primary)]' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Choose Service */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-heading mb-6">Choose Your Service</h2>
                
                {/* Service Category */}
                <div>
                  <label className="block text-body font-semibold text-gray-900 mb-3">
                    Service Category
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceCategory: 'hair', serviceId: '' })}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        formData.serviceCategory === 'hair'
                          ? 'border-[var(--primary)] bg-[var(--primary-50)]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-display mb-2">💇</div>
                      <h3 className="text-subheading font-bold text-gray-900">Hair Services</h3>
                      <p className="text-small text-gray-600 mt-1">
                        Cuts, color, styling, treatments
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceCategory: 'beauty', serviceId: '' })}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        formData.serviceCategory === 'beauty'
                          ? 'border-[var(--secondary)] bg-[var(--secondary-50)]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-display mb-2">✨</div>
                      <h3 className="text-subheading font-bold text-gray-900">Beauty Services</h3>
                      <p className="text-small text-gray-600 mt-1">
                        Facials, makeup, lashes, waxing
                      </p>
                    </button>
                  </div>
                </div>

                {/* Specific Service */}
                {formData.serviceCategory && (
                  <div>
                    <label className="block text-body font-semibold text-gray-900 mb-3">
                      Select Service
                    </label>
                    <div className="space-y-3">
                      {(formData.serviceCategory === 'hair' ? hairServices : beautyServices).map(
                        (service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, serviceId: service.id })}
                            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                              formData.serviceId === service.id
                                ? 'border-[var(--primary)] bg-[var(--primary-50)]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900">{service.name}</h4>
                                <p className="text-small text-gray-600 mt-1">{service.tagline}</p>
                              </div>
                              <div className="text-right ml-4">
                                <div className="font-bold text-[var(--primary)]">
                                  ${service.price.from}
                                  {service.price.to && `+`}
                                </div>
                                <div className="text-small text-gray-600">{service.duration}</div>
                              </div>
                            </div>
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Choose Stylist */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-heading mb-6">Choose Your Professional</h2>
                
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, stylistId: 'any' })}
                  className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                    formData.stylistId === 'any'
                      ? 'border-[var(--primary)] bg-[var(--primary-50)]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-bold text-gray-900 mb-2">No Preference</h4>
                  <p className="text-small text-gray-600">
                    We'll match you with an available professional who specializes in your service
                  </p>
                </button>

                <div className="grid md:grid-cols-2 gap-4">
                  {teamMembers.slice(0, 8).map((member) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, stylistId: member.id })}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.stylistId === member.id
                          ? 'border-[var(--primary)] bg-[var(--primary-50)]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-2xl shrink-0">
                          👤
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">{member.name}</h4>
                          <p className="text-small text-[var(--primary)]">{member.title}</p>
                          <p className="text-small text-gray-600 mt-1">
                            {member.yearsExperience} years exp.
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-heading mb-6">Select Date & Time</h2>
                
                <div>
                  <label className="block text-body font-semibold text-gray-900 mb-3">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[var(--primary)] focus:outline-none"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-body font-semibold text-gray-900 mb-3">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                      '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
                      '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
                      '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
                    ].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`p-3 rounded-lg border-2 transition-all text-small font-semibold ${
                          formData.time === time
                            ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Your Information */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-heading mb-6">Your Information</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-body font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary)] focus:outline-none"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-body font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary)] focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-body font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary)] focus:outline-none"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-body font-semibold text-gray-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary)] focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-body font-semibold text-gray-900 mb-2">
                    Is this your first visit?
                  </label>
                  <div className="flex gap-4">
                    {['yes', 'no'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, isNewClient: option })}
                        className={`flex-1 p-3 rounded-lg border-2 transition-all font-semibold ${
                          formData.isNewClient === option
                            ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {option === 'yes' ? 'Yes, First Visit' : 'No, Returning Client'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-body font-semibold text-gray-900 mb-2">
                    Special Requests or Notes (Optional)
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary)] focus:outline-none"
                    rows={4}
                    placeholder="Any specific preferences or concerns we should know about?"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Confirm */}
            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-heading mb-6">Confirm Your Appointment</h2>
                
                <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="text-subheading font-bold text-gray-900 mb-4">Appointment Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Scissors className="w-5 h-5 text-[var(--primary)] mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Service</p>
                        <p className="text-gray-700">{selectedService?.name}</p>
                        <p className="text-small text-gray-600">
                          {selectedService?.duration} • ${selectedService?.price.from}
                          {selectedService?.price.to && `+`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-[var(--primary)] mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Professional</p>
                        <p className="text-gray-700">
                          {selectedStylist ? selectedStylist.name : 'No preference'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[var(--primary)] mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Date & Time</p>
                        <p className="text-gray-700">
                          {new Date(formData.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <p className="text-gray-700">{formData.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[var(--primary)] mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Contact</p>
                        <p className="text-gray-700">
                          {formData.firstName} {formData.lastName}
                        </p>
                        <p className="text-gray-700">{formData.email}</p>
                        <p className="text-gray-700">{formData.phone}</p>
                      </div>
                    </div>

                    {formData.specialRequests && (
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-[var(--primary)] mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900">Special Requests</p>
                          <p className="text-gray-700">{formData.specialRequests}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
                  <p className="text-small text-gray-700">
                    <strong>Please Note:</strong> This is a booking request. We'll contact you within 24 hours to confirm your appointment. If you need immediate assistance, please call us at{' '}
                    <a href={siteConfig.contact.phone.href} className="text-[var(--primary)] font-semibold">
                      {siteConfig.contact.phone.display}
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all"
                >
                  Back
                </button>
              )}
              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !formData.serviceId) ||
                    (step === 2 && !formData.stylistId) ||
                    (step === 3 && (!formData.date || !formData.time))
                  }
                  className="flex-1 px-8 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 px-8 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] font-semibold transition-all"
                >
                  Submit Booking Request
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
