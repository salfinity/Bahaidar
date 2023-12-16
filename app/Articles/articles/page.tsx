import ArticleHeader from '../ArticleHeader';
import Articles from './Articles';
import Main from './Main';

export default function Home() {
    return (
        <main className="flex relative flex-col mx-auto items-center px-4 py-32 snap-y snap-mandatory">
            <ArticleHeader />
            <Main />
            <Articles />
        </main>
    );
}
