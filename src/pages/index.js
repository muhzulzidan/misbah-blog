import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Seo from '../components/seo';
// import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  const { allContentfulBlogs } = data;

  return (
    <Layout className="bg-gray-100 text-stone-950">
      <div className="max-w-screen-lg mx-auto">
        <header className="py-32 text-start">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-950 mb-4">Misbah Blog</h1>
          <p className="text-lg md:text-xl text-stone-800">
            Selamat Datang ke blog saya, saya membagikan ilmu hidup yang mungkin butuh di dengar oleh anak muda
          </p>
        </header>
        <main className=''>
          <h3 className='mb-4 text-xl font-bold'>Featured Post :</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {allContentfulBlogs.edges.map(({ node }) => {
              const { slug, title, tanggal, featuredImage } = node;
              const image = getImage(featuredImage);

              return (
                <div key={node.id}>
                  <Link to={`/blog/${slug}`} className='lg:flex bg-stone-50 rounded-lg shadow-sm transition duration-300 hover:shadow-md ' >
                  <div  className='lg:w-3/12'>
                    <GatsbyImage image={image} alt={title} className="rounded-t-lg " />
                  </div>
                  <div className="p-6">
                    
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        
                          {title}
                      </h2>
                      <p className="text-gray-500 text-sm m-0">{tanggal}</p>
                      <p className="mt-4 line-clamp-3 ">{renderRichText(node.content)}</p>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </main>

      </div>
    </Layout>
  );
};

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <Seo title={"Homepage"} />
  </>
)

export const query = graphql`
  query Hompeage {
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
          featuredImage {
            gatsbyImageData(layout: CONSTRAINED, width: 600, height: 400)
          }
        }
      }
    }
  }
`;

export default IndexPage;
