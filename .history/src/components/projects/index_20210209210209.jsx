import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <div>
      <h2>Projects</h2>
      <div>
        {edges.map(({ node }) => (
          <div key={node.id} href={node.url}>
            <div>
              <div>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </div>
              <div>
                <div>
                  <div>
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <span>{node.forkCount}</span>
                  </div>
                </div>
                <div>
                  <div>
                    {
                      node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
