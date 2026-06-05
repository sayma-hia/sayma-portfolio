"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject) e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setLoading(true);

    // TODO: Replace YOUR_FORM_ID with your Formspree form ID
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#12A585]/10 border border-[#12A585]/30 rounded-xl p-8 text-center">
        <CheckCircle className="mx-auto mb-3 text-[#12A585]" size={40} />
        <p className="text-[#1A1A2E] font-semibold text-lg">Thanks!</p>
        <p className="text-[#4A5568] mt-1">
          {"I'll get back to you within 48 hours."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full border rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] outline-none focus:ring-2 focus:ring-[#12A585]/40 transition ${
            errors.name ? "border-red-400" : "border-[#E2E8F0]"
          }`}
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full border rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] outline-none focus:ring-2 focus:ring-[#12A585]/40 transition ${
            errors.email ? "border-red-400" : "border-[#E2E8F0]"
          }`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`w-full border rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] outline-none focus:ring-2 focus:ring-[#12A585]/40 transition bg-white ${
            errors.subject ? "border-red-400" : "border-[#E2E8F0]"
          }`}
        >
          <option value="">Select a subject</option>
          <option value="Job opportunity">Job opportunity</option>
          <option value="Freelance project">Freelance project</option>
          <option value="Collaboration">Collaboration</option>
          <option value="General">General</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`w-full border rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] outline-none focus:ring-2 focus:ring-[#12A585]/40 transition resize-y ${
            errors.message ? "border-red-400" : "border-[#E2E8F0]"
          }`}
          placeholder="Tell me about your project or opportunity..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#12A585] hover:bg-[#0D8A6F] text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={16} />
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
