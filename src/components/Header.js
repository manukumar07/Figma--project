import React from 'react'

const Header = () => {
  return (
    <>
     <header>
      <div class="container">
         <div class="top">
            <div class="top-header">
               <div class="top-left">
                  <h1>Training <span>Blog</span></h1>
               </div>     
               <div class="top-right">
                  <img class="profile" src="image/profile.png" alt="profile_img"/>
                  <span>Manu Kumar Pal</span>
                  {/* <img class="Arrow" src="image/Arrow.jpg" alt="Arrow_img"/><br/>   */}
               </div>
            </div>
         </div>
         <div class="bottom">
            <div class="bottom-left">
               <tittle>Filters</tittle>
               </div>
               <span>Created by:</span>

                <select>
                  <option value="Manu"> Manu </option>
                  <option value="Manu Kumar"> Manu Kumar </option>
                  <option value="Manu Pal"> Manu</option>
                  <option value="Pal"> Pal </option>
               </select> 
               <div>
               <span><label>Published Date:</label></span><br/> 
               <span><input type="date"/></span>
               </div>
            <div class="bottom-right">
              <label>Search..</label><br/>
              <input type="textbox" placeholder="Search here.."/>
              <i class="fa-solid fa-magnifying-glass search"></i>
              </div>
         </div>  
         </div>  
      </header>

    </>
  )
}

export default Header
