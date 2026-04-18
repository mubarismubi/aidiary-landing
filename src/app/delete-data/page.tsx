import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Data - AI Diary",
  description: "How to delete individual journal entries and other data from AI Diary without deleting your account.",
};

const C = {
  brown: "#4A3A35", brownL: "#7A6458",
  sage: "#8CB369", sageD: "#5E8B3D",
  bg: "#FBF9F6", muted: "#9E9E90",
};

const SUPPORT_EMAIL = "mubarisfly@gmail.com";

export default function DeleteDataPage() {
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
          }}>Delete Your Data</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
            App: AI Diary &mdash; Mood Journal &nbsp;&middot;&nbsp; Package: com.aidiary.moodjournal
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ fontSize: 16, color: C.brown, lineHeight: 1.8 }}>

          <p style={{ marginBottom: 28 }}>
            You can delete individual journal entries and specific pieces of your data at any time, without deleting your AI Diary account. This page explains how.
          </p>
          <p style={{ marginBottom: 28, fontSize: 14, color: C.muted }}>
            If you want to delete your <strong>entire</strong> account and all associated data, see the{" "}
            <Link href="/delete-account" style={{ color: C.sage, textDecoration: "none" }}>
              Delete Account
            </Link>{" "}
            page instead.
          </p>

          <Section title="Option 1 &mdash; Delete a single journal entry (in-app)">
            <p>Entries are deleted immediately and permanently.</p>
            <ol style={{ paddingLeft: 20, listStyle: "decimal" }}>
              <li>Open <strong>AI Diary</strong> on your Android device.</li>
              <li>Go to the <strong>Journal</strong> tab (bottom nav).</li>
              <li>Find the entry you want to remove.</li>
              <li><strong>Long-press</strong> the entry &mdash; a delete option will appear.</li>
              <li>Confirm deletion in the dialog.</li>
            </ol>
            <p>When you delete an entry, the following are removed together:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>The entry&apos;s transcript and text</li>
              <li>The associated voice recording (audio file on Cloudflare R2)</li>
              <li>The AI-generated summary, tags, and mood/emotion analysis for that entry</li>
              <li>The entry&apos;s contribution to your streak and mood calendar</li>
            </ul>
          </Section>

          <Section title="Option 2 &mdash; Request targeted data deletion by email">
            <p>Use this if you want to delete something other than a single entry &mdash; for example, all voice recordings from a specific month, or just the AI-generated summaries.</p>
            <div style={{ marginTop: 4, padding: 20, background: "white", borderRadius: 16, border: "1px solid #EAE5DC" }}>
              <p style={{ margin: 0 }}>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${SUPPORT_EMAIL}?subject=AI%20Diary%20-%20Data%20Deletion%20Request`}
                   style={{ color: C.sage, textDecoration: "none" }}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p style={{ margin: "12px 0 0" }}>
                <strong>Subject:</strong> AI Diary &mdash; Data Deletion Request
              </p>
              <p style={{ margin: "12px 0 0" }}>
                <strong>Include in the body:</strong>
              </p>
              <ul style={{ margin: "6px 0 0", paddingLeft: 20, listStyle: "disc" }}>
                <li>The email address registered with your account.</li>
                <li>What data you want deleted (e.g. &ldquo;all entries before January 2026&rdquo;, &ldquo;all voice recordings&rdquo;, &ldquo;just the AI summaries&rdquo;).</li>
              </ul>
            </div>
            <p style={{ marginTop: 12, fontSize: 14, color: C.muted }}>
              We verify ownership by replying to the registered email before deleting anything.
            </p>
          </Section>

          <Section title="What can be deleted">
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>Individual journal entries (text + audio + AI analysis)</li>
              <li>Voice recordings (audio files)</li>
              <li>AI-generated summaries and tags</li>
              <li>Mood and emotion scores for specific entries</li>
              <li>Photo-journal images</li>
              <li>Tags and tag history</li>
            </ul>
          </Section>

          <Section title="What is retained (and why)">
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Your account</strong> and authentication remain active &mdash; use the{" "}
                <Link href="/delete-account" style={{ color: C.sage, textDecoration: "none" }}>
                  Delete Account
                </Link>{" "}
                page if you want those removed too.</li>
              <li><strong>Backups</strong> may retain deleted data for up to <strong>30 days</strong> before being overwritten.</li>
              <li><strong>Aggregated, anonymized analytics</strong> (e.g. total entries created across all users) that cannot be linked back to you.</li>
              <li><strong>Billing records</strong> related to paid subscriptions may be retained for up to 7 years for tax and accounting compliance. These contain no journal content.</li>
            </ul>
          </Section>

          <Section title="How long it takes">
            <p>In-app entry deletion is immediate. Email requests are processed within <strong>30 days</strong>. You will receive a confirmation email once your request is complete.</p>
          </Section>

          <Section title="Questions">
            <p>Questions about what we store, data exports, or specific deletion requests?</p>
            <div style={{ marginTop: 12, padding: 20, background: "white", borderRadius: 16, border: "1px solid #EAE5DC" }}>
              <p style={{ margin: 0 }}><strong>AI Diary &mdash; Mood Journal</strong></p>
              <p style={{ margin: "8px 0 0" }}>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: C.sage, textDecoration: "none" }}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: C.muted }}>
                We aim to respond to all inquiries within 30 days.
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
