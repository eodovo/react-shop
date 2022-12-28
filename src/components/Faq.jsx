import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";
import "./Faq.css";
const IntroSubTitle = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin: 20px 0;
  letter-spaicing: -1px;
`;
function Faq() {
  return (
    <div>
      <div className="introHeader">
        <h2 className="menuHeader">Enquiries about membership</h2>
        <IntroSubTitle>Be a family with a pizza shop</IntroSubTitle>
      </div>
      <Accordion className="faq">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How much investment is required to open the franchise?</Accordion.Header>
          <Accordion.Body>Based on the minimum dedicated area of 25 pyeong, about 200 million won to 210 million won is expected. (excluding additional construction, additional expenses, rent, and VAT)</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Are there any conditions to become a franchise owner?</Accordion.Header>
          <Accordion.Body>
            It is a franchise with a history of over 50 years and is the largest global QSR brand in the world. Therefore, to realize the brand's value in product quality, store operations, and customer service, we enter into a franchise agreement with those who can comply with and comply with the
            operational manuals and the regulations and guidelines of the customer service mind. Each branch's affiliated developers verify this part through in-depth consultation and propensity testing before signing the contract.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Start-up rules</Accordion.Header>
          <Accordion.Body>
            Value-added tax (10%) is not included. Investment costs increase or decrease depending on the site conditions of the store. The total cost excludes real estate and separate construction costs. Real estate cost: rental deposit and premium Separate construction costs: demolition work,
            electricity extension, external duct work, fire fighting work, air conditioning/heater, external interior/window, toilet, local expenses Separate goods deposit (20 million won or replacement of guarantee insurance policy) The membership fee may vary depending on the exchange rate.
            Securing parking spaces for motorcycles
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default Faq;
