'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { leadFormSchema, LeadFormData } from '@/lib/lead-form-schema';
import en from '@/locales/en.json';

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
        toast.error(data.error || en.leadForm.validation.submissionError);
        return;
      }

      toast.success(en.leadForm.validation.submissionSuccess);

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
      toast.error(en.leadForm.validation.submissionError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder={en.leadForm.form.firstName}
          value={formData.firstName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          name="lastName"
          placeholder={en.leadForm.form.lastName}
          value={formData.lastName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="email"
          placeholder={en.leadForm.form.email}
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          name="phone"
          placeholder={en.leadForm.form.phone}
          value={formData.phone}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="restaurantName"
          placeholder={en.leadForm.form.restaurantName}
          value={formData.restaurantName}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
        <input
          name="posSystem"
          placeholder={en.leadForm.form.posSystem}
          value={formData.posSystem}
          onChange={handleChange}
          className="px-4 py-3 bg-slate-900 rounded-full text-white"
        />
      </div>

      <input
        name="noofresturant"
        placeholder={en.leadForm.form.noOfRestaurants}
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
        {loading ? en.leadForm.form.submit.sending : en.leadForm.form.submit.default}
        {!loading && <ArrowRight className="ml-3 w-5 h-5" />}
      </Button>
    </form>
  );
}
