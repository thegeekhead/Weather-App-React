import React,{Component} from "react";

class Conditions extends Component {
    render() {
        return(
            <div>
                {
                    this.props.responseObj.cod === 200 ?
                    <div>
                        <p><strong>{this.props.responseObj.name}</strong></p>
                        <p>It is currently {Math.round(this.props.responseObj.main.temp)} degrees out with {this.props.responseObj.weather[0].description}</p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default Conditions;