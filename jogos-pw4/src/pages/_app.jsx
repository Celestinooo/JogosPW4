import GlobalStyles from '../styles/global';
import StylesReset from '../styles/reset';
import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component }) {
    return (
        <>
            <Head>
                <title>Jogos PW4</title>
				<meta name="title" content="Jogos PW4" />
				<meta name="description" content="Trabalho de PW4" />
                <html lang='pt-BR' />
            </Head>
            <StylesReset/>
            <GlobalStyles/>
            <Navbar />
            <Component />
        </>
    );
}

export default MyApp