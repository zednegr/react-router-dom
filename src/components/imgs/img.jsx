import { useState, useEffect } from "react"
import "./img.scss"

function Img() {

    const [getData, setgetData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
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
                        <>
                            <div className="card">
                                <div className="card-top">
                                    <img src={getData?.message} width={'200px'} height={'200px'} alt="" />
                                </div>
                                <div className="card-middle">
                                    <a href="">Download</a>
                                </div>
                            </div>
                        </>
              
            }
        </div>
    )
}

export default Img