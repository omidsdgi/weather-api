import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";


interface Props {

}
interface Props {
    city: string;
    setCityState:Dispatch<SetStateAction<string>>;
}

export function SearchForm({city,setCityState}:Props)  {
    const [nameState, setNameState] = useState<string>(city)


    const cityNameChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNameState(e.target.value)
    }
    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCityState(nameState)
    }
    return (
        <form className={'m-auto flex justify-center border-b-4 pb-6 mb-4'} onSubmit={submitHandler}>
            <input className={'border-blue-400 border-4 text-black rounded px-2 py-3 mr-2'} name={'cityName'} type="text" value={nameState} onChange={cityNameChangeHandler} />
            <input className={'bg-primary px-6 py-3 text-white rounded'} type="submit" value={'Search'}/>
        </form>
    );
}