'use client';

import { useState } from 'react';

export default function AccountPageClient() {
  const [form, setForm] = useState({ username: '', password: '', reason: '' });
  const [confirm, setConfirm] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setConfirm(true);
  }

  function handleConfirm() {
    setDeleted(true);
    setConfirm(false);
  }

  return (
    <>
      <section className="acc-hero">
        <div className="acc-hero-orb acc-orb-a" aria-hidden="true" />
        <div className="acc-hero-orb acc-orb-b" aria-hidden="true" />
        <div className="container acc-hero-inner">
          <div className="acc-hero-text">
            <span className="acc-hero-badge">Account Management</span>
            <h1 className="acc-hero-h1">Your Account</h1>
            <p className="acc-hero-sub">
              Manage your Automate IT Limited account settings. Use the options below to update your preferences or permanently delete your account.
            </p>
          </div>
        </div>
      </section>

      <section className="acc-section">
        <div className="container acc-layout">

          <div className="acc-sidebar">
            <h3 className="acc-sidebar-title">Account Menu</h3>
            <ul className="acc-sidebar-menu">
              <li className="acc-menu-item active">
                <span className="acc-menu-icon">🗑️</span>Delete Account
              </li>
              <li className="acc-menu-item">
                <span className="acc-menu-icon">🔑</span>Change Password
              </li>
              <li className="acc-menu-item">
                <span className="acc-menu-icon">👤</span>Profile Settings
              </li>
              <li className="acc-menu-item">
                <span className="acc-menu-icon">🔔</span>Notifications
              </li>
            </ul>
          </div>

          <div className="acc-content">
            {deleted ? (
              <div className="acc-deleted-msg">
                <div className="acc-deleted-icon">✓</div>
                <h2>Account Deleted</h2>
                <p>Your account has been permanently deleted. All associated data has been removed from our systems.</p>
              </div>
            ) : (
              <div className="acc-delete-card">
                <div className="acc-delete-header">
                  <div className="acc-delete-icon-wrap">
                    <span className="acc-delete-icon">⚠️</span>
                  </div>
                  <div>
                    <h2 className="acc-delete-title">Delete Account</h2>
                    <p className="acc-delete-desc">
                      Deleting your account is <strong>permanent</strong>. All your data will be wiped out immediately and you won&apos;t be able to get it back.
                    </p>
                  </div>
                </div>

                <div className="acc-warning-strip">
                  <span className="acc-warn-icon">⚠</span>
                  This action cannot be undone. Please be absolutely sure before proceeding.
                </div>

                <form className="acc-form" onSubmit={handleSubmit}>
                  <div className="acc-form-group">
                    <label className="acc-label" htmlFor="username">Username</label>
                    <input
                      id="username" name="username" type="text"
                      className="acc-input" placeholder="Enter your username"
                      value={form.username} onChange={handleChange} required
                    />
                  </div>
                  <div className="acc-form-group">
                    <label className="acc-label" htmlFor="password">Password</label>
                    <input
                      id="password" name="password" type="password"
                      className="acc-input" placeholder="Enter your password to confirm"
                      value={form.password} onChange={handleChange} required
                    />
                  </div>
                  <div className="acc-form-group">
                    <label className="acc-label" htmlFor="reason">
                      Reason for deletion <span className="acc-optional">(optional)</span>
                    </label>
                    <textarea
                      id="reason" name="reason" rows={4}
                      className="acc-input acc-textarea"
                      placeholder="Tell us why you are leaving (optional)..."
                      value={form.reason} onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="acc-delete-btn">
                    🗑️ Delete My Account
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {confirm && (
        <div className="acc-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <div className="acc-modal">
            <div className="acc-modal-icon">⚠️</div>
            <h2 id="confirm-title" className="acc-modal-title">Are you absolutely sure?</h2>
            <p className="acc-modal-text">
              This will permanently delete your account and all associated data. This action <strong>cannot be undone</strong>.
            </p>
            <div className="acc-modal-actions">
              <button className="acc-modal-cancel" onClick={() => setConfirm(false)}>
                Cancel
              </button>
              <button className="acc-modal-confirm" onClick={handleConfirm}>
                Yes, Delete My Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
