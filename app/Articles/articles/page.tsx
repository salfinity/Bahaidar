import ArticleHeader from '../ArticleHeader';
import Articles from './Articles';
import Main from './Main';

export default function Home() {
    return (
        <main className="flex relative flex-col items-center px-4 snap-y snap-mandatory">
            <ArticleHeader />
            <Main />
            <Articles />
        </main>
    );
}
