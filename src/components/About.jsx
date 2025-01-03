import { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from './Button.jsx'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('mattzh2022@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 scroll-mt-36" id="about">
      <p className="head-text">About Me</p>
      <div className="grid xl:grid-cols-3 mt-12 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Matthew Zhang</p>
              <p className="grid-subtext">
                I am a Junior at Stony Brook University, double majoring in Computer Science and Applied Mathematics & Statistics.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Portfolio Stack</p>
              <p className="grid-subtext">
                These are the languages, tools, and frameworks that were used in building this portfolio.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere={false}
                showGraticules={false}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">Location</p>
              <p className="grid-subtext">I am based in New York and open to relocate for opportunities nationwide.</p>
              <a href='https://docs.google.com/document/d/1DV6yt9hlgQWXbIxr-JmA9SmaM_EGNcflaz0bGmOXB88/edit?usp=sharing' target="_blank">
              <Button name="View Resume" isBeam containerClass="w-full mt-10"/>
            </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Background</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming and computer science isn&apos;t just my
                area of study—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills. I am looking for opportunities 
                in Software and AI Development!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">mattzh2022@gmail.com</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About