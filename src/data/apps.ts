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

export interface PrivacyDataPoint {
  title: string;
  description: string;
}

export interface AppPrivacy {
  /** One-line summary of the app's data posture. */
  summary: string;
  /** Whether the app collects personal data or analytics off-device. */
  collectsPersonalData: boolean;
  /** What data the app handles and where it lives. */
  dataHandling: PrivacyDataPoint[];
  /** External services the app may contact, and why. */
  thirdParties: string[];
  /** App-specific children's privacy statement. */
  childrenNote: string;
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
  /** Wide promotional banner (e.g. 1024×500). Optional — desktop apps may not have one. */
  featureGraphic?: string;
  platforms: Platform[];
  /** Primary call-to-action grouping shown on cards and detail pages. */
  downloads: DownloadLink[];
  repository: string;
  features: AppFeature[];
  techStack: string[];
  screenshots: Screenshot[];
  /** Accent colour pulled from each app's own identity. */
  accent: string;
  /** App-specific privacy policy, linkable from app stores. */
  privacy: AppPrivacy;
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
    featureGraphic: '/apps/jannah-builder-feature.png',
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
    screenshots: [
      { src: '/screenshots/jannah-builder/1-prayer-screenhot.jpg', alt: 'Jannah Builder prayer logging screen' },
      { src: '/screenshots/jannah-builder/2-jannah-map.jpg', alt: 'Jannah Builder living Jannah map' },
      { src: '/screenshots/jannah-builder/3-stats-screen.jpg', alt: 'Jannah Builder statistics screen' },
      { src: '/screenshots/jannah-builder/4all-time-stats-scren.jpg', alt: 'Jannah Builder all-time statistics screen' },
      { src: '/screenshots/jannah-builder/5-settings.jpg', alt: 'Jannah Builder settings screen' },
    ],
    privacy: {
      summary:
        'Jannah Builder is local-first. Your prayer logs and progress stay on your device and are never sent to us.',
      collectsPersonalData: false,
      dataHandling: [
        {
          title: 'Prayer & worship logs',
          description:
            'Your daily prayer entries, optional Qur’an and dhikr logs, and the state of your Jannah map are stored locally on your device. They are not transmitted to Binary Meadow or any third party.',
        },
        {
          title: 'No account required',
          description:
            'The app works without sign-in. We do not ask for your name, email, phone number, or location, and we do not build a profile of you.',
        },
        {
          title: 'No analytics or tracking',
          description:
            'Jannah Builder does not embed advertising SDKs or third-party analytics, and does not track your activity across other apps or websites.',
        },
      ],
      thirdParties: [
        'Google Play — distributes the app and processes installs under its own privacy policy.',
        'GitHub Releases — hosts the downloadable APK under GitHub’s privacy policy.',
      ],
      childrenNote:
        'Jannah Builder is a family-friendly app suitable for all ages. Because it is local-first and collects no personal data, it can be used safely by children as well as adults.',
    },
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
    privacy: {
      summary:
        'OPDSy connects only to the self-hosted servers you configure. Your credentials stay in your device keychain and are never sent to us.',
      collectsPersonalData: false,
      dataHandling: [
        {
          title: 'Server credentials',
          description:
            'The addresses, usernames and passwords for your OPDS servers are stored securely in your operating system’s keychain and excluded from persisted app state. They are used only to connect to the servers you choose.',
        },
        {
          title: 'Your library content',
          description:
            'Books and comics are streamed directly between your device and your own servers. Binary Meadow has no access to your library, reading activity, or the content you view.',
        },
        {
          title: 'No account or profile',
          description:
            'OPDSy requires no Binary Meadow account. We do not collect your name, email, or location, and we build no profile of you.',
        },
        {
          title: 'No analytics or tracking',
          description:
            'OPDSy does not embed advertising SDKs or third-party analytics and does not track you across other apps or websites.',
        },
      ],
      thirdParties: [
        'Your self-hosted OPDS servers (e.g. Ubooquity, Komga, Kavita, Calibre-Web) — contacted only with the details you provide, under their own policies.',
        'Google Play — distributes the app and processes installs under its own privacy policy.',
      ],
      childrenNote:
        'OPDSy is suitable for all ages and can be used in a family or children’s setting. As it displays only the content on the servers you configure, the person setting up those servers controls what is available — so we recommend that a parent or guardian configures appropriate sources for younger users.',
    },
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
    privacy: {
      summary:
        'GridWatch reads your local GitHub Copilot CLI session data on your own machine. Nothing is sent to us; optional AI Insights runs only with a provider you configure.',
      collectsPersonalData: false,
      dataHandling: [
        {
          title: 'Local session data',
          description:
            'GridWatch reads the session files that GitHub Copilot CLI writes on your computer and displays them in the dashboard. This data stays on your machine and is never transmitted to Binary Meadow.',
        },
        {
          title: 'Optional AI Insights',
          description:
            'If you enable AI Insights, session content you choose to analyse is sent to the AI provider you configure using your own API key. This happens only on your explicit action; disable the feature and no data leaves your device.',
        },
        {
          title: 'No account or telemetry',
          description:
            'GridWatch needs no Binary Meadow account and includes no advertising SDKs or third-party usage analytics. We do not collect your name, email, or a profile of your activity.',
        },
      ],
      thirdParties: [
        'GitHub Releases — distributes the desktop app under GitHub’s privacy policy.',
        'Your chosen AI provider — contacted only when you enable AI Insights, using your own API key and under that provider’s policy.',
      ],
      childrenNote:
        'GridWatch is a developer tool intended for adults. It collects no personal data from any user, including children — all session data stays on your own device and is never sent to us.',
    },
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}
