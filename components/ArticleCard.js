import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tw from 'twin.macro';

import CardBody from '../molecules/CardBody';
import Pill from '../atoms/Pill';

const Card = styled.div`
  ${tw`mx-2 mb-4 overflow-hidden bg-white shadow-lg`};
  ${props => (props.rounded ? tw`rounded` : ``)};
`;

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export default ({ data }) => {
  const { id, title, description, imgUrl, imgAlt, tags } = data;
  return (
    <motion.div
      variants={postVariants}
      css={tw`w-full max-w-sm sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4`}
    >
      <Card rounded>
        <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
          <img css={tw`w-full`} src={imgUrl} alt={imgAlt} />
        </motion.div>
        <CardBody title={title} description={description}></CardBody>
        <div css={tw`px-6 py-4`}>
          {tags.map((tag, i) => (
            <Pill key={i} text={`#${tag}`}></Pill>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
