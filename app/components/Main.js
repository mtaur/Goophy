// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./Form");
var Images = require("./Images");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");


// Create the Parent Component
var Main = React.createClass({

    stateSetMain: function(stateArr) {
        console.log('UPDATE THE FREAKING MAIN.JS!!!!!');
        console.log('UPDATE THE FREAKING MAIN.JS!!!!!');
        console.log('UPDATE THE FREAKING MAIN.JS!!!!!');
        console.log('UPDATE THE FREAKING MAIN.JS!!!!!');
        console.log('State:','gifsData:',stateArr);
        this.setState({gifsData: stateArr});
        console.log('THIS IS THE FREAKING STATE!!!',this.state);
    }/*.bind(this)*/
    ,

    updateAll: function() {
        forceUpdate();
    },

    // Here we set a generic state associated with the number of clicks
    getInitialState: function() {
        return {
            gifsData: []  //this.props.gifsData
        };

/*        return helpers.getGifs()
            .then(function(response) {
                // Using a ternary operator we can set newClicks to the number of clicks in our response object
                // If we don't have any clicks in our database, set newClicks to 0
                var gifsFound = response.data ? response.data : [];
/!*                this.setState({
                    gifsData: gifsFound
                });*!/
                console.log("RESULTS", response);
//                console.log("Gifs found", gifsFound);
                console.log('gifsData:',gifsFound /!*response.data*!/);
                return {
                    gifsData: gifsFound /!*response.data*!/
    //            clicks: 0,
    //            clickID: "Main"
                };

            }.bind(this));*/

    },

    //  On load display the gifs?
    componentDidMount: function() {
        console.log("COMPONENT MOUNTED");

//        helpers.stateSet(this.stateSet);

        // The moment the page renders on page load, we will retrieve the previous gifs.
        // We will then utilize that click count to change the value of the click state.


        /*
        helpers.getGifs()
            .then(function(response) {
                // Using a ternary operator we can set newClicks to the number of clicks in our response object
                // If we don't have any clicks in our database, set newClicks to 0
                var gifsFound = response.data; //response.data.length ? response.data : [];
                this.setState({
                    gifsData: gifsFound
                });
                console.log("RESULTS", response);
//                console.log("Gifs found", gifsFound);
                console.log('gifsData:',this.state.gifsData);

            }.bind(this));
*/

    },

    // Whenever our component updates, the code inside componentDidUpdate is run
    componentDidUpdate: function(prevState) {
        console.log("COMPONENT UPDATED");

//          this.render();
/*        helpers.getGifs()
            .then(function(response) {
                // Using a ternary operator we can set newClicks to the number of clicks in our response object
                // If we don't have any clicks in our database, set newClicks to 0
                var gifsFound = response.data; //? response.data : [];
                this.setState({
                    gifsData: gifsFound
                });
                console.log("RESULTS", response);
//                console.log("Gifs found", gifsFound);
                console.log('gifsData:',this.state.gifsData);

            }.bind(this));*/

/*        // We will check if the gifs have changed...
        if (prevState.gifsData !== this.state.gifsData) {

            console.log('State changes are handled elsewhere?');
/!*            // If it does, then update the clickcount in MongoDB
            helpers.saveGifs({ gifsData: this.state.gifsData /!*clickID: this.state.clickID, clicks: this.state.clicks*!/ })
                .then(function() {
                    console.log("Posted to MongoDB");
                });*!/
        }*/

    },

    // Whenever the button is clicked we'll use setState to add to the clickCounter
    // Note the syntax for setting the state

    handleData: function(updater) {
//        this.setState({ gifsData: updater(this.state.gifsData) });

            this.render();

/*        helpers.getGifs()
            .then(function(response) {
                // Using a ternary operator we can set newClicks to the number of clicks in our response object
                // If we don't have any clicks in our database, set newClicks to 0
                var gifsFound = response.data.length ? response.data : [];
                this.setState({
                    gifsData: gifsFound
                });
                console.log("RESULTS", response);
                console.log("Gifs found", gifsFound);
            }.bind(this));*/


    },


    // This should actually affect mongoDB...
    burninate: function() {
        this.setState({ gifsData: [] });
    },

    // Here we render the function
    render: function() {
        return (
            <div className="container">

                <div className="row">

{/*                    <div className="jumbotron">*/}
                    <div>
                        <h2>Goophy - Animated gif search powered by Google Images</h2>
                        <hr />
                        <p>
                            <em>Now backed by the power of MongoDB!</em>
                            Just visit <a href="/api">/api</a> to check out the DB!
                        </p>
                            {/*
                Here we create a button click.
                Note how we have an onClick event associate with our handleClick function.
              */}

                            <Form stateSetMain={this.stateSetMain} updateAll={this.updateAll} />

                    </div>
                    {/* This represents the "Parent" */}
                    <div className="col-md-12">

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Gifs belong here:</h3>
                            </div>
                            <div className="panel-body text-center">

                                {/* This won't be in the final version... */}
                                {/*<h1>{this.state.gifsData[0] && this.state.gifsData[0].link}</h1>*/}

                                {/*{this.state.gifsData && '3'}*/}

                                {/*
                  Here we'll deploy the child component.
                  We'll pass it the parent's click counter as a "state"
                */}
                                <Images gifsData={this.state.gifsData} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
