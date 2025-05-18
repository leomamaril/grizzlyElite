import { Container, SubContainer } from "../components/ui/container";
import { MODERN } from "../data";
export default function Modern() {
  return (
    <section className="my-5">
      <Container>
        <SubContainer>
          {MODERN.map((item, index) => (
            <div key={index} className="">
              <h1 className="font-xl lh-1">
                {item.title}
                <br />
                {item.subtitle}
              </h1>

              <div className="row mt-3">
                {/* Small Size */}
                <div className="col-md-6 d-flex d-lg-none">
                  <p className="font-p">{item.body}</p>
                </div>
                {/* Large Size */}
                <div className="col-lg-5 d-none d-lg-flex">
                  <p className="font-p">{item.body}</p>
                </div>
                {/* Small Size */}
                <div className="col-lg-7 d-flex justify-content-start align-items-center d-lg-none">
                  <a className="font-btn text-white pointer">{item.readmore}</a>
                </div>
                {/* Large Size */}
                <div className="col-lg-7 d-none justify-content-end align-items-center d-lg-flex">
                  <a className="font-btn text-white pointer">{item.readmore}</a>
                </div>
              </div>

              <hr className="my-5 grizzly-break" />
            </div>
          ))}
        </SubContainer>
      </Container>
    </section>
  );
}
