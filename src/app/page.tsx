import Link from "next/link";

const C = {
  sage: "#8CB369", sageD: "#5E8B3D", sageL: "#A6C48A",
  brown: "#4A3A35", brownL: "#7A6458",
  cream: "#FEFCF6", bg: "#FBF9F6", beige: "#F6E8CE",
  amber: "#F4A261", muted: "#9E9E90",
};

function Nav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "rgba(251,249,246,0.85)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(234,229,220,0.6)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "16px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `linear-gradient(135deg, ${C.sage}, ${C.sageD})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontSize: 18,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </div>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 20, color: C.brown }}>AI Diary</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <a href="#features" style={{ fontSize: 14, color: C.brownL, textDecoration: "none", fontWeight: 500 }}>Features</a>
          <a href="#screenshots" style={{ fontSize: 14, color: C.brownL, textDecoration: "none", fontWeight: 500 }}>Screenshots</a>
          <Link href="/privacy" style={{ fontSize: 14, color: C.brownL, textDecoration: "none", fontWeight: 500 }}>Privacy</Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      paddingTop: 140, paddingBottom: 80,
      background: `linear-gradient(170deg, ${C.bg} 0%, #EDE8D8 40%, ${C.beige} 100%)`,
    }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${C.sage}20, transparent 70%)`, top: -100, right: -150 }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${C.amber}15, transparent 70%)`, bottom: -50, left: -100 }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", border: `2px solid ${C.sage}15`, top: 80, right: 100 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 10 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "8px 20px", borderRadius: 50, marginBottom: 32,
          background: `${C.sage}15`, border: `1px solid ${C.sage}30`,
        }}>
          <span style={{ fontSize: 14 }}>🎙️</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: C.sageD, letterSpacing: 0.5 }}>AI-Powered Voice Journal</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-serif)", fontSize: "clamp(42px, 6vw, 72px)",
          color: C.brown, lineHeight: 1.05, marginBottom: 24, letterSpacing: -1,
        }}>
          Speak your mind.<br />
          <span style={{ color: C.sage }}>Understand your mood.</span>
        </h1>

        <p style={{
          fontSize: 18, color: C.brownL, lineHeight: 1.7, maxWidth: 520,
          margin: "0 auto 40px",
        }}>
          Record your thoughts by voice. AI captures your emotions,
          tracks patterns, and builds your personal mood journal — automatically.
        </p>

        {/* CTA */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "16px 36px", borderRadius: 50,
            background: `linear-gradient(135deg, ${C.sage}, ${C.sageD})`,
            color: "white", fontWeight: 700, fontSize: 16, textDecoration: "none",
            boxShadow: `0 8px 32px ${C.sage}40`,
            transition: "transform 0.2s",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
            Get on Google Play
          </a>
        </div>

        {/* Phone mockup */}
        <div style={{
          marginTop: 60, display: "flex", justifyContent: "center", gap: 20,
          perspective: 1000,
        }}>
          <div style={{
            width: 240, borderRadius: 28,
            boxShadow: "0 24px 64px rgba(74,58,53,0.2), 0 8px 24px rgba(74,58,53,0.1)",
            overflow: "hidden", border: "8px solid #1a1a1e",
            transform: "rotateY(-5deg) rotateX(2deg)",
          }}>
            <img src="/screenshots/home.png" alt="AI Diary Home" style={{ width: "100%", display: "block" }} />
          </div>
          <div style={{
            width: 240, borderRadius: 28,
            boxShadow: "0 24px 64px rgba(74,58,53,0.2), 0 8px 24px rgba(74,58,53,0.1)",
            overflow: "hidden", border: "8px solid #1a1a1e",
            transform: "rotateY(5deg) rotateX(2deg) translateY(30px)",
          }}>
            <img src="/screenshots/recording.png" alt="AI Diary Recording" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: "🎙️", title: "Voice Recording",
      desc: "Just talk. AI transcribes every word and captures your daily reflections in any language.",
    },
    {
      icon: "🧠", title: "AI Mood Detection",
      desc: "Advanced emotion analysis from your voice tone and words. Know how you really feel.",
    },
    {
      icon: "📊", title: "Mood Insights",
      desc: "Track mood trends over weeks and months. Discover emotional patterns you never noticed.",
    },
    {
      icon: "📖", title: "Combined Journals",
      desc: "All your daily entries automatically merged into one beautiful story. Relive any day.",
    },
    {
      icon: "🔥", title: "Streak Tracking",
      desc: "Build a daily journaling habit. Streaks keep you motivated with restore options.",
    },
    {
      icon: "🔒", title: "PIN Lock Privacy",
      desc: "Your diary, your rules. Biometric and PIN lock keeps your thoughts completely private.",
    },
  ];

  return (
    <section id="features" style={{
      padding: "100px 24px",
      background: C.bg,
      position: "relative",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase",
            color: C.sage, display: "block", marginBottom: 16,
          }}>Features</span>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)",
            color: C.brown, lineHeight: 1.1,
          }}>
            Everything you need<br />to understand yourself.
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {features.map((f) => (
            <div key={f.title} style={{
              padding: 32, borderRadius: 24,
              background: "white",
              border: "1px solid rgba(234,229,220,0.6)",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: `${C.sage}12`, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, marginBottom: 20,
              }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-serif)", fontSize: 22,
                color: C.brown, marginBottom: 10,
              }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: C.brownL, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const screens = [
    { src: "/screenshots/home.png", label: "Home Dashboard" },
    { src: "/screenshots/recording.png", label: "Voice Recording" },
    { src: "/screenshots/insights.png", label: "Mood Insights" },
    { src: "/screenshots/journal.png", label: "Day Journal" },
  ];

  return (
    <section id="screenshots" style={{
      padding: "100px 24px",
      background: `linear-gradient(180deg, ${C.bg}, #EDE8D8)`,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase",
            color: C.sage, display: "block", marginBottom: 16,
          }}>Screenshots</span>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)",
            color: C.brown, lineHeight: 1.1,
          }}>
            See it in action.
          </h2>
        </div>

        <div style={{
          display: "flex", gap: 24, justifyContent: "center",
          flexWrap: "wrap",
        }}>
          {screens.map((s, i) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                width: 220, borderRadius: 24,
                boxShadow: "0 16px 48px rgba(74,58,53,0.15), 0 4px 16px rgba(74,58,53,0.08)",
                overflow: "hidden", border: "6px solid #1a1a1e",
                transform: i % 2 === 1 ? "translateY(20px)" : "none",
                transition: "transform 0.3s",
              }}>
                <img src={s.src} alt={s.label} style={{ width: "100%", display: "block" }} />
              </div>
              <p style={{
                marginTop: 16, fontSize: 13, fontWeight: 600, color: C.brownL,
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{
      padding: "100px 24px",
      background: `linear-gradient(160deg, ${C.brown}, #352924)`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${C.sage}25, transparent 70%)`, top: -100, left: -100 }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${C.amber}15, transparent 70%)`, bottom: -100, right: -50 }} />

      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }}>
        <h2 style={{
          fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)",
          color: "white", lineHeight: 1.1, marginBottom: 20,
        }}>
          Start your journey<br />today.
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 40 }}>
          Your thoughts matter. Give them a home.
        </p>
        <a href="#" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "16px 40px", borderRadius: 50,
          background: `linear-gradient(135deg, ${C.sage}, ${C.sageD})`,
          color: "white", fontWeight: 700, fontSize: 16, textDecoration: "none",
          boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
          Download Free
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: "40px 24px",
      background: C.brown, borderTop: `1px solid rgba(255,255,255,0.06)`,
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "rgba(255,255,255,0.7)" }}>AI Diary</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <Link href="/privacy" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Privacy Policy</Link>
          <a href="mailto:mubarisfly@gmail.com" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Contact</a>
        </div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          &copy; {new Date().getFullYear()} AI Diary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Screenshots />
      <CTA />
      <Footer />
    </>
  );
}
