const headingStyle={
    fontSize:'4em'
    }
    const bodyStyle={
        fontSize:'2.5em'
    };
    const textCenter={
        textAlign:'center' as const
    };
    const listUnstyle={
    listStyleType:'none',
    padding:0,
    margin:0
    };
    const headingFinalStyle={
        ...headingStyle,
        ...textCenter
    };
    export{
        headingFinalStyle,
        headingStyle,
        textCenter,
        listUnstyle,
        bodyStyle
    }