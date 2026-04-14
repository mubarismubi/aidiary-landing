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
            AI Diary (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our mobile application AI Diary - Voice Mood Journal (available on Google Play). By using the app, you agree to the collection and use of information in accordance with this policy.
          </p>

          <Section title="1. Information We Collect">
            <p><strong>Account Information:</strong> When you create an account, we collect your email address and authentication credentials. We use Supabase Authentication to manage user accounts securely.</p>
            <p><strong>Voice Recordings & Microphone Access:</strong> The app requires microphone permission to record voice journal entries. Audio recordings are processed for transcription and mood analysis. Audio files are stored securely in encrypted cloud storage (Cloudflare R2) and are only accessible by you through your authenticated account.</p>
            <p><strong>Journal Content:</strong> Your journal entries, including transcripts, AI-generated summaries, mood/emotion data, sentiment scores, tags, and timestamps are stored in our secure database. This content is private and only accessible by your authenticated account.</p>
            <p><strong>Camera & Photos:</strong> The app requests camera permission for the photo journal feature, which allows you to photograph handwritten diary pages. The camera is activated only when you explicitly choose to take a photo. Images are processed to extract text via AI and are stored securely. Camera access can be revoked at any time through your device settings.</p>
            <p><strong>Mood & Emotion Data:</strong> Our AI analyzes your voice tone and words to detect emotions and mood patterns. This includes emotion scores, sentiment analysis, and mood classifications. This data is stored with your journal entries to provide mood tracking and insights.</p>
            <p><strong>Device & Technical Information:</strong> We collect basic device information including device type, operating system version, timezone, and app version for functionality and debugging purposes.</p>
            <p><strong>Usage Data:</strong> We may collect information about how you use the app, including feature usage, session duration, and interaction patterns to improve the app experience.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your information solely to provide and improve the app&apos;s functionality:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>To provide voice-to-text transcription of your journal entries</li>
              <li>To analyze mood and emotions from your voice recordings and text</li>
              <li>To generate AI summaries, tags, and insights about your emotional patterns</li>
              <li>To maintain your journaling streak and provide personalized features</li>
              <li>To authenticate your account and keep your data secure</li>
              <li>To send optional local notifications (journal reminders, streak alerts)</li>
              <li>To create consolidated day journals from your daily entries</li>
              <li>To provide search functionality across your journal entries</li>
              <li>To improve app performance and fix bugs</li>
            </ul>
          </Section>

          <Section title="3. Permissions We Request">
            <p>The app requests the following device permissions:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Microphone (RECORD_AUDIO):</strong> Required for voice journal recordings. Used only when you actively record an entry.</li>
              <li><strong>Camera (CAMERA):</strong> Optional, for photographing handwritten diary pages. Used only when you explicitly open the camera.</li>
              <li><strong>Internet (INTERNET):</strong> Required for syncing data, AI processing, and authentication.</li>
              <li><strong>Notifications (POST_NOTIFICATIONS):</strong> Optional, for journal reminders and streak alerts. Can be disabled in settings.</li>
              <li><strong>Biometric (USE_BIOMETRIC/USE_FINGERPRINT):</strong> Optional, for PIN lock and biometric app lock.</li>
              <li><strong>Storage (READ/WRITE_EXTERNAL_STORAGE):</strong> For saving and accessing audio recordings.</li>
              <li><strong>Alarm (SCHEDULE_EXACT_ALARM):</strong> For scheduling notification reminders.</li>
              <li><strong>Advertising ID (AD_ID):</strong> May be used in future for serving advertisements. Currently not actively used.</li>
            </ul>
            <p>All permissions are requested at the time of use, not at installation. You can revoke any permission at any time through your device settings.</p>
          </Section>

          <Section title="4. Data Storage & Security">
            <p>We take data security seriously and implement industry-standard measures:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>All data is encrypted in transit using TLS/SSL encryption</li>
              <li>Authentication is handled by Supabase with Row Level Security (RLS), ensuring users can only access their own data</li>
              <li>Audio files are stored in Cloudflare R2 with time-limited signed URLs for access</li>
              <li>Database access is protected by authentication tokens and RLS policies</li>
              <li>The app supports PIN lock and biometric authentication for additional on-device privacy</li>
              <li>Passwords and PINs are stored using secure hashing (never in plain text)</li>
            </ul>
            <p>While we implement robust security measures, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security but strive to use commercially acceptable means to protect your data.</p>
          </Section>

          <Section title="5. AI Processing & Data Transfer">
            <p>We use Google Gemini AI to process your voice recordings and generate mood analysis. When you create a journal entry:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>Your audio recording is sent to Google Gemini AI for transcription and emotion analysis</li>
              <li>The AI generates a transcript, mood classification, sentiment score, summary, and tags</li>
              <li>This processing happens on secure servers and the data is not retained by the AI service beyond the processing request</li>
            </ul>
            <p>We do not use your personal data to train AI models. The AI processing is used solely to provide you with mood detection, summaries, and journal insights. Your data may be transferred to and processed in countries outside your country of residence where our service providers operate.</p>
          </Section>

          <Section title="6. Data Sharing & Third Parties">
            <p><strong>We do not sell, trade, rent, or share your personal data with third parties for their marketing purposes.</strong></p>
            <p>Your journal entries, recordings, and mood data are strictly private. We only share data with the following service providers who are necessary for app functionality:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Supabase (supabase.co):</strong> Authentication, database hosting, and user management</li>
              <li><strong>Cloudflare R2 (cloudflare.com):</strong> Secure audio and image file storage</li>
              <li><strong>Google Gemini AI (google.com):</strong> Voice transcription, emotion analysis, and mood detection</li>
              <li><strong>Railway (railway.app):</strong> Backend API hosting</li>
            </ul>
            <p>These providers process data on our behalf and are contractually obligated to protect your information. We may also disclose your data if required by law, court order, or governmental regulation.</p>
          </Section>

          <Section title="7. Data Retention & Deletion">
            <p>Your data is retained as long as you maintain an active account. You have full control over your data:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Delete individual entries:</strong> Swipe or long-press any journal entry to delete it permanently</li>
              <li><strong>Delete your entire account:</strong> Go to Settings &gt; Delete Account to permanently remove all your data including journal entries, recordings, mood data, and personal information</li>
              <li><strong>Request data deletion:</strong> Contact us at mubarisfly@gmail.com and we will delete all your data within 30 days</li>
            </ul>
            <p>When data is deleted, it is permanently removed from our active systems. Backups may retain deleted data for up to 30 days before being purged.</p>
          </Section>

          <Section title="8. Your Rights (GDPR & Global Privacy Rights)">
            <p>Regardless of your location, you have the following rights regarding your personal data:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Right to Access:</strong> You can view all your journal data within the app at any time</li>
              <li><strong>Right to Rectification:</strong> You can edit your journal entries at any time through the app</li>
              <li><strong>Right to Deletion:</strong> You can delete individual entries or your entire account</li>
              <li><strong>Right to Data Portability:</strong> You can request a copy of your data by contacting us</li>
              <li><strong>Right to Withdraw Consent:</strong> You can revoke permissions and stop using the app at any time</li>
              <li><strong>Right to Object:</strong> You can object to certain processing by contacting us</li>
              <li><strong>Right to Restrict Processing:</strong> You can request we limit how we use your data</li>
            </ul>
            <p>To exercise any of these rights, contact us at mubarisfly@gmail.com. We will respond within 30 days.</p>
          </Section>

          <Section title="9. Notifications & Communications">
            <p>With your permission, the app may send local notifications for:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>Journal reminders (customizable time)</li>
              <li>Streak alerts (when your streak is at risk)</li>
              <li>Inactivity reminders (after extended periods without journaling)</li>
            </ul>
            <p>All notifications are local (generated on your device, not from our servers). You can disable notifications at any time through your device settings or the app&apos;s settings page. We do not send marketing emails or push notifications.</p>
          </Section>

          <Section title="10. Children&apos;s Privacy">
            <p>AI Diary is intended for users aged 18 and above. We do not knowingly collect personal data from children under the age of 18 (or the applicable age of consent in your jurisdiction). If you are a parent or guardian and believe your child has provided us with personal data, please contact us at mubarisfly@gmail.com and we will promptly delete the data and associated account.</p>
          </Section>

          <Section title="11. Advertising">
            <p>The app currently does not display advertisements. However, we may introduce advertisements in the future. If ads are implemented:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>We may use the Android Advertising ID for ad personalization</li>
              <li>You can opt out of personalized ads through your device settings (Settings &gt; Google &gt; Ads)</li>
              <li>Ad networks may collect device information for ad serving purposes</li>
              <li>We will update this privacy policy before implementing any advertising features</li>
            </ul>
          </Section>

          <Section title="12. Cookies & Tracking">
            <p>The mobile app does not use cookies. Our website (landing page) may use essential cookies for basic functionality. We do not use tracking cookies or third-party analytics cookies on our website.</p>
          </Section>

          <Section title="13. International Data Transfers">
            <p>Your data may be transferred to and processed in countries other than your country of residence, including the United States, where our service providers (Supabase, Cloudflare, Google) operate. These transfers are necessary to provide our services. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.</p>
          </Section>

          <Section title="14. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>The &ldquo;Last updated&rdquo; date at the top will be revised</li>
              <li>Material changes will be communicated through the app</li>
              <li>Continued use of the app after changes constitutes acceptance of the updated policy</li>
            </ul>
            <p>We encourage you to review this policy periodically.</p>
          </Section>

          <Section title="15. Disclaimer of Liability">
            <p>AI Diary provides AI-generated mood analysis and summaries for personal journaling and self-reflection purposes only. This is <strong>not a medical device</strong> and should not be used as a substitute for professional mental health advice, diagnosis, or treatment. We make no warranties regarding the accuracy of mood detection or emotional analysis. Always seek the advice of a qualified healthcare provider for mental health concerns.</p>
          </Section>

          <Section title="16. Governing Law">
            <p>This Privacy Policy shall be governed by and construed in accordance with applicable laws. Any disputes arising from this policy shall be resolved through appropriate legal channels in the jurisdiction where the app operator is located.</p>
          </Section>

          <Section title="17. Contact Us">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
            <div style={{ marginTop: 12, padding: 20, background: "white", borderRadius: 16, border: "1px solid #EAE5DC" }}>
              <p style={{ margin: 0 }}><strong>AI Diary - Voice Mood Journal</strong></p>
              <p style={{ margin: "8px 0 0" }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:mubarisfly@gmail.com" style={{ color: C.sage, textDecoration: "none" }}>
                  mubarisfly@gmail.com
                </a>
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: C.muted }}>
                We aim to respond to all inquiries within 30 days.
              </p>
            </div>
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
