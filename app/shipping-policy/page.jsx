import PolicyLayout from "../Componets/PolicyLayout";

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping & Logistics">
      {/* 1. Delivery Timeframe Table */}
      <h3 className="fw-bold mb-4 text-uppercase h5" style={{ letterSpacing: '1px' }}>
        Delivery Timeframes
      </h3>
      <div className="table-responsive mb-5">
        <table className="table table-hover border align-middle shadow-sm">
          <thead className="table-dark text-uppercase small">
            <tr>
              <th className="py-3 ps-4">Product Category</th>
              <th className="py-3">Processing Time</th>
              <th className="py-3 pe-4">Estimated Delivery</th>
            </tr>
          </thead>
          <tbody className="text-secondary">
            <tr>
              <td className="ps-4 fw-bold text-dark">Ready to Ship</td>
              <td>24-48 Hours</td>
              <td className="pe-4">5-7 Business Days</td>
            </tr>
            <tr>
              <td className="ps-4 fw-bold text-dark">Standard Furniture</td>
              <td>5-10 Days</td>
              <td className="pe-4">10-15 Business Days</td>
            </tr>
            <tr>
              <td className="ps-4 fw-bold text-dark">Custom Resin Tables</td>
              <td>4-6 Weeks</td>
              <td className="pe-4 text-primary fw-semibold">Location Dependent</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. Specialized Handling Section */}
      <div className="row g-4 mb-5">
        <div className="col-12">
          <section className="p-4 bg-light border-start border-4 border-dark">
            <h4 className="text-dark fw-bold text-uppercase h6 mb-3">Large Furniture Handling</h4>
            <p className="text-muted mb-0">
              Our statement pieces, including dining and conference tables, are dispatched via specialized **White-Glove Carriers**. 
              This ensures your masterpiece is handled with the same care it was built with. Our concierge team will contact you 
              directly to coordinate a delivery window that aligns with your schedule.
            </p>
          </section>
        </div>
      </div>

      {/* 3. Critical Transit Damage Box */}
      <div className="card bg-dark text-white border-0 rounded-0 p-4 shadow">
        <div className="d-flex align-items-center mb-3 text-warning">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <h5 className="fw-bold mb-0 text-uppercase h6" style={{ letterSpacing: '1px' }}>
            Damages During Transit
          </h5>
        </div>
        <p className="small text-secondary mb-0">
          Your furniture is crated in industrial-grade packaging. However, please inspect the shipment immediately upon arrival. 
          If you observe visible damage to the crate or product:
        </p>
        <ul className="small text-secondary mt-2 mb-0">
          <li>Take clear, high-resolution photographs of the damage.</li>
          <li>Note the specific damage on the <strong>Delivery Receipt</strong> before the carrier departs.</li>
          <li>Contact our support team within 24 hours of delivery.</li>
        </ul>
      </div>

      {/* 4. Support Footer */}
      <div className="mt-5 p-3 text-center border-top">
        <span className="small text-uppercase text-muted fw-bold">
          Tracking information is sent via email automatically upon dispatch.
        </span>
      </div>
    </PolicyLayout>
  );
}