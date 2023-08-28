import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from './helper/context/toast_context.jsx';
import {AppContextProvider} from './helper/context/AppContext.jsx'


const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          cacheTime: 0,
          staleTime: 0,
      }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ToastProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ToastProvider>
  </QueryClientProvider>
)
