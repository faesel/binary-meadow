export type Platform = 'android' | 'ios' | 'macos' | 'windows';

export interface DownloadLink {
  label: string;
  href: string;
  platform: Platform;
  /** Placeholder until the real store listing is live. */
  comingSoon?: boolean;
}

export interface AppFeature {
  title: string;
  description: string;
}

export interface Screenshot {
  src: string;
  alt: string;
}

export interface App {
  slug: string;
  name: string;
  tagline: string;
  /** Short blurb for cards. */
  summary: string;
  /** Longer description for the detail page. */
  description: string;
  category: string;
  icon: string;
  platforms: Platform[];
  /** Primary call-to-action grouping shown on cards and detail pages. */
  downloads: DownloadLink[];
  repository: string;
  features: AppFeature[];
  techStack: string[];
  screenshots: Screenshot[];
  /** Accent colour pulled from each app's own identity. */
  accent: string;
}

export const apps: App[] = [
  {
    slug: 'jannah-builder',
    name: 'Jannah Builder',
    tagline: 'Watch your spiritual journey grow.',
    summary:
      'A spiritually-sensitive prayer tracker that visualises consistent worship as a living, growing pixel-art landscape.',
    description:
      'Jannah Builder lets you log your five daily prayers and watch your progress manifest as a beautiful, growing world inspired by Jannah (Paradise). It favours calm reflection over gamification, gentle encouragement over guilt, and gradual growth earned through consistent practice. Trees, flowers, animals and rivers appear as you stay consistent — and fade gently, never harshly, when days are missed.',
    category: 'Lifestyle / Wellbeing',
    icon: '/apps/jannah-builder.png',
    platforms: ['android'],
    accent: '#2d7a5f',
    repository: 'https://github.com/faesel/jannah-builder',
    downloads: [
      {
        label: 'Google Play',
        href: '#',
        platform: 'android',
        comingSoon: true,
      },
      {
        label: 'Download APK',
        href: 'https://github.com/faesel/jannah-builder/releases',
        platform: 'android',
      },
    ],
    techStack: ['React Native', 'Expo SDK 54', 'TypeScript', 'Expo Router'],
    features: [
      {
        title: 'Prayer logging',
        description:
          'Log Fajr, Dhuhr, Asr, Maghrib and Isha with subtle haptics and a gentle chime when the day is complete.',
      },
      {
        title: 'A living Jannah map',
        description:
          'A top-down pixel-art world where trees, multi-stage flowers, buildings and roaming animals appear as you progress.',
      },
      {
        title: 'Gentle decay',
        description:
          'Missed days affect one element at a time — newest first — so older progress is always preserved.',
      },
      {
        title: 'Supportive practices',
        description:
          'Optional Qur’an and dhikr logging enrich the ambience and occasionally grow lasting barakah flowers.',
      },
    ],
    screenshots: [],
  },
  {
    slug: 'opdsy',
    name: 'OPDSy',
    tagline: 'Your self-hosted library, unified.',
    summary:
      'A modern, cross-platform reader that streams comics and books from multiple self-hosted OPDS servers in one unified library.',
    description:
      'OPDSy browses and streams comics and books from many OPDS servers at once — Ubooquity, Komga, Kavita and Calibre-Web — merged into a single home with per-source colour badges. Comics stream page-by-page over OPDS-PSE with smart prefetch, each source loads independently so one broken server never takes down your library, and credentials are stored securely in the device keychain. It is the resilient, multi-source spiritual successor to the discontinued Kuboo.',
    category: 'Books & Reference',
    icon: '/apps/opdsy.png',
    platforms: ['android'],
    accent: '#1f6f8b',
    repository: 'https://github.com/faesel/opdsy',
    downloads: [
      {
        label: 'Google Play',
        href: '#',
        platform: 'android',
        comingSoon: true,
      },
    ],
    techStack: ['Expo SDK 56', 'React Native', 'TypeScript', 'TanStack Query'],
    features: [
      {
        title: 'Unified library',
        description:
          'Books and comics from many servers merged into one home, each tagged with a per-source colour badge.',
      },
      {
        title: 'Page streaming',
        description:
          'Comics stream page-by-page over OPDS-PSE — no full archive download needed to start reading.',
      },
      {
        title: 'Resilient by design',
        description:
          'Every source loads independently; one offline or broken server never crashes the library.',
      },
      {
        title: 'Secure credentials',
        description:
          'Passwords live in the OS keychain via secure storage and are excluded from persisted app state.',
      },
    ],
    screenshots: [],
  },
  {
    slug: 'gridwatch',
    name: 'GridWatch',
    tagline: 'See every AI-assisted session.',
    summary:
      'A retro-Tron-themed desktop dashboard that turns your local GitHub Copilot CLI session data into a real-time control panel.',
    description:
      'GridWatch reads the local session data written by GitHub Copilot CLI and presents it as a beautiful, real-time dashboard — giving you visibility into your AI-assisted workflow across every project. Browse sessions with live status and token usage, read full prompt history, track context compaction, explore an interactive skills graph, manage MCP and LSP servers, and analyse your sessions with AI insights. All wrapped in a neon Tron aesthetic.',
    category: 'Developer Tools',
    icon: '/apps/gridwatch.png',
    platforms: ['macos', 'windows'],
    accent: '#00b8d4',
    repository: 'https://github.com/faesel/gridwatch',
    downloads: [
      {
        label: 'Download for macOS',
        href: 'https://github.com/faesel/gridwatch/releases/latest',
        platform: 'macos',
      },
      {
        label: 'Download for Windows',
        href: 'https://github.com/faesel/gridwatch/releases/latest',
        platform: 'windows',
      },
    ],
    techStack: ['Electron', 'React', 'TypeScript', 'React Flow'],
    features: [
      {
        title: 'Sessions overview',
        description:
          'Browse every Copilot CLI session with live status, token utilisation, search, filtering and tagging.',
      },
      {
        title: 'Token usage graphs',
        description:
          'Line charts track peak context-window usage over time, snapshotted so they survive log pruning.',
      },
      {
        title: 'Skills graph & orchestrator',
        description:
          'An interactive node-link map of how your skills connect, with a builder for orchestrator workflows.',
      },
      {
        title: 'MCP & LSP dashboards',
        description:
          'Inspect and toggle Model Context Protocol and Language Server Protocol servers to tame context bloat.',
      },
    ],
    screenshots: [
      { src: '/screenshots/gridwatch/sessions.png', alt: 'GridWatch sessions overview' },
      { src: '/screenshots/gridwatch/tokens.png', alt: 'GridWatch token usage graphs' },
      { src: '/screenshots/gridwatch/skills-graph.png', alt: 'GridWatch interactive skills graph' },
      { src: '/screenshots/gridwatch/agents.png', alt: 'GridWatch agents panel' },
      { src: '/screenshots/gridwatch/mcp.png', alt: 'GridWatch MCP server dashboard' },
      { src: '/screenshots/gridwatch/activity.png', alt: 'GridWatch activity heatmap' },
    ],
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}
