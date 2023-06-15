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
            <div className="max-w-screen-lg mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Latest Blogs</h1>
                {allContentfulBlogs.edges.map(({ node }) => (
                  <div key={node.id} className="mb-6 border border-stone-400  hover:shadow-md p-4 rounded-lg">
                      <Link to={`/blog/${node.slug}`} className="">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                            
                                {node.title}
                        </h2>
                        <p className="text-gray-500">{node.tanggal}</p>
                        {/* <p>{node.content.raw.substring(0, 150)}...</p> */}
                        <p>{renderRichText(node.content)}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export const query = graphql`
  query Blogpage {
   allContentfulBlogs(sort: {tanggal: DESC}) {
      edges {
        node {
          id
          slug
          tanggal(formatString: "MMMM DD, YYYY")
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