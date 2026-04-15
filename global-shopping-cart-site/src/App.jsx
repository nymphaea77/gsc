function PackageVisual() {
  return (
    <div className="visual-card visual-card-large">
      <div className="visual-label">Shipping visual</div>
      <svg viewBox="0 0 520 300" className="visual-svg" aria-hidden="true">
        <rect x="20" y="40" width="180" height="150" rx="20" className="svg-box-back" />
        <rect x="90" y="80" width="220" height="160" rx="22" className="svg-box-main" />
        <rect x="310" y="105" width="120" height="90" rx="18" className="svg-box-small" />
        <path d="M200 80 L200 180" className="svg-line" />
        <path d="M90 140 L310 140" className="svg-line" />
        <path d="M140 60 L260 60" className="svg-dash" />
        <circle cx="385" cy="220" r="24" className="svg-wheel" />
        <circle cx="160" cy="228" r="20" className="svg-wheel" />
        <path d="M345 118 L395 118 L418 145 L418 188 L345 188 Z" className="svg-truck" />
      </svg>
    </div>
  )
}

function DocsVisual() {
  return (
    <div className="visual-card">
      <div className="visual-label">Documents</div>
      <svg viewBox="0 0 320 220" className="visual-svg" aria-hidden="true">
        <rect x="70" y="30" width="120" height="150" rx="16" className="svg-doc-back" />
        <rect x="110" y="52" width="130" height="150" rx="16" className="svg-doc-front" />
        <path d="M145 92 H205" className="svg-line" />
        <path d="M145 118 H218" className="svg-line" />
        <path d="M145 144 H195" className="svg-line" />
        <circle cx="90" cy="170" r="26" className="svg-stamp" />
      </svg>
    </div>
  )
}

function EcommerceVisual() {
  return (
    <div className="visual-card">
      <div className="visual-label">E-commerce</div>
      <svg viewBox="0 0 320 220" className="visual-svg" aria-hidden="true">
        <rect x="55" y="55" width="210" height="120" rx="18" className="svg-screen" />
        <path d="M110 55 C110 28 210 28 210 55" className="svg-line-soft" />
        <rect x="98" y="96" width="124" height="44" rx="12" className="svg-cart-panel" />
        <circle cx="122" cy="152" r="10" className="svg-wheel" />
        <circle cx="198" cy="152" r="10" className="svg-wheel" />
        <path d="M110 110 H130 L138 130 H198" className="svg-cart" />
      </svg>
    </div>
  )
}

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
            <a href="#visuals">Overview</a>
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
                Global Shopping Cart LLC is engaged in e-commerce activities and
                provides e-commerce management solutions, logistics
                coordination, customs-related workflows, business
                documentation, and carrier cost oversight.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Business Contact
                </a>
                <a className="btn btn-secondary" href="#visuals">
                  View Overview
                </a>
              </div>
            </div>

            <div className="hero-cards">
              <PackageVisual />

              <div className="mini-grid">
                <EcommerceVisual />
                <DocsVisual />
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

        <section id="visuals" className="section">
          <div className="container">
            <h2>Operational Overview</h2>
            <p className="section-text">
              The company works across e-commerce activity, shipment handling,
              documentation flow, and logistics support processes.
            </p>

            <div className="overview-grid">
              <div className="card">
                <div className="card-label">Packages</div>
                <h3>Shipment and parcel handling</h3>
                <p>
                  Support for preparation, movement, and coordination of package
                  flow related to business operations.
                </p>
              </div>

              <div className="card">
                <div className="card-label">Documents</div>
                <h3>Business and customs paperwork</h3>
                <p>
                  Handling of required information, supporting files, and
                  operational documents for business communication.
                </p>
              </div>

              <div className="card">
                <div className="card-label">Commerce</div>
                <h3>E-commerce related workflows</h3>
                <p>
                  Activities connected to e-commerce operations, coordination,
                  and ongoing back-office support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container two-col">
            <div>
              <h2>About the Company</h2>
              <p>
                Global Shopping Cart LLC is engaged in e-commerce activities and
                provides e-commerce management solutions and business support
                services for e-commerce and logistics-related operations.
              </p>
              <p>
                The company focuses on practical coordination tasks that help
                businesses manage e-commerce activity, shipping operations,
                customs-related preparation, required documentation, and
                administrative workflow support.
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
                information, core service descriptions, visual process
                references, and public contact details.
              </p>

              <div className="info-list">
                <div className="info-item">Official company presentation</div>
                <div className="info-item">Business service overview</div>
                <div className="info-item">Public contact information</div>
                <div className="info-item">Visual operational references</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
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
                  <li>E-commerce activities and operational support</li>
                  <li>Shipping and logistics-related coordination</li>
                  <li>Customs and documentation workflows</li>
                  <li>Carrier billing and cost oversight support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="section alt">
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

        <section id="terms" className="section">
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
