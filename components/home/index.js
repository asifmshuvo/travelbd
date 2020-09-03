import { useState } from 'react';
import { PostCarousel } from 'components/custom';
import { TabNavigator } from 'components/layout/nav-components/TabNavigator';
import AllArticles from './AllArticles';

const Home = () => {
    const [tabMenu, setTabMenu] = useState('')

    return (
        <>
            <PostCarousel />
            <TabNavigator setTabMenu={setTabMenu} />
            <AllArticles tabMenu={tabMenu} />
        </>
    )
}

export default Home;
