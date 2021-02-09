import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import "../../utils/css/projects-styles.scss"

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
    <div className="projects-page">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {edges.map(({ node }) => (
          <div className="projects-block" key={node.id} href={node.url}>
            <div className="projects-name-description">
              <h4>{node.name}</h4>
              <p>{node.description}</p>
            </div>
            <div className="projects-fork-star-lang">
              <div className="projects-stats">
                <div className="projects-star">
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div className="projects-fork">
                  <span>{node.forkCount}</span>
                </div>
              </div>
              <div className="projects-stats">
                <div className="projects-lang">
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
        ))}
      </div>
    </div>
  );
};
