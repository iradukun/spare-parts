import { Col, Container, Image, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './footer.css';

const DownFooter = () => {
  return (
    <footer id='footer' className='mt-auto'>
      <div className='footer-top'>
        <Container>
          <Row>
            <Col lg={3} md={6} xs={12} className=' footer-contact'>
              <h3>
                <Image width={100} src='/Component 4.png' alt='' />
              </h3>
              <p>
                2 street KG29
                <br />
                KIGALI Nyarugenge
                <br />
                Rwanda
                <br />
                <br />
                <strong>Phone:</strong> 0788298718
                <br />
                <strong>Email:</strong> sparepart@gmail.com
                <br />
              </p>
            </Col>
            <Col lg={2} md={6} xs={6} className=' footer-links'>
              <h4 className='colorHeader'>Useful Links</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right' /> <a href='#'>Home</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right' /> <a href='#'>About us</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right' /> <a href='#'>Services</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right' />{' '}
                  <a href='#'>Terms of service</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right' />{' '}
                  <a href='#'>Privacy policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} xs={6} className='footer-links'>
              <h4 className='colorHeader'>Our Services</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right' />{' '}
                  <a href='#'>Auto car repaire</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right' />{' '}
                  <a href='#'>Carpart Takecare</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right' />{' '}
                  <a href='#'>Product shipmet</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right' />{' '}
                  <a href='#'>Home delivery</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right' />{' '}
                  <a href='#'>Terms & Policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={6} className='footer-newsletter'>
              <h4  className='colorHeader'>Join Our Newsletter</h4>
              <p>
                we will get our newsletter to your email shortly and be up to date
              </p>
              <form onSubmit={() => toast.success('thanks for yr Subscrition')}>
                <input
                  type='email'
                  required
                  placeholder='email@domain.com'
                  name='email'
                />
                <input type='submit' defaultValue='Subscribe' />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default DownFooter;
