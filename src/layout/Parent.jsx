import { Container,SubContainer } from "../components/ui/container";
import { INTERVIEW } from "../data";

export default function Parent() {
    return(
        <section className="my-5">
            <Container>
                <SubContainer>
                <div className="d-none d-lg-block">
                <div className="grizzly-eclipse-e" />
                <div className="grizzly-eclipse-f" />
                </div>
                

                <h1 className="font-xl">
                    What are<span className="text-base"> Parents</span> Say
                </h1>
                <img src={INTERVIEW.image} className="img-fluid"/>
                <p className='font-ctext my-3'>
                    {INTERVIEW.title}
                </p>
                <div className="col-lg-7 col-md-9 col-sm-12">
                <p className='font-p'>
                    {INTERVIEW.body}
                </p>
                </div>
               
                </SubContainer>
                <hr className="my-5 grizzly-break" />
            </Container>
           
        </section>
    )
}