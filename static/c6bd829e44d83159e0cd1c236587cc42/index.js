import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";

import TeamMember from "../modules/teamMember";
import {teamMembers} from "../datas/team-members";
import {projects} from "../datas/projects";
import {sponsors} from "../datas/sponsors";
import {presentations} from "../datas/schedule";
import ProjectLogo from "../components/project-logo";
import Presentation from "../modules/presentation";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";

const IndexPage = () => {
  return (
    <main>
        <Helmet>
            <title>The Modular Summit</title>
        </Helmet>
        <section className={'header-section'}>
            <div className={'container'}>
                <div className={'row justify-content-end'}>
                    <div className={'col-auto'}>
                        <div className={'row justify-content-end'}>
                            <div className={'col-auto pe-2 pe-md-5'}>
                                <a href="/#schedule">Schedule</a>
                            </div>
                            <div className={'col-auto'}>
                                <a href="/#speakers">Speakers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={'hero-section mt-5 pb-5'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12 col-lg-8 col-xl-6 hero-text'}>
                        <h1>The Modular Summit</h1>
                        <div className={'subtitle'}>
                            Envision the modular future with us.
                        </div>
                        <div className={'hosted'}>
                            Hosted by Maven 11 and Celestia
                        </div>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <div className={'time-box'}>
                                    <div className={'row'}>
                                        <div className={'col-12 time'}>
                                            Thu, April 21, 2022  <span>•</span>  9:00 AM – 5:00 PM CEST
                                        </div>
                                    </div>
                                    <div className={'row justify-content-between align-items-center'}>
                                        <div className={'col-12 col-md-auto'}>
                                            Het Sieraad BV., Amsterdam<br/>
                                            1 Postjesweg<br/>
                                            1057 DT Amsterdam<br/>
                                            Netherlands
                                        </div>
                                        <div className={'col-12 col-md-auto pt-4 pt-md-0'}>
                                            <div className={'row justify-content-center justify-content-md-end'}>
                                                <div className={'col-auto'}>
                                                    <a href="https://www.eventbrite.com/e/modular-summit-tickets-301616973487" target={'_blank'} rel={'noreferrer'}>
                                                        <button className={'button-simple'}>Register</button>
                                                    </a>
                                                </div>
                                                <div className={'col-auto px-0'}>
                                                    <a href="https://goo.gl/maps/ivRUyv2ctvrHtUbq6" target={'_blank'} rel={'noreferrer'}>
                                                        <button className={'map-button'} aria-label={'Map'}></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 col-lg-4 col-xl-6'}>
                        <div className={'hero-image'}>
                            <StaticImage src={'../images/modular-summit.svg'}
                                         alt={'The Modular Summit'}
                                         width={616}
                                         height={584}
                                         placeholder="blurred"
                                         quality={90}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className={'sponsors-section pt-5 pb-5'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h4 className={'text-center text-sm-start'}>Sponsors</h4>
                    </div>
                </div>
                <div className={'row align-items-center'}>
                    {sponsors.map((project,index) => {
                            return (
                                <div className={'col col-12 col-sm-6 col-md-3 text-center py-4 px-md-4'} key={index}>
                                    <ProjectLogo alt={project.name} filename={project.image}/>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>



        <section className={'speakers-section pt-5'} id={'speakers'}>
            <div className={'container'}>
                <h2 className={'with-decor'}>Speakers</h2>

                <div className={'row team-members justify-content-center'}>
                    {teamMembers.map((member,index) => {
                        return (
                            <div className={'col col-6 col-md-4 col-lg-3 col-xl-2 text-center'} key={index}>
                                <TeamMember member={member}/>
                            </div>
                        )
                    }
                    )}
                    <div className={'clear'}/>
                </div>
            </div>
        </section>

        <section className={'schedule-section pb-5'} id={'schedule'}>
            <div className={'container'}>
                <div className={'row justify-content-between align-items-center'}>
                    <div className={'col-auto'}>
                        <h2 className={'with-decor'}>Schedule</h2>
                    </div>

                      <div className={'col-12 col-sm-auto pt-4 pt-sm-0'}>
                        <a href="https://youtu.be/35_rr8Vf-4k" target={'_blank'}>
                          <button className={'button-simple w-100'}>
                            Watch Livestream
                          </button>
                        </a>
                      </div>


                </div>

                <div className={'row mt-5'}>
                    {presentations.map((presentation,index) => {
                            return (
                                <div className={'col-12'} key={index}>
                                    <Presentation index={index} presentation={presentation}/>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>

        <section className={'projects-section py-5'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h4>Featured projects</h4>
                    </div>
                </div>

                <div className={'row mt-2 align-items-center'}>
                    {projects.map((project,index) => {
                            return (
                                <div className={'col-6 col-sm-4 col-md-3 col-lg-2 text-center p-4'} key={index}>
                                    <ProjectLogo alt={project.name} filename={project.image}/>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>


        <Footer/>
    </main>
  )
}

export default IndexPage
