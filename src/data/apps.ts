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

/** A segment of an attribution line; renders as a link when `href` is set. */
export interface CreditPart {
  text: string;
  href?: string;
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
  /** Public source repository. Omit for closed-source apps. */
  repository?: string;
  /** A few emphasised selling points, shown prominently above the full feature list. */
  highlights?: AppFeature[];
  features: AppFeature[];
  techStack: string[];
  screenshots: Screenshot[];
  /** Optional attribution shown beneath the screenshots (e.g. third-party artwork). */
  screenshotsCredit?: CreditPart[];
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
      'Jannah Builder is a calm, spiritually-sensitive prayer tracker that turns your five daily prayers into a beautiful, growing pixel-art world inspired by Jannah (Paradise).\n\nIt favours calm reflection over gamification and gentle encouragement over guilt. Trees, flowers, buildings and roaming animals appear as you stay consistent — and when a day is missed, only one element is gently affected, so older progress is always preserved.\n\nThere are no streaks to break, no leaderboards and no comparisons. Everything works fully offline with no account required, and your prayer logs never leave your device.',
    category: 'Lifestyle / Wellbeing',
    icon: '/apps/jannah-builder.png',
    featureGraphic: '/apps/jannah-builder-feature.png',
    platforms: ['android'],
    accent: '#2d7a5f',
    repository: 'https://github.com/faesel/jannah-builder',
    downloads: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.jannahbuilder',
        platform: 'android',
      },
      {
        label: 'Download APK',
        href: 'https://github.com/faesel/jannah-builder/releases',
        platform: 'android',
      },
    ],
    techStack: ['React Native', 'Expo SDK 54', 'TypeScript', 'Expo Router'],
    highlights: [
      {
        title: 'Gentle, never guilt',
        description:
          'No streaks, no leaderboards, no comparisons — just calm encouragement. A missed day affects only one element, never your whole garden.',
      },
      {
        title: 'A living Jannah map',
        description:
          'Watch a beautiful pixel-art world grow with your worship — trees, flowers, buildings and roaming wildlife.',
      },
      {
        title: 'Private & fully offline',
        description:
          'No account, no analytics and no tracking of any kind. Every prayer log stays on your device.',
      },
    ],
    features: [
      {
        title: 'Five daily prayers',
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
        title: 'Qur’an & dhikr logging',
        description:
          'Simple daily yes/no logging enriches the ambience with golden light and floating particles, and occasionally grows lasting barakah flowers.',
      },
      {
        title: 'Roaming wildlife',
        description:
          'Animated birds, rabbits, deer and squirrels bring your garden quietly to life.',
      },
      {
        title: 'Seasonal moments',
        description:
          'Beautiful temporary items appear during long periods of consistency, then gently pass.',
      },
      {
        title: 'A journey, not a competition',
        description:
          'Statistics are presented as a personal journey — no streaks displayed, no leaderboards, no comparisons.',
      },
      {
        title: 'Fully offline, no account',
        description:
          'All data stays on your device and the app works without sign-in — nothing is sent to Binary Meadow.',
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
      'OPDSy is a fast, private comic and ebook reader for the books, comics and manga you already host yourself.\n\nConnect it to your OPDS servers — Komga, Kavita, Ubooquity and any OPDS 1.2 or 2.0 source — and browse them all together in one unified library. Add on-device folders as a local library too, or open a file from any app to read it instantly.\n\nRead EPUB, MOBI, AZW3, FB2 and PDF books, CBZ/CBR comics, and Markdown with Mermaid diagrams; listen to any book with built-in text-to-speech; and download titles for fully offline reading — with no account, no ads and no tracking of any kind.',
    category: 'Books & Reference',
    icon: '/apps/opdsy.png',
    featureGraphic: '/apps/opdsy-feature.png',
    platforms: ['android'],
    accent: '#1f6f8b',
    downloads: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.opdsy',
        platform: 'android',
      },
    ],
    techStack: ['Expo SDK 56', 'React Native', 'TypeScript', 'TanStack Query'],
    screenshots: [
      { src: '/screenshots/opdsy/home.jpg?v=5', alt: 'OPDSy home screen with continue reading and favourites' },
      { src: '/screenshots/opdsy/library.jpg?v=5', alt: 'OPDSy unified library browsing view' },
      { src: '/screenshots/opdsy/comic-list.jpg?v=5', alt: 'OPDSy comic series list with cover art' },
      { src: '/screenshots/opdsy/book-list.jpg?v=5', alt: 'OPDSy book list with cover art' },
      { src: '/screenshots/opdsy/comic-reading.jpg?v=5', alt: 'OPDSy comic page reader' },
      { src: '/screenshots/opdsy/book-reading.jpg?v=5', alt: 'OPDSy book reader view' },
      { src: '/screenshots/opdsy/book-reading-2.jpg?v=5', alt: 'OPDSy book reader with reading settings' },
      { src: '/screenshots/opdsy/highlight.jpg?v=5', alt: 'OPDSy text highlighting with colours and copy, share and note actions' },
      { src: '/screenshots/opdsy/downloads.jpg?v=5', alt: 'OPDSy offline downloads screen' },
      { src: '/screenshots/opdsy/settings.jpg?v=5', alt: 'OPDSy settings screen' },
      { src: '/screenshots/opdsy/libraries.jpg?v=5', alt: 'OPDSy connected OPDS servers list' },
      { src: '/screenshots/opdsy/edit-libraries.jpg?v=5', alt: 'OPDSy editing an OPDS server connection' },
      { src: '/screenshots/opdsy/local-library.jpg?v=5', alt: 'OPDSy local library of imported files' },
      { src: '/screenshots/opdsy/audio.jpg?v=5', alt: 'OPDSy text-to-speech audio playback' },
      { src: '/screenshots/opdsy/sync.jpg?v=5', alt: 'OPDSy cross-device sync settings' },
      { src: '/screenshots/opdsy/appearance.jpg?v=5', alt: 'OPDSy reader appearance settings' },
      { src: '/screenshots/opdsy/ebook-mode.jpg?v=5', alt: 'OPDSy ebook reading mode options' },
    ],
    screenshotsCredit: [
      { text: 'Comic and book artwork shown is for demonstration only. ' },
      { text: 'Pepper&Carrot', href: 'https://www.peppercarrot.com/' },
      { text: ' is by ' },
      { text: 'David Revoy', href: 'https://www.davidrevoy.com/' },
      { text: ', licensed under ' },
      {
        text: 'CC BY 4.0',
        href: 'https://creativecommons.org/licenses/by/4.0/',
      },
      { text: '. Other comic covers are public-domain ' },
      {
        text: 'Golden Age comics',
        href: 'https://digitalcomicmuseum.com/',
      },
      { text: ', and book covers are public-domain literary classics.' },
    ],
    highlights: [
      {
        title: 'Private by design, zero tracking',
        description:
          'No account, no ads, no analytics and no tracking of any kind. Your reading is nobody’s business but yours.',
      },
      {
        title: 'One library, many servers',
        description:
          'Komga, Kavita, Ubooquity and any OPDS 1.2 / 2.0 source, merged into a single unified home.',
      },
      {
        title: 'Comics, books and audio',
        description:
          'Stream comics and manga, read ebooks in multiple formats, or have any book read aloud with text-to-speech.',
      },
      {
        title: 'The successor to Kuboo',
        description:
          'A resilient, multi-source reader rebuilt from the ground up for speed, reliability and privacy — and actively maintained.',
      },
      {
        title: 'Your own files, too',
        description:
          'Add on-device folders as a local library, or open any file straight from your file manager or share sheet — servers optional.',
      },
    ],
    features: [
      {
        title: 'One library, many servers',
        description:
          'Add as many OPDS sources as you like — Komga, Kavita, Ubooquity or any OPDS 1.2 / 2.0 server — merged into a single home, each tagged with a per-source colour badge.',
      },
      {
        title: 'Books and comics, any format',
        description:
          'Reads EPUB, MOBI, AZW3, FB2 and PDF ebooks, CBZ / CBR comics and manga, and Markdown documents (with Mermaid.js diagrams) — from your servers or your own device.',
      },
      {
        title: 'A comic & manga reader',
        description:
          'Paged or continuous vertical-scroll (webtoon) reading, left-to-right or right-to-left direction, fit-to-screen or fit-to-width, landscape dual-page spreads, and double-tap or pinch to zoom.',
      },
      {
        title: 'Page streaming',
        description:
          'Comics stream page-by-page over OPDS-PSE with smart prefetching, so the next page is ready before you swipe — no full archive download needed to start reading.',
      },
      {
        title: 'Your own files, no server needed',
        description:
          'Add any on-device folder as a local library — each with its own name and colour — and browse it alongside your OPDS sources. Or send a file to OPDSy from your file manager or any share sheet to open it straight in the reader.',
      },
      {
        title: 'Built-in PDF & Markdown readers',
        description:
          'Read PDFs in-app with paged or vertical scrolling, fit-to-screen or fit-to-width, single- or two-page layouts, and pinch or double-tap zoom. Markdown renders cleanly, including Mermaid.js diagrams.',
      },
      {
        title: 'Listen with text-to-speech',
        description:
          'Have any ebook read aloud with your device’s text-to-speech engine — flowing sentence by sentence and continuing across chapters, with adjustable speed, pitch and choice of offline or online voices.',
      },
      {
        title: 'A proper reading experience',
        description:
          'Continue Reading remembers your place across every source. Mark favourites for one-tap access, track progress, and tune the ebook reader with adjustable fonts, line spacing and light, sepia or OLED-friendly dark themes.',
      },
      {
        title: 'Highlights & bookmarks',
        description:
          'Select any passage to highlight it in a choice of colours, attach a note, or copy and share the text — and bookmark pages to jump back to the moments that matter. Your highlights, notes and bookmarks stay on your device.',
      },
      {
        title: 'Read offline, anywhere',
        description:
          'Download comics and books straight to your device for reading with no connection at all. Interrupted downloads resume automatically and stay ready when you are.',
      },
      {
        title: 'Resilient by design',
        description:
          'Every source loads independently, so one offline, slow or broken server never crashes your library — and favourites and recent items stay visible even when a server is temporarily down.',
      },
      {
        title: 'Secure credentials',
        description:
          'Server addresses, usernames and passwords are kept in your device’s secure storage (the Android Keystore) and excluded from persisted app state — never sent to Binary Meadow.',
      },
      {
        title: 'Private cross-device sync',
        description:
          'Optionally sync your library, favourites and reading progress through your own Google Drive — end-to-end encrypted with a passphrase-derived key, readable only on your devices.',
      },
    ],
    privacy: {
      summary:
        'OPDSy connects only to the self-hosted servers you configure. It has no Binary Meadow account and no analytics, and optional cross-device sync is end-to-end encrypted inside your own Google Drive — so we never see your library, reading activity or credentials.',
      collectsPersonalData: false,
      dataHandling: [
        {
          title: 'Server credentials',
          description:
            'The addresses, usernames and passwords for your OPDS servers are kept in your device’s secure storage (the Android Keystore) and excluded from persisted app state. They are used only to connect to the servers you choose and are never sent to Binary Meadow.',
        },
        {
          title: 'Your library content',
          description:
            'Books and comics are streamed directly between your device and your own servers. Binary Meadow has no access to your library, reading activity, or the content you view.',
        },
        {
          title: 'Cross-device sync (optional)',
          description:
            'If you turn on sync, your library, favourites and reading progress — and, only if you opt in, your server credentials — are packaged into a single file, end-to-end encrypted on your device with a passphrase-derived key (AES-256-GCM), and stored in a hidden, app-private folder of your own Google Drive. Neither Binary Meadow nor Google can read its contents; only a device holding your passphrase can decrypt it. You can turn sync off and remove the file at any time.',
        },
        {
          title: 'No account or profile',
          description:
            'OPDSy requires no Binary Meadow account. If you use sync you sign in with your own Google account solely to access your Drive’s app folder. We do not collect your name, email, or location, and we build no profile of you.',
        },
        {
          title: 'No analytics or tracking',
          description:
            'OPDSy does not embed advertising SDKs or third-party analytics and does not track you across other apps or websites.',
        },
      ],
      thirdParties: [
        'Your self-hosted OPDS servers (e.g. Ubooquity, Komga, Kavita) — contacted only with the details you provide, under their own policies.',
        'Google Drive — used only if you enable cross-device sync, to store an end-to-end-encrypted copy of your data in a hidden, app-private folder of your own Google account. OPDSy requests only the app-data scope (drive.appdata) and cannot see any of your other Drive files.',
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
      'GridWatch reads the local session data written by GitHub Copilot CLI and presents it as a beautiful, real-time dashboard — giving you visibility into your AI-assisted workflow across every project you work on.\n\nBrowse sessions with live status and token usage, read full prompt history, track context compaction, explore an interactive skills graph, and manage your MCP and LSP servers — all from one control panel.\n\nEverything runs locally on your machine, wrapped in a neon retro-Tron aesthetic. Optional AI Insights analyse your sessions using an AI provider you configure with your own API key.',
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
    highlights: [
      {
        title: 'Everything runs locally',
        description:
          'GridWatch reads your Copilot CLI data on your own machine. Nothing is sent to us — optional AI Insights run only with a provider you configure.',
      },
      {
        title: 'See every session',
        description:
          'Live status, token usage, prompt history and full-text search across every Copilot CLI session and project.',
      },
      {
        title: 'Understand your skills',
        description:
          'An interactive graph of how your skills and agents connect, plus a builder for orchestrator workflows.',
      },
      {
        title: 'Retro-Tron control panel',
        description:
          'Neon cyan, electric blue and orange on near-black — a dashboard that’s as good to look at as it is to use.',
      },
    ],
    features: [
      {
        title: 'Sessions overview',
        description:
          'Browse every Copilot CLI session with live status, token utilisation and last prompt, paginated for fast loading.',
      },
      {
        title: 'Search, filtering & tagging',
        description:
          'Full-text search, multi-select tag filters and a session-type filter, plus custom tags and directory-based auto-tag rules.',
      },
      {
        title: 'Session type detection',
        description:
          'Automatically identifies research and code-review sessions with distinct badges by detecting the agents Copilot used.',
      },
      {
        title: 'Prompt & token history',
        description:
          'Read every user message from a session, and track peak context-window usage over time with charts that survive Copilot’s log pruning.',
      },
      {
        title: 'Compaction tracking',
        description:
          'See when Copilot compacts the conversation — trigger utilisation, messages replaced and tokens saved — with an inline checkpoint viewer.',
      },
      {
        title: 'Skills management',
        description:
          'Browse, create, edit, duplicate, delete, import, export, tag and toggle your Copilot CLI skills, with a Tron-themed markdown viewer.',
      },
      {
        title: 'Skills graph & orchestrator builder',
        description:
          'An interactive React Flow map of skill and agent relationships, with an edit mode to compose sequential or parallel orchestrator workflows that generate runnable SKILL.md blocks.',
      },
      {
        title: 'MCP & LSP dashboards',
        description:
          'Inspect and enable/disable Model Context Protocol and Language Server Protocol servers, browse live tool catalogues, and tame context-window bloat.',
      },
      {
        title: 'Agents panel',
        description:
          'View built-in and custom Copilot agents with per-agent session counts, usage stats and linked session history.',
      },
      {
        title: 'Activity & AI Insights',
        description:
          'A GitHub-style 52-week activity heatmap, plus optional OpenAI-powered prompt-quality scoring and improvement suggestions.',
      },
      {
        title: 'Manage & stay current',
        description:
          'Rename, archive or safely delete sessions, reveal reports and files in Finder or Explorer, with update notifications and 30-second auto-refresh.',
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
  {
    slug: 'spinely',
    name: 'Spinely',
    tagline: 'Scan spines, sort & visualise your shelves.',
    summary:
      'An Android-first bookshelf organiser that scans book spines, sorts your collection and turns your physical shelves into an interactive visual layout.',
    description:
      'Spinely helps you organise the physical bookshelves you already own.\n\nDefine your bookcases and shelves, then log books by scanning their ISBN barcode — with a manual search fallback — and photograph and crop each book’s spine. Choose how to organise (by author, colour, category and more) and get a beautiful, interactive visual shelf.\n\nWhen a shelf overflows, drag the pin inward to set its cut-off: overflow books grey out and flow to the next shelf, committed with a simple confirmation. Everything is local-only — your library stays on your device.',
    category: 'Books & Reference',
    icon: '/apps/spinely.png',
    featureGraphic: '/apps/spinely-feature.png?v=2',
    platforms: ['android'],
    accent: '#8a5a2b',
    downloads: [
      {
        label: 'Google Play',
        href: '#',
        platform: 'android',
        comingSoon: true,
      },
    ],
    techStack: ['Expo SDK 56', 'React Native', 'TypeScript', 'TanStack Query'],
    highlights: [
      {
        title: 'Scan & catalogue in seconds',
        description:
          'Log books by scanning their ISBN barcode, with automatic metadata lookup and a manual search fallback when you need it.',
      },
      {
        title: 'Your shelves, visualised',
        description:
          'Photograph and crop each book’s spine to build an interactive, true-to-life visual layout of your bookcases.',
      },
      {
        title: 'Private & local-only',
        description:
          'No account and no tracking — your library, spines and layout stay on your device.',
      },
    ],
    features: [
      {
        title: 'Bookcases & shelves',
        description:
          'Define your real bookcases and shelves, then arrange your collection to match the room in front of you.',
      },
      {
        title: 'Barcode scanning & metadata',
        description:
          'Scan an ISBN to pull in book metadata from Open Library and Google Books, with a manual search fallback.',
      },
      {
        title: 'Spine capture & crop',
        description:
          'Photograph each book’s spine and crop it precisely, then tag its dominant colour for colour-based sorting.',
      },
      {
        title: 'Flexible organisation',
        description:
          'Sort and distribute your books by author, colour, category and more, with an engine that lays them out across your shelves.',
      },
      {
        title: 'Interactive visual shelf',
        description:
          'Browse a beautiful, true-to-scale representation of your bookcases built from your own spine photos.',
      },
      {
        title: 'Draggable overflow pin',
        description:
          'When a shelf fills up, drag the pin inward to set its cut-off — overflow books grey out and flow to the next shelf, committed with a confirmation.',
      },
    ],
    screenshots: [
      { src: '/screenshots/spinely/1-shelves.jpg', alt: 'Spinely bookcases overview with an interactive visual shelf' },
      { src: '/screenshots/spinely/1.1-shelves.jpg', alt: 'Spinely interactive visual shelf built from real book spine photos, organised by author' },
      { src: '/screenshots/spinely/2-shelf-detail.jpg', alt: 'Spinely bookcase detail with organise, add books and fit options' },
      { src: '/screenshots/spinely/3-library.jpg', alt: 'Spinely library of logged books with search and filters' },
      { src: '/screenshots/spinely/4-log-book.jpg', alt: 'Spinely log a book screen with barcode scan, ISBN and search' },
      { src: '/screenshots/spinely/5-book-detail.jpg', alt: 'Spinely edit book screen with cover, title, authors and categories' },
      { src: '/screenshots/spinely/6-book-spine.jpg', alt: 'Spinely book detail with captured spine photo and tagged colour' },
      { src: '/screenshots/spinely/7-edit-book-spine.jpg', alt: 'Spinely spine colour picker for colour-based shelf sorting' },
      { src: '/screenshots/spinely/8-settings.jpg', alt: 'Spinely settings screen with library stats and preferred language' },
    ],
    privacy: {
      summary:
        'Spinely is local-first. Your bookcases, books and spine photos stay on your device and are never sent to us.',
      collectsPersonalData: false,
      dataHandling: [
        {
          title: 'Library & spine photos',
          description:
            'Your bookcases, shelves, logged books and the spine photos you capture are stored locally on your device. They are not transmitted to Binary Meadow or any third party.',
        },
        {
          title: 'No account required',
          description:
            'The app works without sign-in. We do not ask for your name, email, phone number or location, and we do not build a profile of you.',
        },
        {
          title: 'No analytics or tracking',
          description:
            'Spinely does not embed advertising SDKs or third-party analytics, and does not track your activity across other apps or websites.',
        },
      ],
      thirdParties: [
        'Open Library — queried to look up book metadata from an ISBN, under its own privacy policy.',
        'Google Books — queried to look up book metadata from an ISBN, under Google’s privacy policy.',
        'Google Play — distributes the app and processes installs under its own privacy policy.',
      ],
      childrenNote:
        'Spinely is a family-friendly app suitable for all ages. Because it is local-first and collects no personal data, it can be used safely by children as well as adults.',
    },
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}
