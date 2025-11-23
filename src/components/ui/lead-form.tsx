'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function LeadForm({ onSuccess }: { onSuccess?: () => void }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    restaurantName: '',
    posSystem: '',
    noofresturant: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone: string) => /^\+?\d{6,15}$/.test(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, restaurantName, posSystem } = formData;

    if (!firstName || !lastName || !email || !phone || !restaurantName || !posSystem) {
      toast.error('Please fill out all fields.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    toast.success('Your message has been sent successfully.');

    if (onSuccess) onSuccess();

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      restaurantName: '',
      posSystem: '',
      noofresturant: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="restaurantName"
          placeholder="Restaurant Name"
          value={formData.restaurantName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          type="text"
          name="posSystem"
          placeholder="POS System"
          value={formData.posSystem}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      {/* Row 4 */}
      <input
        type="text"
        name="noofresturant"
        placeholder="Number of Restaurants"
        value={formData.noofresturant}
        onChange={handleChange}
        className="px-4 py-3 bg-slate-900 rounded-full text-white w-full"
      />

      <Button variant="roundedGreen" size="roundedGreen" className="w-full sm:w-auto">
        Send
        <ArrowRight className="ml-3 w-5 h-5" />
      </Button>
    </form>
  );
}