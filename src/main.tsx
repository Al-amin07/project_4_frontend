
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import routes from './routes/index.tsx'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'
// import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <RouterProvider router={routes} />
      <Toaster />
    </PersistGate>
  </Provider>

)
