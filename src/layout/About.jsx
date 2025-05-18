import { Container, SubContainer } from "../components/ui/container";
import image from "../assets/shape/rectangle14.png"
import { ABOUT } from "../data";
export default function About() {
  return (
    <section className="my-5">
      <Container>
        <SubContainer className="my-5 py-5">
        <div className="grizzly-eclipse-b" />
        <div className="grizzly-eclipse-c" />
          <div className="row">
            <div className="col-12 d-flex d-lg-none justify-content-center my-5">
              <img src={image} alt="gym" className="img-fluid" />
            </div>
           
            <div className="col-md-7 d-flex flex-column justify-content-center align-items-start font-p">
              <p className="mt-0">{ABOUT.first}</p>
              <p className="mt-2">{ABOUT.second}</p>
              <p className="mt-2">{ABOUT.third}</p>
              <button className="font-btn grizzly-button mt-3" >Learn More</button>
            </div>
            
            <div className="col-5 d-none d-lg-flex">
              <img src={image} alt="gym" width={'100%'} />
            </div>
          </div>
          
        </SubContainer>
       
      </Container>
      <hr className="my-5" />
    </section>
  );
}
