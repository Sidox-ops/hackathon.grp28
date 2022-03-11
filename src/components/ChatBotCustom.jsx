import { Box } from "@chakra-ui/react";
import React from "react";
import ChatBot from "react-simple-chatbot";

export default function ChatBotCustom() {
  //TODO: import steps from db firebase
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "4",
    },
    {
      id: "4",
      message: "What can I do for you?",
      trigger: "5",
    },
    {
      id: "5",
      options: [
        { value: 1, label: "Contact someone", trigger: "6" },
        { value: 3, label: "Nothing, you\r useless", trigger: "8" },
      ],
    },
    {
      id: "6",
      message:
        "Ok, you can contact us by wiredbeauty@gmail.com or TODO: MAKE SENDER EMAIL HERE",
      trigger: "7",
    },
    {
      id: "7",
      message: "Something else?",
      trigger: "5",
    },
    {
      id: "8",
      message: "Not cool man, i'm out. Bye.",
      end: true,
    },
  ];

  return (
    <Box position="fixed" bottom="10px" right="10px" color="black">
      <ChatBot
        floating
        headerTitle="Speech Recognition"
        // for speech with voice
        // speechSynthesis={{ enable: true, lang: "fr" }}
        recognitionEnable={true}
        steps={steps}
      />
    </Box>
  );
}
