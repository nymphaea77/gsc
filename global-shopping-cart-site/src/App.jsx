export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="brand">Global Shopping Cart LLC</div>
            <div className="subtitle">E-commerce Management Solutions</div>
          </div>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">
                Corporate website for business presentation and verification
              </div>

              <h1>
                E-commerce management solutions and business support services for
                modern online operations.
              </h1>

              <p className="hero-text">
                Global Shopping Cart LLC is a business services company focused
                on e-commerce management solutions, e-commerce operational
                support, logistics coordination, customs-related workflows,
                business documentation, and carrier cost oversight.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Business Contact
                </a>
                <a className="btn btn-secondary" href="#services">
                  View Services
                </a>
              </div>
            </div>

            <div className="hero-cards">
              <div className="card">
                <div className="card-label">Company profile</div>
                <h2>Structured support for international e-commerce operations</h2>
                <p>
                  Our work is centered on e-commerce management support and
                  operational processes connected to shipping, customs
                  preparation, carrier coordination, documentation handling, and
                  related business support tasks.
                </p>
              </div>

              <div className="mini-grid">
                <div className="card small-card">
                  <div className="big">B2B</div>
                  <div className="small-muted">Business-facing operating model</div>
                </div>
                <div className="card small-card">
                  <div className="big">Verified</div>
                  <div className="small-muted">
                    Clear identity, service scope, and contact details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="container">
            <h2>Services</h2>
            <p className="section-text">
              Our services are structured around e-commerce management needs and
              the operational and administrative requirements commonly
              associated with domestic and international e-commerce activity.
            </p>

            <div className="grid-3">
              <div className="card">
                <h3>Shipping Coordination</h3>
                <p>
                  Support for shipment preparation, carrier label workflows,
                  dispatch coordination, and follow-up on shipping activity.
                </p>
              </div>

              <div className="card">
                <h3>Customs Documentation Support</h3>
                <p>
                  Assistance with product information, customs-related
                  documentation, and operational preparation connected to
                  international shipments.
                </p>
              </div>

              <div className="card">
                <h3>Carrier Cost Oversight</h3>
                <p>
                  Review and monitoring of shipping charges, billing patterns,
                  and transportation-related cost activity.
                </p>
              </div>

              <div className="card">
                <h3>Client Information Support</h3>
                <p>
                  Preparation and delivery of requested business information,
                  shipment details, supporting files, and operational documents.
                </p>
              </div>

              <div className="card">
                <h3>E-commerce Back-Office Assistance</h3>
                <p>
                  Day-to-day support for workflows tied to order handling,
                  shipment records, and related operational communication.
                </p>
              </div>

              <div className="card">
                <h3>Process Coordination</h3>
                <p>
                  Communication support across operational stakeholders to help
                  address shipment and logistics-related issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <h2>About the Company</h2>
              <p>
                Global Shopping Cart LLC provides e-commerce management
                solutions and business support services for e-commerce and
                logistics-related operations. The company focuses on practical
                coordination tasks that help businesses manage e-commerce
                activity, shipping operations, customs-related preparation,
                required documentation, and administrative workflow support.
              </p>
              <p>
                The company website is intended to present business identity,
                service scope, and contact details for general corporate
                visibility, business communication, and verification purposes.
              </p>
            </div>

            <div className="card">
              <h3>Company Information</h3>
              <p>
                This website is maintained as an official online presence for
                Global Shopping Cart LLC and includes general business
                information, core service descriptions, and public contact
                details.
              </p>

              <div className="info-list">
                <div className="info-item">Official company presentation</div>
                <div className="info-item">Business service overview</div>
                <div className="info-item">Public contact information</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container">
            <h2>Contact</h2>
            <p className="section-text">
              For business inquiries, verification requests, or general
              communication regarding our services, please use the contact
              details below.
            </p>

            <div className="two-col">
              <div className="card">
                <div className="card-label">Company</div>
                <h3>Global Shopping Cart LLC</h3>

                <div className="contact-block">
                  <div className="muted">Contact Person</div>
                  <div>Aysen Harman</div>
                </div>

                <div className="contact-block">
                  <div className="muted">Email</div>
                  <div>globalshoppingcartllc@gmail.com</div>
                </div>

                <div className="contact-block">
                  <div className="muted">Availability</div>
                  <div>Business inquiries and verification-related communication</div>
                </div>
              </div>

              <div className="card">
                <div className="card-label">Business Scope</div>
                <ul className="plain-list">
                  <li>Shipping and logistics-related operational support</li>
                  <li>Customs and documentation coordination</li>
                  <li>E-commerce management solutions and operational assistance</li>
                  <li>Carrier billing and cost oversight support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="section">
          <div className="container narrow">
            <h2>Privacy Policy</h2>
            <p>
              Global Shopping Cart LLC may collect basic contact information
              voluntarily submitted through direct business communication, such
              as name, email address, and message content. This information is
              used only for responding to inquiries, verification-related
              communication, and ordinary business correspondence.
            </p>
            <p>
              We do not publish or intentionally share submitted contact
              information with unrelated third parties except where disclosure
              is required by law, necessary for business communication, or
              reasonably required for service-related operations.
            </p>
            <p>
              By contacting Global Shopping Cart LLC through the public contact
              details on this website, you acknowledge that your information may
              be used for legitimate business communication purposes.
            </p>
          </div>
        </section>

        <section id="terms" className="section alt">
          <div className="container narrow">
            <h2>Terms of Use</h2>
            <p>
              The information presented on this website is provided for general
              business information, company presentation, and communication
              purposes only. Website content may be updated, revised, or removed
              without prior notice.
            </p>
            <p>
              Global Shopping Cart LLC makes reasonable efforts to present
              accurate company and service information, but no guarantee is made
              that all information will remain complete, current, or error-free
              at all times.
            </p>
            <p>
              By using this website or contacting the company through the
              published contact details, you agree that any communication is for
              lawful business purposes and subject to ordinary business review
              and response.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 Global Shopping Cart LLC. All rights reserved.</div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
