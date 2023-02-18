import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import Article from './components/Article/Article';
import Home from './components/Home/Home';
import TopicPage from './components/TopicPage/TopicPage';
import NotFound from './components/NotFound/NotFound';
import MenuPage from './components/MenuPage/MenuPage';
import AboutUs from './components/AboutUs/AboutUs';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/article/:article_id' element={<Article/>} />
        <Route path='/topics/:topic' element={<TopicPage/>} />
        <Route path='/menu' element={<MenuPage/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
