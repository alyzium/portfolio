import React from "react";
import Link from "next/link";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Personal Portfolio
				</SectionTitle>
				<SectionText>
					Passionate about innovation and new technologies, I am always looking for an experience
					that will highlight my passion and my programming knowledge. I am always ready to step out
					of my comfort zone, to take on new challenges!
				</SectionText>
				<Link href="#projects">
					<Button onClick={props.handleClick}>Learn More</Button>
				</Link>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
