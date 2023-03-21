import React, { useContext } from 'react';
import styles from './News.module.css';
import { BsFillBookmarkFill, BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { NewsContext } from '../../App';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const News = () => {
    const navigate = useNavigate();
    const news = useContext(NewsContext);

    return (
        <div className={styles.listContainer}>
            {news.map((item) => {
                const {
                    author,
                    publishedAt,
                    description,
                    content,
                    urlToImage,
                } = item;
                return (
                    <div className={styles.container}>
                        <div className={styles.imgWrapper}>
                            <img src={urlToImage} alt='' />
                        </div>
                        <div className={styles.description}>
                            <div className={styles.header}>
                                <div>
                                    <BsArrowLeftShort
                                        className='text-2xl text-white'
                                        onClick={() => {
                                            navigate('/');
                                        }}
                                    />
                                    <span>Sports</span>
                                </div>
                                <BsFillBookmarkFill className='text-pink-500' />
                            </div>
                            <div className={styles.news}>
                                <p className={styles.newsTime}>
                                    {moment
                                        .parseZone(publishedAt)
                                        .utc()
                                        .fromNow()}
                                </p>
                                <p className={styles.newsTitle}>
                                    {description}
                                </p>
                                <p className={styles.newsDesc}>{content}</p>
                                <p className={styles.newsAuthor}>
                                    <span>{author}</span> &#9864;{' '}
                                    {item.source.name}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default News;
