"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconCode,
  IconBrandGithub,
  IconBriefcase,
  IconExternalLink,
  IconChartCovariate,
  IconBrandPython,
  IconBrandNextjs,
} from "@tabler/icons-react";
import { projectsData, GITHUB_URL, msbaiProjects } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import classes from "@/app/home.module.css";

const iconMap: Record<string, React.FC<{ size?: number }>> = {
  briefcase: IconBriefcase,
  chartCovariate: IconChartCovariate,
  python: IconBrandPython,
  code: IconCode,
  nextjs: IconBrandNextjs,
};

export default function ProjectsGrid() {
  const revealRef = useScrollReveal();

  return (
    <Box
      id="projects"
      ref={revealRef}
      className={`${classes.sectionAnchor} fadeInUp`}
      py={{ base: 40, md: 60 }}
      style={{ position: "relative", zIndex: 10 }}
    >
      {/* MSBA + AI Projects Section */}

      <Container size="xl">
        <Stack gap="xl">
          <div>
            <Badge
              variant="light"
              color="tennesseeOrange"
              size="md"
              radius="sm"
            >
              MSBA + AI Class Projects
            </Badge>
            <Title order={2} size="h2" mt="xs" fw={800}>
              MSBA + AI Projects & Implementations
            </Title>
            <Text c="dimmed" size="md" mt="xs">
              Production web applications, interactive portfolios, and
              analytical optimization pipelines.
            </Text>
          </div>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            {msbaiProjects.map((schoolProject, idx) => {
              const IconComponent = iconMap[schoolProject.iconName];
              return (
                <Card
                  key={idx}
                  padding="xl"
                  radius="md"
                  className={`${classes.glassCard} ${classes.liftOnHover}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack gap="sm">
                    <Group justify="space-between" align="center">
                      <ThemeIcon
                        variant="light"
                        color="tennesseeOrange"
                        size="lg"
                        radius="md"
                      >
                        {IconComponent && <IconComponent size={20} />}
                      </ThemeIcon>
                      <Badge variant="filled" color="tennesseeOrange" size="xs">
                        {schoolProject.highlight}
                      </Badge>
                    </Group>

                    <Title order={3} size="h4" fw={700} mt="xs">
                      {schoolProject.title}
                    </Title>

                    <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                      {schoolProject.description}
                    </Text>

                    <Group gap={6} mt="xs">
                      {schoolProject.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          color="gray"
                          size="xs"
                          radius="xs"
                          styles={{
                            root: { textTransform: "none", fontWeight: 500 },
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>

                  <Group
                    gap="xs"
                    mt="xl"
                    pt="sm"
                    style={{
                      borderTop:
                        "1px solid var(--mantine-color-default-border)",
                    }}
                  >
                    {schoolProject.courseUrl &&
                      schoolProject.courseUrl !== "#" && (
                        <Button
                          component="a"
                          href={schoolProject.courseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="subtle"
                          size="xs"
                          radius="md"
                          rightSection={<IconExternalLink size={14} />}
                        >
                          View Course Description
                        </Button>
                      )}
                    {schoolProject.liveUrl && schoolProject.liveUrl !== "#" && (
                      <Button
                        component="a"
                        href={schoolProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="xs"
                        radius="md"
                        rightSection={<IconExternalLink size={14} />}
                      >
                        Live Site
                      </Button>
                    )}
                    {schoolProject.codeNote && (
                      <Badge color="tennesseeOrange" size="md" radius="md">
                        {schoolProject.codeNote}
                      </Badge>
                    )}
                  </Group>
                </Card>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Featured Projects Section */}
      <Container size="xl" mt={{ base: 40, md: 60 }}>
        <Stack gap="xl">
          <Group justify="space-between" align="flex-end">
            <div>
              <Badge
                variant="light"
                color="tennesseeOrange"
                size="md"
                radius="sm"
              >
                Selected Work
              </Badge>
              <Title order={2} size="h2" mt="xs" fw={800}>
                Featured Projects & Implementations
              </Title>
              <Text c="dimmed" size="md" mt="xs">
                Production web applications, interactive portfolios, and
                analytical optimization pipelines.
              </Text>
            </div>
            <Button
              component="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="tennesseeOrange"
              rightSection={<IconExternalLink size={16} />}
              visibleFrom="sm"
            >
              GitHub Repositories
            </Button>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
            {projectsData.map((project, idx) => {
              const IconComponent = iconMap[project.iconName];
              return (
                <Card
                  key={idx}
                  padding="xl"
                  radius="md"
                  className={`${classes.glassCard} ${classes.liftOnHover}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack gap="sm">
                    <Group justify="space-between" align="center">
                      <ThemeIcon
                        variant="light"
                        color="tennesseeOrange"
                        size="lg"
                        radius="md"
                      >
                        {IconComponent && <IconComponent size={20} />}
                      </ThemeIcon>
                      <Badge
                        variant="filled"
                        color={project.featured ? "tennesseeOrange" : "gray"}
                        c={project.featured ? undefined : "dark"}
                        size="xs"
                      >
                        {project.highlight}
                      </Badge>
                    </Group>

                    <Title order={3} size="h4" fw={700} mt="xs">
                      {project.title}
                    </Title>

                    <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                      {project.description}
                    </Text>

                    <Group gap={6} mt="xs">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          color="gray"
                          size="xs"
                          radius="xs"
                          styles={{
                            root: { textTransform: "none", fontWeight: 500 },
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>

                  <Group
                    gap="xs"
                    mt="xl"
                    pt="sm"
                    style={{
                      borderTop:
                        "1px solid var(--mantine-color-default-border)",
                    }}
                  >
                    {project.githubUrl && (
                      <Button
                        component="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="light"
                        color="indigo"
                        size="xs"
                        radius="md"
                        leftSection={<IconBrandGithub size={16} />}
                      >
                        Source Code
                      </Button>
                    )}
                    {project.experienceUrl && (
                      <Button
                        component="a"
                        href={project.experienceUrl}
                        variant="light"
                        color="gray"
                        size="xs"
                        radius="md"
                        leftSection={<IconBriefcase size={16} />}
                      >
                        View in Experience
                      </Button>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button
                        component="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="xs"
                        radius="md"
                        rightSection={<IconExternalLink size={14} />}
                      >
                        Live Site
                      </Button>
                    )}
                    {project.codeNote && (
                      <Badge color="tennesseeOrange" size="md" radius="md">
                        {project.codeNote}
                      </Badge>
                    )}
                  </Group>
                </Card>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
