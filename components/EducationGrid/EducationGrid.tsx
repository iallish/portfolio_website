"use client";

import {
  Anchor,
  Badge,
  Box,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconSchool,
  IconCalendar,
  IconMapPin,
  IconExternalLink,
} from "@tabler/icons-react";
import { education } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import classes from "@/app/home.module.css";

export default function EducationGrid() {
  const revealRef = useScrollReveal();

  return (
    <Box
      id="education"
      ref={revealRef}
      className={`${classes.sectionAnchor} fadeInUp`}
      py={{ base: 40, md: 60 }}
      style={{ position: "relative", zIndex: 10 }}
    >
      <Container size="xl">
        <Stack gap="xl">
          <div>
            <Badge variant="light" color="tennesseeOrange" size="md" radius="sm">
              Academic Degrees
            </Badge>
            <Title order={2} size="h2" mt="xs" fw={800}>
              University of Tennessee
            </Title>
            <Text c="dimmed" size="md" mt="xs">
              Graduate and undergraduate engineering & analytics degrees.
            </Text>
          </div>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            {education.map((edu, idx) => (
              <Paper
                key={idx}
                p="xl"
                radius="md"
                className={classes.glassCard}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Stack gap="sm">
                  <Group justify="space-between" align="flex-start">
                    <ThemeIcon
                      variant="light"
                      color={edu.statusColor}
                      size="xl"
                      radius="md"
                    >
                      <IconSchool size={22} />
                    </ThemeIcon>
                    <Badge variant="light" color={edu.statusColor} size="sm">
                      {edu.status}
                    </Badge>
                  </Group>

                  <div>
                    <Title order={3} size="h4" fw={700}>
                      {edu.degree}
                    </Title>
                    <Anchor
                      href={edu.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      fw={600}
                      c="indigo.5"
                      underline="hover"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        marginTop: 2,
                      }}
                    >
                      {edu.institution}
                      <IconExternalLink size={13} />
                    </Anchor>
                    <Group gap="xs" mt={4}>
                      <Text
                        size="xs"
                        c="dimmed"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <IconCalendar size={12} /> {edu.period}
                      </Text>
                      <Text size="xs" c="dimmed">
                        •
                      </Text>
                      <Text
                        size="xs"
                        c="dimmed"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <IconMapPin size={12} /> {edu.location}
                      </Text>
                    </Group>
                  </div>

                  <Text
                    size="sm"
                    c="dimmed"
                    style={{ lineHeight: 1.6 }}
                    mt="xs"
                  >
                    {edu.description}
                  </Text>
                </Stack>

                <Group
                  gap={6}
                  mt="lg"
                  pt="sm"
                  style={{
                    borderTop:
                      "1px solid var(--mantine-color-default-border)",
                  }}
                >
                  {edu.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="light"
                      color={edu.statusColor}
                      size="sm"
                      radius="sm"
                      styles={{
                        root: { textTransform: "none", fontWeight: 500 },
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </Group>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
