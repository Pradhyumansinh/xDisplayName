import { useState } from 'react';

const DisplayName = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [flag, setFlag] = useState(false);
    const [fullName, setFullName] = useState("");


    const handleDisplayName = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            setFlag(true);
            setFullName(`Full Name: ${firstName} ${lastName}`);
        } else {
            setFlag(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleDisplayName}>
                <h1>Full Name Display</h1>
                <label for="firstName">First Name</label>: <input type="text" required name="firstName" id="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} /><br></br>
                <label for="lastName">Last Name</label>: <input type="text" required name="lastName" id="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} /><br></br>
                <button type="submit">Submit</button><br></br>
            </form>
            {flag && (<p>{fullName}</p>)}
        </div>
    );
}

export default DisplayName;
