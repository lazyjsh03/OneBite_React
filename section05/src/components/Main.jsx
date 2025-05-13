import "./Main.css";

// 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 들어갈 수 있다.
// 2. 숫자, 문자열, 배열만 렌더링 된다다.
// 3. 모든 태그는 반드시 닫혀야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.

const Main = () => {
  const user = {
    name: "제승현",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // return (
  //     <>
  //         {user.isLogin ? (
  //             <div>로그아웃</div>
  //         ) : (
  //             <div>로그인</div>
  //         )}
  //     </>
  // )
};

export default Main;
