import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const SECTIONS = [
  {
    n: "1",
    title: "Introduction",
    body: `Perfora (www.perforacare.com) is a website (the "Website") operated by Chipper Consumer Private Limited (Indian Private Limited Company) (the "Website Owner"). The Website Owner, including subsidiaries and affiliates (or "we" or "us" or "our") provides the information contained on this Website or any of the pages comprising the Website to visitors ("Visitors") (cumulatively referred to as "you" or "your" hereinafter) subject to the terms and conditions set out in these Website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of this website.

Please read this agreement carefully. By browsing, accessing or using this website or by using any facilities or services made available through it or by transacting through or on it, you are agreeing to the terms and conditions that appear below (all of which are called the "Agreement"). This Agreement is made between you and us.`,
  },
  {
    n: "2",
    title: "Website Availability",
    bullets: [
      "Perfora may suspend the Website for any reason whatsoever, including but not limited to repairs, planned maintenance or upgrades, and shall not be liable to you for any such suspension.",
      "Perfora reserves the right to make any changes to the Website or to discontinue any aspect or feature of the Website without notice.",
      "In the event that Perfora, in its sole discretion, considers that you are making any illegal and/or unauthorised use of the Website, and/or your use of the Website is in breach of these Terms, Perfora reserves the right to take any action that it deems necessary, including terminating without notice your use of the Website and, in the case of illegal use, instigating legal proceedings.",
    ],
  },
  {
    n: "3",
    title: "Your Status",
    body: "By placing an order to purchase Products (Order) through the Website, you warrant that:",
    bullets: [
      "You are legally capable of entering into binding contracts; and",
      "You are at least 18 years old",
    ],
  },
  {
    n: "4",
    title: "The Contract Between You and The Partner",
    bullets: [
      "After placing an Order, you will receive an email from Perfora acknowledging that Perfora has received your order. Please note that this does not mean that your Order has been accepted. Your Order constitutes an offer to Perfora to buy a Product for sale via the Website (the Partner). All orders are subject to acceptance by the Partner, and the Partner will confirm such acceptance to you by sending you an email that confirms that the Product has been dispatched (the Dispatch Confirmation). The contract between the Partner and you (Contract) will only be formed when the relevant Partner sends you the Dispatch Confirmation.",
      "Each Contract relates only to those Products whose dispatch the Partner has confirmed in the Dispatch Confirmation. The Partner shall not be obliged to supply any other Products which may have been part of your Order until the dispatch of such Products has been confirmed by way of a Dispatch Confirmation.",
      "For the avoidance of doubt, your contract with Perfora relates only to your use of the Website and the Services available therein.",
    ],
  },
  {
    n: "5",
    title: "Credit Card Payment",
    body: "In a credit card transaction, you must use your own credit card. We will not be liable for any credit card fraud. The liability to use a card fraudulently will be on the user and the onus to 'prove otherwise' shall be exclusively on the user.",
  },
  {
    n: "6",
    title: "Trademarks",
    body: `The trademarks, names, logos and service marks (collectively "trademarks") displayed on this website are registered and unregistered trademarks of the Website Owner and the suppliers of the products listed on the Website. Nothing contained on this website should be construed as granting any licence or right to use any trademark without the prior written permission of the Website Owner.`,
  },
  {
    n: "7",
    title: "External Links",
    body: "External links may be provided for your convenience, but they are beyond the control of the Website Owner and no representation is made as to their content. Use or reliance on any external links and the content thereon provided is at your own risk. When visiting external links you must refer to that external website's terms and conditions of use. No hypertext links shall be created from any website controlled by you or otherwise to this website without the express prior written permission of the Website Owner. Please contact us at hello@perforacare.com if you would like to link to this website or would like to request a link to your website.",
  },
  {
    n: "8",
    title: "Specific Use",
    body: "You further agree not to use the website to send or post any message or material that is unlawful, harassing, defamatory, abusive, indecent, threatening, harmful, vulgar, obscene, sexually orientated, racially offensive, profane, pornographic or violates any applicable law and you hereby INDEMNIFY the Website Owner against any loss, liability, damage or expense of whatever nature which the Website Owner or any third party may suffer which is caused by or attributable to, whether directly or indirectly, your use of the website to send or post any such message or material.",
  },
  {
    n: "9",
    title: "Perfora Refund Policy",
    body: "Products returned by you because of a defect are only eligible for replacement. Any products returned by you due to dissatisfaction will be refunded in full, excluding a standard delivery cost incurred by you in returning the item to us. All refunds will be initiated through a Bank NEFT/RTGS transfer.",
  },
  {
    n: "10",
    title: "Disclaimer of Liability",
    body: "The Website Owner shall not be responsible for and DISCLAIMS all liability for any loss, liability, damage (whether direct, indirect or consequential), personal injury or expense of any nature whatsoever which may be suffered by you or any third party (including your company), as a result of or which may be attributable, directly or indirectly, to your access and use of the website, any information contained on the website, your or your company's personal information or material and information transmitted over our system. In PARTICULAR, neither the Website Owner nor any third party or data or content provider shall be liable in any way to you or to any other person, firm or corporation whatsoever for any loss, liability, damage (whether direct or consequential), personal injury or expense of any nature whatsoever arising from any delays, inaccuracies, errors in, or omission of any share price information or the transmission thereof, or for any actions taken in reliance thereon or occasioned thereby or by reason of non-performance or interruption, or termination thereof.",
  },
  {
    n: "11",
    title: "User of the Website",
    body: "The Website Owner does not make any warranty or representation that information on the website is appropriate for use in any jurisdiction (other than India). By accessing the website, you warrant and represent to the Website Owner that you are legally entitled to do so and to make use of information made available via the website.",
  },
  {
    n: "12",
    title: "No Commercial Use",
    body: "This Website is for your personal, non-commercial use only. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, commercially exploit, create derivative works from, transfer, or sell any content, software, products, or services contained within this site. You may not use this site, or any of its content, to further any commercial purpose, including any advertising or advertising revenue generation activity on your own site.",
  },
  {
    n: "13",
    title: "Visitor Registration",
    body: "Visitors will need to register with the Website in order to use some of the services or features made available on this Website. When you register, you are required to provide information about yourself that is true, accurate, current and complete in all respects. Should any of your registration information change, please notify us immediately either using the Website's automated service, or via e-mail at hello@perforacare.com. We may change registration requirements from time to time.",
  },
  {
    n: "14",
    title: "General",
    subSections: [
      { title: "Entire Agreement", body: "These website terms and conditions constitute the sole record of the agreement between you and the Website Owner in relation to your use of the website. Neither you nor the Website Owner shall be bound by any express tacit or implied representation, warranty, promise or the like not recorded herein. Unless otherwise specifically stated these website terms and conditions supersede and replace all prior commitments, undertakings or representations, whether written or oral, between you and the Website Owner in respect of your use of the website." },
      { title: "Alteration", body: `The Website Owner may at any time modify any relevant terms and conditions, policies or notices. You acknowledge that by visiting the website from time to time, you shall become bound to the current version of the relevant terms and conditions (the "current version") and, unless stated in the current version, all previous versions shall be superseded by the current version. You shall be responsible for reviewing the then current version each time you visit the website.` },
      { title: "Conflict", body: "Where any conflict or contradiction appears between the provisions of these website terms and conditions and any other relevant terms and conditions, policies or notices, the other relevant terms and conditions, policies or notices which relate specifically to a particular section or module of the website shall prevail in respect of your use of the relevant section or module of the website." },
      { title: "Waiver", body: "No indulgence or extension of time which either you or the Website Owner may grant to the other will constitute a waiver of or, whether by estoppel or otherwise, limit any of the existing or future rights of the grantor in terms hereof, save in the event or to the extent that the grantor has signed a written document expressly waiving or limiting such rights." },
      { title: "Cession", body: "The Website Owner shall be entitled to cede, assign and delegate all or any of its rights and obligations in terms of any relevant terms and conditions, policies and notices to any third party." },
      { title: "Severability", body: "All provisions of any relevant terms and conditions, policies and notices are, notwithstanding the manner in which they have been grouped together or linked grammatically, severable from each other. Any provision of any relevant terms and conditions, policies and notices, which is or becomes unenforceable in any jurisdiction, whether due to voidness, invalidity, illegality, unlawfulness or for any reason whatever, shall, in such jurisdiction only and only to the extent that it is so unenforceable, be treated as pro non scripto and the remaining provisions of any relevant terms and conditions, policies and notices shall remain in full force and effect." },
      { title: "Applicable Law", body: "Any relevant terms and conditions, policies and notices shall be governed by and construed in accordance with the laws of India without giving effect to any principles of conflict of law. You hereby consent to the exclusive jurisdiction of the courts of India in respect of any disputes arising in connection with the website, or any relevant terms and conditions, policies and notices or any matter related to or in connection therewith." },
      { title: "Comments or Questions", body: "If you have any questions, comments or concerns arising from the website or any other relevant terms and conditions, policies and notices contact us at hello@perforacare.com." },
    ],
  },
  {
    n: "15",
    title: "Offers T&C",
    bullets: [
      "Offer will be applicable only once per customer.",
      "In case of a Freebie offer (if running), free product should be added in cart while applying the code.",
      "No 2 offers can be clubbed together.",
      "Offer validity depends on the type of offer and will be conveyed through the rightful mediums/channels.",
      "In case of out of stock of the offer product, company has all the rights to cancel the order.",
      "The company has all the rights to decide on the products and offers, to terminate or continue them at any point of time.",
      "Promotional offer is only valid for the time range of offer validation.",
      "No cash alternatives will be offered to the customer.",
      "Promotional offer can only be availed during the offer time and date.",
      "The Company reserves the right to change the terms and conditions of any offer or completely withdraw it without any prior notice.",
      "The Company reserves the right to terminate the user's account and cancel all outstanding orders if it is found that the user is trying to misuse the promotions by any means.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <section style={{ background: "#F5F3FF", padding: "clamp(80px,10vw,120px) clamp(20px,6vw,88px) clamp(60px,7vw,88px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9B8CB8", marginBottom: 14 }}>Legal</p>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1A0A3D", margin: "0 0 16px" }}>
              Terms of{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6B4FB3" }}>Service</em>
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#9B8CB8", margin: 0 }}>
              Operated by Chipper Consumer Private Limited · Questions at{" "}
              <a href="mailto:hello@perforacare.com" style={{ color: "#3D1F8F", fontWeight: 600, textDecoration: "none" }}>hello@perforacare.com</a>
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
            {SECTIONS.map(s => (
              <div key={s.n} style={{ background: "#fff", border: "1.5px solid #EDE9FB", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 26px", borderBottom: (s.body || s.bullets || s.subSections) ? "1px solid #EDE9FB" : undefined }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, color: "#A78BFA", background: "#F0EBFF", borderRadius: 8, padding: "4px 10px", flexShrink: 0 }}>{s.n}</span>
                  <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 700, color: "#1A0A3D", margin: 0 }}>{s.title}</h2>
                </div>
                {(s.body || s.bullets || s.subSections) && (
                  <div style={{ padding: "20px 26px" }}>
                    {s.body && <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.75, color: "#4A4458", margin: s.bullets ? "0 0 14px" : 0, whiteSpace: "pre-line" as const }}>{s.body}</p>}
                    {s.bullets && (
                      <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 8 }}>
                        {s.bullets.map((b, i) => (
                          <li key={i} style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.7, color: "#4A4458" }}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {s.subSections && (
                      <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
                        {s.subSections.map(sub => (
                          <div key={sub.title}>
                            <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, fontWeight: 700, color: "#1A0A3D", margin: "0 0 6px" }}>{sub.title}</h3>
                            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.75, color: "#4A4458", margin: 0 }}>{sub.body}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
