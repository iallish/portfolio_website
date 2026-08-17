"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconCheck,
  IconCopy,
  IconExternalLink,
  IconMail,
} from "@tabler/icons-react";
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import classes from "@/app/home.module.css";

export default function ContactCTA() {
  const clipboardEmail = useClipboard({ timeout: 2000 });
  const revealRef = useScrollReveal();

  return (
    <Box
      id="contact"
      ref={revealRef}
      className={`${classes.sectionAnchor} fadeInUp`}
      py={{ base: 40, md: 60 }}
      style={{ position: "relative", zIndex: 10 }}
    >
      <Container size="xl">
        <Paper
          p={{ base: "lg", md: "xl" }}
          radius="lg"
          className={classes.glassCard}
          style={{
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Stack align="center" gap="md" py="lg">
            <Badge variant="light" color="tennesseeOrange" size="lg" radius="md">
              Get In Touch
            </Badge>

            <Title order={2} size="h2" fw={800}>
              Let&apos;s Connect & Collaborate
            </Title>

            <Text c="dimmed" size="lg" style={{ maxWidth: 580 }}>
              Whether you would like to discuss business analytics & AI, explore
              full-stack development, or connect professionally, my inbox is
              always open.
            </Text>

            <Group gap="md" justify="center" mt="md">
              <Button
                component="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                color="blue"
                size="md"
                radius="md"
                leftSection={<IconBrandLinkedin size={20} />}
                style={{
                  boxShadow: "0 10px 20px -5px rgba(10, 102, 194, 0.4)",
                }}
              >
                Connect on LinkedIn
              </Button>

              <Button
                component="a"
                href={`mailto:${EMAIL}`}
                variant="default"
                size="md"
                radius="md"
                leftSection={<IconMail size={18} />}
              >
                Send Email
              </Button>

              <Tooltip
                label={clipboardEmail.copied ? "Email Copied!" : "Copy Email"}
                withArrow
              >
                <Button
                  variant="default"
                  size="md"
                  radius="md"
                  color="gray"
                  leftSection={
                    clipboardEmail.copied ? (
                      <IconCheck size={18} color="green" />
                    ) : (
                      <IconCopy size={18} />
                    )
                  }
                  onClick={() => clipboardEmail.copy(EMAIL)}
                >
                  {clipboardEmail.copied ? "Copied" : "Copy Email"}
                </Button>
              </Tooltip>
            </Group>

            <Divider
              my="md"
              w="100%"
              label="direct profiles"
              labelPosition="center"
            />

            <Group gap="md" justify="center">
              <Button
                component="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                color="gray"
                size="sm"
                leftSection={<IconBrandLinkedin size={18} />}
              >
                LinkedIn Profile
              </Button>
              <Button
                component="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                color="gray"
                size="sm"
                leftSection={<IconBrandGithub size={18} />}
              >
                GitHub
              </Button>
              <Button
                component="a"
                href="https://trevanseay.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                color="gray"
                size="sm"
                leftSection={<IconExternalLink size={18} />}
              >
                trevanseay.com
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
