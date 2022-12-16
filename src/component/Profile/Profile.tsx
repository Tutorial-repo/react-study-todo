import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {
    [key : string] : {
        name : string;
        description : string;
    },
};

const profileData : Props= {
    ban: {
        name: '반무마니',
        description:
        '개발좌'
    },
    gildong: {
        name: '홍길동',
        description: '전래동화의 주인공'
    }
};


function Profile() {
    const {username} = useParams();
    const profile = profileData[username + ''];
    
    if(!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;