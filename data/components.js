const componentStatusData = [
  {
    lastUpdate: "05-10-24",
    componentCount: 30,
  },
  {
    category: "Navigation",
    components: [
      {
        name: "Button",
        statuses: [
          { platform: "Figma", status: "✅" },
          { platform: "Storybook", status: "🧪" },
          { platform: "Guidelines", status: "🔭" },
          { platform: "Docs", status: "🔨" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "Ready for production",
      },
      {
        name: "Link",
        statuses: [
          { platform: "Figma", status: "🔨" },
          { platform: "Storybook", status: "✅" },
          { platform: "Guidelines", status: "🧪" },
          { platform: "Docs", status: "🔭" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "Documentation needs update",
      },
      {
        name: "Menu",
        statuses: [
          { platform: "Figma", status: "🧪" },
          { platform: "Storybook", status: "🔭" },
          { platform: "Guidelines", status: "✅" },
          { platform: "Docs", status: "🔨" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "Pending final review",
      },
    ],
  },
  {
    category: "Forms",
    components: [
      {
        name: "Input Field",
        statuses: [
          { platform: "Figma", status: "🧪" },
          { platform: "Storybook", status: "✅" },
          { platform: "Guidelines", status: "🔨" },
          { platform: "Docs", status: "🔭" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "Needs review",
      },
      {
        name: "Checkbox",
        statuses: [
          { platform: "Figma", status: "🔨" },
          { platform: "Storybook", status: "🧱" },
          { platform: "Guidelines", status: "✅" },
          { platform: "Docs", status: "🧪" },
          { platform: "CDN", status: "🔭" },
        ],
        comment: "Pending updates",
      },
      {
        name: "Radio Button",
        statuses: [
          { platform: "Figma", status: "🧱" },
          { platform: "Storybook", status: "🔭" },
          { platform: "Guidelines", status: "🧪" },
          { platform: "Docs", status: "✅" },
          { platform: "CDN", status: "🔨" },
        ],
        comment: "No comments",
      },
    ],
  },
  {
    category: "Feedback",
    components: [
      {
        name: "Alert",
        statuses: [
          { platform: "Figma", status: "🔭" },
          { platform: "Storybook", status: "🧪" },
          { platform: "Guidelines", status: "✅" },
          { platform: "Docs", status: "🧱" },
          { platform: "CDN", status: "🔨" },
        ],
        comment: "Requires testing",
      },
      {
        name: "Tooltip",
        statuses: [
          { platform: "Figma", status: "🧪" },
          { platform: "Storybook", status: "🔨" },
          { platform: "Guidelines", status: "🧱" },
          { platform: "Docs", status: "🔭" },
          { platform: "CDN", status: "✅" },
        ],
        comment: "No comments",
      },
      {
        name: "Modal",
        statuses: [
          { platform: "Figma", status: "🧱" },
          { platform: "Storybook", status: "🔭" },
          { platform: "Guidelines", status: "🧪" },
          { platform: "Docs", status: "✅" },
          { platform: "CDN", status: "🔨" },
        ],
        comment: "Pending review",
      },
    ],
  },
  {
    category: "Media",
    components: [
      {
        name: "Image",
        statuses: [
          { platform: "Figma", status: "✅" },
          { platform: "Storybook", status: "🧪" },
          { platform: "Guidelines", status: "🔭" },
          { platform: "Docs", status: "🔨" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "No comments",
      },
      {
        name: "Video",
        statuses: [
          { platform: "Figma", status: "🧪" },
          { platform: "Storybook", status: "✅" },
          { platform: "Guidelines", status: "🔨" },
          { platform: "Docs", status: "🔭" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "Needs review",
      },
      {
        name: "Audio",
        statuses: [
          { platform: "Figma", status: "🔨" },
          { platform: "Storybook", status: "🧱" },
          { platform: "Guidelines", status: "✅" },
          { platform: "Docs", status: "🧪" },
          { platform: "CDN", status: "🔭" },
        ],
        comment: "Pending updates",
      },
    ],
  },
  {
    category: "Layout",
    components: [
      {
        name: "Grid",
        statuses: [
          { platform: "Figma", status: "🧱" },
          { platform: "Storybook", status: "🔭" },
          { platform: "Guidelines", status: "🧪" },
          { platform: "Docs", status: "✅" },
          { platform: "CDN", status: "🔨" },
        ],
        comment: "No comments",
      },
      {
        name: "Flexbox",
        statuses: [
          { platform: "Figma", status: "🔭" },
          { platform: "Storybook", status: "🧪" },
          { platform: "Guidelines", status: "✅" },
          { platform: "Docs", status: "🧱" },
          { platform: "CDN", status: "🔨" },
        ],
        comment: "Requires testing",
      },
      {
        name: "Container",
        statuses: [
          { platform: "Figma", status: "🧪" },
          { platform: "Storybook", status: "🔨" },
          { platform: "Guidelines", status: "🧱" },
          { platform: "Docs", status: "🔭" },
          { platform: "CDN", status: "✅" },
        ],
        comment: "No comments",
      },
    ],
  },
  {
    category: "Utilities",
    components: [
      {
        name: "Spinner",
        statuses: [
          { platform: "Figma", status: "✅" },
          { platform: "Storybook", status: "🧪" },
          { platform: "Guidelines", status: "🔭" },
          { platform: "Docs", status: "🔨" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "Ready for production",
      },
      {
        name: "Progress Bar",
        statuses: [
          { platform: "Figma", status: "🔨" },
          { platform: "Storybook", status: "✅" },
          { platform: "Guidelines", status: "🧪" },
          { platform: "Docs", status: "🔭" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "Documentation needs update",
      },
      {
        name: "Skeleton Loader",
        statuses: [
          { platform: "Figma", status: "🧪" },
          { platform: "Storybook", status: "🔭" },
          { platform: "Guidelines", status: "✅" },
          { platform: "Docs", status: "🔨" },
          { platform: "CDN", status: "🧱" },
        ],
        comment: "Pending final review",
      },
    ],
  },
];

export default componentStatusData;
