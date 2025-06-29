import { useTheme } from "@/providers/theme-provider";
import { IconMoon, IconSun } from "@intentui/icons";
import { Button } from "./ui/button";

interface Props {
  appearance?: "plain" | "outline";
}

export function ThemeSwitcher({ appearance = "plain" }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className="font-bold dark:text-teal-300 text-2xl"
      intent={appearance}
      size="square-petite"
      aria-label="Switch theme"
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IconSun className="transition-all scale-100 rotate-0  dark:scale-0 dark:-rotate-90 h-[1.2rem] w-[1.2rem]" />
      <IconMoon className="absolute transition-all scale-0  rotate-90 dark:scale-100 dark:rotate-0 h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
