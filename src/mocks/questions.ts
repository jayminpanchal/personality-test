import { Question } from "../types/question";

export const Questions: Question[] = [
  {
    id: 1,
    question:
      "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    options: [
      "Don’t dare to interrupt them",
      "Think it’s more important to give them some of your time; work can wait",
      "Listen, but with only with half an ear",
      "Interrupt and explain that you are really busy at the moment",
    ],
    introvertAnswers: [0, 1],
    extrovertAnswers: [2, 3],
  },
  {
    id: 2,
    question:
      "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
    options: [
      "Look at your watch every two minutes",
      "Bubble with inner anger, but keep quiet",
      "Explain to other equally impatient people in the room that the doctor is always running late",
      "Complain in a loud voice, while tapping your foot impatiently",
    ],
    introvertAnswers: [0, 1],
    extrovertAnswers: [2, 3],
  },
  {
    id: 3,
    question:
      "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
    options: [
      "Don’t dare contradict them",
      "Think that they are obviously right",
      "Defend your own point of view, tooth and nail",
      "Continuously interrupt your colleague",
    ],
    introvertAnswers: [0, 1],
    extrovertAnswers: [2, 3],
  },
  {
    id: 4,
    question: "You are taking part in a guided tour of a museum. You:",
    options: [
      "Are a bit too far towards the back so don’t really hear what the guide is saying",
      "Follow the group without question",
      "Make sure that everyone is able to hear properly",
      "Are right up the front, adding your own comments in a loud voice",
    ],
    introvertAnswers: [0, 1],
    extrovertAnswers: [2, 3],
  },
  {
    id: 5,
    question:
      "During dinner parties at your home, you have a hard time with people who:",
    options: [
      "Ask you to tell a story in front of everyone else",
      "Talk privately between themselves",
      "Hang around you all evening",
      "Always drag the conversation back to themselves",
    ],
    introvertAnswers: [0, 1],
    extrovertAnswers: [2, 3],
  },
];
