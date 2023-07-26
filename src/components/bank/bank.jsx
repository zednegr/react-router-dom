import "./bank.scss"
import { useState, useEffect } from "react"
import Loading from "../loading/loading"
import Error from "../error/error"

function Bank() {

    const [data, setgetData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then((res) => res.json())
            .then((data) => setgetData(data))
            .finally(() => {
                setLoading(false)
            })
            .catch(() => {
                setError(true)
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (

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
                                        <div className="card-about">
                                            <p className="card-about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reprehenderit libero excepturi! Cumque minima hic quasi voluptas, a blanditiis delectus.</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
    )
}

export default Bank