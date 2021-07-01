import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRoads, updateRoads } from "../../JS/actions/road";

function UpdateRoad() {

     const [editRoad, setEditRoad] = useState({});
  const roadById = useSelector((state) => state.roadReducer.roadById);
  const dispatch = useDispatch();
  

  useEffect(() => {
    setEditRoad(roadById);
    
  }, [dispatch]);

  const handleChange = (e) => {
    setEditRoad({ ...editRoad, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "30rem",
          height: "35rem",
          marginRight: "30px",
          marginLeft: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          Edit Road
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>departure :</Form.Label>
                <Form.Control
                  type="text"
                  name="departure"
                  placeholder="Enter your departure"
                  value={editRoad.departure}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>arrive :</Form.Label>
                <Form.Control
                  type="text"
                  name="arrive"
                  placeholder="Enter your arrive"
                  value={editRoad.arrive}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>price :</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Enter your phone"
                  value={editRoad.price}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>number of places :</Form.Label>
                
                <Form.Control
                  type="number"
                  name="nbplace"
                  placeholder="Enter your numb"
                  value={editRoad.nbplace}
                  onChange={handleChange}
                />
              </Form.Group>
               <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Quand vous partez ? </Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  placeholder="Enter your date"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/">
            <Button
              
              onClick={() => dispatch(updateRoads(editRoad._id, editRoad))}
            >
              Edit
            </Button>
            </Link>
         
         
        </div>
      </Card>
    </div>
  );
};

export default UpdateRoad
