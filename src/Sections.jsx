/* global React, BRAND, IMG, PROMISE, DIFFS, STATS, PROCESS, SERVICES, TESTIMONIALS, PORTFOLIO */
const { useState, useEffect, useRef } = React;

// ─────────────────────────────────────────────────────────────
// HERO — big photo, editorial italic headline
// ─────────────────────────────────────────────────────────────
function Hero({ openConsult }) {
  return (
    <section style={{ position: "relative", minHeight: "min(92vh, 860px)", background: "#0e1821" }}>
      <img src={IMG.hero} alt="" className="reveal-zoom" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", opacity: 0.55, "--reveal-zoom-opacity": 0.55,
      }}/>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(14,24,33,0.65) 0%, rgba(14,24,33,0.35) 35%, rgba(14,24,33,0.85) 100%)",
      }}/>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 80% at 15% 70%, rgba(14,24,33,0.70), transparent 70%)",
      }}/>

      <div className="container" style={{
        position: "relative", padding: "140px 32px 80px",
        minHeight: "min(92vh, 860px)",
        display: "flex", alignItems: "flex-end",
      }}>
        <div className="reveal-shimmer reveal-up" style={{ maxWidth: 820, color: "#fff" }}>
          <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 22 }}>
            Tampa Bay Handyman
          </p>
          <h1 style={{
            fontSize: "clamp(44px, 6.5vw, 88px)",
            fontWeight: 500, lineHeight: 1.02,
            letterSpacing: "-0.025em", marginBottom: 28,
            textWrap: "balance",
          }}>
            Your honey-do list,{" "}
            <em style={{ fontWeight: 500, fontStyle: "italic", color: "var(--accent)" }}>
              handled.
            </em>
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,0.88)",
            maxWidth: 580, marginBottom: 36,
          }}>
            Residential handyman services across Tampa Bay and surrounding
            areas — drywall, paint, flooring, doors, trim, cleanup, assembly,
            and the whole honey-do list. One call, one crew, done right.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
            <button onClick={openConsult} style={{
              background: "var(--accent)", color: "var(--on-accent)", border: 0,
              borderRadius: 6, padding: "16px 32px", fontWeight: 700, fontSize: 15,
              letterSpacing: ".03em", textTransform: "uppercase", cursor: "pointer",
              fontFamily: "inherit",
            }}>Get Free Estimate</button>
            <a href={`tel:${BRAND.phoneTampaTel}`} style={{
              background: "transparent", color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.6)",
              borderRadius: 6, padding: "14.5px 30px", fontWeight: 700, fontSize: 15,
              letterSpacing: ".03em", textTransform: "uppercase",
              textDecoration: "none", fontFamily: "inherit", whiteSpace: "nowrap",
            }}>Call {BRAND.phoneTampa}</a>
          </div>
          <div>
            <div style={{
              fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
              color: "rgba(255,255,255,.7)", fontWeight: 700, marginBottom: 14,
            }}>Our Promise</div>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {PROMISE.map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// DIFFERENTIATORS — 3 alternating image/text rows
// ─────────────────────────────────────────────────────────────
function DiffRow({ d, i }) {
  const flip = i % 2 === 1;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: 48, alignItems: "center",
      marginBottom: 120,
    }}>
      <div className="reveal-image" style={{
        gridColumn: flip ? "7 / span 6" : "1 / span 6",
        gridRow: 1,
        aspectRatio: "5/4", borderRadius: 4, overflow: "hidden",
        background: "var(--lavender)",
      }}>
        <img src={d.img} alt="" style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
        }}/>
      </div>
      <div className={flip ? "reveal-right" : "reveal-left"} style={{
        gridColumn: flip ? "1 / span 5" : "8 / span 5",
        gridRow: 1,
      }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>{d.kicker}</p>
        <h2 style={{
          fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 500, lineHeight: 1.1,
          letterSpacing: "-0.02em", margin: "0 0 20px", color: "var(--ink)",
        }} dangerouslySetInnerHTML={{
          __html: d.title.replace(/\*(.+?)\*/g, '<em style="font-style:italic;font-weight:500;color:var(--navy)">$1</em>')
        }}/>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--gray-600)", margin: 0 }}>{d.body}</p>
      </div>
    </div>
  );
}

