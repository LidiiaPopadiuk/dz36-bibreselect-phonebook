import { useDispatch } from "react-redux"
import { findContact } from "../redux/find/findSlice"
// import { setFind } from "../redux/contacts/contactsSlice"

export const Filter = () => {

    const dispatch = useDispatch()
    
    return (
        <div>
            <p>Find contacts by name</p>
            <input onInput={(e) => dispatch(findContact(e.target.value))} id="filterInput" type="text" />
        </div>
    )
}