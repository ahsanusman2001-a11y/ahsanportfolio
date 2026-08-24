import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";

import { home, about, person, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">

          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="center"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx paddingTop="12" delay={0.4} horizontal="center">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>

        </Column>
      </Column>

      {/* Professional Highlights */}
      <RevealFx translateY="16" delay={0.5} fillWidth>
        <Column fillWidth gap="l">

          <Heading as="h2" variant="display-strong-xs">
            Professional Experience
          </Heading>

          <Text
            variant="heading-default-m"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Senior Full Stack Developer and Team Lead with extensive experience
            building websites, web applications, business platforms, and
            e-commerce solutions for clients across different industries.
          </Text>

          <Row
            fillWidth
            gap="m"
            s={{ direction: "column" }}
          >
            <Column
              fillWidth
              padding="l"
              background="neutral-alpha-weak"
              radius="m"
              gap="8"
            >
              <Heading as="h3" variant="heading-strong-xl">
                8+ Years
              </Heading>
              <Text onBackground="neutral-weak">
                Professional web development experience
              </Text>
            </Column>

            <Column
              fillWidth
              padding="l"
              background="neutral-alpha-weak"
              radius="m"
              gap="8"
            >
              <Heading as="h3" variant="heading-strong-xl">
                1000+
              </Heading>
              <Text onBackground="neutral-weak">
                Websites and web applications delivered
              </Text>
            </Column>

            <Column
              fillWidth
              padding="l"
              background="neutral-alpha-weak"
              radius="m"
              gap="8"
            >
              <Heading as="h3" variant="heading-strong-xl">
                6 Developers
              </Heading>
              <Text onBackground="neutral-weak">
                Team members managed and supported
              </Text>
            </Column>
          </Row>

        </Column>
      </RevealFx>

      {/* Platforms & Solutions */}
      <RevealFx translateY="16" delay={0.7} fillWidth>
        <Column fillWidth gap="l">

          <Heading as="h2" variant="display-strong-xs">
            Platforms & Solutions
          </Heading>

          <Text
            variant="heading-default-m"
            onBackground="neutral-weak"
          >
            Throughout my professional career, I have worked on a wide range
            of platforms and solutions for different business requirements.
          </Text>

          <Row fillWidth gap="m" s={{ direction: "column" }}>

            <Column fillWidth gap="12">
              <Text>Hotel & Booking Platforms</Text>
              <Text> E-commerce & WooCommerce</Text>
              <Text>Healthcare Systems</Text>
              <Text>Learning Management Systems</Text>
            </Column>

            <Column fillWidth gap="12">
              <Text>CMS Platforms</Text>
              <Text>Real Estate Solutions</Text>
              <Text>Event Management Systems</Text>
              <Text>Custom Business Applications</Text>
            </Column>

          </Row>

        </Column>
      </RevealFx>

    </Column>
  );
}