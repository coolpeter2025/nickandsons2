/* global React, BRAND */
const { useState, useEffect } = React;

function Logo({ dark = false, onClick, small = false }) {
  const size = small ? 44 : 56;
  return (
    <button onClick={onClick} style={{
      background: "none", border: 0, cursor: "pointer",
      display: "flex", alignItems: "center", gap: 14, padding: 0, color: "inherit",
    }}>
      <img src="assets/niksons-logo.svg" alt="Nick & Sons Handyman Services"
        style={{
          width: size, height: size, borderRadius: 6, display: "block",
          objectFit: "cover", background: "#0f2540",
        }}/>
      <div style={{ textAlign: "left", lineHeight: 1.05, display: small ? "none" : "block" }}>
        <div style={{
          fontSize: 15, fontWeight: 700, letterSpacing: ".04em",
          color: "#ffffff",
          fontFamily: "var(--font-display)", textTransform: "uppercase",
          whiteSpace: "nowrap",
          textShadow: "0 1px 2px rgba(0,0,0,.35)",
        }}>Nick &amp; Sons</div>
        <div style={{
          fontSize: 10, fontWeight: 600, letterSpacing: ".22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.78)", marginTop: 3,
          whiteSpace: "nowrap",
          textShadow: "0 1px 2px rgba(0,0,0,.35)",
        }}>Handyman Services</div>
      </div>
    </button>
  );
}

function Header({ route, onNavigate, openConsult }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 880);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => { setMenu(false); setServicesOpen(false); }, [route]);

  const go = (id) => onNavigate(id);

  const links = [
    { id: "about", label: "About" },
    { id: "services", label: "Services", hasMenu: true },
    { id: "portfolio", label: "Portfolio" },
    { id: "locations", label: "Areas Served" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 60,
      background: scrolled
        ? "rgba(15, 24, 33, 0.95)"
        : "linear-gradient(to bottom, rgba(10,16,24,0.85) 0%, rgba(10,16,24,0.55) 60%, rgba(10,16,24,0) 100%)",
      backdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--lavender-hover)" : "1px solid transparent",
      transition: "background .25s ease, border-color .25s ease",
    }}>
      <div className="container" style={{
        padding: "0 32px", height: 84,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Logo onClick={() => go("home")} />

        {!mobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 34 }}>
            <NavLink active={route === "about"} onClick={() => go("about")}>About</NavLink>

            <div style={{ position: "relative" }}
                 onMouseEnter={() => setServicesOpen(true)}
                 onMouseLeave={() => setServicesOpen(false)}>
              <NavLink active={route === "services" || route.startsWith("service/")} onClick={() => go("services")}>
                Services <span style={{ fontSize: 10, marginLeft: 4, opacity: 0.6 }}>▾</span>
              </NavLink>
              {servicesOpen && (
                <div style={{
                  position: "absolute", top: "100%", left: -20, marginTop: 0,
                  paddingTop: 18,
                }}>
                  <div style={{
                    background: "var(--surface)", border: "1px solid var(--lavender-hover)",
                    borderRadius: 10, padding: 10, minWidth: 280,
                    boxShadow: "0 20px 40px -12px rgba(26,31,58,.18)",
                  }}>
                    {window.SERVICES.map(s => (
                      <button key={s.slug} onClick={() => go(`service/${s.slug}`)}
                        style={{
                          display: "block", width: "100%", textAlign: "left", background: "none", border: 0,
                          padding: "10px 14px", borderRadius: 6, cursor: "pointer",
                          fontFamily: "inherit", fontSize: 14, color: "var(--ink)", fontWeight: 500,
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "var(--lavender)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink active={route === "portfolio"} onClick={() => go("portfolio")}>Portfolio</NavLink>
            <NavLink active={route === "locations"} onClick={() => go("locations")}>Areas Served</NavLink>
            <NavLink active={route === "contact"} onClick={() => go("contact")}>Contact</NavLink>

            <button onClick={openConsult} style={{
              background: "var(--accent)", color: "var(--on-accent)", border: 0, borderRadius: 6,
              padding: "11px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer",
              fontFamily: "inherit", letterSpacing: ".01em",
              transition: "background .15s ease", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--accent-hover)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--accent)"}>
              {window.innerWidth < 1080 ? "Free Estimate" : "Get Free Estimate"}
            </button>
          </nav>
        )}

        {mobile && (
          <button onClick={() => setMenu(!menu)} aria-label="Menu" style={{
            background: "none", border: "1px solid var(--lavender-hover)", borderRadius: 6,
            width: 44, height: 44, cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              width: 18, height: 2, background: "var(--ink)",
              position: "relative", display: "block",
            }}>
              <span style={{ position: "absolute", left: 0, top: -6, width: 18, height: 2, background: "var(--ink)" }}/>
              <span style={{ position: "absolute", left: 0, top: 6, width: 18, height: 2, background: "var(--ink)" }}/>
            </span>
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {mobile && menu && (
        <div style={{
          background: "var(--surface)", borderTop: "1px solid var(--lavender-hover)",
          padding: "8px 24px 24px",
        }}>
          {["home", ...links.map(l => l.id)].map(id => (
            <button key={id} onClick={() => { go(id); setMenu(false); }} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "16px 8px", background: "none", border: 0,
              borderBottom: "1px solid var(--lavender-hover)",
              fontFamily: "inherit", fontSize: 17, fontWeight: 500, color: "var(--ink)",
              cursor: "pointer",
            }}>{id === "home" ? "Home" : (links.find(l => l.id === id) || {}).label}</button>
          ))}
          <button onClick={() => { openConsult(); setMenu(false); }} style={{
            marginTop: 16, width: "100%", padding: "14px 20px",
            background: "var(--accent)", color: "var(--on-accent)", border: 0, borderRadius: 6,
            fontFamily: "inherit", fontWeight: 700, fontSize: 15, cursor: "pointer",
          }}>Get Free Estimate</button>
        </div>
      )}
    </header>
  );
}

function NavLink({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      background: "none", border: 0, padding: "8px 0",
      color: active ? "var(--accent)" : "#ffffff",
      fontWeight: active ? 600 : 500, fontSize: 14,
      letterSpacing: ".01em", cursor: "pointer",
      fontFamily: "inherit", position: "relative",
      textShadow: active ? "none" : "0 1px 2px rgba(0,0,0,.35)",
    }}>
      {children}
      {active && (
        <span style={{
          position: "absolute", left: 0, right: 0, bottom: -2, height: 2,
          background: "var(--accent)",
        }}/>
      )}
    </button>
  );
}

Object.assign(window, { Header, Logo });
