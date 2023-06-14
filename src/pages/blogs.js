import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Seo from '../components/seo';
// import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

const BlogList = ({ data }) => {
    const { allContentfulBlogs } = data;

    return (
        <Layout>
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Latest Blogs</h1>
                {allContentfulBlogs.edges.map(({ node }) => (
                    <div key={node.id} className="mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                            <Link to={`/blog/${node.slug}`} className="hover:underline">
                                {node.title}
                            </Link>
                        </h2>
                        <p className="text-gray-500">{node.publishedDate}</p>
                        {/* <p>{node.content.raw.substring(0, 150)}...</p> */}
                        <p>{renderRichText(node.content)}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export const query = graphql`
  query Blogpage {
   allContentfulBlogs(sort: {publishedDate: DESC}) {
      edges {
        node {
          id
          slug
          publishedDate(formatString: "MMMM DD, YYYY")
          title
          content {
            raw
          }
        }
      }
    }
  }
`;

export default BlogList;


export const Head = ({ location, params, data, pageContext }) => (
    <>
        <Seo title={"semua blog yang ada "} />
    </>
)