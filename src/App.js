import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import theme from './assets/theme'
import SignIn from './screens/sign-in';
import { Navigate, Route, Routes } from 'react-router-dom';

import routes from "./routes";


function App() {

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes>
        {getRoutes(routes)}
        <Route path="/authentication/sign-in" elements={<SignIn/>}/>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
