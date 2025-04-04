import { Container } from "./Treatments.styled";
import treatments from "./treatmentsData";

const Treatments = () => {
  return (
    <Container>
      <h2>Oferta</h2>
      <ul>
        {treatments.map((treatment) => (
          <li key={treatment.id}>{treatment.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Treatments;
