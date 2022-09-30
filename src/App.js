import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import theme from './assets/theme'
import SignIn from './screens/sign-in';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <SignIn/>
    </ThemeProvider>
  );
}

export default App;
