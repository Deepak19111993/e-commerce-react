import React, { useState } from 'react';
import './Quiz.scss';

const questionPaper = [
  {
    id: 1,
    question: 'What is the Answer of Question 1?',
    option: ['1', '2', '3', '4'],
    ans: '1',
  },
  {
    id: 2,
    question: 'What is the Answer of Question 2?',
    option: ['1', '2', '3', '4'],
    ans: '4',
  },
  {
    id: 3,
    question: 'What is the Answer of Question 3?',
    option: ['1', '2', '3', '4'],
    ans: '3',
  },
  {
    id: 4,
    question: 'What is the Answer of Question 4?',
    option: ['1', '2', '3', '4'],
    ans: '1',
  },
  {
    id: 5,
    question: 'What is the Answer of Question 5?',
    option: ['1', '2', '3', '4'],
    ans: '2',
  },
  {
    id: 6,
    question: 'What is the Answer of Question 6?',
    option: ['1', '2', '3', '4'],
    ans: '4',
  },
  {
    id: 7,
    question: 'What is the Answer of Question 7?',
    option: ['1', '2', '3', '4'],
    ans: '1',
  },
  {
    id: 8,
    question: 'What is the Answer of Question 8?',
    option: ['1', '2', '3', '4'],
    ans: '3',
  },
  {
    id: 9,
    question: 'What is the Answer of Question 9?',
    option: ['1', '2', '3', '4'],
    ans: '4',
  },
  {
    id: 10,
    question: 'What is the Answer of Question 10?',
    option: ['1', '2', '3', '4'],
    ans: '2',
  },
];

const Menu = () => {
  const [data] = useState(questionPaper);
  const [step, setStep] = useState(1);
  const [result, setResult] = useState([]);
  const handleChange = (e, id) => {
    console.log(e);
    setTimeout(() => {
      setStep(step + 1);
    }, 500);

    const newData = data.find((l) => l.id === id && l.ans === e);
    newData && setResult([...result, newData]);
  };

  return (
    <div>
      {data.length >= step && (
        <div className="quezWrapper">
          {data.map((l, i) => (
            <>
              {step === i + 1 && (
                <div className="quez" key={i}>
                  <div className="heading">Question: {i + 1}</div>
                  <div className="title">{l.question}</div>
                  <div className="optionWrapper">
                    {l.option.map((e, index) => (
                      <span>
                        <input
                          id={`radioans${i}${index}`}
                          type="radio"
                          name={`radio${i}`}
                          onChange={() => handleChange(e, l.id)}
                        />
                        <label for={`radioans${i}${index}`}>{e}</label>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.length < step && (
        <div className="result">
          <div className="success">Congratulations</div>
          Your Score :{' '}
          <strong>
            {result.length} / {data.length}
          </strong>
        </div>
      )}
    </div>
  );
};

export default Menu;
