import React, {useState} from 'react';

const PersonalCards = props => {
    const [age, setAge] = useState(props.age)

    const plusAge = () =>{
        setAge(age +1);
    }
        return(
            <>
                <h1>{props.lastName}, {props.firstName}</h1>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {props.hairColor}</h3>
                <button onClick={plusAge}>Birthday Button for {props.firstName} {props.lastName}</button>

                
            </>
        )
    
}
export default PersonalCards;