import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (<>
    <Layout>

        <Head>
            <title>First Post</title>
        </Head>

        <h1>First Page</h1>

        <h2>
            <Link href={'/'}>Go back home</Link>
        </h2>
    </Layout>
    </>)

}