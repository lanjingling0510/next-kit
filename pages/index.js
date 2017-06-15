import Head from 'next/head';
import Byline from '../components/Byline';
import Preview from '../components/preview';

export default () => (
  <div className="container">
    <Head>
      <title>博客</title>
    </Head>
    <div>
      <h1 className="title">博客</h1>
      <Byline author="Rainie" />
    </div>
    <amp-img
      src="/static/programmer.svg"
      width="800"
      height="450"
      heights="(min-width:900px) 500px, 80%"
      layout="responsive"
      alt="programmer"
    />

    <Preview
      title="移动端web缓存，优化第二次访问速度"
      subtitle="发表于 2017-02-20   |   分类于 移动端优化 ， webpack   |  "
      image="../static/cat.jpg"
      src="/cat"
    />
    <Preview
      title="移动端web缓存，优化第二次访问速度"
      subtitle="发表于 2017-02-20   |   分类于 移动端优化 ， webpack   |  "
      image="../static/cat.jpg"
      src="/cat"
    />
    <Preview
      title="移动端web缓存，优化第二次访问速度"
      subtitle="发表于 2017-02-20   |   分类于 移动端优化 ， webpack   |  "
      image="../static/cat.jpg"
      src="/cat"
    />
  </div>
);
