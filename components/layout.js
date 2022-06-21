// Default page layout
import Head from "next/head"

export default function Layout({title, children, theme, ...props}){
    return <div>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Header/> */}
        <main>
            {children}
        </main>
        {/* <Footer/> */}
    </div>
}