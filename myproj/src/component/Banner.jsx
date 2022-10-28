import {VscError} from 'react-icons/vsc'

import React from 'react'

const Banner = ({content,del_exp}) => {
  return (
    <div>
      <div className="container">
        {content.map((card) => (
          <div className="card" key={card.id}>

            <div className="image_">
              <img src={card.img} alt="" />
            </div>
            <div className="card_stuffs">
            <h2 className="card_text">{card.name}</h2>
            <h5 className="card_text">{card.country}</h5>
            <h6 className="gray">{card.rating}</h6>
            {/* <h6 className="gray">{card.id} </h6> */}
            <button onClick={()=>del_exp(card.id)} ><VscError/></button>
            </div>
          </div>
        ))}

        {/* <div className="card">
          <div className="image_">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCTBFo8VDKrC3RuIQvtRPHyS873avQXE8AQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="card_text">
            <a href="/">
              <h1>{name}</h1>
            </a>

            <span>5.0 </span>
            <span className="gray">(6) </span>
            <span className="gray">India</span>
            <p>Life lessons with wudufff</p>
            <p>£100 per person</p>
          </div>
        </div>
        <div className="card">
          <div className="image_">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfz6c3K-g_hKt6uYH50L5RUXCsKGNNZjXGw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="card_text">
            <a href="/">
              <h1>{name}</h1>
            </a>

            <span>5.0 </span>
            <span className="gray">(6) </span>
            <span className="gray">India</span>
            <p>Life lessons with wudufff</p>
            <p>£100 per person</p>
          </div>
        </div>
        <div className="card">
          <div className="image_">
            <img
              src="https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-120322.jpg?size=338&ext=jpg&ga=GA1.2.1263088788.1666197165"
              alt=""
            />
          </div>
          <div className="card_text">
            <a href="/">
              <h1>{name}</h1>
            </a>

            <span>5.0 </span>
            <span className="gray">(6) </span>
            <span className="gray">India</span>
            <p>Life lessons with wudufff</p>
            <p>£100 per person</p>
          </div>
        </div>
        <div className="card">
          <div className="image_">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs44rW7E7xKNfDmbKNEHp2IIfY6ZiIgC8g7w&usqp=CAU"
              alt=""
            />
          </div>
          <div className="card_text">
            <a href="/">
              <h1>{name}</h1>
            </a>
            <span>5.0 </span>
            <span className="gray">(6) </span>
            <span className="gray">India</span>
            <p>Life lessons with wudufff</p>
            <p>£100 per person</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Banner



