import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaPinterest, FaWhatsappSquare, FaInstagramSquare } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  return (
    <>
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
        {/* Social Media Section */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="mailto:info@gempundit.com" className="me-4 text-reset">
              <IoIosMail size={30} />
            </a>
            <a href="https://www.instagram.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={30} />
            </a>
            <a href="https://wa.me/1234567890" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaWhatsappSquare size={30} />
            </a>
            <a href="https://www.pinterest.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaPinterest size={30} />
            </a>
          </div>
        </section>

        {/* Footer Content Section */}
        <section>
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              {/* Company Info Section */}
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Company name
                </h6>
                <p>
                  GemPundit.com is a leading provider of loose gemstones and colored gemstone jewelry on the Internet.
                  We strive to provide a unique quality experience online that, though exists in other ecommerce
                  segments, is often found to be elusive in the gems and jewelry segment.
                </p>
              </MDBCol>

              {/* Products Section */}
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">Engagement Rings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Earrings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Gemstone Brooches</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Bracelets</a>
                </p>
              </MDBCol>

              {/* Useful Links Section */}
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </MDBCol>

              {/* Contact Section */}
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  +91 11 4084 4599 (India) <br />
                  +1 646 736 7654 (USA) <br />
                  +44 20 3290 8009 (UK)
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@gempundit.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />Locations: India
                     MG Road Gurgaon
                <br />
                  Ph: +91 11 4084 4599
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Footer Bottom Section */}
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://www.gempundit.com/">
            GemPundit.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
