'use client';
import { Card, CardFooter, CardBody, Chip, Button } from "@heroui/react";
import { useState } from 'react';

export default function CarrierSelector() {
  const [nextQuestion, setNextQuestion] = useState('weight');
  const [answers, setAnswers] = useState({});

  const questions = {
    weight: {
      question: 'Babád súlya',
      multiple: false,
      answers: [
        {
          label: '0-2,8 kg',
          value: '0-2,8'
        },
        {
          label: '2,8-3,5 kg',
          value: '2,8-3,5'
        },
        {
          label: '3,5-4,5 kg',
          value: '3,5-4,5'
        },
        {
          label: '4,5-8 kg',
          value: '4,5-8'
        },
        {
          label: '8-15 kg',
          value: '8-15'
        },
        {
          label: '15 kg felett',
          value: '15-100'
        }
      ]
    },
    position: {
      question: 'Milyen pozícióban szeretnéd a babádat hordozni?',
      multiple: true,
      answers: [
        {
          label: 'Elöl',
          value: 'elöl'
        },
        {
          label: 'Csípőn',
          value: 'csípőn'
        },
        {
          label: 'Háton',
          value: 'háton'
        }
      ]
    },
    age: {
      question: 'Babád kora',
      multiple: false,
      answers: [
        {
          label: '0-6 hét',
          value: '0-1.5'
        },
        {
          label: '6 hét - 2 hónap',
          value: '1.5-2'
        },
        {
          label: '2 hónap - 3 hónap',
          value: '2-3'
        },
        {
          label: '3 hónap - 6 hónap',
          value: '3-6'
        },
        {
          label: '6 hónap - 2 év',
          value: '6-24'
        },
        {
          label: '2 év felett',
          value: '24-100'
        }
      ]
    },
    feeling: {
      question: 'Mely állítások igazak rád?',
      multiple: true,
      answers: [
        // {
        //   label: 'Szeretem a ermészetességet',
        //   value: 'természetesség',
        //   type: ['kendo']
        // },
        {
          label: 'Puha, ölelős érzetre vágyom hordozás közben',
          value: 'puha_ölelős',
          type: ['kendo', 'caboo']
        },
        {
          label: 'Fontos, hogy szellős, hűvös anyag legyen rajtunk',
          value: 'szellős_hűvös',
          type: ['kendo', 'formazott']
        },
        {
          label: 'Gyorsan, egyszerűen szeretnék benne szoptatni',
          value: 'gyorsan_egyszerűen_szoptatni',
          type: ['karikas_kendo', 'formazott_csatos']
        },
        {
          label: 'A kendő megkötése nekem bonyolult',
          value: 'nem_szeretnék_kötéseket_tanulni',
          type: ['caboo', 'karikas_kendo', 'formazott']
        },
        {
          label: 'A sok heveder és csat összezavar',
          value: 'sok_heveder_és_csat_összezavar',
          type: ['caboo', 'karikas_kendo', 'formazott_felcsatos', 'meitai']
        }
      ]
    },
    body_size: {
      question: 'Milyen testalkatra keresel hordozót?',
      multiple: true,
      answers: [
        {
          label: 'Normás testalkat',
          value: 'normál'
        },
        {
          label: 'Vékony, alacsony testalkat',
          value: 'xs'
        },
        {
          label: 'Magas, testes testalkat',
          value: 'xl'
        },
      ]
    },
    extra: {
      question: 'Van-e extra kívánságod?',
      multiple: true,
      answers: [
        {
          label: 'Személyre szabható legyen (pl. te dönthesd el, milyen mintát szeretnél vagy milyen keménységű legyen a derékánt)',
          value: 'személyre_szabható'
        },
        {
          label: 'Magyar termék legyen',
          value: 'magyar_termék'
        },
        {
          label: 'Egy hordozót tudjak minél tovább használni (ez a kényelem rovására válhat)',
          value: 'egy_hordozót_tudjak_minél_tovább_használni'
        }
      ]
    }
  }
  
  const toggleAnswer = (value) => () => {
    if (questions[nextQuestion].multiple) {
      if (answers[nextQuestion] && answers[nextQuestion].includes(value)) {
        setAnswers({ ...answers, [nextQuestion]: answers[nextQuestion].filter(v => v != value) });
      } else {
        setAnswers({ ...answers, [nextQuestion]: [...(answers[nextQuestion] || []), value] });
      }
    } else {
      setAnswers({ ...answers, [nextQuestion]: value });
    }
  }

  const next = () => {
    if (nextQuestion == 'weight') {
      setNextQuestion('age');
    } else if (nextQuestion == 'age') {
      setNextQuestion('position');
    } else if (nextQuestion == 'position') {
      setNextQuestion('feeling');
    }
    else if (nextQuestion == 'feeling') {
      if (answers['feeling'].includes('szellős_hűvös')
      || answers['feeling'].includes('gyorsan_egyszerűen_szoptatni')
      || answers['feeling'].includes('nem_szeretnék_kötéseket_tanulni')
    ) {
        setNextQuestion('body_size')
      } else {
        setNextQuestion('extra')
      }
    } else if (nextQuestion == 'body_size') {
      setNextQuestion('extra')
    }
    
    // const options = [
    //   'caboo', 'kendo', 'karikas_kendo', 'formazott_felcsatos', 'meitai', 'formazott'
    // ];
    // formazott csatos: szulok mereteire rakertezni
    // formazott_felcsatos/meitai/formazott - derekpant preferenciara rakerdezni
    // szarmazai orszagra rakerdezni

    // xs: hudi, fizio, liliputi nem jo
    // felli rovid derekpanttal, maraya oldalt puha v kemeny derekpant derekpant, magyarinda mini jo
    // csengelino

    // xl: kibi, csengelino, magyarinda, manduca xt, ringa fuba, felli (hosszu vallpant parnaval), bondolino, mobius 3in1
  }

  const getChipColor = (value) => {
    console.log('value ', value);
    console.log('answers[nextQuestion] ', answers[nextQuestion]);
    
    if (answers[nextQuestion] && answers[nextQuestion].includes(value)) {
      return 'primary';
    }
    return 'secondary';
  }

  // itt el lehet kerni az email cimet, hogy a listat elkuldjem neki emailben is
  const finish = async () => {
    console.log('finish', answers);
    try {
      const res = await fetch('/fitcheck/api/', {
        method: 'POST',
        body: JSON.stringify(answers),
      });
      console.log('res ', res);
      
    } catch (e) {
      console.log('error', e);
    }
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
                {questions[nextQuestion].question}
              </CardBody>
              <CardBody>
                <div className="flex flex-wrap justify-center gap-4">
                  {questions[nextQuestion].answers.map((answer, index) => 
                    <Chip key={index} size="lg" onClick={toggleAnswer(answer.value)} 
                      color={(() => getChipColor(answer.value))()}>
                      {answer.label}
                    </Chip>
                  )}
                </div>
              </CardBody>
              {/* <CardFooter className="h-30 pt-4">
                <b className="w-full
                text-lg md:text-4xl font-semibold text-secondary"
                >
                  <Button onPress={() => setCurrentQuestion(currentQuestion-1)}>Előző</Button></b>
              </CardFooter> */}
              <CardFooter className="h-30">
                <p className="text-primary md:text-xl text-center">
                {
                  nextQuestion == 'extra' ?                  
                  <Button onPress={finish}>Beküldés</Button>
                  : <Button onPress={next}>Következő</Button>
                }
                </p>
              </CardFooter>
          </Card>
      </div>
    </div>
  );
}