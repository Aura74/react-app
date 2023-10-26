//import ListGroup from "./components/ListGroup/ListGroup";// utan index
import ListGroup from "./components/ListGroup"; //med index
import Like from "./components/Like"; //med index
import Button from "./components/Button/Button";
import { useState } from "react";
import Alert from "./components/Alert";
import { CiBeerMugFull } from "react-icons/ci";

function App() {
  const items = ["New York", "Ljusne", "Sandarene", "Vallvik", "Bollnäs"];
  const [alertVisible, setAlertVisility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisility(true)}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="Städer"
        onSelectItem={handleSelectItem}
      />
      <CiBeerMugFull color="red" size="40" />
      <Like onClick={() => console.log("Clickad")} />
    </div>
  );
}

export default App;
