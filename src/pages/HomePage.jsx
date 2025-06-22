import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div>
            <Header/>
            <center>
                <img src="\public\Images\college-banner.png" alt="vck logo"width="1000"/>
                <h1>Welcome To Vivekanand College!</h1>
                <p>Your journey to excellence starts here</p>
            </center>
                    <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped</p>
                    <h2>Why Choose Vivekanand College?</h2>
                    <hr/>
                        <ul>
                            <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
                            <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                            <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
                            <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
                            <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
                        </ul>
                    <h2>Campus Life & Facilities</h2>
                    <hr/>
                    <img src="\public\Images\vck img.jpeg" alt="Student Studying" width="400" />
                    <img src="\public\Images\VCK.jpg" alt="Campuslife" width="600"/>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                <br/>
                    <center>
                    <p>Ready to explore our courses?</p>
                    </center>
        </div>
    )
}

export default HomePage;