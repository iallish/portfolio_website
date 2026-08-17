"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Paper,
  ThemeIcon,
  Text,
  Group,
} from "@mantine/core";
import {
  IconClockHour4,
  IconUsers,
  IconChartBar,
  IconRocket,
} from "@tabler/icons-react";
import { metricsData } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import classes from "@/app/home.module.css";

const iconMap: Record<string, React.FC<{ size?: number }>> = {
  clock: IconClockHour4,
  users: IconUsers,
  chart: IconChartBar,
  rocket: IconRocket,
};

export default function MetricsBanner() {
  const revealRef = useScrollReveal();

  return (
    <Box
      ref={revealRef}
      className="fadeInUp"
      py={{ base: 20, md: 40 }}
      style={{ position: "relative", zIndex: 10 }}
    >
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {metricsData.map((item, idx) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <Paper key={idx} p="lg" radius="md" className={classes.glassCard}>
                <Group justify="space-between" align="center" mb="xs">
                  <ThemeIcon
                    variant="light"
                    size={44}
                    radius="md"
                    color={item.color}
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </ThemeIcon>
                  <Text fw={800} size="xl" c={item.color}>
                    {item.value}
                  </Text>
                </Group>
                <Text fw={700} size="sm" mt="xs">
                  {item.label}
                </Text>
                <Text size="xs" c="dimmed" mt={4} style={{ lineHeight: 1.4 }}>
                  {item.description}
                </Text>
              </Paper>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
