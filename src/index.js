import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   const firstname = "Matt";
//   const lastname = "Cake";
//
//   return (
//     <div>
//       Cześć {firstname} {lastname}!
//     </div>
//   );
// };

const Container = ({firstname, lastname, state}) => {
    return (
        <div>
            Cześć {firstname} {lastname}! {state}
        </div>
    );
};

const Button = ({dupa}) => {
    return (
        <button type="button" onClick={dupa}>Click!</button>
    )
};

export class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {dupa: 7};
    }

    render() {
        return (
            <>
                <Container firstname={"Matt"} lastname={"Cake"} state={this.state.dupa}/>
                <Button dupa={this.changeDupa} />
            </>
        );
    }

    changeDupa = () => this.setState((prevState) => ({dupa: prevState.dupa + 1}));
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
