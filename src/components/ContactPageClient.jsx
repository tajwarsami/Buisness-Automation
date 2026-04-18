'use client';

import { useState } from 'react';
import PageHero from './PageHero';

const OFFICES = [
  {
    name: 'Head Office',
    icon: '🏢',
    phone: '051-526647/48, 9855021231',
    email: 'info@dynamic.net.np',
    address: 'Beside Trimurti Cinema, Birgunj, Nepal',
    color: '#0057A8',
  },
  {
    name: 'Corporate Office',
    icon: '🏙️',
    phone: '9801087091, 9851163652',
    email: 'info@dynamic.net.np',
    address: 'B & S Complex, Shankhamul Marga, Kathmandu',
    color: '#0072c3',
  },
  {
    name: 'Butwal Branch',
    icon: '📍',
    phone: '9857030577',
    email: 'info@dynamic.net.np',
    address: 'Butwal, Traffic Chowk, Nepal',
    color: '#0096D6',
  },
  {
    name: 'Itahari Branch',
    icon: '📍',
    phone: '+977-9801050626',
    email: 'info@dynamic.net.np',
    address: 'Dharan Line, Opposite Nepal Army Camp, Itahari-4, Sunsari, Nepal',
    color: '#00a8e8',
  },
  {
    name: 'India Branch',
    icon: '🌐',
    phone: '+91 85810 04142',
    email: 'info@dynamic.net.np',
    address: 'Maharaja Enclave, Kaliket Nagar, Patna, Bihar',
    color: '#006fb8',
  },
];

export default function ContactPageClient() {
  const [form, setForm] = useState({
    org: '', email: '', phone: '', subject: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="You can contact us at any time for support. We value our customers more than anything & put our best to provide you with the best quality support."
        badges={['24/7 Support', '5 Offices', 'Nepal & India']}
        theme="blue"
      />

      <section className="cp-form-section">
        <div className="container cp-form-grid">

          <div className="cp-form-left">
            <span className="cp-section-label">Ready to get started?</span>
            <h2 className="cp-form-heading">Send Us a Message</h2>
            <p className="cp-form-sub">
              Fill in the form and our team will get back to you within one business day.
            </p>

            {sent ? (
              <div className="cp-success">
                <span className="cp-success-icon">✓</span>
                <div>
                  <strong>Message Sent!</strong>
                  <p>Thank you for reaching out. We will get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit} noValidate>
                <div className="cp-form-group">
                  <label className="cp-label" htmlFor="org">Organization Name</label>
                  <input
                    id="org" name="org" type="text"
                    className="cp-input" placeholder="Your organization or company name"
                    value={form.org} onChange={handleChange} required
                  />
                </div>
                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="email">Email</label>
                    <input
                      id="email" name="email" type="email"
                      className="cp-input" placeholder="your@email.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="cp-input" placeholder="+977 98XXXXXXXX"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="cp-form-group">
                  <label className="cp-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    className="cp-input" placeholder="What is this about?"
                    value={form.subject} onChange={handleChange} required
                  />
                </div>
                <div className="cp-form-group">
                  <label className="cp-label" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    className="cp-input cp-textarea" placeholder="Write your message here..."
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                <button type="submit" className="cp-submit" disabled={loading}>
                  {loading ? (
                    <><span className="cp-spinner" />Sending...</>
                  ) : (
                    <>Send Message <span className="cp-arrow">→</span></>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="cp-contact-info">
            <span className="cp-section-label">Where To Find Us</span>
            <h2 className="cp-form-heading">Our Locations</h2>
            <div className="cp-offices">
              {OFFICES.map((office) => (
                <div key={office.name} className="cp-office-card">
                  <div className="cp-office-icon-wrap" style={{ background: office.color }}>
                    <span className="cp-office-icon">{office.icon}</span>
                  </div>
                  <div className="cp-office-body">
                    <h3 className="cp-office-name">{office.name}</h3>
                    <ul className="cp-office-details">
                      <li>
                        <span className="cp-detail-icon">📞</span>
                        <span>{office.phone}</span>
                      </li>
                      <li>
                        <span className="cp-detail-icon">✉</span>
                        <span>{office.email}</span>
                      </li>
                      <li>
                        <span className="cp-detail-icon">📍</span>
                        <span>{office.address}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
