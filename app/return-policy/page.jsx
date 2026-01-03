import PolicyLayout from "../Componets/PolicyLayout";

export default function ReturnPolicy() {
  return (
    <PolicyLayout title="Return & Refund Policy">
      {/* Policy Overview Boxes */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="p-4 bg-light rounded-0 h-100 border-start border-4 border-primary shadow-sm">
            <h5 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '1px' }}>Standard Collection</h5>
            <p className="text-muted small">Items from our catalog can be returned within <strong>14 days</strong> of receipt. Goods must be in pristine, resellable condition with original documentation.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 bg-dark text-white rounded-0 h-100 shadow-sm">
            <h5 className="text-uppercase fw-bold mb-3 text-warning" style={{ letterSpacing: '1px' }}>Bespoke & Custom</h5>
            <p className="small text-secondary">Custom resin pours and tailored wood selections are unique to the client. These commissions are non-returnable unless structural damage is proven.</p>
          </div>
        </div>
      </div>

      {/* Structured Content */}
      <section className="mb-5">
        <h3 className="fw-bold mb-4 text-uppercase h5">The Return Process</h3>
        <div className="ps-4 border-start border-2">
          <div className="mb-4 position-relative">
            <h6 className="fw-bold text-primary">Step 1: Authorization</h6>
            <p className="text-muted small">Contact our concierge team at support@yourwebsite.com with order details and high-resolution photographs of the item.</p>
          </div>
          <div className="mb-4">
            <h6 className="fw-bold text-primary">Step 2: Logistics</h6>
            <p className="text-muted small">Once authorized, we will provide a return shipping address. For heavy furniture, we can coordinate a white-glove pickup at the customer's expense.</p>
          </div>
          <div className="mb-0">
            <h6 className="fw-bold text-primary">Step 3: Quality Inspection</h6>
            <p className="text-muted small">Upon arrival at our facility, our master craftsmen inspect the item. Approved refunds are processed to the original payment method within 10 business days.</p>
          </div>
        </div>
      </section>

      <div className="p-3 bg-light text-center border">
        <span className="small text-uppercase fw-bold">Questions? Contact our support team for immediate assistance.</span>
      </div>
    </PolicyLayout>
  );
}