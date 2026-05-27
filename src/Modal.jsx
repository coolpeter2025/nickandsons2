/* global React, SERVICES */
const { useState, useEffect } = React;

function ConsultModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: SERVICES[0].name, msg: "" });
  const [sent, setSent] = useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => { if (open) setSent(false); }, [open]);

  if (!open) return null;

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 200, background: "rgba(14,17,40,.75)",
      backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      animation: "kb-fade .2s ease",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "var(--surface)", borderRadius: 10, maxWidth: 560, width: "100%",
        maxHeight: "90vh", overflow: "auto",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,.5)",
      }}>
        <div style={{ padding: "32px 36px 28px", borderBottom: "1px solid var(--lavender-hover)", position: "relative" }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Free Estimate</p>
          <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--ink)", margin: 0 }}>
            Let's talk about your <em style={{ fontStyle: "italic", color: "var(--accent)" }}>project.</em>
          </h2>
          <button onClick={onClose} aria-label="Close" style={{
            position: "absolute", top: 20, right: 20, width: 36, height: 36, borderRadius: 18,
            background: "var(--lavender-hover)", border: 0, color: "var(--ink)", fontSize: 16,
            cursor: "pointer", fontFamily: "inherit",
          }}>✕</button>
        </div>
        <div style={{ padding: 36 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{
                width: 56, height: 56, borderRadius: 28, background: "var(--accent)",
                color: "var(--on-accent)", display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em", margin: "0 0 10px" }}>Thank you!</h3>
              <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.6, margin: 0 }}>
                Nik or one of the boys will reach out within one business day.
              </p>
              <button onClick={onClose} style={{
                marginTop: 24, padding: "12px 24px", background: "var(--accent)", color: "var(--on-accent)",
                border: 0, borderRadius: 6, fontWeight: 700, fontSize: 13,
                letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer",
                fontFamily: "inherit",
              }}>Close</button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "grid", gap: 16 }}>
              <Lbl label="Your name">
                <input required value={form.name} onChange={e => update("name", e.target.value)} style={mInput}/>
              </Lbl>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Lbl label="Email">
                  <input type="email" required value={form.email} onChange={e => update("email", e.target.value)} style={mInput}/>
                </Lbl>
                <Lbl label="Phone">
                  <input type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} style={mInput}/>
                </Lbl>
              </div>
              <Lbl label="What can we help with?">
                <select value={form.service} onChange={e => update("service", e.target.value)} style={mInput}>
                  {SERVICES.map(s => <option key={s.slug}>{s.name}</option>)}
                </select>
              </Lbl>
              <Lbl label="Tell us a bit about it">
                <textarea value={form.msg} onChange={e => update("msg", e.target.value)} rows={4}
                  style={{ ...mInput, resize: "vertical", minHeight: 100 }}/>
              </Lbl>
              <button type="submit" style={{
                marginTop: 8, padding: "15px 28px", background: "var(--accent)", color: "var(--on-accent)",
                border: 0, borderRadius: 6, fontWeight: 700, fontSize: 14,
                letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer",
                fontFamily: "inherit",
              }}>Send Request</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const mInput = {
  width: "100%", padding: "12px 14px", borderRadius: 6,
  border: "1px solid var(--lavender-hover)", background: "var(--surface)",
  fontFamily: "inherit", fontSize: 14, color: "var(--ink)", outline: "none",
  boxSizing: "border-box",
};
function Lbl({ label, children }) {
  return (
    <label>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 6 }}>{label}</div>
      {children}
    </label>
  );
}

window.ConsultModal = ConsultModal;
