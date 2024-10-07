import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useMemo } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const dataQuery = graphql`
query AllProjects {
    allProjectsJson(
        filter: {
            subtitle: {ne: null}
            image: {
                absolutePath:{ne: null}
            }
        })
    {
        nodes {
            name
            subtitle
            size
            modules
            capacity
            annual
            year
            description
            filter
            image {
                absolutePath
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
      className="w-full h-full absolute inset-0 object-cover"
      imgClassName="w-full h-full"
    />
  );

const Projects = () => {
    const sourceData = useStaticQuery(dataQuery)
    const projectsNodes = sourceData.allProjectsJson.nodes

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
            { size: "lg:w-1/3 xl:w-1/4", value: 1 },   // Value 1 represents 1/4 of the row
            { size: "lg:w-2/3 xl:w-2/4", value: 2 },   // Value 2 represents 2/4 of the row
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

    const _onClick = (e) => {
        e.preventDefault()
        return false
    }

    return (
        <>
            <div className="flex gap-4 flex-wrap flex-row px-4 lg:px-8">
                <a href="javascript:;" className={`border rounded-md border-gray-400 px-4 py-1 ${filter === 'all' ? 'active border-orange bg-orange text-white' : ''}`} active={filter === 'all'} onClick={() => setFilter('all')}>Alle</a>
                <a href="javascript:;" className={`border rounded-md border-gray-400 px-4 py-1 ${filter === 'dachanlage' ? 'active border-orange bg-orange text-white' : ''}`} active={filter === 'dachanlage'} onClick={() => setFilter('dachanlage')}>Dachanlagen</a>
                <a href="javascript:;" className={`border rounded-md border-gray-400 px-4 py-1 ${filter === 'freilandanlage' ? 'active border-orange bg-orange text-white' : ''}`} active={filter === 'freilandanlage'} onClick={() => setFilter('freilandanlage')}>Freilandanlagen</a>
            </div>
            <div id="projects" className="flex flex-wrap flex-row px-2 lg:px-4">
                {projects.map(function(project, index) {
                    return (
                        project.filtered === true ? (
                            <div key={index} className={`w-full ${project.size} p-2 lg:p-4`} data-aos="fade-up">
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
                        ) : ''
                    )
                })}
            </div>
        </>
    )
}
export default Projects