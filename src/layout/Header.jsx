import { Container, SubContainer } from "../components/ui/container";

export default function Header() {
  return (
    <section className="py-5">
    <Container>
      <SubContainer>
        <div className="row">
          <div className="lh-1">
            <p className="font-lg mb-0 ">Become an</p>
            <p className="font-xl fw-bolder mb-0"> <span className="text-base">Elite</span> Ultra High</p>
          </div>
        </div>

        {/* Small-mid size */}
        <div className="row d-flex d-lg-none">
          <div className="col-12 lh-1">
            <p className="font-xl fw-bolder">Achieving <span className="text-base">Students</span> </p>
          </div>
        </div>
        {/* Large Size */}
        <div className="row text-center ms-5 ps-5 d-none d-lg-flex">
          <div className="col-12 lh-1">
            <p className="font-xl fw-bolder ms-5 ps-5">Achieving <span className="text-base">Students</span> </p>
          </div>
        </div>


        <div className="row justify-content-center d-flex d-sm-flex d-md-none d-lg-none">
          <div className="col-12 col-md-6 col-lg-5 ">
            <p className="font-sm lh-1 my-2">Grizzly Elite is, at its core, a mission to regain the productivity, motivation, and achievement skills necessary for students to achieve their potential and build a better future.</p>
            <div className="button-container">
              <button className="grizzly-button my-4">
                <span className="font-btn">Apply Now</span>
              </button>
              
            </div>
            <div className="text-center mt-3">
              <button className="grizzly-button-scroll" style={{marginLeft: "0px"}}>
                <span className="font-xs">Apply Now</span>
              </button></div>
            
          </div>
        </div>

        {/* mid size */}
        <div className="row justify-content-center d-none d-md-flex d-lg-none">
          <div className="col-6 col-md-6 col-lg-5 ">
            <p className="font-sm lh-1 my-2">Grizzly Elite is, at its core, a mission to regain the productivity, motivation, and achievement skills necessary for students to achieve their potential and build a better future.</p>
            <div className="button-container">
              <button className="grizzly-button my-4">
                <span className="font-btn">Apply Now</span>
              </button>
              <button className="grizzly-button-scroll">
                <span className="font-xs">Apply Now</span>
              </button>
            </div>
          </div>
        </div>

      {/* Large Size */}
        <div className="row justify-content-center ps-5 ms-2 d-none d-lg-flex">
          <div className="col-lg-5 ps-5 ms-5">
            <p className="font-sm lh-1 my-2">Grizzly Elite is, at its core, a mission to regain the productivity, motivation, and achievement skills necessary for students to achieve their potential and build a better future.</p>
            <div className="button-container">
              <button className="grizzly-button my-4">
                <span className="font-btn">Apply Now</span>
              </button>
              <button className="grizzly-button-scroll">
                <span className="font-xs">Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      </SubContainer>
    </Container>
    </section>
  );
}
