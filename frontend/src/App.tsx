import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import { dimensions, renderThumb } from "./style";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Scrollbars
      style={dimensions}
      renderThumbVertical={renderThumb}
    >
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Scrollbars>
  );
};

export default App;
