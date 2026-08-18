"use client";

import {
  Box,
  Container,
  Badge,
  Title,
  Text,
  Paper,
  Tabs,
  Grid,
  Progress,
  RingProgress,
  Group,
  Stack,
  Button,
} from "@mantine/core";
import {
  IconChartBar,
  IconDeviceDesktop,
  IconRocket,
  IconExternalLink,
} from "@tabler/icons-react";
import {
  analyticsSkills,
  analyticsSkillBars,
  webSkills,
  aerospaceSkills,
} from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import classes from "@/app/home.module.css";

export function SkillsTabs() {
  const revealRef = useScrollReveal();

  return (
    <Box
      id="skills"
      ref={revealRef}
      className={`${classes.sectionAnchor} fadeInUp`}
      py={{ base: 40, md: 60 }}
    >
      <Container size="xl">
        <Stack gap="xl">
          <div>
            <Badge variant="light" color="tennesseeOrange" size="md" radius="sm">
              Skills & Expertise
            </Badge>
            <Title order={2} size="h2" mt="xs" fw={800}>
              Analytics, Engineering & Web Tooling
            </Title>
            <Text c="dimmed" size="md" mt="xs">
              Explore the cross-disciplinary skillset spanning quantitative
              analytics, full-stack software, and systems optimization.
            </Text>
          </div>

          <Paper p="xl" radius="lg" className={classes.glassCard}>
            <Tabs variant="pills" color="tennesseeOrange" defaultValue="analytics" radius="md">
              <Tabs.List mb="xl">
                <Tabs.Tab
                  value="analytics"
                  leftSection={<IconChartBar size={18} />}
                >
                  Business Analytics & AI
                </Tabs.Tab>
                <Tabs.Tab
                  value="web"
                  leftSection={<IconDeviceDesktop size={18} />}
                >
                  Web & Software Engineering
                </Tabs.Tab>
                <Tabs.Tab
                  value="aerospace"
                  leftSection={<IconRocket size={18} />}
                >
                  Aerospace & Systems Diagnostics
                </Tabs.Tab>
              </Tabs.List>

              {/* Tab 1: Business Analytics */}
              <Tabs.Panel value="analytics">
                <Grid gap="xl" align="center">
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack gap="md">
                      <Title order={3} size="h4" fw={700}>
                        Statistical Modeling, ML & Data Engineering
                      </Title>
                      <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                        Building predictive models, data engineering pipelines,
                        and deep learning systems across Python, R, SQL, and
                        PyTorch. Coursework spans machine learning, decision
                        optimization (Pyomo), interactive data storytelling (R
                        Shiny), and probability-driven customer analytics.
                      </Text>
                      <Stack gap="sm" mt="xs">
                        {analyticsSkillBars.map((skill) => (
                          <div key={skill.label}>
                            <Group justify="space-between" mb={4}>
                              <Text size="xs" fw={600}>
                                {skill.label}
                              </Text>
                              <Text size="xs" c="dimmed">
                                {skill.level}
                              </Text>
                            </Group>
                            <Progress
                              value={skill.value}
                              color={skill.color}
                              radius="xl"
                              size="sm"
                            />
                          </div>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper
                      p="lg"
                      radius="md"
                      withBorder
                      style={{ backgroundColor: "var(--mantine-color-body)" }}
                    >
                      <Text
                        fw={600}
                        size="xs"
                        c="dimmed"
                        mb="xs"
                        style={{ textTransform: "uppercase" }}
                      >
                        Core Analytics Toolkit
                      </Text>
                      <Group gap={8}>
                        {analyticsSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="light"
                            color="gray"
                            size="md"
                            radius="sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </Group>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Tabs.Panel>

              {/* Tab 2: Web Engineering */}
              <Tabs.Panel value="web">
                <Grid gap="xl" align="center">
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack gap="md">
                      <Title order={3} size="h4" fw={700}>
                        Full-Stack Web Craft & Modern Component Systems
                      </Title>
                      <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                        Designing high-performance web applications using
                        TypeScript, Next.js App Router, Mantine UI v9, and CSS
                        Modules. Experienced in building client-facing production
                        websites like trevanseay.com.
                      </Text>
                      <Group gap="sm" mt="xs">
                        <Button
                          component="a"
                          href="https://trevanseay.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="light"
                          color="tennesseeOrange"
                          size="sm"
                          rightSection={<IconExternalLink size={16} />}
                        >
                          View Live Project (trevanseay.com)
                        </Button>
                      </Group>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper
                      p="lg"
                      radius="md"
                      withBorder
                      style={{ backgroundColor: "var(--mantine-color-body)" }}
                    >
                      <Text
                        fw={600}
                        size="xs"
                        c="dimmed"
                        mb="xs"
                        style={{ textTransform: "uppercase" }}
                      >
                        Web Tech Stack
                      </Text>
                      <Group gap={8}>
                        {webSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="light"
                            color="gray"
                            size="md"
                            radius="sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </Group>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Tabs.Panel>

              {/* Tab 3: Aerospace & Diagnostics */}
              <Tabs.Panel value="aerospace">
                <Grid gap="xl" align="center">
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack gap="md">
                      <Title order={3} size="h4" fw={700}>
                        Aerospace Discipline & Diagnostics Optimization
                      </Title>
                      <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                        Trained in fluid mechanics, thermodynamics, SOLIDWORKS
                        CAD, and experimental fluid flows at UT Space Institute.
                        Applied in-person root-cause analysis and hands-on
                        workflow bottleneck solutions to reduce client repair
                        turnaround time by 60%.
                      </Text>
                      <Group gap="md" align="center">
                        <RingProgress
                          size={72}
                          thickness={7}
                          roundCaps
                          sections={[{ value: 60, color: "teal" }]}
                          label={
                            <Text c="teal" fw={700} ta="center" size="xs">
                              60%
                            </Text>
                          }
                        />
                        <div>
                          <Text fw={700} size="sm">
                            Diagnostic Turnaround Reduction
                          </Text>
                          <Text size="xs" c="dimmed">
                            From 4.0 to 1.6 days across 3K+ client tickets
                          </Text>
                        </div>
                      </Group>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper
                      p="lg"
                      radius="md"
                      withBorder
                      style={{ backgroundColor: "var(--mantine-color-body)" }}
                    >
                      <Text
                        fw={600}
                        size="xs"
                        c="dimmed"
                        mb="xs"
                        style={{ textTransform: "uppercase" }}
                      >
                        Systems & Accreditations
                      </Text>
                      <Group gap={8}>
                        {aerospaceSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="light"
                            color="gray"
                            size="md"
                            radius="sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </Group>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Tabs.Panel>
            </Tabs>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
