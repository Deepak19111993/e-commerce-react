import React, { useState } from 'react';
import './Quiz.scss';

const questionPaper = [
  {
    id: 1,
    question: 'What is the Capital of Iceland?',
    option: ['Hafnarfjordur', 'Reykjavik', 'Selfoss', 'Vik'],
    ans: 'Reykjavik',
  },
  {
    id: 2,
    question: 'What is the National game of Bangladesh?',
    option: ['Cricket', 'Football', 'Kabaddi', 'Shooting'],
    ans: 'Kabaddi',
  },
  {
    id: 3,
    question: 'In Which year the first world war begun?',
    option: ['1912', '1913', '1914', '1915'],
    ans: '1914',
  },
  {
    id: 4,
    question: 'In Which year the second world war begun?',
    option: ['1938', '1939', '1940', '1941'],
    ans: '1939',
  },
  {
    id: 5,
    question: 'Which on of the following is the tallest building in the world?',
    option: [
      'Sanghai Tower',
      'Eiffel Tower',
      'Petronas Twin Tower',
      'Burj Khalifa',
    ],
    ans: 'Burj Khalifa',
  },
  {
    id: 6,
    question:
      'Which is  the largest continent in the world both population and area wise?',
    option: ['North America', 'Europe', 'Africa', 'Asia'],
    ans: 'Asia',
  },
  {
    id: 7,
    question: 'Which is the longest river in the world?',
    option: ['Yangtze', 'Amazon', 'Ganga', 'Nile'],
    ans: 'Nile',
  },
  {
    id: 8,
    question: 'Which Planet has maximum moons or natural satellites?',
    option: ['Saturn', 'Uranus', 'Jupiter', 'Neptune'],
    ans: 'Jupiter',
  },
  {
    id: 9,
    question: 'Which planet is also known by the name of red planet?',
    option: ['Mars', 'Jupiter', 'Earth', 'Mercury'],
    ans: 'Mars',
  },
  {
    id: 10,
    question: 'Which is the smallest continent in the world?',
    option: ['Africa', 'Australia', 'South America', 'North America'],
    ans: 'Australia',
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
                  <div className="title">
                    <div className="heading">{i + 1}.</div> {l.question}
                  </div>
                  <div className="optionWrapper">
                    {l.option.map((e, index) => (
                      <span key={index}>
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
      {/* <div className="show-color-indicator">
        <div className="color">
          <span className="color-platte color1"></span>
          <span className="text">0 to 25%</span>
        </div>
        <div className="color">
          <span className="color-platte color2"></span>
          <span className="text">26% to 50%</span>
        </div>
        <div className="color">
          <span className="color-platte color3"></span>
          <span className="text">51% to 75%</span>
        </div>
        <div className="color">
          <span className="color-platte color4"></span>
          <span className="text">76% to 100%</span>
        </div>
      </div> */}
    </div>
  );
};

export default Menu;
