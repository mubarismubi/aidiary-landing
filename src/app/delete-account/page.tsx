import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Account - AI Diary",
  description: "How to permanently delete your AI Diary account and associated data.",
};

const C = {
  brown: "#4A3A35", brownL: "#7A6458",
  sage: "#8CB369", sageD: "#5E8B3D",
  bg: "#FBF9F6", muted: "#9E9E90",
  amber: "#F4A261",
};

const SUPPORT_EMAIL = "mubarisfly@gmail.com";

export default function DeleteAccountPage() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      {/* Header */}
      <div style={{ background: C.brown, padding: "60px 24px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none",
            marginBottom: 20,
          }}>
            &larr; Back to AI Diary
          </Link>
          <h1 style={{
            fontFamily: "var(--font-serif)", fontSize: 36, color: "white", marginBottom: 8,
          }}>Delete Your Account</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
            App: AI Diary &mdash; Mood Journal &nbsp;&middot;&nbsp; Package: com.aidiary.moodjournal
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
            Effective and last updated: July 23, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ fontSize: 16, color: C.brown, lineHeight: 1.8 }}>

          <p style={{ marginBottom: 28 }}>
            You can delete your AI Diary account and associated journal data at any time. Below you&apos;ll find two ways to do it: the fastest (directly inside the app) and a fallback if you no longer have the app installed. Limited backup, transaction, legal, and deletion-job records may remain for the periods explained below.
          </p>

          <Section title="Option 1 &mdash; Delete from inside the app (recommended)">
            <p>The quickest way. Deletion begins immediately.</p>
            <ol style={{ paddingLeft: 20, listStyle: "decimal" }}>
              <li>Open <strong>AI Diary</strong> on your Android or iOS device.</li>
              <li>Sign in with the account you want to delete.</li>
              <li>Open the <strong>Profile</strong> tab.</li>
              <li>Tap <strong>More account settings</strong>, then <strong>Delete Account</strong>.</li>
              <li>Confirm in the dialog.</li>
            </ol>
            <p>Your account and live database access are removed immediately after confirmation. Associated profile, audio, and image files enter a durable server-side deletion queue, which retries storage deletion until each object is gone.</p>
          </Section>

          <Section title="Option 2 &mdash; Request deletion by email">
            <p>If you&apos;ve uninstalled the app or cannot sign in, send a deletion request to the address below.</p>
            <div style={{ marginTop: 4, padding: 20, background: "white", borderRadius: 16, border: "1px solid #EAE5DC" }}>
              <p style={{ margin: 0 }}>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${SUPPORT_EMAIL}?subject=AI%20Diary%20-%20Account%20Deletion%20Request`}
                   style={{ color: C.sage, textDecoration: "none" }}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p style={{ margin: "12px 0 0" }}>
                <strong>Subject:</strong> AI Diary &mdash; Account Deletion Request
              </p>
              <p style={{ margin: "12px 0 0" }}>
                <strong>Include in the body:</strong>
              </p>
              <ul style={{ margin: "6px 0 0", paddingLeft: 20, listStyle: "disc" }}>
                <li>The email address registered with your AI Diary account.</li>
                <li>A short confirmation that you want your account and data permanently deleted.</li>
              </ul>
            </div>
            <p style={{ marginTop: 12, fontSize: 14, color: C.muted }}>
              We verify ownership by emailing back to the address on file before deleting, so the request must come from (or match) the registered email.
            </p>
          </Section>

          <Section title="What gets deleted">
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>Your account (authentication record, profile, email, name)</li>
              <li>All journal entries (text, transcripts, AI summaries, tags)</li>
              <li>All voice recordings and uploaded audio files</li>
              <li>Your profile photo and all entry-photo attachments, including stored thumbnails</li>
              <li>All mood and emotion analysis data</li>
              <li>Streak history, reminder preferences, and personal settings</li>
              <li>Device tokens used for notifications</li>
            </ul>
          </Section>

          <Section title="What is retained (and why)">
            <p>A limited amount of data may remain for security, legal, tax, or operational reasons:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Subscription and transaction records</strong> may be retained by RevenueCat, Google Play, or Apple for the periods required by their policies and applicable tax, accounting, fraud-prevention, or legal obligations. These records do not contain journal content.</li>
              <li><strong>Deletion-job metadata</strong> (account ID, media object key, and timestamps) may remain for up to seven days after account deletion so we can verify that queued media deletion completed.</li>
              <li><strong>Backups</strong> may contain your data for up to 30 days after deletion before being overwritten on schedule.</li>
            </ul>
          </Section>

          <Section title="How long it takes">
            <p>In-app deletion removes the live account immediately. Queued media deletion normally follows shortly and automatically retries if storage is temporarily unavailable. Email requests are processed within the period required by applicable law, normally within <strong>30 days</strong> after ownership is verified. Backup expiry and provider-held records follow the periods above.</p>
          </Section>

          <Section title="Questions">
            <p>If you have questions about deletion, data export, or what&apos;s stored about you, reach out:</p>
            <div style={{ marginTop: 12, padding: 20, background: "white", borderRadius: 16, border: "1px solid #EAE5DC" }}>
              <p style={{ margin: 0 }}><strong>AI Diary &mdash; Mood Journal</strong></p>
              <p style={{ margin: "8px 0 0" }}>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: C.sage, textDecoration: "none" }}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: C.muted }}>
                We respond within the period required by applicable law and will notify you if a permitted extension is needed.
              </p>
            </div>
            <p style={{ marginTop: 16, fontSize: 14, color: C.muted }}>
              See our <Link href="/privacy" style={{ color: C.sage, textDecoration: "none" }}>Privacy Policy</Link> for full details on how we handle your data.
            </p>
          </Section>

        </div>
      </div>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px", background: C.brown, textAlign: "center",
      }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
          &copy; {new Date().getFullYear()} AI Diary. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{
        fontFamily: "var(--font-serif)", fontSize: 22,
        color: "#4A3A35", marginBottom: 14,
      }}>{title}</h2>
      <div style={{
        display: "flex", flexDirection: "column", gap: 12,
        fontSize: 15, color: "#7A6458", lineHeight: 1.75,
      }}>
        {children}
      </div>
    </div>
  );
}
