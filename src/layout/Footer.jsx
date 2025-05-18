import { Container, SubContainer } from "../components/ui/container";
import logo from '../assets/images/logo.png';
import grizzly from '../assets/images/grizzlyelite.png';
import { FooterLink } from "../components/ui/link.jsx";
export default function Footer() {
    return(
        <section className="mt-5">
            <Container>
                <SubContainer>
                <div className="grizzly-footer">
                    <img src={logo} alt="logo" className="grizzly-logo" />
                    <img src={grizzly} alt="grizzly" className="grizzly-sublogo" />
                    <div className="grizzly-footer-nav unstyled-list">
                        <FooterLink target="home" href="index.php" text="Home" />
                        <FooterLink target="about" href="about.php" text="About Us" />
                        <FooterLink target="services" href="services.php" text="Services" />
                        <FooterLink target="contact" href="contact.php" text="Contact Us " />
                    </div>
                    <hr className="grizzly-footer-break" />
                    <p className='grizzly-footer-copyright'>© Grizzly Elite - All Rights Reserved 2023</p>
            
               
                </div>
                </SubContainer>
            </Container>
        </section>
    )
}