import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TopicPage from './components/TopicPage/TopicPage';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/article/:article_id' element={<Article/>} />
        <Route path='/topics/:topic' element={<TopicPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
