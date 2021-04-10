import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // 전체 테마 메인색상 설정
      main: 'rgb(246,231,110)'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#a8c4f9'
    }
  }
});

/*
App
**********************************************************************************
전체 App의 route를 설정하는 컴포넌트 입니다.
**********************************************************************************
 */
export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter />
    </ThemeProvider>
  );
}
