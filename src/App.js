import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/article/:article_id' element={<Article/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
