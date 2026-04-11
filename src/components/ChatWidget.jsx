'use client';

import { useState } from 'react';

const initialForm = {
  bdNumber: '',
  gmail: '',
  companyName: '',
  address: '',
  messageQuery: '',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="chat-widget">
      {open && (
        <aside className="chat-panel" aria-label="Help and conversation panel">
          <button type="button" className="chat-back" onClick={() => setOpen(false)}>
            Back
          </button>
          <div className="chat-panel-header">
            <div className="chat-panel-icon">💬</div>
            <div>
              <p className="chat-greeting">Hi there 👋</p>
              <h2>Need help?</h2>
            </div>
          </div>
          <p className="chat-panel-text">
            Search our help center for answers or start a conversation. We typically reply in a few minutes.
          </p>

          <div className="chat-actions">
            <button type="button" className="chat-action-card">Help Center</button>
            <button type="button" className="chat-action-card">Search for answers</button>
            <button type="button" className="chat-action-card">New Conversation</button>
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <input name="bdNumber" value={form.bdNumber} onChange={handleChange} placeholder="BD Number" />
            <input name="gmail" type="email" value={form.gmail} onChange={handleChange} placeholder="Gmail" />
            <input name="companyName" value={form.companyName} onChange={handleChange} placeholder="Company Name" />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
            <textarea name="messageQuery" value={form.messageQuery} onChange={handleChange} placeholder="Message Query" rows={4} />
            <button type="submit" className="btn-primary chat-submit">Send Message</button>
            {submitted && <p className="chat-success">Your query is ready to send. We can connect this form to email or API next.</p>}
          </form>
        </aside>
      )}

      <button type="button" className="chat-launcher" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label="Open chat widget">
        <span className="chat-launcher-ring" />
        <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  );
}
