import Image from 'next/image';
import tatayjibe from '../../public/tatayjibe.png';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.imageContainer}>
      <Image src={tatayjibe} alt="tatayjibe cover photo" layout="fill" />;
    </div>
  );
}
