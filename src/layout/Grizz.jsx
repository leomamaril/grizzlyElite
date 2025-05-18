import { Container, SubContainer } from "../components/ui/container";

export default function Grizz() {
  return (
    <section className="my-5">
      <Container>
        <SubContainer>
          <div className="col-10 justify-content-center m-auto text-center">
            <h1 className="font-xl lh-1">
              Start Working With{" "}
              <span className="text-base">Grizzly Today.</span>
            </h1>

            <div className="mt-5 d-block d-sm-none d-md-none d-lg-none">
              <button className="grizzly-button font-btn m-2 w-100">
                Apply Now
              </button>
              <button className="grizzly-outline font-btn m-2 w-100">
                Contact Us
              </button>
            </div>

            <div className="mt-5 d-none d-sm-block">
              <button className="grizzly-button font-btn mx-2">
                Apply Now
              </button>
              <button className="grizzly-outline font-btn mx-2">
                Contact Us
              </button>
            </div>
          </div>
        </SubContainer>
      </Container>
    </section>
  );
}
