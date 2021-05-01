import React from "react";

class NameSearch extends React.Component {
    readName(event) {
        // Stop default form action
        event.preventDefault();

        //Find element id="name"
        let element = document.querySelector("#name");

        fetch("database.json" + element.value)
        .then((res) => {
            // Parse the string into Javascript object
            return res.json();
        })
        .then((processed) => {

            // Find the element id="reportingArea"
            let reporting = document.querySelector("#ReportingArea");

            // 'processed' object
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.score;
            }
    
        });
        element.value = "";
    }

    render() {
        return(
            <div>
                <h2 style={{color: "#C2D5FF"}}>Name</h2>
                <form onSubmit={this.readName}>
                    <input id="name" type="text"/>
                    <button style={{color: "#79849E"}}>Submit</button>
                </form>
                </div>
        )
    }
}

export default NameSearch;