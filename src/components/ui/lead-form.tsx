'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { leadFormSchema, LeadFormData } from '@/lib/lead-form-schema';

export default function LeadForm({ onSuccess }: { onSuccess?: () => void }) {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    restaurantName: '',
    posSystem: '',
    noofresturant: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Zod validation
    const validation = leadFormSchema.safeParse(formData);
    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong");
        return;
      }

      toast.success("Submitted successfully!");

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
    } catch (error) {
      toast.error("Failed to submit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="restaurantName"
          placeholder="Restaurant Name"
          value={formData.restaurantName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          name="posSystem"
          placeholder="POS System"
          value={formData.posSystem}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      <input
        name="noofresturant"
        placeholder="Number of Restaurants"
        value={formData.noofresturant}
        onChange={handleChange}
        className="px-4 py-3 bg-slate-900 rounded-full text-white w-full"
      />

      <Button 
        type="submit" 
        disabled={loading}
        variant="roundedGreen" 
        size="roundedGreen" 
        className="w-full sm:w-auto"
      >
        {loading ? "Sending..." : "Send"}
        {!loading && <ArrowRight className="ml-3 w-5 h-5" />}
      </Button>
    </form>
  );
}
