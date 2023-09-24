import { MainLayout } from '@/components/layout';

import { NextPageWithLayout } from '../models';

import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="text-base font-semibold leading-7 text-red-500">Home page</h1>
      </div>
    </div>
  );
};

export default Home;
