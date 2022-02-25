import { createTheme, WuiProvider } from "@welcome-ui/core";
import { InputText } from "@welcome-ui/input-text";
import { Box } from "@welcome-ui/box";
import { Field } from "@welcome-ui/field";
import { FC } from "react";
import { SearchIcon } from "@welcome-ui/icons.search";
import { Stack } from "@welcome-ui/stack";
const theme = createTheme();

const AppContainer: FC = ({ children }) => (
  <Box
    display="grid"
    gridTemplateRows="min-content 1fr"
    padding="xxl"
    h="100vh"
  >
    <Stack spacing="md">{children}</Stack>
  </Box>
);

const App = () => {
  return (
    <WuiProvider theme={theme}>
      <AppContainer>
        <Field label="Your dream job ?">
          <InputText
            aria-label="search for your dream job"
            icon={<SearchIcon />}
            isClearable
          />
        </Field>
      </AppContainer>
    </WuiProvider>
  );
};

export default App;
