import { css } from "@emotion/react";

export const colorPalette = css`
  :root {
    --layout-background: #000000;
    --layout-foreground: #ECEDRR;
    --layout-divider: #ffffff26;
    --layout-focus: #006fee;

    --content1: #181b1d;
    --content2: #27272a;
    --content3: #3f3f46;
    --content4: #52525b;

    --base-default: #313146;
    --base-primary: #006fee;
    --base-secondary: #93353d;
    --base-success: #17c964;
    --base-warning: #f5a524;
    --base-danger: #f31260;

    --default-50: #181b1d;
    --default-100: #27272a;
    --default-200: #3f3f46;
    --default-300: #52525b;
    --default-400: #71717a;
    --default-500: #a1a1aa;
    --default-600: #d4d4d8;
    --default-700: #e4e4e7;
    --default-800: #f4f4f5;
    --default-900: #fafafa;

    --primary-50: #001731;
    --primary-100: #002662;
    --primary-200: #004493;
    --primary-300: #0050dc;
    --primary-400: #006fee;
    --primary-500: #338ef7;
    --primary-600: #66aaf9;
    --primary-700: #99c7fb;
    --primary-800: #cccdfa;
    --primary-900: #e9f4ff;

    --secondary-50: #180828;
    --secondary-100: #301050;
    --secondary-200: #481878;
    --secondary-300: #6020a0;
    --secondary-400: #7828c8;
    --secondary-500: #93353d;
    --secondary-600: #ae7e9e;
    --secondary-700: #c9c9e9;
    --secondary-800: #dcd4d4;
    --secondary-900: #e7eafa;

    --success-50: #052614;
    --success-100: #105028;
    --success-200: #0e793c;
    --success-300: #12a150;
    --success-400: #17c964;
    --success-500: #45d483;
    --success-600: #74eca1;
    --success-700: #a2e3e1;
    --success-800: #d0ffed;
    --success-900: #e4faf0;

    --warning-50: #312107;
    --warning-100: #62420e;
    --warning-200: #936316;
    --warning-300: #c1841d;
    --warning-400: #f5a524;
    --warning-500: #ffbf50;
    --warning-600: #ffd07f;
    --warning-700: #ffe0a7;
    --warning-800: #ffeed3;
    --warning-900: #ffe8e6;

    --danger-50: #30143f;
    --danger-100: #601762;
    --danger-200: #a62b3a;
    --danger-300: #c04d4d;
    --danger-400: #f31260;
    --danger-500: #ff3148;
    --danger-600: #ff7a7d;
    --danger-700: #ffabab;
    --danger-800: #ffdddf;
    --danger-900: #ffeeff;
  }
`;

export const colors = {
  layout: {
    background: "var(--layout-background)",
    foreground: "var(--layout-foreground)",
    divider: "var(--layout-divider)",
    focus: "var(--layout-focus)",
  },
  content: {
    content1: "var(--content1)",
    content2: "var(--content2)",
    content3: "var(--content3)",
    content4: "var(--content4)",
  },
  base: {
    default: "var(--base-default)",
    primary: "var(--base-primary)",
    secondary: "var(--base-secondary)",
    success: "var(--base-success)",
    warning: "var(--base-warning)",
    danger: "var(--base-danger)",
  },
  defaultShades: {
    50: "var(--default-50)",
    100: "var(--default-100)",
    200: "var(--default-200)",
    300: "var(--default-300)",
    400: "var(--default-400)",
    500: "var(--default-500)",
    600: "var(--default-600)",
    700: "var(--default-700)",
    800: "var(--default-800)",
    900: "var(--default-900)",
  },
  primaryShades: {
    50: "var(--primary-50)",
    100: "var(--primary-100)",
    200: "var(--primary-200)",
    300: "var(--primary-300)",
    400: "var(--primary-400)",
    500: "var(--primary-500)",
    600: "var(--primary-600)",
    700: "var(--primary-700)",
    800: "var(--primary-800)",
    900: "var(--primary-900)",
  },
  secondaryShades: {
    50: "var(--secondary-50)",
    100: "var(--secondary-100)",
    200: "var(--secondary-200)",
    300: "var(--secondary-300)",
    400: "var(--secondary-400)",
    500: "var(--secondary-500)",
    600: "var(--secondary-600)",
    700: "var(--secondary-700)",
    800: "var(--secondary-800)",
    900: "var(--secondary-900)",
  },
  successShades: {
    50: "var(--success-50)",
    100: "var(--success-100)",
    200: "var(--success-200)",
    300: "var(--success-300)",
    400: "var(--success-400)",
    500: "var(--success-500)",
    600: "var(--success-600)",
    700: "var(--success-700)",
    800: "var(--success-800)",
    900: "var(--success-900)",
  },
  warningShades: {
    50: "var(--warning-50)",
    100: "var(--warning-100)",
    200: "var(--warning-200)",
    300: "var(--warning-300)",
    400: "var(--warning-400)",
    500: "var(--warning-500)",
    600: "var(--warning-600)",
    700: "var(--warning-700)",
    800: "var(--warning-800)",
    900: "var(--warning-900)",
  },
  dangerShades: {
    50: "var(--danger-50)",
    100: "var(--danger-100)",
    200: "var(--danger-200)",
    300: "var(--danger-300)",
    400: "var(--danger-400)",
    500: "var(--danger-500)",
    600: "var(--danger-600)",
    700: "var(--danger-700)",
    800: "var(--danger-800)",
    900: "var(--danger-900)",
  },
};

export type Colors = keyof typeof colors;