function Differentiators({ openConsult }) {
  return (
    <section style={{ padding: "120px 0 40px", background: "var(--surface)" }}>
      <div className="container" style={{ padding: "0 32px", maxWidth: 1200 }}>
        {DIFFS.map((d, i) => <DiffRow key={i} d={d} i={i} />)}
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <button onClick={openConsult} style={{
            background: "var(--accent)", color: "var(--on-accent)", border: 0, borderRadius: 6,
            padding: "16px 32px", fontWeight: 700, fontSize: 14,
            letterSpacing: ".04em", textTransform: "uppercase", cursor: "pointer",
            fontFamily: "inherit",
          }}>Get Free Estimate</button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SERVICES — 4-up photo cards with italic script
// ─────────────────────────────────────────────────────────────
function ServicesStrip({ onNavigate }) {
  return (
    <section style={{ background: "var(--lavender)", padding: "110px 0 120px" }}>
      <div className="container" style={{ padding: "0 32px", maxWidth: 1200 }}>
        <div className="reveal-up" style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 64px" }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>What we do</p>
          <h2 style={{
            fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, lineHeight: 1.12,
            letterSpacing: "-0.02em", color: "var(--ink)", margin: 0,
          }}>
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Honest, hands-on</em>
            {" "}work for every room and every list.
          </h2>
        </div>
        <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {SERVICES.map(s => <ServicePhotoCard key={s.slug} s={s} onNavigate={onNavigate} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ fontSize: 15, color: "var(--gray-600)", fontStyle: "italic", margin: "0 0 24px" }}>
            …and more. Call, text, or email with any inquiry.
          </p>
          <button onClick={() => onNavigate("services")} style={{
            background: "transparent", color: "var(--accent)",
            border: "1.5px solid var(--accent)", borderRadius: 6,
            padding: "13px 28px", fontWeight: 700, fontSize: 13,
            letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer",
            fontFamily: "inherit",
          }}>View All Services →</button>
        </div>
      </div>
    </section>
  );
}

function ServicePhotoCard({ s, onNavigate }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={() => onNavigate(`service/${s.slug}`)}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "block", textAlign: "left", padding: 0, background: "none", border: 0,
        cursor: "pointer", fontFamily: "inherit", color: "var(--ink)",
      }}>
      <div style={{
        aspectRatio: "4/5", borderRadius: 4, overflow: "hidden", background: "var(--surface)",
        marginBottom: 18, position: "relative",
      }}>
        <img src={s.image} alt="" style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transform: h ? "scale(1.05)" : "scale(1)",
          transition: "transform .6s cubic-bezier(.2,.8,.2,1)",
        }}/>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, transparent 60%, rgba(26,31,58,0.45))",
        }}/>
      </div>
      <h3 style={{
        fontSize: 22, fontWeight: 500, margin: "0 0 6px",
        letterSpacing: "-0.01em", color: "var(--ink)",
      }}>{s.name}</h3>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        color: "var(--accent)", fontWeight: 700, fontSize: 13,
        letterSpacing: ".04em", textTransform: "uppercase",
      }}>
        Learn more <span style={{ transform: h ? "translateX(4px)" : "none", transition: "transform .2s" }}>→</span>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// FOUNDER NOTE + STATS band
