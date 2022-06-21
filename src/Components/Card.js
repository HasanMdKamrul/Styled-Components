import nerdImage from '../assets/images/illustration.png';
import { ButtonContainer, CardContainer, ContentContainer } from './assets/Container.styles';
import { StyledTitle } from './assets/Custom.style';
import { H1, Image, P, Tag } from './assets/Elements.styles';
import Button from './Button';


export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag><StyledTitle color="yellow" text="EXCLUSIVE"/></Tag>
                <H1>
                    React Styled Components
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}
