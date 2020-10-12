import React from "react";

class CoreEngine extends React.Component {


    constructor(props) {
        super(props);
    }
    goToScreen(root){
       this.props.navigation.navigate(root)
    }

}

export default CoreEngine