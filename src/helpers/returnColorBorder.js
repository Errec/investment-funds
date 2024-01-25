const returnColorBorder = (risk) => {
    switch (risk) {
        case 1:
            return "#a6ecfc"
    
        case 2:
            return "#68F1DD"
    
        case 3:
            return "#91ed6e"
    
        case 4:
            return "#b0f42a"
    
        case 5:
            return "#DDF40C"
    
        case 6:
            return "#faf00e"
    
        case 7:
            return "#FFDC00"
    
        case 8:
            return "#fb0"
    
        case 9:
            return "#f80"
    
        case 10:
            return "#FF5E00"
    
        case 11:
            return "#ff0600"
    
        case 12:
            return "#B51414"
    
        default:
            break;
    }        
    
    return "#fff"
}

export default returnColorBorder;