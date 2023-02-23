import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { Usersection } from './components/usersection/Usersection';

const baseUrl = 'http://localhost:3005/api/'

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/api/users/')
            .then(res => res.json())
            .then(result =>
                setUsers(result.users))
    }, [])


    return (
        <div className="App">

            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <Usersection users={users} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
