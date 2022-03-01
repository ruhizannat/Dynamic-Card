// import img from '././img/img01.jpg'
import styles from './Card.module.css';



const CardUI = ({card}) =>{
    return(
        <div className={styles.cards}>
          <div className="row">
           <div className="col-md-4">
           <div className="card container-fluid d-flex justify-content-center">
                 <img src={card.images} className="card-img-top card-img" alt="image1"/>
                  <div className="card-body text-dark">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text text-secondary">{card.text}</p>
                  <a href="#" className="btn btn-outline-success">Read More</a>  
                 </div>
            
            </div>
           </div>
          </div>
        </div>
    )
}
export default CardUI