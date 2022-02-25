import { createTheme, WuiProvider } from "@welcome-ui/core";
import { Button } from "@welcome-ui/button";

const theme = createTheme();

const App = () => {
  return (
    <WuiProvider theme={theme}>
      <div className="App" role="main">
        Welcome <Button variant="primary">Primary</Button>
      </div>
    </WuiProvider>
  );
};

export default App;
