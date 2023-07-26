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

        <section>
            <div className="cards">
                {
                    <>
                        <div className="card">
                            <div className="card-top">
                                <img className="cat-img" src={getData?.message} width={'200px'} height={'200px'} alt="" />
                            </div>
                            <div className="card-about">
                                <p className="card-about-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, delectus!</p>
                            </div>
                            <div className="card-middle">
                                <a className="next-btn" href="#">Next</a>
                            </div>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}

export default Img