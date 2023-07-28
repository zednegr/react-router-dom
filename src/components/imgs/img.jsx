import "./img.scss"
import { useState, useEffect } from "react"
import Loading from "../loading/loading"
import Error from "../error/error"

function Img() {

    const [getData, setgetData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
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

    console.log(getData);
    return (

        <section>
            <div className="cards">
                {
                    <div className="card">
                        <div className="card-top">
                            <img className="cat-img" src={getData?.message} width={'200px'} height={'200px'} alt="" />
                        </div>
                        <div className="card-about">
                            <p className="card-about-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, delectus!</p>
                        </div>
                        <div className="card-middle">
                            <a className="next-btn btn-slide" href="">Next</a>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Img