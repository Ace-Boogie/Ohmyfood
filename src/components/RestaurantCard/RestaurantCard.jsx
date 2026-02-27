import Image from 'next/image';
import Link from 'next/link';
import styles from './RestaurantCard.module.css';
import LikeButton from "../LikeButton/LikeButton";

export default function RestaurantCard({name, image, location, slug, isNew}) {

    return (
        <article className={`${styles.card} ${isNew ? styles.labelNew : ""}`}>
            <Link href={`/restaurant/${slug}`} className={styles.infoLink}>
            </Link>
            <Image
                src={image}
                alt={`Photo du restaurant ${name}`}
                width={3000}
                height={2000}
                quality={90}
                preload={true}
                className={styles.image}
            />
            <div className={styles.mainContent}>
                <div className={styles.textContent}>
                    <h3>{name}</h3>
                    <p>{location}</p>
                </div>

                <LikeButton slug={slug}/>
            </div>
        </article>
    );
}

