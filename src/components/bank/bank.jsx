import "./bank.scss"
import { useState, useEffect } from "react"

function Bank() {

    const [data, setgetData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then((res) => res.json())
            .then((data) => setgetData(data))
            .finally(
                setLoading(false)
            )
    }, [])

    if (loading) {
        return <h1>Loading</h1>
    }

    return (

        <>
            <div className="section">
                <div className="conatainer">
                    <div className="cards">


                        {
                            data?.map((item) => {
                                
                                return (
                                    <div className="card">
                                        <div className="card-top">
                                            <img className="cat-img" src={item?.url} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bank