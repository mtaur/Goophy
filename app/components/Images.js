// Include React
var React = require("react");

var ImageRow = require("./ImgRow/ImageRow");

// This is the Form, our main component. It includes the banner and form element
var Images = React.createClass({

    rowParse: function(data) {

        var imagesPassed = data;
//        this.state.imageRows = [];
        var imgRows = [];

        for(var i=0; 4*i<imagesPassed.length; i++)
        {
            imgRows[i]=[];
            imgRows[i][0] = imagesPassed[4*i] || [];      // This shouldn't happen
            imgRows[i][1] = imagesPassed[4*i+1] || [];    // These might happen
            imgRows[i][2] = imagesPassed[4*i+2] || [];
            imgRows[i][3] = imagesPassed[4*i+3] || [];
            console.log('imgRows['+i+']:',imgRows[i]);
        }

//        setState( {} );

        return imgRows;

//        this.setState({ imageRows: imgRows });

    },

    // Here we set a generic state associated with the images passed into the rows
    getInitialState: function() {

        return {
//            gifsData: this.props.gifsData,
            imageRows: this.rowParse(this.props.gifsData) //imgRows
        };
    },

    componentDidUpdate: function() {
        this.setState({ imageRows: this.rowParse(this.props.gifsData) });
        console.log(this.state.imageRows);
    },

/*    // This function will respond to the user input
    handleChange: function(event) {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        // See this Stack Overflow answer for more details:
        // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },*/


/*
                    {this.state.imageRows.map()}
*/



    // Here we descibe this component's render method
    render: function() {

        console.log('state of rows', this.state.imageRows);

        return (
            <div className="row">
                <div className="col-xs-1"> </div>
                <div className="col-xs-10">
                    456 {this.state.imageRows} 123
                    <ImageRow key = '100' imageRow={[{link:'5'},{link:'6'},{link:'7'},{link:'8'}]} />
                    <ImageRow key = '101' imageRow={this.state.imageRows[0]} />
                    {this.rowParse(this.props.gifsData).map(
                        function(row,rowNum)
                            { return <ImageRow key={rowNum} imageRow={row} />;}
                        )}

                </div>
                <div className="col-xs-1"> </div>

            </div>
        );
    }

});

// Export the component back for use in other files
module.exports = Images;
