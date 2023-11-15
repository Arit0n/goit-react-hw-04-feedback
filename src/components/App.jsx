import { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notofication/Notification';

import { Section } from './Section/Section';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = nameFeedback => {
    if (nameFeedback === 'good') setGood(pervState => pervState + 1);
    if (nameFeedback === 'neutral') setNeutral(pervState => pervState + 1);
    if (nameFeedback === 'bad') setBad(pervState => pervState + 1);
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.floor(
      good / ((good + neutral + bad) / 100)
    );
    return positivePercentage;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={updateFeedback}
        />
      </Section>
      <Section title="Statisctics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
      <GlobalStyle />
    </div>
  );
};
