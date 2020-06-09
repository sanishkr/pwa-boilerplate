import React, { Component } from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  actionCreators as PostsActionsCreators,
  selectors,
} from '../store/posts';
import Header from '../components/Header';

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center min-h-screen text-xl`};
  margin: 10px;
`;

class Page1 extends Component {
  static async getInitialProps({ store, isServer, query, res }) {
    const params = { id: 1 };
    await Promise.all([
      store.dispatch(PostsActionsCreators.getOnePost(params)),
    ]);
    return { ...isServer };
  }
  componentDidMount = () => {
    this.props.getPosts();
    // this.props.getOnePost({ id: 1 });
  };
  render() {
    return (
      <>
        <Header></Header>
        <div css={tw`text-center`}>
          <Container>
            Hello World!!
            <p css={tw`mx-20 mt-8`}>
              I'm using <code>NextJS</code>, <code>TailwindCSS</code>,{' '}
              <code>framer-motion</code> and <code>styled-components</code>{' '}
              together in `{process.env.NODE_ENV}` Env.
            </p>
          </Container>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPosts: PostsActionsCreators.getPosts,
      // getOnePost: PostsActionsCreators.getOnePost,
    },
    dispatch,
  );

const mapStateToProps = store => ({
  posts: selectors.getPosts(store),
  post: selectors.getOnePost(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
