import { Container, SubContainer } from "../components/ui/container";
import { GRIZZLYCLUB } from "../data";

export default function Club() {
    return(
        <section className="my-5">
            <Container>
                <SubContainer>
                <div className="grizzly-eclipse-h" />
                    <div className="col-lg-9">
                        <h1 className="font-xl">{GRIZZLYCLUB.title}</h1>
                    </div>
                    <div className="col-lg-7">
                        <p className="font-ctext lh-1">{GRIZZLYCLUB.body}</p>
                        <p className="font-ctext lh-1">{GRIZZLYCLUB.subbody}</p>
                    </div>
            
                </SubContainer>
            </Container>
        </section>

    )
}