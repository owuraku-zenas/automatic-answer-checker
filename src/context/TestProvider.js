import { createContext, useState } from "react";


const TestContext = createContext({})


export const TestProvider = ({ children }) => {
    const [questions, setQuestions] = useState({});

    return (
        <TestContext.Provider value={{questions, setQuestions}}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContext;