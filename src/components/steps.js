import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const dataQuery = graphql`
query Steps {
    allStepsJson {
        nodes {
            number
            title
            description
        }
    }
}
`

const Steps = () => {
    const sourceData = useStaticQuery(dataQuery)
    const steps = sourceData.allStepsJson.nodes

    return (
        <div id="steps" className="flex flex-wrap mt-16 flex-row -mx-8">
            {steps.map(function(step, index) {
                return (
                    <div className={ "step w-full lg:w-1/2 px-8 py-4 " + step.class + " step-" + step.number }>
                        <div className="flex items-center">
                            <div className="flex-none w-16 step-number text-6xl font-light text-gray-400">
                                { step.number }
                            </div>
                            <div className="step-title text-xl font-bold">
                                { step.title }
                            </div>
                        </div>
                        <div className="flex">
                            <div className="step-line flex-none w-16 py-4">
                                <div className="line"></div>
                            </div>
                            <div className="step-description text-xl pb-10">{ step.description }</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Steps