import React from "react"
import CountUp from 'react-countup'

export default function Counter({ data }) {
  return (
    <div class="relative z-10 mx-auto max-w-4xl flex flex-wrap justify-around text-white text-center">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0 pb-4 lg:pb-0 border-b lg:border-0 border-orange">
            <div className="text-6xl font-bold pb-2 lg:pb-10 mb-0 lg:mb-6 lg:border-b border-orange">
                <CountUp
                    end={251}
                    separator=" "
                    delay={1}
                    decimals={0}
                    decimal=","
                />
            </div>
            <div className="text-md">
                Anlagen wurden gebaut
            </div>
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0 pb-4 lg:pb-0 border-b lg:border-0 border-orange">
            <div className="text-6xl font-bold pb-2 lg:pb-10 mb-0 lg:mb-6 lg:border-b border-orange">
                <CountUp
                    end={95682}
                    separator=" "
                    delay={1}
                    decimals={0}
                    decimal=","
                />
            </div>
            <div className="text-md">
                kWp produziert
            </div>
        </div>
        {/* <div className="w-full lg:w-1/4 mb-6 lg:mb-0 pb-4 lg:pb-0">
            <div className="text-6xl font-bold pb-2 lg:pb-10 mb-0 lg:mb-6 lg:border-b border-orange">
                <CountUp
                    end={48}
                    separator=" "
                    delay={1}
                    decimals={0}
                    decimal=","
                />
            </div>
            <div className="text-md">
                Zufriedene Kunden
            </div>
        </div> */}
    </div>
  )
}
