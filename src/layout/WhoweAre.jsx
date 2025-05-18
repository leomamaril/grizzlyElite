import { Container, SubContainer } from "../components/ui/container";
import image from "../assets/shape/rectangle8.png"
export default function WhoweAre(){
    return (
        <section className="pt-5">
        <Container>
            <SubContainer >
            <div className="row justify-content-end">
                <div className="col-12">
                    <h1 className="font-xl fw-lighter text-end">Who we are.</h1>
                </div>
            </div>
            <div className="grizzly-img-wrapper mt-0">
                <img src={image}  height={'100%'} width={'100%'}/>
              
            </div>
            </SubContainer>
        </Container>
</section>

    )
}