import React, { useContext, useState } from 'react';
import { NewsContext } from '../../App';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import NewsCard from '../../components/NewsCard';
import News from '../News/News';
import styles from './Home.module.css';
import { MdTravelExplore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const news = useContext(NewsContext);
    const navigate = useNavigate();

    const categories = ['All', 'Android', 'Cricket', 'iPhone', 'Google'];
    const [categoryIndex, setCategoryIndex] = useState(0);

    return (
        <div className={styles.mainContainer}>
            <Navbar />
            <button
                className={styles.exploreButton}
                onClick={() => {
                    navigate('/news');
                }}
            >
                <MdTravelExplore className='text-2xl' />
                Explore
            </button>
            <div>
                <div className='slider'>
                    <table>
                        <thead>
                            {news.map((item, i) => (
                                <td key={i}>
                                    <Card
                                        author={item.author}
                                        channel={item.source.name}
                                        time={item.publishedAt}
                                        description={item.description}
                                        title={item.content}
                                        img={item.urlToImage}
                                        id={i}
                                    />
                                </td>
                            ))}
                        </thead>
                    </table>
                </div>

                <div className={styles.newsContainer}>
                    <h1 className={styles.heading}>Top Stories for you</h1>
                    <div className={styles.newsCategories}>
                        {categories.map((item, i) => (
                            <span
                                className={`${
                                    categoryIndex === i && styles.active
                                }`}
                                onClick={() => {
                                    setCategoryIndex(i);
                                }}
                                key={i}
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <div>
                        {news.map((item, i) => (
                            <NewsCard
                                author={item.author}
                                channel={item.source.name}
                                time={item.publishedAt}
                                description={item.content}
                                title={item.description}
                                imgSource={item.urlToImage}
                                id={i}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
