import React from 'react';

class AgeSearch extends React.Component {
    readAge(event) {

        // Stop (prevent)
        event.preventDefault();

        // Find the id=age
        let element = document.querySelector("#age");

        fetch("database.json" + element.value)
        .then((res) => {
            // Parse the string
            return res.json();
        })
        .then((processed) => {

            // Find the id=AgeSearch
            let age = document.querySelector("#AgeSearch");

            // Does the processed object
            if(processed.error) {
                age.innerHTML = processed.error;
            } else {
                age.innerHTML = processed.age;
            }
        });
        element.value="";
    }

    render() {
        return (
                <div>
                    <h2 style={{color: "#DCCAFF"}}>Age</h2>
                    <form onSubmit={this.readAge}>
                    <input id="age" type="text"/>
                    <button style={{color: "#86799E"}}>Submit</button>
                    </form>
                </div>
        )
    }
}

export default AgeSearch;