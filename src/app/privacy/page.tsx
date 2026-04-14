import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - AI Diary",
  description: "Privacy Policy for AI Diary - Voice Mood Journal",
};

const C = {
  brown: "#4A3A35", brownL: "#7A6458",
  sage: "#8CB369", sageD: "#5E8B3D",
  bg: "#FBF9F6", muted: "#9E9E90",
};

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      {/* Header */}
      <div style={{
        background: C.brown, padding: "60px 24px 40px",
      }}>
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
          }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
            Last updated: April 14, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ fontSize: 16, color: C.brown, lineHeight: 1.8 }}>
          <p style={{ marginBottom: 24 }}>
            AI Diary (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
          </p>

          <Section title="1. Information We Collect">
            <p><strong>Account Information:</strong> When you create an account, we collect your email address for authentication purposes. We use Supabase Authentication to manage user accounts securely.</p>
            <p><strong>Voice Recordings:</strong> When you record a journal entry, the audio is temporarily processed to generate a transcript and mood analysis. Audio files are stored securely in encrypted cloud storage (Cloudflare R2) and are only accessible by you.</p>
            <p><strong>Journal Content:</strong> Your journal entries, including transcripts, AI-generated summaries, mood data, tags, and timestamps are stored in our secure database. This content is private and only accessible by your authenticated account.</p>
            <p><strong>Photos:</strong> If you use the photo journal feature, images of your handwritten diary pages are processed to extract text. Photos are stored securely and are only accessible by you.</p>
            <p><strong>Mood & Emotion Data:</strong> Our AI analyzes your voice tone and words to detect emotions and mood patterns. This data is stored with your journal entries to provide mood tracking and insights.</p>
            <p><strong>Device Information:</strong> We may collect basic device information such as device type, operating system version, and timezone for app functionality and timezone-aware features.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>To provide voice-to-text transcription of your journal entries</li>
              <li>To analyze mood and emotions from your recordings</li>
              <li>To generate AI summaries and insights about your emotional patterns</li>
              <li>To maintain your journaling streak and provide personalized features</li>
              <li>To authenticate your account and keep your data secure</li>
              <li>To send optional notifications (journal reminders, streak alerts)</li>
            </ul>
          </Section>

          <Section title="3. Data Storage & Security">
            <p>Your data is stored using industry-standard security practices:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>All data is encrypted in transit using TLS/SSL</li>
              <li>Authentication is handled by Supabase with Row Level Security (RLS), ensuring users can only access their own data</li>
              <li>Audio files are stored in Cloudflare R2 with signed URLs (time-limited access)</li>
              <li>The app supports PIN lock and biometric authentication for additional privacy</li>
            </ul>
          </Section>

          <Section title="4. AI Processing">
            <p>We use Google Gemini AI to process your voice recordings and generate mood analysis. Your audio and text are sent to AI services for processing. We do not use your data to train AI models. The AI processing is used solely to provide you with mood detection, summaries, and journal insights.</p>
          </Section>

          <Section title="5. Data Sharing">
            <p>We do not sell, trade, or share your personal data with third parties. Your journal entries, recordings, and mood data are strictly private. We may share anonymized, aggregated data for analytics purposes only (no personal information).</p>
            <p>Third-party services used by the app:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Supabase:</strong> Authentication and database hosting</li>
              <li><strong>Cloudflare R2:</strong> Secure audio and image storage</li>
              <li><strong>Google Gemini AI:</strong> Voice transcription and mood analysis</li>
            </ul>
          </Section>

          <Section title="6. Camera Permission">
            <p>The app requests camera access for the photo journal feature, which allows you to photograph handwritten diary pages. The camera is used only when you explicitly choose to take a photo. Images are processed to extract text and are stored securely in your account. Camera access can be revoked at any time through your device settings.</p>
          </Section>

          <Section title="7. Notifications">
            <p>With your permission, the app may send local notifications for journal reminders, streak alerts, and inactivity reminders. You can disable notifications at any time through your device settings or the app&apos;s settings page.</p>
          </Section>

          <Section title="8. Data Retention & Deletion">
            <p>Your data is retained as long as you maintain an active account. You can:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>Delete individual journal entries at any time</li>
              <li>Delete your entire account and all associated data from the Settings page</li>
            </ul>
            <p>When you delete your account, all your data including journal entries, recordings, mood data, and personal information is permanently removed from our systems.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>AI Diary is intended for users aged 18 and above. We do not knowingly collect data from children under 18. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.</p>
          </Section>

          <Section title="10. Advertising">
            <p>The app may include advertisements in the future. If ads are implemented, we may use the Android Advertising ID for ad personalization. You can opt out of personalized ads through your device settings. We will update this policy before implementing any advertising features.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Changes will be posted within the app and on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of the app after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions about this Privacy Policy or your data, please contact us at:</p>
            <p style={{ marginTop: 8 }}>
              <strong>Email:</strong>{" "}
              <a href="mailto:mubarisfly@gmail.com" style={{ color: C.sage, textDecoration: "none" }}>
                mubarisfly@gmail.com
              </a>
            </p>
          </Section>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px", background: C.brown,
        textAlign: "center",
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
