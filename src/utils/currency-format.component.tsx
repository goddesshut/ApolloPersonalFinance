import React, { Component } from "react";
import { Text } from "react-native";

interface Props {
    value: number,
    style?: any
}

export class CurrencyFormat extends Component<Props> {

    constructor(props) {
        super(props);
    }

    private convertFormat() {
        return this.props.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
    
    render() {
        return (
            <Text style={this.props.style}>{this.convertFormat()}</Text>
        )
    }
}