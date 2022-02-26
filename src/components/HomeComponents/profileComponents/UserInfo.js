import React, {useEffect} from 'react'
import FinishAcc from './userInfocomponents/FinishAcc'
import UserInformation from './userInfocomponents/UserInformation'
import {useDispatch, useSelector} from "react-redux";
import {requestPersonalInfoActionCreator as request} from "../../../redux/actionCreators/personalInfoActionCreator"

function UserInfo() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.personalInfo.errorMSG);
    const username = useSelector(state => state.user.user.username);
    const information = useSelector(state => state.personalInfo.postes);
    useEffect(() => {
        dispatch(request());
    }, [])

    if (error) return <div class="alert alert-danger" role="alert">{error}</div>;
    if (information[0] === "true") return <FinishAcc />;
    return <UserInformation info={information} user={username} />
}

export default UserInfo