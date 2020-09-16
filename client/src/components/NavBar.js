import React from "react"
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <Link to="/dashboard" className="nav-link">
                        <span className="link-text logo-text">FUT Record</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                    className="fa-secondary"
                                />
                                <path
                                    fill="currentColor"
                                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                    className="fa-primary"
                                />
                            </g>
                        </svg>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/dashboard/weekends" className="nav-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="calendar"
                            className="svg-inline--fa fa-calendar fa-w-14"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M217.512,396.141c3.751,3.751,8.838,5.858,14.143,5.858c5.305,0,10.392-2.107,14.143-5.857l90-90
    c7.81-7.81,7.81-20.474,0-28.285c-7.811-7.81-20.475-7.81-28.287,0l-75.857,75.858l-27.168-27.169
    c-7.811-7.812-20.474-7.811-28.284-0.001c-7.811,7.81-7.812,20.473-0.001,28.284L217.512,396.141z"
                                className="fa-primary"
                            />
                            <path
                                fill="currentColor"
                                d="M492,72h-96V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v52H156V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v52
    H20C8.954,72,0,80.954,0,92v400c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20V92C512,80.954,503.046,72,492,72z M472,472
    H40V202h432V472z M472,162H40v-50h432V162z"
                                className="fa-secondary"
                            />
                        </svg>
                        <span className="link-text">Weekends</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/dashboard/analysis" className="nav-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chart-line"
                            className="svg-inline--fa fa-chart-line fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M506.35,80.699c-7.57-7.589-19.834-7.609-27.43-0.052L331.662,227.31l-42.557-42.557c-7.577-7.57-19.846-7.577-27.423,0
          L89.076,357.36c-7.577,7.57-7.577,19.853,0,27.423c3.782,3.788,8.747,5.682,13.712,5.682c4.958,0,9.93-1.894,13.711-5.682
          l158.895-158.888l42.531,42.524c7.57,7.57,19.808,7.577,27.397,0.032l160.97-160.323
          C513.881,100.571,513.907,88.288,506.35,80.699z"
                                className="fa-primary"
                            />
                            <path
                                fill="currentColor"
                                d="M491.96,449.94H38.788V42.667c0-10.712-8.682-19.394-19.394-19.394S0,31.955,0,42.667v426.667
			c0,10.712,8.682,19.394,19.394,19.394H491.96c10.712,0,19.394-8.682,19.394-19.394C511.354,458.622,502.672,449.94,491.96,449.94z
			"
                                className="fa-secondary"
                            />
                            <path
                                fill="currentColor"
                                d="M492.606,74.344H347.152c-10.712,0-19.394,8.682-19.394,19.394s8.682,19.394,19.394,19.394h126.061v126.067
			c0,10.705,8.682,19.394,19.394,19.394S512,249.904,512,239.192V93.738C512,83.026,503.318,74.344,492.606,74.344z"
                                className="fa-primary"
                            />
                        </svg>
                        <span className="link-text">Analysis</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="sign-out-alt"
                            className="svg-inline--fa fa-sign-out-alt fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M255.15,468.625H63.787c-11.737,0-21.262-9.526-21.262-21.262V64.638c0-11.737,9.526-21.262,21.262-21.262H255.15
      c11.758,0,21.262-9.504,21.262-21.262S266.908,0.85,255.15,0.85H63.787C28.619,0.85,0,29.47,0,64.638v382.724
      c0,35.168,28.619,63.787,63.787,63.787H255.15c11.758,0,21.262-9.504,21.262-21.262
      C276.412,478.129,266.908,468.625,255.15,468.625z"
                                className="fa-primary"
                            />
                            <path
                                fill="currentColor"
                                d="M505.664,240.861L376.388,113.286c-8.335-8.25-21.815-8.143-30.065,0.213s-8.165,21.815,0.213,30.065l92.385,91.173
      H191.362c-11.758,0-21.262,9.504-21.262,21.262c0,11.758,9.504,21.263,21.262,21.263h247.559l-92.385,91.173
      c-8.377,8.25-8.441,21.709-0.213,30.065c4.167,4.21,9.653,6.336,15.139,6.336c5.401,0,10.801-2.041,14.926-6.124l129.276-127.575
      c4.04-3.997,6.336-9.441,6.336-15.139C512,250.302,509.725,244.88,505.664,240.861z"
                                className="fa-secondary"
                            />
                        </svg>
                        <span className="link-text">Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar