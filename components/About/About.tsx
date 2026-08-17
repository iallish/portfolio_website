"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Badge,
  Stack,
} from "@mantine/core";
import { certifications } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import classes from "@/app/home.module.css";

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <Box
      id="about"
      ref={revealRef}
      className={`${classes.sectionAnchor} fadeInUp`}
      py={{ base: 40, md: 60 }}
    >
      <Container size="xl">
        <Stack gap="xl">
          <div>
            <Badge variant="light" color="tennesseeOrange" size="md" radius="sm">
              About
            </Badge>
            <Title order={2} size="h2" mt="xs" fw={800}>
              Who I Am
            </Title>
          </div>

          <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
            I&apos;m a graduate student at the University of Tennessee&apos;s
            Haslam College of Business, pursuing a Master of Science in Business
            Analytics and Artificial Intelligence (expected May 2027). With a
            B.S. in Aerospace Engineering from UT&apos;s Tickle College and five
            years of hands-on systems diagnostics experience at Best Buy, I
            bring a cross-disciplinary perspective to data-driven problem
            solving&nbsp;&mdash; grounded in engineering rigor, sharpened by
            real-world operations, and expanding into machine learning and
            predictive analytics.
          </Text>

          <Group gap="sm">
            {certifications.map((cert) => (
              <Badge key={cert} variant="outline" color="gray" size="sm">
                {cert}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
