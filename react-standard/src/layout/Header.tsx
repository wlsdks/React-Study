type Props = {
    title: string;
    description?: string;
};

/**
 * @description 헤더 컴포넌트
 */
function Header({ title, description }: Props) {
    // view -> 아래 {}안에 js의 변수나 함수를 넣을수가 있다.
    return (
        <>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </>
    );
}

// default를 통해 하나만 export한다고 설정한다.
export default Header;
