import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

import ArticleCard from '../components/ArticleCard';

const Header = styled.h1`
  ${tw`font-mono text-6xl text-center`}
  color: var(--color-text);
`;

const ArticleList = ({ articleList, t }) => {
  return (
    <>
      <Header>Articles</Header>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.5 } } }}
      >
        <div css={tw`flex flex-wrap justify-around mx-4 mt-4`}>
          {articleList.map((article, i) => (
            <ArticleCard key={i} data={article} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ArticleList;
