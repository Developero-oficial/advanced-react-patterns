interface NavLink {
  to: string;
  label: string;
}

export const navLinks: NavLink[] = [
  {
    to: "/",
    label: "Inicio",
  },
  {
    to: "/custom-hooks",
    label: "Custom Hooks",
  },
  {
    to: "/hoc",
    label: "HOC",
  },
  {
    to: "/extensible-styles",
    label: "Extensible Styles",
  },
  {
    to: "/compound-components",
    label: "Compound components",
  },
  {
    to: "/advanced-compound-components",
    label: "Advanced Compound Components",
  },
  {
    to: "/render-props",
    label: "Render Props",
  },
  {
    to: "/coltrol-props",
    label: "Control Props",
  },
  {
    to: "/props-getters",
    label: "Props Getters",
  },
  {
    to: "/state-initializer",
    label: "State Initializer",
  },
  {
    to: "/state-reducer",
    label: "State Reducer",
  },
];
