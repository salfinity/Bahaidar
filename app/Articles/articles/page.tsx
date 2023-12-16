'use client';

import ArticleHeader from '../ArticleHeader';
import DropArticle from '../DropArticle';
import TransitionEffect from '../TransitionEffect';
import Articles from './Articles';
import Main from './Main';

export default function Home() {
    return (
        <>
            <TransitionEffect />
            <main className="flex relative flex-col mx-auto items-center px-4 py-32 snap-y snap-mandatory">
                <ArticleHeader />
                <Main />
                <Articles />
                <DropArticle />
            </main>
        </>
    );
}
