import React,{Component} from 'react';
class Sidebar extends Component{
    render(){
        return(
           <div className="main-sidebar-container">
               <div className="side-nav">
<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-brush" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.213 1.018a.572.572 0 0 1 .756.05.57.57 0 0 1 .057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z"/>
  <path d="M7 12a2 2 0 0 1-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 0 1 2 2z"/>
</svg>
 </div>
  
 <div className="side-nav">
 <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-calculator" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/>
</svg>
 </div>
  
 <div className="side-nav">
 <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-camera" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
  <path fill-rule="evenodd" d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
  <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
 </svg>
 </div>

 <div className="side-nav">
   <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-basket2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.111 7.186A.5.5 0 0 1 1.5 7h13a.5.5 0 0 1 .489.605l-1.5 7A.5.5 0 0 1 13 15H3a.5.5 0 0 1-.489-.395l-1.5-7a.5.5 0 0 1 .1-.42zM2.118 8l1.286 6h9.192l1.286-6H2.118z"/>
  <path fill-rule="evenodd" d="M11.314 1.036a.5.5 0 0 1 .65.278l2 5a.5.5 0 1 1-.928.372l-2-5a.5.5 0 0 1 .278-.65zm-6.628 0a.5.5 0 0 0-.65.278l-2 5a.5.5 0 1 0 .928.372l2-5a.5.5 0 0 0-.278-.65z"/>
  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zM0 6.5A.5.5 0 0 1 .5 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1z"/>
</svg>
 </div>

 <div className="side-nav">
 <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-bicycle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935 2.375 3.8a.5.5 0 1 1-.848.53L10.5 6.943l-2.076 3.322A.5.5 0 0 1 8 10.5H3a.5.5 0 0 1-.424-.765L5 5.857V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443L3.902 9.5h3.196L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057z"/>
</svg>
 </div>

  </div>

        )
    }
}
export default Sidebar;