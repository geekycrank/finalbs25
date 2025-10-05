import React from "react";
import "./Desktop.css";
import JamImage from "../assets/JAM.png";
import MicrotaleImage from "../assets/MICROTALE.png";
import PoemImage from "../assets/POEM.png";
import ShipwreckImage from "../assets/SHIPWRECK.png";
import DebateImage from "../assets/DEBATE.png";
import mm from "../assets/Dosthana.png";
import QuizImage from "../assets/QUIZ.png";
import PuzzleCrosswordImage from "../assets/PUZZLECROSSWORD.png";
import UnoMinutoImage from "../assets/UNO-MINUTO.png";
import AdzapImage from "../assets/ADZAP.png";
import DramaImage from "../assets/DRAMA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Desktop() {
  const events = [
    {
      link: "/event1",
      contact: "9123576842",
      prize: "2250",
      img: AdzapImage,
      title: "Adzap",
      description:
        "Unleash your wildest imagination in the Crazy Product Pitch! Dream up the most absurd inventions—slippers that scream with every step, a chair that vanishes when you sit, or toothpaste that glows brighter than a neon sign. The rules are simple: the crazier, the better. Perform your pitch, entertain the crowd, and prove that nonsense can be genius in disguise!",
    },
    {
      link: "/event2",
      contact: " 7418908013",
      prize: "1500",
      img: DebateImage,
      title: "Debate",
      description:
        "Sharpen your wit and warm up those vocal cords—it's time to argue for glory! Step into the arena of ideas in our spirited Debate competition. Engage in a battle of brains that's as entertaining as it is enlightening!",
    },
    {
      link: "/event3",
      contact: "6385698553",
      prize: "3750",
      img: DramaImage,
      title: "Drama",
      description:
        "Step into a world where stories come alive and emotions take center stage!!! Drama isn’t just an act it’s an experience. It’s your chance to transform to express and to connect with the audience in ways that words alone can’t. Every gesture, every line, every pause holds the power to move hearts and minds. So take the leap embrace the spotlight and let your performance speak louder than words. The curtain is rising will you rise with it?​",
    },
    {
      link: "/event4",
      contact: "7540009703",
      prize: "2250",
      img: mm,
      title: "Mates Mania",
      description:
        "The Arcane Challenge is all about fun, laughter, and friendship! Enjoy a series of light games and quirky tasks with your buddies—no stress, just pure chill vibes.",
    },
    {
      link: "/event5",
      contact: "9778117278",
      prize: "1500",
      img: JamImage,
      title: "Jam",
      description:
        "Just A Minute (JAM) is an exhilarating event that challenges participants to speak spontaneously on a given topic for one minute. This fast-paced competition tests quick thinking, creativity, and communication skills under pressure.",
    },
    {
      link: "/event6",
      contact: "8667721591",
      prize: "1500",
      img: MicrotaleImage,
      title: "Microtale",
      description:
        "With Embark on a literary journey of brevity and depth at our Microtale event! With just a few words, weave stories that linger in minds and hearts. Join us for poetic magic where the tiniest tales hold the mightiest power by unleashing your creativity and crafting miniature worlds where every letter counts.",
    },
    {
      link: "/event7",
      contact: "7540009703",
      prize: "1500",
      img: PoemImage,
      title: "Poem",
      description:
        "Step Let your words dance with emotions and paint vivid pictures through poetry! This event is a stage for your imagination, where creativity meets expression, and every verse tells a story straight from the heart. a realm where words dance with imagery. The participants will be given a picture about which they have to write a poem entitled with a fitting topic.",
    },
    {
      link: "/event8",
      contact: "8248581965",
      prize: "2250",
      img: PuzzleCrosswordImage,
      title: "Puzzle",
      description:
        "Embark on a mystical journey at our Magical Puzzle Quest! Unravel enchanting brainteasers and test your magical prowess. From cryptic spells to intricate potions, decipher mysteries that only the keenest minds can master. to twist your mind and challenge your thinking! From cryptic riddles to intricate puzzles, every challenge will test your logic and wit.",
    },
    {
      link: "/event9",
      contact: "6379190226",
      prize: "2250",
      img: QuizImage,
      title: "Quiz",
      description:
        "Get ready A battle of brains and speed, where knowledge is your only weapon and wit is your shield. From facts to challenges, every question is a wave to ride or a storm to survive. Team up, think sharp, and prove you have what it takes to outsmart the rest. The quest for the ultimate quiz champion begins here! a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion.",
    },
    {
      link: "/event10",
      contact: "9629762581",
      prize: "1500",
      img: ShipwreckImage,
      title: "Shipwreck",
      description:
        "A tempest Your ship is sinking, and there’s only one life jacket left. But you’re not yourself — you’ve become someone else: Narendra Modi, Shinchan or even Iron Man! Your mission? Step into your assigned character and convince the captain you deserve the life jacket. It’s not about strength — it’s about wit, humour, drama, and persuasion. wit and humour, where you're a crewmate on a sinking ship with one life jacket. Convince the captain to save you!",
    },
    {
      link: "/event11",
      contact: " 8610480703",
      prize: "1500",
      img: UnoMinutoImage,
      title: "Uno Minuto",
      description:
        "The stage Are you a person who can stun the observer with your electrifying performance? Then, this is for you! The stage is all yours for those 60 seconds. May it be any talent that makes you unique, may it be anything. Come on, people! Indulge us in astonishment with your stunning talents! The stage awaits. all yours for 60 seconds! Show any talent that makes you unique—sing, act, dance, or amaze us with something unexpected.",
    },
  ];

  return (
    
    
    <div className="desktop-container">
      <br/>
      {events.map((event, index) => (

        <div className="event-card" key={index}>
          <div className="event-image">
            <img src={event.img} alt={event.title} />
          </div>

          <div className="event-content">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-desc">{event.description}</p>

            <div className="event-footer">
              <span className="event-contact">
                <FontAwesomeIcon icon={faPhone} /> {event.contact}
              </span>
              <span className="event-prize">Prize Pool: ₹{event.prize}</span>
              <a href={event.link} className="discover-btn">
                Discover More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Desktop;
