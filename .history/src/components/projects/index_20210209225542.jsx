import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import "../../utils/css/projects-styles.scss"
import Star from "./Star";
import Fork from "./Fork";

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
      <h2>Projects</h2>
      <div className="projects-container">
        {edges.map(({ node }) => (
          <a className="projects-block-link" key={node.id} href={node.url}>
            <div className="projects-block">
              <div className="projects-name-description">
                <div className="projects-name">{node.name}</div>
                <div className="projects-description">{node.description}</div>
              </div>
              <div className="projects-star-fork-lang">
                <div className="projects-star-fork">
                  <div>
                    <Star color="#000" />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                  <Fork color="#000" />
                    <span>{node.forkCount}</span>
                  </div>
                </div>
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
          </a>
        ))}
      </div>
    </div>
  );
};
