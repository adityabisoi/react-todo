import React from 'react';

function App() {
  return (
    <div>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <p for="vehicle1"> I have a bike</p>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
      <p for="vehicle2"> I have a car</p>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
      <p for="vehicle3"> I have a boat</p>
    </div>
  );
}

export default App;
