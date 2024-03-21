import SideNavBar from "../../Components/SideNavBar/Sidebar";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function About () {
    return (
        <div className="flex">
            <SideNavBar />
            <div className="about text-black ml-64 w-7/12">
                <h1 className="text-5xl font-mono font-bold mb-8">About</h1>
                <p className="text-lg font-mono leading-relaxed">Tasklist is a web application that helps you to focus on your goals. The main point of application is to help you reach your goals by
                forcing you to add tasks that will help you reach your goals.
                
                </p>
                <p className="text-lg leading-relaxed font-mono mt-8">Feel free to contact me via social media</p>
                <div className="social-media-link">
                    <a href="https://github.com/KostLinux">
                        <FontAwesomeIcon icon={faGithub} className="text-black mr-4 h-16 mt-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/christofher-kost-04b9791a2/">
                        <FontAwesomeIcon icon={faLinkedin} className="text-black mr-4 h-16 mt-8" />
                    </a>
                    <a href="https://kostlinux.github.io/Portfolio/">
                        <FontAwesomeIcon icon={faBriefcase} className="text-black h-16 mt-8" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;