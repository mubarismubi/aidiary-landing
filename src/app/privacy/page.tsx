import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - AI Diary",
  description: "Privacy Policy for AI Diary - Voice and Photo Journal",
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
            Last updated: July 22, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ fontSize: 16, color: C.brown, lineHeight: 1.8 }}>
          <p style={{ marginBottom: 24 }}>
            AI Diary (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use AI Diary on Android or iOS. By using the app, you agree to the collection and use of information in accordance with this policy.
          </p>

          <Section title="1. Information We Collect">
            <p><strong>Account Information:</strong> When you create an account, we collect your email address and account identifier. You may also choose to add a display name, age, and profile photo. We use Supabase Authentication to manage user accounts securely.</p>
            <p><strong>Voice Recordings & Microphone Access:</strong> Microphone access is used only when you actively record a voice journal entry or voice follow-up. The recording is sent to Google Gemini for the requested transcription and mood analysis, and a copy is retained in private Cloudflare R2 storage so you can play it again. Stored audio remains associated with your entry until you delete that entry or your account.</p>
            <p><strong>Journal Content:</strong> Your journal entries, including transcripts, AI-generated summaries, mood/emotion data, sentiment scores, tags, and timestamps are stored in our secure database. This content is private and only accessible by your authenticated account.</p>
            <p><strong>Camera, Photo Library & Uploaded Photos:</strong> You may choose a photo from your library or take one with the camera to attach to an entry, use as your profile photo, or submit through Photo Journal to read a handwritten diary page. Entry photos and profile photos are resized and compressed on your device, with EXIF/GPS metadata removed, before being stored in private Cloudflare R2 storage. Regular entry attachments and profile photos are not sent to Gemini. Only a photo you explicitly submit through Photo Journal is sent to Gemini for the requested handwriting and mood analysis. Camera and photo-library access can be revoked in your device settings.</p>
            <p><strong>Mood & Emotion Data:</strong> Our AI analyzes your voice tone and words to detect emotions and mood patterns. This includes emotion scores, sentiment analysis, and mood classifications. This data is stored with your journal entries to provide mood tracking and insights.</p>
            <p><strong>Physical Activity & Step Counts:</strong> If you enable the step-count habit, the app reads your daily step count through Android physical-activity sensors or Apple Motion &amp; Fitness. The daily value is stored with your private habit progress so it can sync across sessions and appear in your insights. AI Diary does not collect precise location from step tracking.</p>
            <p><strong>Subscriptions & Purchase History:</strong> To provide and restore paid features, we store the subscription product, entitlement state, renewal or expiration status, and store transaction identifiers linked to your account through RevenueCat. We do not receive your full payment-card details.</p>
            <p><strong>Device & Technical Information:</strong> We collect basic device information including device type, operating system version, timezone, and app version for functionality and debugging. To prepare push delivery, the app may create and store a Firebase registration token linked to a signed-in app installation before notification display permission is granted. Your operating-system permission controls whether alerts can be displayed, and the app attempts to remove its stored token when you sign out.</p>
            <p><strong>Diagnostics & Support:</strong> We collect minimal crash and error reports (via Sentry) to keep the app stable and fix bugs. If you submit an authenticated support request, the ticket also includes app/build version, device model and configuration, locale, timezone, subscription state, streak, and entry/follow-up counts so we can diagnose the issue. It does not automatically attach your diary text, recordings, or photos. We do not use third-party product-analytics or behavioral-tracking SDKs, and we do not profile how you use the app.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your information solely to provide and improve the app&apos;s functionality:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>To provide voice-to-text transcription of your journal entries</li>
              <li>To analyze mood and emotions from your voice recordings and text</li>
              <li>To privately store and display photos you attach to entries or use as a profile photo</li>
              <li>To transcribe a handwritten page when you explicitly use Photo Journal</li>
              <li>To generate AI summaries, tags, and insights about your emotional patterns</li>
              <li>To maintain your journaling streak and provide personalized features</li>
              <li>To show and sync step-count habit progress when you enable that feature</li>
              <li>To authenticate your account and keep your data secure</li>
              <li>To manage subscription access and restore purchases</li>
              <li>To prepare and deliver optional local and push notifications (journal reminders, streak alerts)</li>
              <li>To create consolidated day journals from your daily entries</li>
              <li>To provide search functionality across your journal entries</li>
              <li>To improve app performance and fix bugs</li>
            </ul>
          </Section>

          <Section title="3. Permissions We Request">
            <p>The app requests the following device permissions:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Microphone (RECORD_AUDIO):</strong> Required for voice journal recordings. Used only when you actively record an entry.</li>
              <li><strong>Camera (CAMERA):</strong> Optional, for taking an entry photo, profile photo, or handwritten-page photo. Used only when you explicitly open the camera.</li>
              <li><strong>Photo Library:</strong> Optional, for choosing a photo to attach to an entry or use as your profile photo. On supported Android versions this uses the system photo picker without broad library access.</li>
              <li><strong>Internet (INTERNET):</strong> Required for syncing data, AI processing, and authentication.</li>
              <li><strong>Notifications (POST_NOTIFICATIONS):</strong> Optional, for journal reminders and streak alerts. Can be disabled in settings.</li>
              <li><strong>Physical Activity / Motion &amp; Fitness:</strong> Optional, for reading daily step counts only when you enable the step-count habit. This does not grant precise-location access.</li>
              <li><strong>Biometric (USE_BIOMETRIC/USE_FINGERPRINT):</strong> Optional, for PIN lock and biometric app lock.</li>
              <li><strong>Files:</strong> Optional. When you choose &ldquo;Save to device&rdquo; for an entry photo, the system file picker lets you choose the destination. AI Diary does not request broad storage access.</li>
              <li><strong>Alarm (SCHEDULE_EXACT_ALARM):</strong> For scheduling notification reminders.</li>
              <li><strong>Advertising ID (Android only):</strong> Google AdMob may use it for non-personalized ad delivery, frequency capping, and fraud prevention for free-tier users. AI Diary does not use it to build an advertising profile. The ads SDK is not included or initialized in the iOS app.</li>
            </ul>
            <p>User-facing runtime permissions are requested when the related feature needs them. Technical permissions such as internet access do not show a runtime prompt. You can revoke optional camera, photo-library, microphone, notification, or biometric access through your device settings.</p>
          </Section>

          <Section title="4. Data Storage & Security">
            <p>We take data security seriously and implement industry-standard measures:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>All data is encrypted in transit using TLS/SSL encryption</li>
              <li>Authentication is handled by Supabase with Row Level Security (RLS), ensuring users can only access their own data</li>
              <li>Audio and photo files are stored in a private Cloudflare R2 bucket and served only through owner-authorized, time-limited signed URLs</li>
              <li>Uploaded entry photos are resized/compressed and stripped of EXIF/GPS metadata before storage; the server rejects image uploads that retain EXIF metadata</li>
              <li>Database access is protected by authentication tokens and RLS policies</li>
              <li>The app supports PIN lock and biometric authentication for additional on-device privacy</li>
              <li>Passwords and PINs are stored using secure hashing (never in plain text)</li>
            </ul>
            <p>While we implement robust security measures, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security but strive to use commercially acceptable means to protect your data.</p>
          </Section>

          <Section title="5. AI Processing & Data Transfer">
            <p>We use Google Gemini AI to process content only when an AI-powered feature requires it. When you create a voice entry:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>Your audio recording is sent to Google Gemini AI for transcription and emotion analysis</li>
              <li>The AI generates a transcript, mood classification, sentiment score, summary, and tags</li>
              <li>Google processes the recording for that request; AI Diary separately retains the private R2 copy used for in-app playback until you delete it</li>
              <li>If you explicitly use Photo Journal, that selected handwritten-page photo is sent to Gemini for OCR and mood analysis. Ordinary entry attachments and profile photos are not sent to Gemini</li>
            </ul>
            <p>AI Diary does not train its own models on your content. Google processes requests under the applicable Gemini API terms and project settings. Those terms may include limited retention for safety and abuse prevention and, when an unpaid Gemini service is used, use of prompts and responses to improve Google products. AI processing is used to provide mood detection, summaries, and journal insights. Your data may be transferred to and processed in countries outside your country of residence where our service providers operate.</p>
          </Section>

          <Section title="6. Data Sharing & Third Parties">
            <p><strong>We do not sell, trade, rent, or share your personal data with third parties for their marketing purposes.</strong></p>
            <p>Your journal entries, recordings, attached photos, and mood data are not public and are not available to other users. We disclose data only to service providers needed to operate the requested features:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Supabase (supabase.co):</strong> Authentication, database hosting, and user management</li>
              <li><strong>Cloudflare R2 (cloudflare.com):</strong> Secure audio and image file storage</li>
              <li><strong>Google Gemini AI (google.com):</strong> Voice transcription, emotion analysis, summaries, and handwritten-page processing when Photo Journal is used</li>
              <li><strong>Railway (railway.app):</strong> Backend API hosting</li>
              <li><strong>Firebase Cloud Messaging (google.com):</strong> Push notification delivery</li>
              <li><strong>RevenueCat (revenuecat.com):</strong> Subscription management</li>
              <li><strong>Resend (resend.com):</strong> Transactional support emails</li>
              <li><strong>Sentry (sentry.io):</strong> Crash and error reporting</li>
              <li><strong>Google AdMob (google.com):</strong> Non-personalized advertising for free-tier users only</li>
            </ul>
            <p>These providers process data on our behalf and are contractually obligated to protect your information. We may also disclose your data if required by law, court order, or governmental regulation.</p>
          </Section>

          <Section title="7. Data Retention & Deletion">
            <p>Your data is retained as long as you maintain an active account. You have full control over your data:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Delete an attached photo:</strong> Open the entry photo viewer and choose delete to remove that photo and its stored thumbnail</li>
              <li><strong>Delete individual entries:</strong> Swipe or long-press an entry to remove its journal content, stored voice recording, attached photos, and derived analysis</li>
              <li><strong>Delete your entire account:</strong> Go to Settings &gt; Delete Account to permanently remove your profile, avatar, journal entries, recordings, attached photos, mood data, and personal information</li>
              <li><strong>Habit and step progress:</strong> Account deletion also removes stored habit logs, including any step-count values</li>
              <li><strong>Request data deletion:</strong> Contact us at mubarisfly@gmail.com and we will delete all your data within 30 days</li>
            </ul>
            <p>Deletion removes the data and your ability to access it from the live account immediately. Associated audio and image object keys are placed in a server-only durable deletion queue in the same database transaction, and a scheduled worker retries failed storage removals until each object is gone. Completed deletion-job metadata is retained for up to seven days for operational verification. Backups may retain deleted data for up to 30 days before being purged.</p>
          </Section>

          <Section title="8. Your Rights (GDPR & Global Privacy Rights)">
            <p>Regardless of your location, you have the following rights regarding your personal data:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li><strong>Right to Access:</strong> You can view all your journal data within the app at any time</li>
              <li><strong>Right to Rectification:</strong> You can edit your journal entries at any time through the app</li>
              <li><strong>Right to Deletion:</strong> You can delete individual entries or your entire account</li>
              <li><strong>Right to Data Portability:</strong> You can request a copy of your data by contacting us</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent for sensitive-data processing at any time. Withdrawing does not affect the lawfulness of processing carried out before the withdrawal. To withdraw, stop using the app and delete your account.</li>
              <li><strong>Right to Object:</strong> You can object to certain processing by contacting us</li>
              <li><strong>Right to Restrict Processing:</strong> You can request we limit how we use your data</li>
              <li><strong>Legal Basis:</strong> We process your special-category data (voice recordings, mood records, and journal contents) under GDPR Article 9(2)(a), on the basis of your explicit consent, which you give when you continue past the sign-in screen.</li>
            </ul>
            <p>To exercise any of these rights, contact us at mubarisfly@gmail.com. We will respond within 30 days.</p>
          </Section>

          <Section title="9. Notifications & Communications">
            <p>With your permission, the app may send local notifications and Firebase Cloud Messaging push notifications for:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>Journal reminders (customizable time)</li>
              <li>Streak alerts (when your streak is at risk)</li>
              <li>Inactivity reminders (after extended periods without journaling)</li>
              <li>Follow-up reflections and replies to support requests</li>
            </ul>
            <p>You can turn notification categories off in AI Diary or disable notifications in your device settings. AI Diary may register the signed-in app installation with Firebase before display permission is granted so push delivery is ready if you enable it; the operating-system permission controls whether alerts are shown. Journal content is not used for third-party advertising.</p>
          </Section>

          <Section title="10. Children&apos;s Privacy">
            <p>AI Diary is intended for users aged 13 and above. If you reside in the EEA or UK, you must be at least 16 (or the minimum digital-consent age set by your country) to consent to this processing. We do not knowingly collect personal data from children below these age limits. If you are a parent or guardian and believe your child has provided us with personal data, please contact us at mubarisfly@gmail.com and we will promptly delete the data and associated account.</p>
          </Section>

          <Section title="11. Advertising">
            <p>On Android, the free tier may display ads through Google AdMob. Pro and trial users see no ads, and the ads SDK is not included or initialized in the iOS app. Android ads are <strong>non-personalized</strong>:</p>
            <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
              <li>Where required, Google User Messaging Platform presents advertising privacy choices before AI Diary requests an ad, and checks whether ads may be requested</li>
              <li>When required by the applicable consent message, you can revisit or withdraw those choices from Settings &gt; Ad privacy choices</li>
              <li>We do not use your Advertising ID to track you across apps or build an advertising profile</li>
              <li>Ads are contextual, not based on your behavior or personal data — your journal content is never used for advertising</li>
              <li>AdMob may access the device Advertising ID for basic functions such as frequency capping and fraud prevention; you can reset or limit it via Settings &gt; Google &gt; Ads</li>
              <li>Upgrading to Pro removes all ads</li>
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
