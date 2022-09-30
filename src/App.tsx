import './css/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthCheckProvider } from 'components/providers/AuthCheckprovider';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { Routers } from 'route/Routers';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthCheckProvider>
        <BrowserRouter>
            <Header />
            <Routers />
            <Footer />
        </BrowserRouter>
      </AuthCheckProvider>
    </QueryClientProvider>
  );
};

export default App;
