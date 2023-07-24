import { useState, useEffect } from "react"
import "./img.scss"

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

        <div className="cards">
            {
                getData.map(item => {
                    return (
                        <>
                            <div className="card">
                                <div className="card-top">
                                    <img src={item?.urls?.small} width={'200px'} height={'200px'} alt="" />
                                </div>
                                <div className="card-middle">
                                    <a href={item?.links?.download} >Download</a>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Img