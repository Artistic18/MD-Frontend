import React from 'react'
import '../styles/About.css'

function AboutPage() {
    return (
        <div>
            <h2 className='about-title'>About Me</h2>
            <div className='aboutContainer'>
                <div className='about-text'>
                <span>Name: Hrishit Prasad Biswas</span><br/>
                <span>Roll: 1829152</span><br/>
                <span>Github Profile: <a href='https://github.com/Artistic18'>https://github.com/Artistic18</a></span><br/>
                <span>Skills: Javascript,NodeJS,React,Redux,C,C++,Java,MongoDB,Express,SQL,Docker,Heroku</span><br/><br/><br/>
                <span>Projects:</span><br/>
                <span>1. Cadenza-Discord Bot</span><br/>
                <span>2. Sudoku Solver using OpenCV</span><br/>
                <span>3. React Todo-List</span><br/>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
