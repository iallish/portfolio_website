"use client";

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Modal,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconDownload,
  IconExternalLink,
  IconFileText,
} from "@tabler/icons-react";

interface ResumeModalProps {
  opened: boolean;
  onClose: () => void;
}

export function ResumeModal({ opened, onClose }: ResumeModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="calc(100vw - 3rem)"
      maw={1050}
      radius="md"
      padding="md"
      title={
        <Group gap="sm" align="center">
          <IconFileText
            size={22}
            color="var(--mantine-color-tennesseeOrange-6)"
          />
          <div>
            <Group gap="xs" align="center">
              <Text fw={700} size="md">
                Ian Allish — Resume
              </Text>
              <Badge variant="light" color="tennesseeOrange" size="xs">
                PDF Preview
              </Badge>
            </Group>
            <Text size="xs" c="dimmed">
              MSBA & AI Candidate • Aerospace Engineering B.S.
            </Text>
          </div>
        </Group>
      }
      styles={{
        header: {
          borderBottom: "1px solid var(--mantine-color-default-border)",
          paddingBottom: "12px",
          marginBottom: "12px",
        },
        body: {
          padding: 0,
        },
      }}
    >
      <Stack gap="sm">
        {/* Quick Actions Bar */}
        <Group justify="space-between" px="xs">
          <Text size="xs" c="dimmed">
            Scroll inside the viewer to review the complete resume.
          </Text>
          <Group gap="xs">
            <Tooltip label="Open PDF in a new tab" withArrow>
              <ActionIcon
                component="a"
                href="/ResumeIanAllish.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="default"
                size="sm"
                aria-label="Open in new tab"
              >
                <IconExternalLink size={16} />
              </ActionIcon>
            </Tooltip>

            <Button
              component="a"
              href="/ResumeIanAllish.pdf"
              download="Ian_Allish_Resume.pdf"
              variant="light"
              color="tennesseeOrange"
              size="xs"
              leftSection={<IconDownload size={14} />}
            >
              Download PDF
            </Button>
          </Group>
        </Group>

        {/* Embedded PDF Viewer */}
        <Box
          style={{
            width: "100%",
            height: "75vh",
            minHeight: "500px",
            backgroundColor: "light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))",
            borderRadius: "var(--mantine-radius-md)",
            overflow: "hidden",
            border: "1px solid var(--mantine-color-default-border)",
          }}
        >
          <iframe
            src="/ResumeIanAllish.pdf#toolbar=1&navpanes=0&scrollbar=1"
            title="Ian Allish Resume PDF"
            width="100%"
            height="100%"
            style={{
              border: "none",
              display: "block",
            }}
          />
        </Box>
      </Stack>
    </Modal>
  );
}
