/** @format */
"use client";
import LeadFormModal from '@/components/ui/lead-form-modal';
import { useLeadFormModal } from '@/hooks/useLeadFormModal';

export default function Providers() {
  const { popupOpen, setPopupOpen } = useLeadFormModal();
  return (
    <LeadFormModal
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
    />
  );
}
