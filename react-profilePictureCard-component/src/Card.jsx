import profilePic from './assets/profilePic.jpg';

function Card(){

    return (
        <div className="card">
            <img src={profilePic} alt="codeBOLT profile picture" className='card-image'/>
            <h2 className='card-title'>codeBOLT</h2>
            <p className='card-text'>I am a Full-Stack Web Developer.</p>

        </div>
    );
}
export default Card