import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";







const Footer=()=>{
    return(
        <>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
            <FaFacebook />

          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
            <FaXTwitter/>
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
            <IoIosMail/>
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
            <FaInstagramSquare />

          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='Whatsapp' />
            <FaWhatsappSquare/>
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='Pintrest' />
            <FaPinterest/>
            
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
              GemPundit.com is a leading provider of loose gemstones, and colored gemstone jewelry on the Internet. We strive to provide a unique quality experience online that though exists in other ecommerce segments, is often found to be elusive in the gems and jewellery segment.

              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Engagement Rings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Earrings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Gemstone Brooches
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Bracelet's
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                +91 11 4084 4599 (INDIA) <br/> 
                +1 646 736 7654 (USA)<br/> 
                +44 20 3290 8009 (UK) 

             </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                GemPundit.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> Locations! India <br/>
Gurgaon
c/o Fortuna Retail Pvt. Ltd.
312-316, 3rd Floor, Vipul Agora MG Road Gurgaon, Haryana, 122002

Ph:+91 11 4084 4599
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MyProject.com
        </a>
      </div>
    </MDBFooter>
        </>
    )
}
export default Footer;