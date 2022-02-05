import React, {useEffect,useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions, setQuestions] = useState([])

  function handleDeleteQuestion(deletedQuestion){
    const updatedQuestions = questions.filter((question) => {
      return question.id === !deletedQuestion
    })
      setQuestions(updatedQuestions)
  }
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(questions => setQuestions(questions))
  }, [])

  const questionsToDisplay = questions.map((question) => {
    return (
      <QuestionItem 
        key={question.id} 
        question={question}
        onDeleteQuestion={handleDeleteQuestion}
        />
    )
  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
