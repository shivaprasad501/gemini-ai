import { createContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AppContext = createContext(null);
const API_KEY = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const AppContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [messages, setMessages] = useState([]); 
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [prevPrompts, setPrevPrompts] = useState([]);
  const newchat=()=>{
    setLoading(false)
    if (messages.length > 0) {
    setPrevPrompts(prev => [...prev, messages[0].text]);
  }
    setMessages([])
 }

  const onsent = async (prompt = input) => {
    if (!prompt.trim()) return;

    
    // Append user message
    setMessages((prev) => [...prev, { role: "user", text: prompt }]);
    setInput(""); // Clear input
    setLoading(true);

    try {
      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        }))
      });      
      const response = await chat.sendMessage(prompt);
      const aiResponse = response.response.text();
      console.log(aiResponse)
      let responseArray=aiResponse.split("**")
        let newResponse = "";
        for(let i=0;i<responseArray.length;i++){
            if(i===0 ||i%2!==1){
                newResponse +=responseArray[i]
            }else{
                newResponse+="<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2=newResponse.split("*").join("</br>")

        setMessages(prev => [...prev, { role: "model", text: "" }]);

        let newResponseArray = newResponse2.split(" ");
        let typedText = "";

        newResponseArray.forEach((word, index) => {
            setTimeout(() => {
                typedText += word + " ";
                setMessages(prev => {
                    const updatedMessages = [...prev];
                    
                    //  the latest AI response is updated
                    let lastIndex = updatedMessages.length - 1;
                    if (updatedMessages[lastIndex]?.role === "model") {
                        updatedMessages[lastIndex].text = typedText;
                    }
                    
                    return updatedMessages;
                });
            }, 75 * index);
        });

    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };


  const value = { toggle, setToggle,onsent, input, setInput, messages, loading,newchat,prevPrompts };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
