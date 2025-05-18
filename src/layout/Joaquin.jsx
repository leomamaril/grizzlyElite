import { Container, SubContainer } from "../components/ui/container";
import { JOAQUIN } from "../data";

export default function Joaquin() {
  return (
    <section className="my-5">
      <Container>
        <SubContainer>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4">
              <h1 className="font-xl fw-light lh-1.5">{JOAQUIN.title}</h1>
            </div>

            <div className="col-lg-7 position-relative">
              <img
                src={JOAQUIN.image}
                alt="Joaquin"
                className="img-fluid img-joaquin"
              />
              <p className="font-ctext col-12 col-md-10 ms-auto mt-3 lh-1">
                {JOAQUIN.body}
              </p>
              <div className="grizzly-eclipse-g" />
              
              <div className="d-none d-lg-block" >
              <div className="grizzly-rectangle-a" />
              </div>
            
            </div>
          </div>
        </SubContainer>
        <hr className="my-5 grizzly-break" />
      </Container>
    </section>
  );
}
