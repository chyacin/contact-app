import React from "react";
import  './Contact.css';

const name = "Calvin";
const avatar = "https://observer.com/wp-content/uploads/sites/2/2020/11/Screen-Shot-2020-11-19-at-10.24.58-AM.png?resize=768,489";
const online = true;

function Contact() {
  return (
    <div className='Contact'>
      <img className='avatar' src={avatar} alt="avatar"/>
      <div>
        <div className='status'>
          <h3 className='name'>{name}</h3>
          <div className={online ? 'status-online' : 'status-offline'} />
          <p className='status-text'>{online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

