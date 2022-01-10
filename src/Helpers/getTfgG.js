const getTFG = async() => {
    const url = 'https://gncconecta.com.mx/user/ws/wsExtraFields/index.php/api/v1/get_extra_field/g2';

    const myInit = { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tfgApiKey': 'Tvk5q6H9HGo5O8f7mDP2'
        },
    };

    const resp = await fetch( url, {
        method: 'GET', 
        headers: { 
            tfgApiKey: 'Tvk5q6H9HGo5O8f7mDP2'
        }
    });

    const {data} = await resp.json();

    // const infoField = data.map( data => {
    //     return {
    //         short_name: data.short_name,
    //     }
    // })

    return data;
}
