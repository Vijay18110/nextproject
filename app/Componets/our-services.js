import classes from "./our-services.module.css";
// import banner5Img from "/images/Banner5.jpg";
// import banner6Img from "/images/Banner6.jpg";
// import banner7Img from "/images/Banner7.jpg";

export default function OurServices() {
  return (
    <div style={{ marginTop: 30 }} className={`container-fluid `}>
      <h2 className={classes.title}>Services Offered</h2>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={"/images/Banner5.jpg"}
                  className="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Residential</h5>
                  <p className="card-text" style={{ fontSize: 10 }}>
                    We provide all residential services including : Off-Grid |
                    On-Grid | Hybrid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={"/images/Banner6.jpg"}
                  className="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Commercial</h5>
                  <p className="card-text" style={{ fontSize: 10 }}>
                    We provide all commercial services including : Off-Grid |
                    On-Grid | Hybrid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card mb-3" >{/*style={{ maxWidth: 540 }} removed style*/}
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={"/images/Banner7.jpg"}
                  className="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Maintenance</h5>
                  <p className="card-text" style={{ fontSize: 10 }}>
                    We provide maintenance for installations done by us with
                    complete customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
