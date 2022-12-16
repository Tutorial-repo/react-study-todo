import React from 'react'
import { useSearchParams } from 'react-router-dom';

const About = ({location} : any) : JSX.Element => {
const [searchParams] = useSearchParams();
const detail = searchParams.get('detail') === 'true';

  return (
    <div>
        <h1>소개</h1>
        <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
        {detail && <p>추가</p>}
    </div>
  )
}

export default About;