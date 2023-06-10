import React from 'react';

const LessonPlan = ({ children }) => {
  return (
    <div className="lesson-plan">
      {children}
    </div>
  );
};

const LessonPage = () => {
  return (
    <div>
      <h1>Урок</h1>
      <div className='lesson'>
      <LessonPlan>
        <h3>Введение</h3>
        <p>Краткое введение в тему урока.</p>
      </LessonPlan>
      <LessonPlan>
        <h3>Основная часть</h3>
        <p>Разбор основных концепций и примеров.</p>
        <p>Выполнение практических заданий.</p>
      </LessonPlan>
      <LessonPlan>
        <h3>Заключение</h3>
        <p>Подведение итогов и задание домашнего задания.</p>
      </LessonPlan>
    </div>
    </div>
  );
};

export default LessonPage;
