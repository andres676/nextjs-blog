import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({ allPostsData }){
return(
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>      
      <p>Hello, I'm Andrés Ramos. I'm a web developer. Want to implement your business on the Web, you can contact me <a href='https://andres676.github.io/cv-andres/' target={'_blank'}>here</a></p>
      <p>
        (This is a sample website - you'll be buildding a site like this on {' '}
        <a href='https://nextjs.org/learn' target={'_blank'}>our Next.js tutorial</a>.) 
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title })=>(
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>            
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);
}

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props:{
      allPostsData,
    },
  };
}