
import './App.css';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { Usersection } from './components/usersection/Usersection';

function App() {



    return (
        <div className="App">

            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <Usersection />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
