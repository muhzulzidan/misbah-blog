import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
// import { renderRichText } from 'gatsby-source-contentful/p';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPostTemplate = ({ data }) => {
    const {
        contentfulBlogs: {
            // id,
            // slug,
            publishedDate,
            title,
            // contentful_id,
            featuredImage,
            content,
        },
    } = data;

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
        },
        renderNode: {
            [INLINES.HYPERLINK]: (node, children) => {
                const { uri } = node.data;
                return (
                    <a href={uri} className="underline">
                        {children}
                    </a>
                );
            },
            [BLOCKS.HEADING_2]: (node, children) => {
                return <h2>{children}</h2>;
            },
        },
    };


    const image = getImage(featuredImage);
  

    return (
        <Layout>

            <article className="prose max-w-screen-lg mx-auto px-4">
                <div className="flex items-center justify-between gap-4 mb-8 ">
                    
                    <div className="">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            {title}
                        </h1>
                        <p className="text-gray-500 text-sm">{publishedDate}</p>
                    </div>
                    {image && (
                        <div className="w-2/12 justify-end flex">
                            <GatsbyImage image={image} alt={title} className="h-auto rounded-lg" />
                        </div>
                    )}
                </div>
                <hr className="border-gray-300 mb-8" />
                <section>
                   
                    <div>{renderRichText(content, options)}</div>
                </section>
            </article>
        </Layout>

    );
};

export default BlogPostTemplate;

export const Head = ({ location, params, data, pageContext }) => (
    <>
        {/* {console.log(data.contentfulBlogs)}
        {console.log(data.contentfulBlogs.content)}
        {console.log(data.contentfulBlogs.content.raw)}
        {console.log(renderRichText(data.contentfulBlogs.content))}
        {console.log(documentToPlainTextString(data.contentfulBlogs.content.raw))} */}
        <Seo title={data.contentfulBlogs.title} description={documentToPlainTextString(JSON.parse(data.contentfulBlogs.content.raw))}/>
    </>
)

export const query = graphql`
  query BlogPosts ($id: String!) {
    contentfulBlogs(id: { eq: $id }) {
      id
      slug
      publishedDate(formatString: "MMMM DD, YYYY")
      title
      contentful_id
      featuredImage {
        gatsbyImageData(layout: CONSTRAINED, width: 600, height: 400)
    }
      content {
        raw
      }
    }
  }
`;
