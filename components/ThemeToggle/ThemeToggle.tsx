"use client";

import { ActionIcon, Tooltip, useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ActionIcon variant="default" size="lg" aria-label="Toggle color scheme" radius="md" style={{ opacity: 0 }}>
        <IconMoon size={20} />
      </ActionIcon>
    );
  }

  const isDark = computedColorScheme === "dark";

  return (
    <Tooltip label={isDark ? "Switch to light mode" : "Switch to dark mode"} withArrow position="bottom">
      <ActionIcon
        onClick={() => setColorScheme(isDark ? "light" : "dark")}
        variant="default"
        size="lg"
        radius="md"
        aria-label="Toggle color scheme"
        style={{
          transition: "transform 150ms ease, background-color 150ms ease",
        }}
      >
        {isDark ? (
          <IconSun size={20} color="var(--mantine-color-tennesseeOrange-5)" stroke={1.75} />
        ) : (
          <IconMoon size={20} color="var(--mantine-color-indigo-6)" stroke={1.75} />
        )}
      </ActionIcon>
    </Tooltip>
  );
}
