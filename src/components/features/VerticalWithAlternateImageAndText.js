import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://i.imgur.com/nRJmelX.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
      subtitle: "",
      title: "Shower Doors",
      description:
        "We are a provider of Mirrors, Storefronts, Bath Accessories, Custom Shower Doors, & Wire Shelving. We look forward to taking the opportunity to assist you!",
      url: "https://timerse.com",
    },

    {
      imageSrc:
        "https://i.imgur.com/C0m87fu.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      subtitle: "",
      title: "Glass Railings",
      description:
        "All Mirror and Glass is a Glazing-Contractor with over 20 years of service in the Commercial and Residential environment. We are a provider of Mirrors, Storefronts, Medicine Cabinets, Bath Accessories, and Shower Doors.",
      url: "https://timerse.com",
    },

    {
      imageSrc:
        "https://i.imgur.com/GRHR8Sx.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "",
      title: "Framed Mirrors",
      description:
        "We inventory a large variety of materials to avoid any potential delays to you or your customers. We perform in house fabrication of storefronts, custom shower enclosures to further expedite speedy delivery and installation.",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://i.imgur.com/PZ4TL4z.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "",
      title: "Custom Mirrors",
      description:
        "We are known for our knowledgeable staff and Quality craftsmanship and will deliver the finest quality product services at a Competitive price. ",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://i.imgur.com/zv3bRWc.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "",
      title: "Custom Glass Work",
      description:
        "We guarantee all of our workmanship to ensure your complete satisfaction.",
      url: "https://timerse.com",
    },
  ];

  return (
    <Container
      style={{
        backgroundColor: "#6D99A6",
        maxWidth: "85%",
        margin: "0 auto",
      }}
    >
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Our Services</HeadingTitle>
          <HeadingDescription
            style={{
              fontSize: "12px",
              color: "white",
            }}
          >
            Our Company, located in Streamwood, IL, is a premier installer of
            custom mirrors and shower doors. We offer on site consultation to
            ensure your finished product is exactly what you're looking for.
          </HeadingDescription>
          <HeadingDescription
            style={{
              fontSize: "12px",
              color: "white",
            }}
          >
            We have a variety of glass types and hardware finishes to make your
            selections process a breeze. We also offer custom glass shelving,
            glass tops and cabinet glass.
          </HeadingDescription>
          <HeadingDescription
            style={{
              fontSize: "14px",
              color: "white",
            }}
          >
            Visit our showroom were you will find a wide variety of Shower
            Doors, Decorative Mirrors and Bath Accessories on display. We look
            forward to taking the opportunity to assist you!
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          <AnimationRevealPage>
            {cards.map((card, i) => (
              <Card key={i} reversed={i % 2 === 1}>
                <Image imageSrc={card.imageSrc} />
                <Details>
                  <Subtitle>{card.subtitle}</Subtitle>
                  <Title>{card.title}</Title>
                  <Description
                    style={{
                      color: "white",
                    }}
                  >
                    {card.description}
                  </Description>
                </Details>
              </Card>
            ))}
          </AnimationRevealPage>
        </Content>
      </SingleColumn>
    </Container>
  );
};
