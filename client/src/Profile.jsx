import React , {useState} from "react";
function Profile(){
    const [isEditing , setIsEditing] = useState(false)
    const [profile , setProfile] = useState("")
    // function editProfile(){
    //     setIsEditing = true
    // }
    function handleChange(e){
        names = e.target
    }

    return(
        <div>
            {isEditing?(
                  <form action="">
            <label htmlFor="img">select image</label>
            <img src={imgSrc} alt="select pic"  onChange={handleChange} value={profile.img} aria-required/>
            <label htmlFor="name">choose name</label>
            <input type="text" onChange={handleChange} value={profile.name} />
            <button type="submit" onClick={handleClick}>save</button>
            </form>
            ):(
                <>
                 <img src="src/assets/hero.png" alt="profile pic" />
            <p>this is name</p>
          
            <input type="button" value="edit" onClick={()=>setIsEditing(true)} />
            </>
            )}
            
          
            
           
            
           
        </div>
    )
};
export default Profile;