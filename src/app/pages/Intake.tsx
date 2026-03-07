import React, { useState } from 'react';
import { X, ShieldCheck, Save, ArrowRight, CheckCircle, FileText, Calendar, Phone, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { GoogleReviews } from '../components/GoogleReviews';
import {
  WP_CONFIG,
  SERVICE_AREAS,
  SERVICE_TYPES,
  PREFERRED_DAYS,
  TIME_SLOTS,
  submitIntakeForm,
  simulateFormSubmission,
  isWordPressConnected,
  type IntakeFormData,
} from '../../lib/wordpress';

export const Intake = () => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ─── Form State ──────────────────────────────────────────────────────
  const [formData, setFormData] = useState<IntakeFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    area: '',
    serviceType: '',
    reason: '',
    preferredDays: [],
    preferredTime: '',
  });

  // ─── Handlers ────────────────────────────────────────────────────────
  const updateField = (field: keyof IntakeFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDay = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter((d) => d !== day)
        : [...prev.preferredDays, day],
    }));
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(step + 1);
  };

  /**
   * Submit to WordPress Contact Form 7 REST API.
   * Falls back to a simulated submission in dev mode when
   * no WordPress URL is configured.
   */
  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);

    try {
      const result = isWordPressConnected()
        ? await submitIntakeForm(formData)
        : await simulateFormSubmission();

      if (result.status === 'mail_sent') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(3);
      } else if (result.status === 'validation_failed') {
        setSubmitError(
          result.invalid_fields.map((f) => f.message).join(' ') ||
            'Please check your information and try again.'
        );
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again or call us.');
      }
    } catch {
      setSubmitError('Unable to reach the server. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  // ─── Shared input class ──────────────────────────────────────────────
  const inputClass =
    'w-full p-3 bg-white border border-brand-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all';

  return (
    <div className="min-h-screen bg-white pt-28 pb-12">
      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col min-h-[600px]">

        {/* ── Call Us Banner ─────────────────────────────────────────── */}
        <div className="mx-8 mt-6 mb-2 bg-gradient-to-r from-[#0BA4AE]/5 to-[#088f98]/5 border border-[#0BA4AE]/15 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0BA4AE] flex items-center justify-center text-white shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-[#2D3436]">Prefer to speak with someone?</p>
              <p className="text-brand-500 text-sm">Give us a call — we're happy to walk you through everything.</p>
            </div>
          </div>
          <a
            href={WP_CONFIG.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0BA4AE] text-white font-bold rounded-md hover:bg-[#088f98] transition-all shadow-sm whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            {WP_CONFIG.phoneNumber}
          </a>
        </div>

        {/* ── Header ────────────────────────────────────────────────── */}
        <div className="px-8 py-6 border-b border-brand-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              HIPAA SECURE
            </div>
            <span className="text-brand-400 text-sm font-medium">Encrypted End-to-End</span>
          </div>
          <Link to="/" className="text-brand-400 hover:text-brand-900 transition-colors">
            <X className="w-6 h-6" />
          </Link>
        </div>

        {/* ── Progress Bar ──────────────────────────────────────────── */}
        <div className="bg-brand-50 px-8 py-4 border-b border-brand-100">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-brand-200 -z-10" />
            {['Intake', 'Verification', 'Confirmation'].map((label, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-2 bg-brand-50 px-2 ${
                  step >= i + 1 ? 'text-[#0BA4AE]' : 'text-brand-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    step >= i + 1 ? 'bg-[#0BA4AE] text-white' : 'bg-brand-200 text-brand-500'
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Content Area ──────────────────────────────────────────── */}
        <div className="flex-1">

          {/* ── STEP 1: Intake Form ─────────────────────────────────── */}
          {step === 1 && (
            <div className="p-8 md:p-12">
              <div className="space-y-12">

                {/* Section: Patient Information */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-900 mb-6">Patient Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-brand-700">First Name</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => updateField('firstName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-brand-700">Last Name</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => updateField('lastName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-brand-700">Email Address</label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-brand-700">Phone Number</label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-brand-700">City / Area of the Valley</label>
                      <select
                        className={`${inputClass} text-brand-600`}
                        value={formData.area}
                        onChange={(e) => updateField('area', e.target.value)}
                      >
                        <option value="">Select your area...</option>
                        {SERVICE_AREAS.map((a) => (
                          <option key={a.value} value={a.value}>
                            {a.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section: Clinical Details */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-900 mb-6">Clinical Details</h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-brand-700">Service Type</label>
                      <select
                        className={`${inputClass} text-brand-600`}
                        value={formData.serviceType}
                        onChange={(e) => updateField('serviceType', e.target.value)}
                      >
                        <option value="">Select a service...</option>
                        {SERVICE_TYPES.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-brand-700">Reason for Inquiry</label>
                      <textarea
                        className={`${inputClass} h-32 resize-none`}
                        placeholder="Please briefly describe your symptoms, goals, or reason for seeking care..."
                        value={formData.reason}
                        onChange={(e) => updateField('reason', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Scheduling Preferences */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-900 mb-6">Scheduling Preferences</h2>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-brand-700">Preferred Days</label>
                      <div className="flex flex-wrap gap-2">
                        {PREFERRED_DAYS.map((day) => (
                          <button
                            key={day}
                            onClick={() => toggleDay(day)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                              formData.preferredDays.includes(day)
                                ? 'bg-[#0BA4AE] text-white border-[#0BA4AE]'
                                : 'bg-white text-brand-600 border-brand-300 hover:border-[#0BA4AE] hover:text-[#0BA4AE]'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-brand-700">Preferred Time of Day</label>
                      <select
                        className={`${inputClass} text-brand-600`}
                        value={formData.preferredTime}
                        onChange={(e) => updateField('preferredTime', e.target.value)}
                      >
                        {TIME_SLOTS.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ── STEP 2: Verification ────────────────────────────────── */}
          {step === 2 && (
            <div className="p-8 md:p-12 max-w-2xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-[#0BA4AE]">
                <FileText className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-brand-900">Review Your Details</h2>
                <p className="text-brand-500 text-lg">Please verify your information before submitting.</p>
              </div>

              <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 text-left space-y-4">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-brand-200">
                  <div>
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">Name</span>
                    <p className="font-medium text-brand-900">
                      {formData.firstName} {formData.lastName || '—'}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">Email</span>
                    <p className="font-medium text-brand-900">{formData.email || '—'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-brand-200">
                  <div>
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">Phone</span>
                    <p className="font-medium text-brand-900">{formData.phone || '—'}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">City / Area</span>
                    <p className="font-medium text-brand-900">
                      {SERVICE_AREAS.find((a) => a.value === formData.area)?.label || '—'}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-brand-200">
                  <div>
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">Service Type</span>
                    <p className="font-medium text-brand-900">
                      {SERVICE_TYPES.find((s) => s.value === formData.serviceType)?.label || '—'}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">Preferred Days</span>
                    <p className="font-medium text-brand-900">
                      {formData.preferredDays.length > 0 ? formData.preferredDays.join(', ') : '—'}
                    </p>
                  </div>
                </div>
                {formData.reason && (
                  <div className="pb-2">
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">Reason for Inquiry</span>
                    <p className="font-medium text-brand-900 text-sm">{formData.reason}</p>
                  </div>
                )}
              </div>

              {/* Submission error */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 text-left">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-red-800">{submitError}</p>
                    <a
                      href={WP_CONFIG.phoneHref}
                      className="text-sm text-[#0BA4AE] font-bold hover:underline mt-1 inline-block"
                    >
                      Call us instead: {WP_CONFIG.phoneNumber}
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── STEP 3: Confirmation ────────────────────────────────── */}
          {step === 3 && (
            <div className="p-8 md:p-12 max-w-2xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-brand-900">Intake Submitted!</h2>
                <p className="text-brand-500 text-lg max-w-md mx-auto">
                  Thank you for starting your journey with ReThrive. Our team has received your information and will contact you shortly to schedule your appointment.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-[#0BA4AE] font-bold hover:underline"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer Actions ────────────────────────────────────────── */}
        {step < 3 && (
          <div className="bg-white px-8 py-6 border-t border-brand-100 mt-auto">
            {/* Legal Disclaimer */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex gap-3">
              <div className="shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
                By submitting this form, you acknowledge that this is a preliminary intake and does not establish a doctor-patient relationship until a formal evaluation is conducted. All information is stored securely in compliance with HIPAA regulations.
              </p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-4">
              <button
                onClick={() => {
                  if (step > 1) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setStep(step - 1);
                  }
                }}
                className="px-6 py-3 border border-brand-300 text-brand-600 font-bold rounded-md hover:bg-white hover:border-brand-400 transition-all flex items-center justify-center gap-2"
              >
                {step === 1 ? (
                  <>
                    <Save className="w-4 h-4" />
                    Save Draft
                  </>
                ) : (
                  'Go Back'
                )}
              </button>
              <button
                onClick={step === 2 ? handleSubmit : handleNext}
                disabled={submitting}
                className="px-6 py-3 bg-[#0BA4AE] text-white font-bold rounded-md hover:bg-[#088f98] transition-all shadow-lg shadow-[#0BA4AE]/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  'Submitting...'
                ) : step === 1 ? (
                  <>
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Confirm & Submit
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Google Reviews Testimonials */}
      <GoogleReviews />
    </div>
  );
};
