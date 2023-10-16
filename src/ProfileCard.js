import './ProfileCard.css'
function ProfileCard({title, content ,image ,username}){
    return(
    <div className='card'>
        <div className='cardImage'>
          <img src={image} alt="image"/>
        </div>
        <div className='content'>
           <div>{title}</div>
           <h3>{username}</h3>
           <div>{content}</div>
        </div>
    </div>
)
}

export default ProfileCard;