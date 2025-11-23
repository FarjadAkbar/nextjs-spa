'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./lead-form";

export default function LeadFormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={onClose}>
          <DialogContent 
            className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-0 rounded-2xl shadow-2xl border border-white/10 max-w-lg overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="p-6"
            >
              <DialogHeader className="space-y-2">
                <DialogTitle className="text-3xl font-extrabold">
                  Start Your Free Trial 🚀
                </DialogTitle>

                <p className="text-white/70 text-sm">
                  Unlock premium features, boost your productivity, and grow faster—
                  no credit card required.
                </p>
              </DialogHeader>

              <div className="mt-6">
                <LeadForm onSuccess={onClose} />
              </div>

              <div className="mt-6 text-center text-xs text-white/40">
                Your information is safe and will never be shared.
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
