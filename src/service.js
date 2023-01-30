const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY,
}



export const fetchData = async (defaultQuary) => {
    const { app_id, app_key } = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuary}&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json();
        return response;
    }
    catch (e) {
        console.log(e, 'somthing went wrong')
        return e
    }
}


export const fetchTabData = async (defaultQuary) => {
    const { app_id, app_key } = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuary}?type=public&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'Something wrong happend');
        return e;
    }
}