import React from 'react';
import styles from './Card.module.css';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
const Card = ({ time, img, title, description, author, channel, id }) => {
    const navigate = useNavigate();
    const data = {
        time,
        img,
        title,
        description,
        author,
        channel,
    };

    return (
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <img src={img} alt='' />
            </div>

            <div className={styles.description}>
                <div className={styles.newsHeader}>
                    <span>Business</span>
                    <BsFillBookmarkFill className='text-[#ffffffac]' />
                </div>
                <div>
                    <p className={styles.newsTime}>
                        {moment.parseZone(time).utc().fromNow()}
                    </p>
                    <p className={styles.newsTitle}>
                        {title?.substring(0, 20)}
                    </p>
                    <p className={styles.newsDesc}>{description}</p>
                    <p className={styles.newsAuthor}>
                        {author} &#9864; {channel}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
