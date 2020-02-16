/** @jsx jsx */
import { jsx, Button, useColorMode } from "theme-ui";

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Button
      variant="icon"
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
    >
      !
    </Button>
  );
};
