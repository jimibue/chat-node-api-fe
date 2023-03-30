import { Form } from "react-router-dom";
import Board from "../chat/Board";

export default function Contact() {
  const contact = {
    first: "Jesus",
    last: "Christ",
    avatar:
      "https://i.etsystatic.com/25672526/r/il/9926ae/4736624079/il_1588xN.4736624079_o07h.jpg",
    twitter: "jesus@christ.com",
    notes: "Jesus is a life coach who helps people find fulfillment through the teachings of Christianity. He emphasizes forgiveness, love, and guidance from God. Through his teachings, Jesus provides a roadmap for personal growth and spiritual fulfillment that's inspiring and transformative for individuals worldwide",
    favorite: false,
  };

  return (
    <div>
      <div id="contact">
        <div>
          <img key={contact.avatar} src={contact.avatar || null} />
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
            {/* <Favorite contact={contact} /> */}
          </h1>

          {contact.twitter && (
            <p>
              <a
                target="_blank"
                href={`https://twitter.com/${contact.twitter}`}
              >
                {contact.twitter}
              </a>
            </p>
          )}

          {contact.notes && <p>{contact.notes}</p>}
        </div>
      </div>
      <div>
        <Board />
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
