import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import { Provider } from 'react-redux'
import React from 'react'
import { StylesProvider } from '@mui/styles'
import { Homepage } from './components/views/Homepage/Homepage'
import { MainLayout } from './components/layout/MainLayout/MainLayout'
import { NotFound } from './components/views/NotFound/NotFound'
import { Post } from './components/views/Post/Post'
import { PostAdd } from './components/views/PostAdd/PostAdd'
import { PostEdit } from './components/views/PostEdit/PostEdit'
import { store } from './redux/store'

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/post/add" element={<PostAdd />} />
                <Route exact path="/post/:id" element={<Post />} />
                <Route exact path="/post/:id/edit" element={<PostEdit />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  )
}

export { App }
