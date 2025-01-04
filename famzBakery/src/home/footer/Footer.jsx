import React from 'react'
import './footer.css'
export default function Footer() {
    const dateYear = new Date().getFullYear();
    return (
        <div className='footer-container'>
            <div className="top-footer">
                <div className="top-one">
                    <h2>FamzBakery</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quidem amet quod enim beatae. Corrupti!</p>
                    <div className="socials">
                        <i className='bx bxl-facebook-circle'></i>
                        <i className='bx bxl-linkedin-square'></i>
                        <i className='bx bxl-twitter' ></i>
                        <i className='bx bxl-instagram-alt' ></i>
                    </div>
                </div>
                <div className="top-two">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <i className='bx bxs-map'></i>
                            <p>3512 W. Gray St. Lusia Pennysylvania 57867</p>
                        </li>
                        <li>
                            <i className='bx bxs-phone'></i>
                            <p>(702) 555-0122, (902) 365-0872</p>
                        </li>
                        <li>
                            <i className='bx bxs-envelope'></i>
                            <p>famzbakery@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className="top-three">
                    <h4>Photos on Instagram</h4>
                    <div className="photos">
                        <img src="assets/Classic-Sourdough.jpg" alt="Classic-Sourdough" />
                        <img src="assets/Chocolate-Babka.jpg" alt="Chocolate-Babka" />
                        <img src="assets/Olive-Rosemary-Loaf.jpg" alt="Olive-Rosemary-Loaf" />
                        <img src="assets/Sourdough-Loaf-image.jpg" alt="Sourdough-Loaf" />
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="bottom-text">
                    <h4>Enter your Email to get our</h4>
                    <p>Recipe of the day</p>
                    <p>Copyright &copy; {dateYear}</p>
                </div>
                <div className="bottom-form">
                    <form action="">
                        <input type="email" placeholder='Enter your email' name="email" id="email" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
