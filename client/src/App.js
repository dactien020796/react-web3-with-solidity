import { Navbar, Services, Transactions, Welcome } from './components';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>

      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
