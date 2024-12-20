const headingStyle={
    fontSize:'2em'
    }
    const bodyStyle={
        fontSize:'1.5em'
    };
    const textCenter={
        textAlign:'center' as const
    };
    const listUnstyle={
    listStyleType:'none',
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