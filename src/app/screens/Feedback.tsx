import Container from "../components/Container";

function Feedback() {
  window.open("https://feedback.getalby.com");

  return (
    <Container>
      <h2 className="mx-auto mt-12 mb-6 text-2xl font-bold">
        Thank you for providing feedback to Alby!
      </h2>
    </Container>
  );
}

export default Feedback;
