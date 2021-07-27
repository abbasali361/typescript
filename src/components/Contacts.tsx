import { notEqual } from 'assert';
import React, { useState } from 'react';
import Contact from './Contact';

interface IContact{
    name: string,
    email: string
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contactList, setContactList] = useState<IContact[]>([])

  

    const onClick = () =>{
        setContactList([ ...contactList, contact])
        setContact({
            name: "",
            email: ""
        })
    }
    const onChange=(e: React.ChangeEvent<HTMLInputElement>)=> {
        setContact({ ...contact, [e.target.name]: e.target.value})
    }
const handleRemove = (email: string) => {
    const newContactList = contactList.filter(c => c.email !== email)
    setContactList(newContactList)
}

    console.log("contactList", contactList);
    return (
        <div>
            <h1>contact list</h1>
            <div className="form">
                <input 
                    value={contact.name}
                    onChange={onChange}
                    type="text" 
                    name="name" 
                    placeholder="Contact Name" 
                />
                <input 
                    value={contact.email}
                    onChange={onChange}
                    type="email" 
                    name="email" 
                    placeholder="Contact Email" 
                />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((con) =><Contact key={con.name} name={con.name} handleRemove={handleRemove} />)
            }
            
            {/* <Contact name="Abbas Ali" email="alabbashossain@gmail.com" /> */}
        </div>
    );
};

export default Contacts;