import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted mt-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Locally
              </h6>
              <p>
                Discover Locally is your premier online marketplace for unique products
                from local artisans and entrepreneurs. Shop exclusive fashion,
                accessories, home decor, and gourmet foods while supporting your
                community.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Electronics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cloths
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Home Accessories
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Groccery
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Cario, EG
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01 234 567
                88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01 234 567
                89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {currentYear} Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Locally EG
        </a>
      </div>
    </MDBFooter>
  );
}
