import {Card,Avatar,Button} from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {logoutAction}  from "../reducers/user"

const UserProfile = ()=>{
    const dispatch=useDispatch();
    const onLogOut=useCallback(()=>{
        dispatch(logoutAction());
    },[]);

    return (
        <Card
        actions={[
            <div key="twist"> 짹짹 <br/> @</div>,
            <div key="followings">팔로잉 <br/> @</div>,
            <div key="followings">팔로워 <br/> @</div>
        ]}>
            <Card.Meta
            avatar={<Avatar> AY</Avatar>}
            title="ahyeon"
            />
            <Button onClick={onLogOut}> 로그아웃</Button>

        </Card>
    );
}
export default UserProfile;