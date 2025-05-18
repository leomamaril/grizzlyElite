import { Container, SubContainer } from "../components/ui/container"
import { GRIZZLYDOMINATION } from "../data"
export default function Domination() {
    return(
        <section className="my-5">
            <Container>
                <SubContainer>
                <div className="grizzly-eclipse-i" />
                    <div className="col-12 text-end">
                        <h1 className="font-xl lh-1">{GRIZZLYDOMINATION.title}</h1>
                    </div>
                    <div className="col-md-8 col-lg-6 ms-auto text-end pb-5">
                        <p className="font-ctext lh-1">{GRIZZLYDOMINATION.body}</p>
                        <p className="font-ctext lh-1">{GRIZZLYDOMINATION.mid}</p>
                        <p className="font-ctext lh-1">{GRIZZLYDOMINATION.last}</p>
                    </div>
                    
                </SubContainer>
                <hr className="my-5 grizzly-break" />
            </Container>
            
        </section>
    )
}