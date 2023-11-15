import { Button, WrapBox } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapBox>
      {options.map((name, i) => {
        return (
          <Button
            key={i + 1}
            onClick={() => {
              onLeaveFeedback(name);
            }}
          >
            {name}
          </Button>
        );
      })}
    </WrapBox>
  );
};
