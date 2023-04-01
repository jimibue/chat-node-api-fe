import { useParams } from "react-router-dom";
import Board from "../chat/Board";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../providers/ChatProvider";

export default function Contact() {
  const id = parseInt(useParams().id||1);
  const {contacts} = useContext(ChatContext)
  const [contact,setContact] = useState({})
  useEffect(() => {
     const c = contacts.find(c=>c.id === id);
     setContact(c)
  }, [id])
  
  return (
    <div>
      <div id="contact">
        <div>
          <img alt='user img' key={contact.imgSrc} src={contact.imgSrc || null} />
        </div>

        <div style={{flex:1}}>
          <h1>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
          </h1>

          {/* {contact.twitter && (
            <p>
              <a
                target="_blank"
                rel='noreferrer'
                href={`https://twitter.com/${contact.twitter}`}
              >
                about
              </a>
            </p>
          )} */}

          {contact.system && <p className='hide-mobile'>{contact.system}</p>}
        </div>
      </div>
      <div>
        <Board contact={contact} />
      </div>
    </div>
  );
}

// function Favorite({ contact }) {
//   // yes, this is a `let` for later
//   let favorite = contact.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }
