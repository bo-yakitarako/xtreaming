import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { storage } from './utils/localStorage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const DarkContext = createContext(storage.get('dark'));
const SetDarkContext = createContext((dark: boolean) => storage.set('dark', dark));

export const DarkModeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [dark, setDark] = useState(storage.get('dark'));

  useEffect(() => {
    storage.set('dark', dark);
  }, [dark]);

  const theme = createTheme({
    palette: { mode: dark ? 'dark' : 'light' },
  });

  return (
    <DarkContext.Provider value={dark}>
      <SetDarkContext.Provider value={setDark}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </SetDarkContext.Provider>
    </DarkContext.Provider>
  );
};

export const useDark = () => useContext(DarkContext);
export const useSetDark = () => useContext(SetDarkContext);
