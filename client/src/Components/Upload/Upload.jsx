import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import axios from 'axios'
import './Upload.css'
import Help from '../ImagesAndIcones/help.mp4'

function redirector(){
  window.location.href="/"
}

export default class Upload extends Component {
  constructor(){
    super()
    this.state={
      fullName: "",
      enrollmentNo: "",
      link: ""
    }
    this.changeFullName=this.changeFullName.bind(this)
    this.changeEnrollmentNo=this.changeEnrollmentNo.bind(this)
    this.changeLink=this.changeLink.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

  changeFullName(event){
    this.setState({
      fullName: event.target.value
    })
  }
  changeEnrollmentNo(event){
    this.setState({
      enrollmentNo: event.target.value
    })
  }
  changeLink(event){
    this.setState({
      link: event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const regestred={
      fullName: this.state.fullName,
      enrollmentNo: this.state.enrollmentNo,
      link: this.state.link
    }

    axios.post('https://nita-ee2024-album-backend.onrender.com/app/link',regestred)
    .then(res=>console.log(res.data))

    this.state({
      fullName: "",
      enrollmentNo: "",
      link: ""
    })

  }

  render() {
    return (
      <div id='upload'>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
        <input type="text"
        placeholder='Full Name'
        onChange={this.changeFullName}
        value={this.state.fullName}
        class="form-control"
         />
         </div>
         <div className="form-group">
        <input type="text"
        placeholder='EnrollmentNo'
        onChange={this.changeEnrollmentNo}
        value={this.state.enrollmentNo}
        class="form-control"
         />
         </div>
         <div className="form-group">
        <input type="text"
        placeholder='Google Drive Link of Image(Only)'
        onChange={this.changeLink}
        value={this.state.link}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <input id='upload__btn' type="submit" value="Submit" onClick={redirector} class="form-control btn"/>
        </div>
        </form>
        <div id="upload__help">
          <h3>How to Upload ?</h3>
          <video controls>
           <source src={Help} type="video/mp4"/>
          </video>
        </div>
      </div>
    )
  }
}















































// import React from "react";
// import { Link } from "react-router-dom";

// let user;

// const sendUser = () => {
//   user = document.getElementById("upload__input").value;
//   document.getElementById("upload__input").value = "";
// };

// const Upload = () => {

//   const [link, setLink] = useState("");

//   return (
//     <div id="upload">
//       <label htmlFor="upload__input">
//         Upload on google drive and give link here:{" "}
//       </label>
//       <input
//         onChange={(e) => setLink(e.target.value)}
//         type="text"
//         id="upload__input"
//       />
//       <Link
//         onClick={(event) => (!link ? event.preventDefault() : null)}
//         to="/chat"
//       >
//         {" "}
//         <button onClick={sendUser} className="joinbtn">
//           Login In
//         </button>
//       </Link>
//       <div id="upload__howToUpload">
//         <h1>How to upload</h1>
//         <video src=""></video>
//       </div>
//     </div>
//   );
// };

// export default Upload;


// import React from 'react'

// const Upload = () => {
//   return (
//     <div>
//       upload
//     </div>
//   )
// }

// export default Upload


// import React, { Component } from 'react'

// export default class Upload extends Component {
//   render() {
//     return (
//       <div>
//         Upload
//       </div>
//     )
//   }
// }
