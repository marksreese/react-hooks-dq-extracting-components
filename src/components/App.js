import React from "react";
import { messages, contacts } from "../data";
import MainDisplay from "./MainDisplay";
import ContactList from "./ContactList";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactList contacts={contacts}/>
      <MainDisplay messages={messages}/>
    </div>
  );
}

export default App;