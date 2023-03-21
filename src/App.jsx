import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import News from './pages/News/News';

export const NewsContext = createContext();

const data = [
    {
        time: '10 hours ago',
        title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur magni`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illum ea error dolor at a ducimus suscipit facilis
        deleniti, labore earum fugiat et assumenda id est cum
        rerum eum atque debitis quidem! Culpa iusto molestias,
        qui esse officia ut accusamus modi natus distinctio
        aliquam alias tenetur, libero adipisci amet est sequi.`,
        author: 'Preetika Rana',
        imgSource:
            'https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg',
        channel: 'The wall street journal',
    },
];

export default function App() {
    const [news, setNews] = useState(null);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(
                'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9d7d939b9b0b4c5eb2488752dbfa1ec9'
            );
            setNews(data.articles);
        })();
    }, []);

    if (!news) {
        return 'loading..';
    }
    return (
        <NewsContext.Provider value={news}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/news' element={<News />} />
                </Routes>
            </BrowserRouter>
        </NewsContext.Provider>
    );
}
