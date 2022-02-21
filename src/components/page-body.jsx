import React from "react";
import './page-body-style.css'
import computerimg from '../images/illustration-devices.svg'
function pageBody(){
    const btnLink = document.querySelector('.pvd')

    btnLink.addEventListener('click',(event)=>{
        event.preventDefault()
        
    })
    return(
        <>
            <section>
                <div className="page-body-container">
                    <div className="page-body-content">
                        <div className="page-body-left-side">
                            <div className="text-area">
                                <div className="text-item-1">
                                    <p className="new">new</p>
                                    <p className="monograph">Monograph Dashboard</p>
                                </div>
                                <div className="text-item-2">
                                    <h1>Powerful insights into your team</h1>
                                </div>
                                <div className="text-item-3">
                                    <p>Project planning and time tracking for agile teams</p>
                                </div>
                                <div className="text-item-4">
                                    <div className="btn-link">
                                        <a className="pvd" href="#">Schedule a demo</a>
                                    </div>
                                    <p>to see a live preview</p>
                                </div>
                            </div>
                        </div>
                        <div className="page-body-right-side">
                            <div className="computer-img">
                                <img src={computerimg} alt="" />
                            </div>
                            <div className="bg-color"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default pageBody