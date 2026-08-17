"use client";

import {
  Anchor,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Stack,
  Text,
  Badge,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconUserCircle,
  IconFileText,
} from "@tabler/icons-react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { ResumeModal } from "../ResumeModal/ResumeModal";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/data";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const navLinks = [
  { link: "#about", label: "About" },
  { link: "#skills", label: "Skills" },
  { link: "#projects", label: "Projects" },
  { link: "#experience", label: "Experience" },
  { link: "#education", label: "Education" },
  { link: "#contact", label: "Contact" },
];

export function DoubleHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [resumeOpened, { open: openResume, close: closeResume }] =
    useDisclosure(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll-spy: track which section is currently visible
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.link.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ResumeModal opened={resumeOpened} onClose={closeResume} />
      <header className={classes.header}>
        <Container size="xl" className={classes.inner}>
          {/* Brand / Logo */}
          <Anchor href="#" className={classes.brand} underline="never">
            <Group gap={8}>
              <IconUserCircle
                size={24}
                color="var(--mantine-color-tennesseeOrange-6)"
                stroke={2.5}
              />
              <Text fw={700} size="lg">
                Ian Allish
              </Text>
              <Badge
                size="xs"
                variant="light"
                color="tennesseeOrange"
                radius="sm"
                visibleFrom="xs"
              >
                MSBA & AI
              </Badge>
            </Group>
          </Anchor>

          {/* Desktop Nav Links */}
          <Group gap="xs" visibleFrom="md">
            {navLinks.map((item) => (
              <Anchor
                key={item.label}
                href={item.link}
                className={classes.navLink}
                underline="never"
                data-active={activeSection === item.link || undefined}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>

          {/* Right Action Icons & Mobile Burger */}
          <Group gap="xs">
            <Tooltip label="View Resume" withArrow>
              <ActionIcon
                onClick={openResume}
                variant="default"
                size="lg"
                radius="md"
                aria-label="View Resume"
                visibleFrom="xs"
              >
                <IconFileText size={20} stroke={1.75} />
              </ActionIcon>
            </Tooltip>

            <ActionIcon
              component="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="lg"
              radius="md"
              aria-label="GitHub Profile"
              visibleFrom="xs"
            >
              <IconBrandGithub size={20} stroke={1.75} />
            </ActionIcon>

            <ActionIcon
              component="a"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="lg"
              radius="md"
              aria-label="LinkedIn Profile"
              visibleFrom="xs"
            >
              <IconBrandLinkedin size={20} stroke={1.75} />
            </ActionIcon>

            <ThemeToggle />

            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="md"
              aria-label="Toggle navigation"
            />
          </Group>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          opened={opened}
          onClose={close}
          size="75%"
          padding="md"
          title={
            <Group gap={8}>
              <IconUserCircle
                size={22}
                color="var(--mantine-color-tennesseeOrange-6)"
                stroke={2.5}
              />
              <Text fw={700}>Ian Allish</Text>
            </Group>
          }
          hiddenFrom="md"
          zIndex={1000}
        >
          <ScrollArea h="calc(100vh - 100px)" mx="-md">
            <Divider my="sm" />
            <Stack gap={4} px="md">
              {navLinks.map((item) => (
                <Anchor
                  key={item.label}
                  href={item.link}
                  className={classes.drawerLink}
                  underline="never"
                  onClick={close}
                >
                  {item.label}
                </Anchor>
              ))}
            </Stack>
            <Divider my="md" />
            <Stack gap="xs" px="md">
              <Button
                onClick={() => {
                  close();
                  openResume();
                }}
                variant="light"
                color="tennesseeOrange"
                leftSection={<IconFileText size={18} />}
                size="sm"
                radius="md"
                fullWidth
              >
                View Resume
              </Button>
              <Button
                component="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                color="tennesseeOrange"
                leftSection={<IconBrandLinkedin size={18} />}
                size="sm"
                radius="md"
                fullWidth
              >
                Connect on LinkedIn
              </Button>
              <Button
                component="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="default"
                leftSection={<IconBrandGithub size={18} />}
                size="sm"
                radius="md"
                fullWidth
              >
                GitHub Profile
              </Button>
            </Stack>
          </ScrollArea>
        </Drawer>
      </header>
    </>
  );
}
