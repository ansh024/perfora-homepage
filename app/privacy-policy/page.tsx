import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const SECTIONS = [
  {
    n: "1",
    title: "Collection of Personally Identifiable Information",
    body: `When you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customised experience. This allows us to provide services and features that most likely meet your needs, and to customise our Website to make your experience safer and easier.

In general, you can browse the Website without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional.

We may automatically track certain information about you based upon your behaviour on our Website. We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users. This information may include the URL that you just came from, which URL you next go to, your computer browser information, and your IP address.

We use data collection devices such as "cookies" on certain pages of the Website to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. Cookies are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a cookie.

We also use cookies to allow you to enter your password less frequently during a session. Most cookies are "session cookies," meaning they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website.

If you transact with us, we collect some additional information, such as a billing address, a credit/debit card number and expiration date and/or other payment instrument details and tracking information from cheques or money orders.

We collect personally identifiable information (email address, name, phone number, credit card/debit card/other payment instrument details, etc.) from you when you set up a free account with us. We do use your contact information to send you offers based on your previous orders and your interests.`,
  },
  {
    n: "2",
    title: "Use of Demographic / Profile Data / Your Information",
    body: `We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services; inform you about online and offline offers, products, services, and updates; customise your experience; detect and protect us against error, fraud and other criminal activity; and enforce our terms and conditions.

In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our Website.

We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.

A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. We place both permanent and temporary cookies in your computer's hard drive. The cookies do not contain any of your personally identifiable information.`,
  },
  {
    n: "3",
    title: "Sharing of Personal Information",
    body: `We may share personal information with our other corporate entities and affiliates to help detect and prevent identity theft, fraud and other potentially illegal acts; correlate related or multiple accounts to prevent abuse of our services; and to facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity. Those entities and affiliates may not market to you as a result of such sharing unless you explicitly opt-in.

We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.`,
  },
  {
    n: "4",
    title: "Security Precautions",
    body: "Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorised access.",
  },
  {
    n: "5",
    title: "Choice / Opt-Out",
    body: "We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account.",
  },
  {
    n: "6",
    title: "Your Consent",
    body: `By using the Website and/or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.

If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "#F5F3FF", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(60px,7vw,88px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 14 }}>Legal</p>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1A0A3D", margin: "0 0 16px" }}>
              Privacy{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>Policy</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px,1.4vw,16px)", color: "#4A4458", lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
              We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Our privacy policy is subject to change at any time without notice — please review this policy periodically.
            </p>
          </div>

          {/* Note box */}
          <div style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 14, padding: "16px 22px", marginBottom: 16, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "#F0EBFF", color: "#3D1F8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, lineHeight: 1.65, color: "#4A4458", margin: 0 }}>
              By visiting this Website, you agree to be bound by the terms and conditions of this Privacy Policy. By mere use of the Website, you specifically consent to our use and disclosure of your personal information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
            {SECTIONS.map(s => (
              <div key={s.n} style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 24px", borderBottom: "1px solid #EDE9FB" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, color: "#A78BFA", background: "#F0EBFF", borderRadius: 8, padding: "4px 10px", flexShrink: 0 }}>{s.n}</span>
                  <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 14.5, fontWeight: 700, color: "#1A0A3D", margin: 0 }}>{s.title}</h2>
                </div>
                <div style={{ padding: "18px 24px" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.78, color: "#4A4458", margin: 0, whiteSpace: "pre-line" as const }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: "16px 22px", background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 14, textAlign: "center" as const }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#4A4458", margin: 0 }}>
              For further information, contact us at{" "}
              <a href="mailto:hello@perforacare.com" style={{ color: "#3D1F8F", fontWeight: 600, textDecoration: "none" }}>hello@perforacare.com</a>
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
