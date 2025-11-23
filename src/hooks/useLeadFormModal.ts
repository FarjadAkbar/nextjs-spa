import { create } from 'zustand'

interface LeadFormModalStore {
  popupOpen: boolean
  setPopupOpen: (value: boolean) => void
}

export const useLeadFormModal = create<LeadFormModalStore>((set) => ({
  popupOpen: false,
  setPopupOpen: (value) => set({ popupOpen: value }),
}))
