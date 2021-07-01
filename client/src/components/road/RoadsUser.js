import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { deleteRoads, getRoadById, getRoads } from '../../JS/actions/road'
import Passagers from '../reservation/AcceptedReservation'
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import './roadUser.css'
import { getCurrent } from '../../JS/actions/user';


function RoadsUser() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.roadReducer.loadRoad)
    const roads = useSelector(state => state.roadReducer.roads)
    const user_id = localStorage.getItem('user')
    useEffect(() => {
        dispatch(getRoads(user_id));
    }, [dispatch])
    return (
        <>
            {loading ? null :
                roads.map(el =>
                    <div key={el._id} className="road_user">
                        <div>
                            <div className="search_detail_top">
                                <div className="search_destination">
                                    <div className="search_destination_details">
                                        <p>08:00</p>
                                        <div className="step">
                                            <div className="v-stepper">
                                                <div className="circle"></div>
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                        <p>{el.departure}</p>
                                    </div>
                                    <div className="search_destination_details">
                                        <p>10:00</p>
                                        <div className="step">
                                            <div className="v-stepper">
                                                <div className="circle_bottom"></div>
                                                <div className="line_bottom"></div>
                                            </div>
                                        </div>
                                        <p>{el.arrive}</p>
                                    </div>

                                </div>
                                <div className="search_price">
                                    <p>{el.price},00 Dt</p>
                                </div>
                            </div>
                            <div className="search_detail_bottom">
                                <div className="road_driver">
                                    <p>Les places diponibles :</p>
                                </div>
                                <div className="search_places_icons">
                                    <MdAirlineSeatReclineNormal className="seat_icon" />
                                </div>
                            </div>
                        </div>
                        <div className="road_passenger">
                            <h3>les passagers</h3>
                            <Passagers road_id={el._id} />
                        </div>
                        
                    <Link to="/">
                <div className="info" onClick={()=>dispatch(deleteRoads(el._id))}>
                    <div class="one">
                        <button class="round-icon-delete"  >delete <span class="vl"></span><span  aria-hidden="true"><FaTrash /></span></button>
                    </div>
                            </div>
                            </Link>

                <div className="info" >
                    <Link to="/road/update">
                    <div class="one">
                        <button class="round-icon-edite"   onClick={() => dispatch(getRoadById(el._id))}>Edit <span class="vl"></span><span aria-hidden="true"><FaEdit/></span></button>
                    </div>
                    </Link>
                  
                </div>
                    </div>
                )

            }
        </>
    )
}

export default RoadsUser
