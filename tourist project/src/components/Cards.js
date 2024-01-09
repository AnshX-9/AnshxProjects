import { useState } from "react";
import './cards.css'
function Cards({id, image, info, price, name, removeTour}) {

const[readmore, setReadmore] = useState(false)


const description = readmore ? info : `${info.substring(0,200)}......`


function readmoreHandler() {
setReadmore(!readmore)

}




  return(
    
    
        //   cards

        <div className="Card">

            <img src={image} className="Image"></img>

          <div className="Tour-info">
          <div className="Tour-detail">
                 <h4 className="Tour-price">{price}</h4>
                 <h4 className="Tour-price">{name}</h4>
            </div>

    <div className="Description">{description}
              <span className="read-more" onClick={readmoreHandler}>
                  {readmore ? 'show less': 'read more'}
              </span>
              </div>
          </div>


            
              <button className="Button-red" onClick={() => removeTour(id)}>
                          Not interested
              </button>

    </div>
    
    
            // not interested



  );



}

export default Cards;