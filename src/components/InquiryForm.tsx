import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

// ---------------------------------------------------------------------------
// FORMSPREE ENDPOINT
// Replace the placeholder below with your own Formspree form endpoint.
// 1. Create a free account at https://formspree.io
// 2. Create a new form — Formspree gives you a URL like
//    https://formspree.io/f/abcd1234
// 3. Paste that URL here. Every submission below will then land in the
//    inbox connected to that Formspree form — no server, no client panel,
//    no accounts needed.
// ---------------------------------------------------------------------------
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

interface InquiryFormProps {
  /** Optional prefilled subject, e.g. "Leasing — BMW X5" used in the email subject line */
  subject?: string;
  /** Show the "car of interest" free-text field */
  showCarField?: boolean;
  /** Show the "budget" free-text field */
  showBudgetField?: boolean;
  /** Default value for the message textarea */
  defaultMessage?: string;
}

export default function InquiryForm({
  subject,
  showCarField = true,
  showBudgetField = false,
  defaultMessage = '',
}: InquiryFormProps) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    if (subject) data.append('_subject', subject);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 size={40} className="text-accent mx-auto mb-4" />
        <h3 className="text-xl text-white mb-2">{t.inquiryForm.sentTitle}</h3>
        <p className="text-text-muted">{t.inquiryForm.sentBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-muted mb-1.5">{t.inquiryForm.fullName}</label>
          <input name="name" type="text" required className="input-field" />
        </div>
        <div>
          <label className="block text-sm text-text-muted mb-1.5">{t.inquiryForm.phone}</label>
          <input name="phone" type="tel" required className="input-field" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-text-muted mb-1.5">{t.inquiryForm.email}</label>
        <input name="email" type="email" required className="input-field" />
      </div>

      {showCarField && (
        <div>
          <label className="block text-sm text-text-muted mb-1.5">{t.inquiryForm.carInterest}</label>
          <input
            name="car_interest"
            type="text"
            placeholder={t.inquiryForm.carInterestPlaceholder}
            className="input-field"
          />
        </div>
      )}

      {showBudgetField && (
        <div>
          <label className="block text-sm text-text-muted mb-1.5">{t.inquiryForm.budget}</label>
          <input
            name="budget"
            type="text"
            placeholder={t.inquiryForm.budgetPlaceholder}
            className="input-field"
          />
        </div>
      )}

      <div>
        <label className="block text-sm text-text-muted mb-1.5">{t.inquiryForm.message}</label>
        <textarea
          name="message"
          rows={4}
          defaultValue={defaultMessage}
          placeholder={t.inquiryForm.messagePlaceholder}
          className="input-field resize-none"
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs text-text-muted">
        <input name="consent" type="checkbox" required className="mt-0.5 accent-accent" />
        {t.inquiryForm.consent}
      </label>

      {status === 'error' && (
        <p className="text-sm text-red-400">{t.inquiryForm.errorBody}</p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
        <Send size={16} />
        {status === 'sending' ? '…' : t.inquiryForm.send}
      </button>
    </form>
  );
}
