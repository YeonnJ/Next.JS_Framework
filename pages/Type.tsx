import React from "react";

// 인터페이스
interface NameProps {
  name: string;
}

type TypeProps = {
  name: string;
}; // Type Alias

// Type Alias 상속
type PersonTypeProps = TypeProps & {
  age: number;
};

// 인터페이스 상속
interface PersonProps extends NameProps {
  age: number;
}

// 자동 확장 자동으로 타입이 늘어남 확장됨
interface PersonProps {
  school: string;
}

type PickType = Pick<PersonProps, "name"> & {
  parent: boolean;
};

/**
 * {
 *  name: string
 *  parent: boolean
 * }
 */

interface Props {
  name: string;
  age?: number;
}

// 복잡한 타입을 설정할 때(유틸리티 타입(Pick, Omit, Exclude), 튜플, 유니온 타입)는 Type Alias 를 사용하고
// 웬만한 경우에는 즉, 위와 같은 상황이 아닐 때는 인터페이스를 사용한다.
const Test = ({ name, age }: Props) => {
  return <div></div>;
};

export default Test;

/**
    interface Address {
        email: string;
        address: string;
    }

    type MayHaveEmail = Partial<Address>;


    MayHaveEmail {
        email?: string;
        address?: string
    }
 */
