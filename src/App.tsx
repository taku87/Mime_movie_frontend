import './css/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthCheckProvider } from 'components/providers/AuthCheckprovider';
import { GlobalProvider } from 'components/providers/Globalprovider';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { Routers } from 'route/Routers';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthCheckProvider>
        <GlobalProvider>
          <BrowserRouter>
              <Header />
              <Routers />
              <Footer />
          </BrowserRouter>
        </GlobalProvider>
      </AuthCheckProvider>
    </QueryClientProvider>
  );
};

export default App;
