"use client";

import { Box, Container, Group, Text } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";

export default function Footer() {
  return (
    <Box
      component="footer"
      py="md"
      style={{
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid var(--mantine-color-default-border)",
      }}
    >
      <Container size="xl">
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <IconUserCircle
              size={20}
              color="var(--mantine-color-tennesseeOrange-6)"
            />
            <Text size="sm" fw={600}>
              Ian Allish
            </Text>
          </Group>
          <Text size="xs" c="dimmed">
            © 2026 Ian Allish • Knoxville, TN • Built with Next.js & Mantine UI.
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
