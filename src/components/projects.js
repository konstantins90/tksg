import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike, StaticImage } from "gatsby-plugin-image"

const dataQuery = graphql`
query Projects {
    allProjectsJson(
        limit: 15,
        filter: {
            subtitle: {ne: null}
            name: {ne: null}
            size: {ne: null}
            image: {
                absolutePath:{ne: null}
            }
        })
    {
        nodes {
            name
            subtitle
            size
            image {
                absolutePath
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        layout: FULL_WIDTH
                        aspectRatio: 2
                        transformOptions: {cropFocus: ATTENTION}
                    )
                }
            }
        }
    }
}
`
const Image = ({ image, name }) =>
<GatsbyImage
    image={getImage(image)}
    alt={name}
    placeholder="blurred"
    layout="constrained"
    width={700}
    imgStyle={{ 'object-position': 'right center' }}
    objectFit="cover"
    class="w-full h-full absolute inset-0 object-cover"
    imgClassName="w-full h-full"
/>

const Projects = () => {
    const sourceData = useStaticQuery(dataQuery)
    const projects = sourceData.allProjectsJson.nodes

    return (
        <div id="projects" className="flex flex-wrap flex-row px-2 lg:px-4">
            {projects.map(function(project, index) {
                return (
                    <div className={ "w-full lg:w-1/3 xl:w-1/4 " + project.size + " p-2 lg:p-4" } data-aos="fade-up">
                        <div class="teaser bg-blue text-white p-8 relative h-[20rem]">
                            <div className="absolute z-10 bottom-4 left-4">
                                <h3 className="text-xl mb-1 font-bold">
                                    {project.name}
                                </h3>
                                <p className="text-sm">
                                    { project.subtitle }
                                </p>
                            </div>
                            <Image image={project.image} name={project.name} />
                            <div class="w-full h-full absolute inset-0 img-overlay"></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Projects