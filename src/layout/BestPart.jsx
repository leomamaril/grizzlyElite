import { Container, SubContainer } from "../components/ui/container";
import { BEST } from "../data";
export default function BestPart() {
  return (
    <section className="my-5">
      <Container>
        <SubContainer>
          <div className="col-12">
            <h1 className="font-xl fw-light">{BEST.title}</h1>
          </div>
          <div className="row">
            <div className="col-10 col-sm-8 ms-auto justify-content-end align-items-end d-flex">
              <p className="font-p fw-light ">{BEST.body}</p>
            </div>
          </div>
        </SubContainer>
        <hr className="my-5 grizzly-break" />
      </Container>
     
    </section>
  );
}