// ─────────────────────────────────────────────────────────────
function FounderNote() {
  return (
    <section style={{ padding: "120px 0", background: "var(--surface)" }}>
      <div className="container" style={{ padding: "0 32px", maxWidth: 1200 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="reveal-left">
            <h2 style={{
              fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 500, lineHeight: 1.12,
              letterSpacing: "-0.02em", margin: "0 0 28px", color: "var(--ink)",
            }}>
              Partnering with you to create your{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>dream spaces.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--gray-600)", margin: "0 0 20px" }}>
              We know how scattered a home punch-list can feel. As a
              family-owned handyman service, we take an empathetic
              approach to every visit — listening to your priorities, walking
              through pricing in plain English, and helping you knock out the
              genuinely excited to wake up in a house that fits you.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--gray-600)", margin: "0 0 28px" }}>
              We invite you to experience the Nik &amp; Sons difference. Thank you
              for inviting us into your home.
            </p>
            <p style={{
              fontSize: 20, fontStyle: "italic", fontWeight: 500, color: "var(--accent)",
              margin: 0, fontFamily: "var(--font-display)",
            }}>{BRAND.founderNote}</p>
          </div>
          <div className="reveal-image" style={{
            aspectRatio: "3/4", borderRadius: 4, overflow: "hidden",
            background: "var(--lavender)",
          }}>
            <img src={IMG.founder} alt="Founder portrait"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section style={{ background: "var(--ink-fill)", color: "#fff", padding: "80px 0" }}>
      <div className="container" style={{ padding: "0 32px", maxWidth: 1200 }}>
        <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 500,
                letterSpacing: "-0.03em", lineHeight: 1, color: "#fff",
                marginBottom: 10,
              }}>{s.num}</div>
              <div style={{
                fontSize: 13, fontWeight: 600, letterSpacing: ".14em",
                textTransform: "uppercase", color: "var(--accent)",
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PORTFOLIO BAND on home — large image with CTA
// ─────────────────────────────────────────────────────────────
function PortfolioBand({ onNavigate }) {
  return (
    <section style={{ padding: "0", background: "var(--surface)" }}>
      <div style={{ position: "relative", aspectRatio: "16/7", overflow: "hidden" }}>
        <img src={PORTFOLIO[5].img} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
        }}/>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(26,31,58,.65) 0%, rgba(26,31,58,.15) 60%)",
        }}/>
        <div className="container" style={{
          position: "absolute", inset: 0, padding: "0 32px",
          display: "flex", flexDirection: "column", justifyContent: "center",
          color: "#fff", maxWidth: 1200, margin: "0 auto",
        }}>
          <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 16 }}>Our Work</p>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500, lineHeight: 1.05,
            letterSpacing: "-0.025em", margin: "0 0 28px", maxWidth: 720,
          }}>
            Every project is a<br/>
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>one-of-one.</em>
          </h2>
          <div>
            <button onClick={() => onNavigate("portfolio")} style={{
              background: "var(--accent)", color: "var(--on-accent)", border: 0, borderRadius: 6,
              padding: "14px 28px", fontWeight: 700, fontSize: 13,
              letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer",
              fontFamily: "inherit",
            }}>View Portfolio →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS carousel
// ─────────────────────────────────────────────────────────────
function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const len = TESTIMONIALS.length;

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setI(x => (x + 1) % len), 7000);
    return () => clearInterval(t);
  }, [auto, len]);

  const t = TESTIMONIALS[i];
  const go = (n) => { setI((n + len) % len); setAuto(false); };

  return (
    <section style={{ background: "var(--lavender)", padding: "120px 0" }}>
      <div className="container" style={{ padding: "0 32px", maxWidth: 1100 }}>
        <p className="eyebrow" style={{ textAlign: "center", marginBottom: 24 }}>Client Reviews</p>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ minHeight: 320 }}>
            <h3 style={{
              fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, lineHeight: 1.2,
              letterSpacing: "-0.015em", color: "var(--ink)", margin: "0 0 28px",
              fontStyle: "italic",
            }}>“{t.quote}”</h3>
            <p style={{
              fontSize: 16, lineHeight: 1.7, color: "var(--gray-700)",
              maxWidth: 720, margin: "0 auto 28px",
            }}>{t.body}</p>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: ".08em",
              textTransform: "uppercase", color: "var(--accent)", margin: 0,
            }}>— {t.author}, {t.location}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 40 }}>
            <button onClick={() => go(i - 1)} aria-label="Previous" style={arrowBtn}>←</button>
            <div style={{ display: "flex", gap: 8 }}>
              {TESTIMONIALS.map((_, n) => (
                <button key={n} onClick={() => go(n)} style={{
                  width: n === i ? 28 : 8, height: 8, borderRadius: 4,
                  background: n === i ? "var(--accent)" : "var(--lavender-hover)",
                  border: 0, cursor: "pointer", transition: "width .3s, background .3s",
                }}/>
              ))}
            </div>
            <button onClick={() => go(i + 1)} aria-label="Next" style={arrowBtn}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
