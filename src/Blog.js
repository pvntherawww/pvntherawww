import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "./components/config";
import { Header } from "./components/Components/Header";
import { Loader } from './components/Components/Common'
import { BlogContainer } from './components/Components/Blog'
import { Card } from './components/Components/Blog/Card'

// import "./Blog.css";

const GET_POSTS = gql`
{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issues(first: 100, states: OPEN, filterBy: { labels: "blog" }, orderBy: { direction: DESC, field: CREATED_AT }) {
      nodes {
        title
        body
        bodyHTML
        bodyText
        number
        labels(first: 100) {
          nodes {
            color
            name
            id
          }
        }
        author {
          url
          avatarUrl
          login
        }
        updatedAt
        id
      }
    }
  }
}
`

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error)
      }

      if (data) {
        setPosts(data?.repository?.issues?.nodes)
      }
    }
  }, [loading, error, data]);

  return (
    <>
      {/* <Header /> */}
      <BlogContainer>
        {
          loading
          ? <Loader />
          : posts.map((v, i) => {
              return <Card blog={v} key={i} />;
            })
        }
      </BlogContainer>
    </>
  );
}

export default Blog;
