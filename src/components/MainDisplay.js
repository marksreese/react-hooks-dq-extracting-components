import React from "react"
import Contact from "./Contact"

function ContactList({contacts}) {
    const contactListItems = contacts.map(contact => 
        <Contact key={contact.id} name={contact.name}/>
    )
  return (
    <nav>
      <h2>Contacts</h2>
      <ul className="contacts">
        {contactListItems}
      </ul>
    </nav>
  );
}

export default ContactList;
