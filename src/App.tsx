import 'src/css/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthCheckProvider } from 'src/components/providers/AuthCheckprovider';
import { GlobalProvider } from 'src/components/providers/Globalprovider';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from "src/components/ui/layouts/Footer";
import { Header } from "src/components/ui/layouts/Header";
import { Routers } from 'src/route/Routers';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthCheckProvider>
        <GlobalProvider>
          <BrowserRouter>
            <div className='App'>
              <Header />
              <Routers />
              <Footer />
            </div>
          </BrowserRouter>
        </GlobalProvider>
      </AuthCheckProvider>
    </QueryClientProvider>
  );
};

export default App;