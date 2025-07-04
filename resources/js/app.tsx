import "../css/app.css";
import { Providers } from "@/components/providers";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";
import { initializeTheme } from "./hooks/use-theme";
import { Ziggy } from "@/ziggy";
import { useRoute } from "ziggy-js";
import { ThemeProvider } from "./providers/theme-provider";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => (title ? `${title} / ${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob("./pages/**/*.tsx")
    ),
  setup({ el, App, props }) {
    // @ts-expect-error
    window.route = useRoute(Ziggy);

    const appElement = (
      <ThemeProvider>
        <App {...props} />
      </ThemeProvider>
    );
    if (import.meta.env.SSR) {
      hydrateRoot(el, appElement);
      return;
    }

    createRoot(el).render(appElement);
  },
  progress: false,
});

initializeTheme();
