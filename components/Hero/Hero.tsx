"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Group,
  Paper,
  Text,
  Title,
  Badge,
  Button,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconFileText,
  IconDownload,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from "@/lib/data";
import { ResumeModal } from "@/components/ResumeModal/ResumeModal";
import classes from "@/app/home.module.css";

export default function Hero() {
  const [resumeOpened, { open: openResume, close: closeResume }] =
    useDisclosure(false);

  return (
    <Box py={{ base: 40, md: 90 }} style={{ position: "relative", zIndex: 10 }}>
      {/* Subtle ambient background */}
      <div className={classes.heroAmbient} />

      {/* Built-in Resume Viewer Modal */}
      <ResumeModal opened={resumeOpened} onClose={closeResume} />

      <Container size="xl">
        <Grid align="center" gap={{ base: "xl", md: 60 }}>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              {/* Greeting */}
              <div>
                <Text size="lg" c="dimmed" fw={500} mb={4}>
                  Hello, I&apos;m
                </Text>
                <Title
                  order={1}
                  size="h1"
                  style={{
                    fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)",
                    fontWeight: 900,
                    lineHeight: 1.08,
                    letterSpacing: "-0.035em",
                  }}
                >
                  Ian Allish
                </Title>
                <Title
                  order={2}
                  size="h3"
                  fw={700}
                  mt="xs"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  <Text component="span" c="tennesseeOrange.6" inherit>
                    Business Analytics & AI
                  </Text>
                  {" • "}
                  <Text component="span" c="tennesseeOrange.4" inherit>
                    Aerospace Engineering
                  </Text>
                </Title>
              </div>

              <Text
                size="lg"
                c="dimmed"
                style={{ maxWidth: 580, lineHeight: 1.65 }}
              >
                Bridging analytical rigor, statistical modeling, and 5 years of
                systems diagnostics with modern web craftsmanship in{" "}
                <strong>TypeScript, Next.js, and Mantine</strong>.
              </Text>

              {/* Call-to-Action Buttons */}
              <Group gap="md" pt="xs">
                <Button
                  component="a"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="md"
                  color="blue"
                  leftSection={<IconBrandLinkedin size={20} />}
                  style={{
                    boxShadow: "0 10px 20px -5px rgba(10, 102, 194, 0.4)",
                    transition:
                      "transform 150ms ease, box-shadow 150ms ease",
                  }}
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  onClick={openResume}
                  variant="default"
                  size="lg"
                  radius="md"
                  leftSection={<IconFileText size={18} />}
                  className={classes.glassCard}
                >
                  View Resume
                </Button>
              </Group>

              {/* Social Quick Links */}
              <Group gap="sm" pt="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Direct Channels:
                </Text>
                <ActionIcon
                  component="a"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="subtle"
                  size="lg"
                  color="gray"
                  aria-label="GitHub Profile"
                >
                  <IconBrandGithub size={22} />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  href={`mailto:${EMAIL}`}
                  variant="subtle"
                  size="lg"
                  color="gray"
                  aria-label="Send Email"
                >
                  <IconMail size={22} />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Right: Avatar Card */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box className={classes.flexEnd}>
              <Box className={classes.avatarCard}>
                <Paper
                  radius="xl"
                  p="sm"
                  className={classes.glassCard}
                  shadow="xl"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box className={classes.avatarImageWrap}>
                    <Image
                      src="/IanAllish.jpg"
                      alt="Ian Allish Headshot"
                      fill
                      preload={true}
                      sizes="(max-width: 768px) 100vw, 340px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  <Box mt="sm" p="xs">
                    <Group justify="space-between" align="center">
                      <div>
                        <Text fw={700} size="sm">
                          Ian Allish
                        </Text>
                        <Text size="xs" c="dimmed">
                          University of Tennessee
                        </Text>
                      </div>
                      <Badge variant="light" color="tennesseeOrange" size="sm">
                        Haslam &apos;27 • Tickle &apos;21
                      </Badge>
                    </Group>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
