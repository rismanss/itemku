import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Style from './style.module.css';

const Card = (props) => {
  return (
    <div className={Style.card}>
      <div className={Style.header}>
        <span className={Style.date}>{props.date}</span>
        <span className={Style.name}>{props.name}</span>
      </div>
      <div className={Style.review}>
        Ulasan untuk 
        <span className={Style.item}> 366 Diamonds - Mobile Legends</span>
      </div>
      <div className={Style.stars}>
        <FontAwesomeIcon icon={["fas", "star"]} color="#ffa500d1" size="sm" />
        <FontAwesomeIcon icon={["fas", "star"]} color="#ffa500d1" size="sm" />
        <FontAwesomeIcon icon={["fas", "star"]} color="#ffa500d1" size="sm" />
        <FontAwesomeIcon icon={["fas", "star"]} color="#ffa500d1" size="sm" />
        <FontAwesomeIcon icon={["fas", "star"]} color="#ffa500d1" size="sm" />
      </div>
      <div className={Style.userReview}>
        {props.text}
      </div>
    </div>
  )
}

export default Card;