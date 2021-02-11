import React, { Component } from "react";
import { Text } from "react-native";

interface Props {
    value: number,
    hide2digits?: boolean,
    style?: any
}

export class CurrencyFormat extends Component<Props> {

    constructor(props) {
        super(props);
    }

    private convertFormat() {
        const numWithDigits = this.props.hide2digits ? this.props.value.toString() : this.props.value.toFixed(2);
        return numWithDigits.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    render() {
        return (
            <Text style={this.props.style}>{this.convertFormat()}</Text>
        )
    }
}