"use client";

import {
  Anchor,
  Badge,
  Box,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconSchool,
  IconBriefcase,
  IconUsers,
  IconAtom,
  IconCalendar,
  IconMapPin,
  IconExternalLink,
} from "@tabler/icons-react";
import { experiences } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import classes from "@/app/home.module.css";

const iconMap: Record<string, React.FC<{ size?: number }>> = {
  school: IconSchool,
  briefcase: IconBriefcase,
  users: IconUsers,
  atom: IconAtom,
};

export default function ExperienceSection() {
  const revealRef = useScrollReveal();

  return (
    <Box
      id="experience"
      ref={revealRef}
      className={`${classes.sectionAnchor} fadeInUp`}
      py={{ base: 40, md: 60 }}
      style={{ position: "relative", zIndex: 10 }}
    >
      <Container size="xl">
        <Stack gap="xl">
          <div>
            <Badge variant="light" color="tennesseeOrange" size="md" radius="sm">
              Career History
            </Badge>
            <Title order={2} size="h2" mt="xs" fw={800}>
              Professional Experience & Teaching
            </Title>
            <Text c="dimmed" size="md" mt="xs">
              Academic instruction, systems diagnostics, and engineering
              research.
            </Text>
          </div>

          <Stack gap="lg">
            {experiences.map((exp, idx) => {
              const IconComponent = iconMap[exp.iconName];
              return (
                <Paper
                  key={idx}
                  p="xl"
                  radius="md"
                  className={classes.glassCard}
                >
                  <Stack gap="sm">
                    <Group justify="space-between" align="flex-start">
                      <Group gap="sm">
                        <ThemeIcon
                          variant="light"
                          color={exp.badgeColor}
                          size="xl"
                          radius="md"
                        >
                          {IconComponent && <IconComponent size={22} />}
                        </ThemeIcon>
                        <div>
                          <Text fw={700} size="lg">
                            {exp.role}
                          </Text>
                          <Anchor
                            href={exp.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            fw={600}
                            c="indigo"
                            underline="hover"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                            }}
                          >
                            {exp.organization}
                            <IconExternalLink size={13} />
                          </Anchor>
                        </div>
                      </Group>
                      <Group gap="xs">
                        <Badge
                          variant="light"
                          color="gray"
                          size="sm"
                          leftSection={<IconCalendar size={12} />}
                        >
                          {exp.period}
                        </Badge>
                        <Badge
                          variant="outline"
                          color="gray"
                          size="sm"
                          leftSection={<IconMapPin size={12} />}
                        >
                          {exp.location}
                        </Badge>
                      </Group>
                    </Group>

                    <Text
                      size="sm"
                      c="dimmed"
                      style={{ lineHeight: 1.65 }}
                      mt="xs"
                    >
                      {exp.description}
                    </Text>

                    <Group gap={6} mt="xs">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="light"
                          color="gray"
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
                  </Stack>
                </Paper>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
