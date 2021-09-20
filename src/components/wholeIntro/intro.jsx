import React from "react";

import Photo from "../photo/photo";
import './backs.css'
import './media.css'


const Background = () => {

    return (
        <div className='background'>
            {/* <nav> <Menu /></nav> */}
            <div className="container">
                <aside className='part-left'>
                    <section className='left-me'>
                        <Photo />
                    </section>
                    <section className='left-contacts'>
                        <h2 className='contacts-name'>CONTACTS</h2>
                        <div className='contact-link'>
                           <div><a href="http://github.com/bykowstanislaw"> <img src='/images/пр.png' alt='no' className='icon'></img></a></div>
                            <a className="cl" href="http://github.com/bykowstanislaw" target="_">github.com/bykowstanislaw</a>

                        </div>
                        <div className='contact-link'>
                            <div><a href="http://linkedin.com/bykowstanislaw"><img src='/images/link.png' alt='no' className='icon'></img></a></div>
                            <a className="cl" href='http://linkedin.com/bykowstanislaw' target="_">linkedin.com/bykowstanislaw</a>
                        </div>
                        <div className='contact-link'>
                            <div><a href="http://t.me/stanislawxd"><img src='/images/tg.png' alt='no' className='icon'></img></a></div>
                            <a className="cl" href='http://t.me/stanislawxd' target="_new">t.me/stanislawxd</a>

                        </div>
                    </section>
                    <section className='left-skills'>
                        <h2 className='skills-name'>SKILLS</h2>
                        <div className='skill-name'>

                            <h4 className='it techno'>HTML</h4>
                            <div className='quan-stars'>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                            </div>
                        </div>
                        <div className='skill-name'>

                            <h4 className='it techno'>CSS</h4>
                            <div className='quan-stars'>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                            </div>
                        </div> <div className='skill-name'>

                            <h4 className='it techno'>JavaScript</h4>
                            <div className='quan-stars'>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>

                            </div>
                        </div> <div className='skill-name'>

                            <h4 className='it techno'>ReactJS</h4>
                            <div className='quan-stars'>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>

                            </div>
                        </div>
                        <div className='skill-name'>

                            <h4 className='it techno'>Git</h4>
                            <div className='quan-stars'>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                                <div><img src='/images/golden.png' alt='no' className='star'></img></div>
                            </div>
                        </div>
                    </section>
                </aside>
                <div className='cv-info'>
                    <section><div className='df'>
                        <div className='cv-name'>STANISLAU BYKAU</div>

                    </div>
                        <div className="grey">Front-end developer</div>
                    
                    </section>

                    <section className='branches'>
                        <h2 className='branch-name'>ABOUT</h2>
                        <div>I like to study and learn something new. I like to read books, do physical education, listen to music of different genres. I'm fond of good cars and bikes. I lead active and healhy lifestyle. I like to work and see the results of my work.
                            Since childhood, I have had a predisposition to work with electronics and computers. I like to disassemble, assemble and configure something. I can build, configure, solve problems with computers.    </div>
                    </section>
                    <section className='edu'>
                        <h2 className='branch-name'>EDUCATION</h2>
                        <h3>MINSK STATE LINGUISTIC UNVERSITY</h3><span className='it'>2018-2022</span>
                        <div className=''>Interpretor.Intercultural Communication Specialist</div>

                        <h3>TeachMeSkills</h3><span className='it'>2021</span>
                        <div className=''>Front-end Developer</div>
                    </section>
                    <section className='lang' id="lang">
                        <h2 className='branch-name'>MY LANGUAGE SKILLS</h2>
                        <div className='lang-block'>
                            <div className='lang-tittle'><img className='flag' src="/images/rus.png" alt="no" /><h3 className='language'>RUSSIAN</h3></div>
                            <div>I speak Russian since birth. I consider my language skills to be close to perfect. I read a lot of literature in Russian.</div>
                        </div>
                        <div className='lang-block'>
                            <div className='lang-tittle'><img className='flag' src="/images/en.png" alt="no" /><h3 className='language'>ENGLISH(B1+)</h3></div>
                            <div>Started learning English at an early age. I really liked learning the language, so I entered the MSLU</div>
                        </div>
                        <div className='lang-block'>
                            <div className='lang-tittle'><img className='flag' src="/images/spain.png" alt="no" /><h3 className='language'>SPANISH(A1+)</h3></div>
                            <div>I am learning Spanish without much desire, but in the process of learning the language seemed very beautiful.</div>
                        </div>



                    </section>

                    <section className="works" id="myworks">
                        <h2 className="branch-name">MY WORKS</h2>
                        <div>
                            <h3 className='workname'>Museum website</h3>
                            <div className='stack'><span className="stack-tech">HTML</span><span className="stack-tech">CSS </span></div>
                            <a href="https://bykowstanislaw.github.io/theatre_tms/">  <img className="works-prescreen" src="/images/museun.PNG" alt='xd'></img></a>
                        </div>
                        <div>
                            <h3 className='workname'>My web application for e-commerce</h3>
                            <div className='stack'><span className="stack-tech">HTML</span><span className="stack-tech">CSS </span><span className="stack-tech">JS</span><span className="stack-tech">ReactJS</span><span className="stack-tech">Firebase</span></div>
                            <img className="works-prescreen" src="/images/pizza.PNG" alt='xd'></img>
                        </div>
                        <div>
                            <h3 className='workname'>Web-application for searching a github user</h3>
                            <div className='stack'><span className="stack-tech">HTML</span><span className="stack-tech">CSS </span><span className="stack-tech">JS</span><span className="stack-tech">ReactJS</span></div>
                            <a href="https://test-paralect.vercel.app/" target="_"> <img className="works-prescreen" src="/images/api.PNG" alt='xd'></img></a>
                        </div>

                    </section>

                <footer className="info">
                 <div className="info__rs">
                     <div className='rs-school'><a href="https://rs.school/js/"> <img className='rs-school' src="/images/rs_school_js.svg" alt='k3k'></img></a></div>
                     <div>2021</div>
                    <div > <a href="https://github.com/bykowstanislaw"><img className="info__gh" src="/images/пр.png" alt="k3k"></img></a></div> 
                </div>  
                </footer>
                </div>

            </div>
        </div>
    )
}

export default Background