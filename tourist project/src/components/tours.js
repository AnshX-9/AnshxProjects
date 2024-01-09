import Cards from "./Cards";
import './tours.css'
function Tours({tours, removeTour}) {
  return(

// parent div
         <div className="container">
                                {/* top heading  */}
              <h2 className="title"> Plan With Hardik </h2>

                      {/* div for cards */}

                    <dvi className="cards">
                          {

                                  tours.map( (tour) => {
                                    return <Cards {...tour} removeTour={removeTour} ></Cards>
                                  })
                          }
                          
                    </dvi>


       </div>



  );
}
export default Tours;