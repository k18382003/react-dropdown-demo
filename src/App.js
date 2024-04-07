import CustomDropDown from 'summer-ui-react-dropdown';
import './App.css';
import { useState } from 'react';

function App() {
  const options = [
    { displayName: 'Apple', value: 1 },
    { displayName: 'Orange', value: 2 },
    { displayName: 'Banana', value: 3 },
    { displayName: 'Pineapple', value: 4 },
    { displayName: 'Grapes', value: 5 },
    { displayName: 'Watermelon', value: 6 },
  ];

  const option2 = [
    { displayName: 'Male', value: 1 },
    { displayName: 'Female', value: 2 },
    { displayName: 'They', value: 3 },
    { displayName: 'X', value: 4 },
  ];

  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action with the form data, such as sending it to a server
    let favFruits = '';
    selectedValues.map((item) => (favFruits += item.displayName + ' '));
    let Gender = selectedValue ? selectedValue.displayName : '';
    alert(
      'Name: ' +
        formData.username +
        ', Age: ' +
        formData.age +
        ', Gender: ' +
        Gender +
        ', Favorite fruits: ' +
        favFruits
    );

    // Clearing the form after submission
    setFormData({
      username: '',
      age: '',
    });

    setSelectedValues([]);
    setSelectedValue([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="rows">
          <label>Name</label>
          <input
            placeholder="Your name...."
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="rows">
          <label>Age</label>
          <input
            placeholder="Your age...."
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="rows">
          <label>Gender</label>
          <div className="my-dropdown">
            <CustomDropDown
              options={option2}
              selectedValues={selectedValue}
              setSelectedValues={setSelectedValue}
              textbarStyle="textbar"
              searchbarStyle="searchbar"
              />
          </div>
        </div>
        <div className="rows">
          <label>What are your favorite fruites?</label>
          <div className="my-dropdown">
            <CustomDropDown
              options={options}
              multipleSelect={true}
              selectedValues={selectedValues}
              setSelectedValues={setSelectedValues}
              textbarStyle="textbar"
              searchbarStyle="searchbar"
              styleDropDownMenu='mymenue'
            />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
