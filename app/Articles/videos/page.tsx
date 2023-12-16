import TransitionEffect from '../TransitionEffect';
import Main from './Main';

export default function Home() {
    return (
        <>
            <TransitionEffect />
            <main className="flex relative flex-col items-center px-4 snap-y snap-mandatory">
                <Main />
            </main>
        </>
    );
}
