import { useState, useEffect } from "react"

function Img() {

    const [getData, setgetData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=NjXfY5kc8FvYvy8vqWB4pFHwwCQR17TtmkQj9AEiksY')
            .then((res) => res.json())
            .then((data) => setgetData(data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
       return <h1>Loading...</h1>
    }

    console.log(getData);
    return (

        <> 
            {
                getData.map(item => {
                    return (
                        <>
                        <img src={item?.urls?.small} width={'200px'} height={'200px'} alt="" />
                        <a href={item?.links?.download} >Download</a>
                        </>
                    )
                })
            }
        </>
    )
}

export default Img