'use client';
import { Card, CardFooter, CardBody, Chip, Button } from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { log } from 'util';

export default function CarrierSelector() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = useMemo(() => {
    return [
      {
        question: 'Babád súlya',
        value: 'weight',
        multiple: false,
        answers: [
          {
            label: '0-2800 g',
            value: '0-3000'
          },
          {
            label: '2800-3500 g',
            value: '2800-3500'
          },
          {
            label: '3500-4500 g',
            value: '10-15'
          },
          {
            label: '4500g-8 kg',
            value: '15-20'
          },
          {
            label: '8-15 kg',
            value: '20-25'
          },
          {
            label: '15 kg felett',
            value: '25-'
          }
        ]
      },
      {
        question: 'Babád kora',
        value: 'age',
        multiple: false,
        answers: [
          {
            label: '0-6 hét',
            value: '0-6'
          },
          {
            label: '6 hét - 2 hónap',
            value: '6-8'
          },
          {
            label: '2 hónap - 3 hónap',
            value: '6-24'
          },
          {
            label: '3 hónap - 6 hónap',
            value: '24-'
          },
          {
            label: '6 hónap - 2 év',
            value: '24-'
          },
          {
            label: '2 év felett',
            value: '24-'
          }
        ]
      }
    ]
  }, []);

  // const questionAnswers = useMemo(() => {
  //   const currentAnswers = answers[questions[currentQuestion].value];
    
  //   if (currentAnswers && currentAnswers.answers) {
  //     return currentAnswers.answers;
  //   }
  //   return [];
  // }, [answers, questions, currentQuestion]);

  const questionAnswers = () => {
    const currentAnswers = answers[questions[currentQuestion].value];
    
    if (currentAnswers && currentAnswers.answers) {
      return currentAnswers.answers;
    }
    return [];
  }

  const removeAnswer = (value) => {
    const newAnswers = questionAnswers.filter(answer => answer !== value);
    const newQuestionAnswers = {
      ...questionAnswers,
      [questions[currentQuestion].value]: {
        answers: newAnswers
      }
    }
    setAnswers(newQuestionAnswers);
  }

  const addAnswer = (value) => {
    const newAnswers = [...questionAnswers, value];
    const newQuestionAnswers = {
      ...questionAnswers,
      [questions[currentQuestion].value]: {
        answers: newAnswers
      }
    }
    setAnswers(newQuestionAnswers);
  }

  const toggleAnswer = (value) => () => {
    if (questions[currentQuestion].multiple) {
      console.log(' toggleAnswer multiple', questionAnswers());
      
      if (questionAnswers().includes(value)) {
        removeAnswer(value);
      } else {
        addAnswer(value);
      }
    } else {
      const newQuestionAnswers = {
        [questions[currentQuestion].value]: {
          answers: [value]
        }
      }
      setAnswers({ ...answers, ...newQuestionAnswers });
    }
    console.log('answers', answers);
  }

  return (
    <div className="flex flex-col items-center mt-24 sm:mt-40 px-4 
    bg-[url('/maxi_consultation_bg.png')] bg-no-repeat bg-bottom bg-cover
    [background-position-y:75rem] lg:[background-position-y:30rem]">

      <div className="max-w-[700px]">
        <div className="text-4xl sm:text-5xl font-bold text-secondary text-left mb-4
          max-w-64">
          <h1>Hordozóválasztó</h1>
        </div>
      </div>

      <div className="w-10/12 my-12 flex flex-wrap justify-center gap-8">
            <Card shadow="sm" className="drop-shadow-xl w-72 sm:w-[380px]">
              <CardBody className="overflow-visible p-0 drop-shadow-xl 
                min-h-[300px] max-h-[300px]"
              >
                {questions[currentQuestion].question}
              </CardBody>
              <CardBody>
                <div className="flex flex-wrap justify-center gap-4">
                  {questions[currentQuestion].answers.map((answer, index) => 
                    <Chip key={index} size="lg" onClick={toggleAnswer(answer.value)}>
                      {answer.label}
                    </Chip>
                  )}
                </div>
              </CardBody>
              <CardFooter className="h-30 pt-4">
                <b className="w-full
                text-lg md:text-4xl font-semibold text-secondary"
                >
                  <Button onPress={() => setCurrentQuestion(currentQuestion+1)}>Előző</Button></b>
              </CardFooter>
              <CardFooter className="h-30">
                <p className="text-primary md:text-xl text-center">
                <Button onPress={() => setCurrentQuestion(currentQuestion+1)}>Következő</Button></p>

              </CardFooter>
          </Card>
      </div>
    </div>
  );
}