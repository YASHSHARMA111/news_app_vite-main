import React from 'react';
import styles from './NewsCard.module.css';
import moment from 'moment';

const NewsCard = ({ title, description, time, imgSource, author, channel }) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p className={styles.newsTime}>
                    {moment.parseZone(time).utc().fromNow()}
                </p>
                <p className={styles.newsTitle}>{title?.substring(0, 30)}...</p>
                <p className={styles.newsDesc}>
                    {description?.substring(0, 60)}...
                </p>
                <p className={styles.newsAuthor}>
                    <span>{author}</span> &#9864; {channel}
                </p>
            </div>
            <div className={styles.right}>
                <img src={imgSource} alt='' />
            </div>
        </div>
    );
};

export default NewsCard;
