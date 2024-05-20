import { useState } from 'react';

const DisplayName = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleFillName = (e) => {
        if (e.target.id === "firstName") {
            setFirstName(e.target.value);
        } else {
            setLastName(e.target.value);
        }
    }

    const handleDisplayName = (e) => {
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`);
    }

    return (
        <form>
            <h1>Full Name Display</h1>
            <label for="firstName">First Name</label>: <input type="text" name="firstName" id="firstName" onChange={handleFillName} value={firstName} /><br></br>
            <label for="lastName">Last Name</label>: <input type="text" name="lastName" id="lastName" onChange={handleFillName} value={lastName} /><br></br>
            <button onClick={handleDisplayName}>Submit</button><br></br>
            <label>Full Name</label>: <label>{fullName}</label>
        </form>
    );
}

export default DisplayName;
