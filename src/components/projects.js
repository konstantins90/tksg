import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const dataQuery = graphql`
query Projects {
    allProjectsJson(
        limit: 13,
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
const Image = ({ image, name }) => (
    <GatsbyImage
      image={getImage(image)}
      alt={name}
      placeholder="blurred"
      layout="constrained"
      width={700}
      imgStyle={{ 'object-position': 'right center' }}
      objectFit="cover"
      className="w-full h-full lg:absolute inset-0 object-cover"
      imgClassName="w-full h-full"
    />
  );
const Projects = () => {
    const sourceData = useStaticQuery(dataQuery)
    const projectsNodes = sourceData.allProjectsJson.nodes.
        sort(() => Math.random() - 0.5)
        .slice(0, 11)

    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsNodes);
    }, []);

    useEffect(() => {
        setProjects([]);
        const filteredProjects = projectsNodes.map(p => ({ ...p, filtered: p.filter.includes(filter) }));
        setProjects(assignProjectSizes(filteredProjects));
    }, [filter]);

    // Helper function to randomly assign size while ensuring a row total equals 4
    const assignProjectSizes = (projects) => {
        const sizeOptions = [
            { size: "lg:w-1/3 xl:w-1/4", value: 1 },
            { size: "lg:w-2/3 xl:w-2/4", value: 2 },
        ];

        let newProjects = [];
        let rowSize = 0;

        projects.forEach(project => {
            if (project.filtered === true) {
                // Choose a random size for the project
                let randomSize = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];

                // If adding the project size exceeds 4, start a new row
                if (rowSize + randomSize.value > 4) {
                    randomSize = sizeOptions[0];
                }

                // Add project with its random size
                newProjects.push({ ...project, size: randomSize.size });

                // Increment rowSize
                rowSize += randomSize.value;

                console.log(randomSize.value, rowSize);

                if (rowSize == 4) {
                    rowSize = 0;
                }
            }
        });

        return newProjects;
    };

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