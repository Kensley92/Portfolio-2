import React from 'react';

class GenderSearch extends React.Component {
    readGender(event) {

        // Stop (prevent)
        event.preventDefault();

        // Find the id=gender
        let element = document.querySelector("#gender");

        fetch("database.json" + element.value)
        .then((res) => {
            // Parse the string
            return res.json();
        })
        .then((processed) => {

            // Find the id=GenderSearch
            let gender = document.querySelector("#GenderSearch");

            // Does the processed object
            if(processed.error) {
               gender.innerHTML = processed.error;
            } else {
               gender.innerHTML = processed.gender;
            }
        });
        element.value="";
    }

    render() {
        return (
                <div>
                    <h2 style={{color: "#E3B2FF"}}>Gender</h2>
                    <form onSubmit={this.readGender}>
                    <input id="gender" type="text"/>
                    <button style={{color: "#765C85"}}>Submit</button>
                    </form>
                </div>
        )
    }
}

export default GenderSearch;