const arrowBtn = {
  width: 44, height: 44, borderRadius: 22,
  background: "var(--lavender)", border: "1px solid var(--lavender-hover)",
  color: "var(--ink)", fontSize: 18, cursor: "pointer",
  fontFamily: "inherit",
};

// ─────────────────────────────────────────────────────────────
// PROCESS — 3 numbered steps
// ─────────────────────────────────────────────────────────────
function ProcessStrip() {
  return (
    <section style={{ padding: "120px 0", background: "var(--surface)" }}>
      <div className="container" style={{ padding: "0 32px", maxWidth: 1200 }}>
        <div className="reveal-up" style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Our Process</p>
          <h2 style={{
            fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 500, lineHeight: 1.1,
            letterSpacing: "-0.02em", color: "var(--ink)", margin: 0,
          }}>
            Your personal oasis is just{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>3 steps</em>{" "}away.
          </h2>
        </div>
        <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, position: "relative" }}>
          {/* connecting line */}
          <div style={{
            position: "absolute", top: 28, left: "16%", right: "16%", height: 1,
            background: "var(--lavender-hover)", zIndex: 0,
          }}/>
          {PROCESS.map(p => (
            <div key={p.n} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 28,
                background: "var(--accent)", color: "var(--on-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 600, margin: "0 auto 24px",
              }}>{p.n}</div>
              <h3 style={{
                fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em",
                margin: "0 0 14px", color: "var(--ink)",
              }}>{p.word}</h3>
              <p style={{
                fontSize: 15, lineHeight: 1.65, color: "var(--gray-600)",
                maxWidth: 300, margin: "0 auto",
              }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// NEWSLETTER
// ─────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e) => { e.preventDefault(); if (!email) return; setDone(true); };

  return (
    <section style={{ background: "var(--navy-deep)", color: "#fff", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <img src={IMG.newsletter} alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", opacity: 0.2,
      }}/>
      <div className="container reveal-up" style={{ position: "relative", padding: "0 32px", maxWidth: 800, textAlign: "center" }}>
        <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 20 }}>Join the List</p>
        <h2 style={{
          fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 500, lineHeight: 1.12,
          letterSpacing: "-0.02em", margin: "0 0 20px", color: "#fff",
        }}>
          Stay up-to-date with the latest from{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Nik &amp; Sons.</em>
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.8)", margin: "0 0 32px" }}>
          Sign up with your email to hear about seasonal offers,
          project reveals, and tips on getting your honey-do list done.
        </p>
        {done ? (
          <p style={{ fontSize: 18, fontStyle: "italic", color: "var(--accent)" }}>
            Thank you — you're on the list.
          </p>
        ) : (
          <form onSubmit={submit} style={{ display: "flex", gap: 10, maxWidth: 480, margin: "0 auto" }}>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Email address" style={{
                flex: 1, padding: "14px 18px", borderRadius: 6, border: 0,
                fontFamily: "inherit", fontSize: 15, background: "var(--surface)", color: "var(--ink)",
                outline: "none",
              }}/>
            <button type="submit" style={{
              padding: "14px 24px", background: "var(--accent)", color: "var(--on-accent)",
              border: 0, borderRadius: 6, fontWeight: 700, fontSize: 14,
              letterSpacing: ".04em", textTransform: "uppercase", cursor: "pointer",
              fontFamily: "inherit", whiteSpace: "nowrap",
            }}>Sign Up</button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CLOSING CTA
// ─────────────────────────────────────────────────────────────
function ClosingCTA({ openConsult }) {
  return (
    <section style={{ position: "relative", padding: "160px 0", overflow: "hidden", background: "#0e1128" }}>
      <img src={IMG.cta} alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", opacity: 0.55,
      }}/>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(26,31,58,0.45) 0%, rgba(26,31,58,0.75) 100%)",
      }}/>
      <div className="container reveal-up" style={{
        position: "relative", padding: "0 32px", maxWidth: 1000, textAlign: "center", color: "#fff",
      }}>
        <h2 style={{
          fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, lineHeight: 1.02,
          letterSpacing: "-0.025em", margin: "0 0 40px",
        }}>
          Let's discover your home's{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>potential.</em>
        </h2>
        <button onClick={openConsult} style={{
          background: "var(--accent)", color: "var(--on-accent)", border: 0,
          borderRadius: 6, padding: "18px 40px", fontWeight: 700, fontSize: 14,
          letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer",
          fontFamily: "inherit", whiteSpace: "nowrap",
        }}>Get Free Estimate</button>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────
function Footer({ onNavigate }) {
  return (
    <footer style={{ background: "#0e1128", color: "rgba(255,255,255,.8)" }}>
      <div className="container" style={{ padding: "72px 32px 32px", maxWidth: 1200 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
          gap: 48, marginBottom: 48,
        }}>
          <div>
            <window.Logo dark onClick={() => onNavigate("home")} />
            <p style={{ color: "rgba(255,255,255,.65)", fontSize: 14, lineHeight: 1.7, margin: "20px 0 18px", maxWidth: 320 }}>
              Nik &amp; Sons is a family-owned handyman service based in
              St. Petersburg, serving Tampa Bay and the surrounding areas —
              from Clearwater to Sarasota, Wesley Chapel to Lakeland.
              We help homeowners knock out the lists they've been putting off,
              the right way, the first time.
            </p>
            <p style={{ color: "rgba(255,255,255,.45)", fontSize: 12, letterSpacing: ".1em" }}>
              License {BRAND.license}
            </p>
          </div>
          <FooterCol title="Services">
            {SERVICES.map(s => (
              <FooterLink key={s.slug} onClick={() => onNavigate(`service/${s.slug}`)}>{s.name}</FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Explore">
            <FooterLink onClick={() => onNavigate("home")}>Home</FooterLink>
            <FooterLink onClick={() => onNavigate("about")}>About</FooterLink>
            <FooterLink onClick={() => onNavigate("services")}>Services</FooterLink>
            <FooterLink onClick={() => onNavigate("portfolio")}>Portfolio</FooterLink>
            <FooterLink onClick={() => onNavigate("locations")}>Areas Served</FooterLink>
            <FooterLink onClick={() => onNavigate("contact")}>Contact</FooterLink>
          </FooterCol>
          <FooterCol title="Contact">
            <div style={{ color: "rgba(255,255,255,.7)", fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
              {BRAND.address}
            </div>
            <a href={`tel:${BRAND.phoneTampaTel}`} style={footerLinkStyle}>{BRAND.phoneTampa}</a>
            <a href={`mailto:${BRAND.email}`} style={footerLinkStyle}>{BRAND.email}</a>
          </FooterCol>
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 24,
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
          fontSize: 12, color: "rgba(255,255,255,.45)",
        }}>
          <p style={{ margin: 0 }}>© 2026 Nik &amp; Sons Handyman Services · {BRAND.license}</p>
          <p style={{ margin: 0 }}>St. Petersburg · Seminole · Largo · Clearwater · Pinellas Park</p>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, children }) {
  return (
    <div>
      <h4 style={{
        color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: ".18em",
        textTransform: "uppercase", margin: "0 0 18px",
      }}>{title}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>
  );
}
function FooterLink({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      background: "none", border: 0, padding: 0, cursor: "pointer",
      color: "rgba(255,255,255,.7)", fontSize: 14, textAlign: "left",
      fontFamily: "inherit", transition: "color .15s ease",
    }}
      onMouseEnter={e => e.currentTarget.style.color = "#fff"}
      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.7)"}>
      {children}
    </button>
  );
}
const footerLinkStyle = {
  color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none",
  display: "block",
};

Object.assign(window, {
  Hero, Differentiators, ServicesStrip, FounderNote, StatsBand,
  PortfolioBand, TestimonialCarousel, ProcessStrip, Newsletter,
  ClosingCTA, Footer,
});
