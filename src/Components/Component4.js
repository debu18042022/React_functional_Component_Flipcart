import React from "react";
import Button from "react-bootstrap/Button";

export default function Component4() {
  return (
    <div className="containerr">
      <div className="left">
        <div className="upper">
          <h3 style={{ display: "inline-block", marginLeft: "5%" }}>
            Deals of the Day
          </h3>
          <div className="upper_inside_div" style={{ display: "inline-block"}}>
            <div style={{ display: "inline-block" }}>
              <img
                style={{ width: "5vw", marginLeft: "2%" }}
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
                alt=""
              ></img>
            </div>
            <span>20:40:51 &nbsp;Left</span>
          </div>
          <Button variant="primary" style={{ width: "10vw", fontSize: "1.5vw",}}>
            View All
          </Button>{" "}
        </div>

        <div className="lower">
          <div className="icon">
            <div className="image_div">
              <img
                className="maintainimagesize"
                src="https://rukminim1.flixcart.com/image/322/386/kkr72q80/watch/f/h/t/digital-watch-for-boys-virani-enterprise-original-imagyf7gxuuxvefy.jpeg?q=50"
                alt=""
              ></img>
            </div>
            <div>
              <h6 className="heading_product">Titan,FastTrack...</h6>
              <p className="heading_product">From ₹499</p>
            </div>
          </div>
          <div className="icon">
            <div className="image_div">
              <img
                className="maintainimagesize"
                src="https://rukminim1.flixcart.com/image/612/612/l09w8sw0/slipcover/r/z/x/6-0-49-stretchable-elastic-printed-dining-chair-covers-brown-original-imagc3yrmg3yjzsh.jpeg?q=70"
                alt=""
              ></img>
            </div>
            <div>
              <h6 className="heading_product">Furniture,sofa</h6>
              <p className="heading_product">From ₹499</p>
            </div>
          </div>

          <div className="icon">
            <div className="image_div">
              <img
                className="maintainimagesize"
                src="https://rukminim1.flixcart.com/image/612/612/k3670cw0/mosquito-net/d/n/k/mosquito-net-foldable-double-bed-2003mn-pamworld-original-imafmce2fnztgzc8.jpeg?q=70"
                alt=""
              ></img>
            </div>
            <div>
              <h6 className="heading_product">Mosq. net</h6>
              <p className="heading_product">From ₹499</p>
            
            </div>
          </div>


          <div className="icon">
            <div className="image_div">
              <img
                className="maintainimagesize"
                src="https://rukminim1.flixcart.com/image/322/386/kqco5u80/jewellery-set/g/c/h/780-r-a-enterprises-original-imag4dyzceaqhkhp.jpeg?q=50"
                alt=""
              ></img>
            </div>
            <div>
              <h6 className="heading_product">jewellary</h6>
              <p className="heading_product">From ₹499</p>
             
            </div>
          </div>

          <div className="icon">
            <div className="image_div">
              <img
                className="maintainimagesize"
                src="https://rukminim1.flixcart.com/image/612/612/l09w8sw0/slipcover/r/z/x/6-0-49-stretchable-elastic-printed-dining-chair-covers-brown-original-imagc3yrmg3yjzsh.jpeg?q=70"
                alt=""
              ></img>
            </div>
            <div>
              <h6 className="heading_product">Furniture,Sofa</h6>
              <p className="heading_product">From ₹499</p>
             
            </div>
          </div>

          <div className="icon">
            <div className="image_div">
              <img
                className="maintainimagesize"
                src="https://rukminim1.flixcart.com/image/612/612/k3670cw0/mosquito-net/d/n/k/mosquito-net-foldable-double-bed-2003mn-pamworld-original-imafmce2fnztgzc8.jpeg?q=70"
                alt=""
              ></img>
            </div>
            <div>
              <h6 className="heading_product">Mosq. net</h6>
              <p className="heading_product">From ₹499</p>
           
            </div>
          </div>

          <div className="icon">
            <div className="image_div">
              <img
                className="maintainimagesize"
                src="https://rukminim1.flixcart.com/image/322/386/kkr72q80/watch/f/h/t/digital-watch-for-boys-virani-enterprise-original-imagyf7gxuuxvefy.jpeg?q=50"
                alt=""
              ></img>
            </div>
            <div>
              <h6 className="heading_product">Titan,FastTrack</h6>
              <p className="heading_product">From ₹499</p>
              
            </div>
          </div>

          <div>
            <Button
              className="btnArrow"
              variant="primary"
              style={{ width: "40px", height: "100px",backgroundColor:"white",color:"black",border:"none"}}
            >
              <i class="fa-solid fa-angle-right"></i>
            </Button>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://rukminim1.flixcart.com/flap/464/708/image/a60eb148185597ad.jpg?q=70"
          alt=""
        ></img>
      </div>
    </div>
  );
}
