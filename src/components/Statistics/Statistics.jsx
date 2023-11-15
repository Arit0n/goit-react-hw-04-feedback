import { Stat } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Stat>Good: {good}</Stat>
      <Stat>Neutral: {neutral}</Stat>
      <Stat>Bad: {bad}</Stat>
      <Stat>Total: {total()}</Stat>
      <Stat>
        Positive feedback: {positivePercentage() > 0 ? positivePercentage() : 0}
        %
      </Stat>
    </div>
  );
};
