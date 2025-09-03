import ResultApproved from "./ResultApproved";
import ResultRejected from "./ResultRejected";

const ResultPage = () => {
  const random = Math.random() > 0.5;
  return random ? <ResultApproved /> : <ResultRejected />;
};

export default ResultPage;
