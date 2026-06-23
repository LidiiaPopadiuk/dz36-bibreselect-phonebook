import { Form } from "./components/Form";
import { Contacts } from "./components/Contacts";
import { Filter } from "./components/Filter";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/contactsOperation";

const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: 0;
`;

const Div = styled.div`
  margin: 0 auto;
  width: 650px;
  background-color: #fff1ec;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <Div className="App">
      <Title>
        Phonebook |{" "}
        <span style={{ backgroundColor: "pink", borderRadius: "10px" }}>
          Зроблено з любов'ю!
        </span>
      </Title>
      <Form />
      <Filter />
      <Contacts />
    </Div>
  );
};

export default App;
