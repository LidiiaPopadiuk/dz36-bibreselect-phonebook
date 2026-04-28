import { getFind } from '../redux/find/findSelectors'
import contactsImg from '../img/noContactsYet.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { removeContact } from '../redux/contacts/contactsSlice'

export const Contacts = () => {
    const dispatch = useDispatch()

    const contacts = useSelector(getFind)
    return (
        <div>
            <h2>Contacts</h2>
            {contacts.length === 0 ? (
                <div>
                    <p>No contacts yet</p>
                    <img style={{ width: '100px', height: '100px' }} src={contactsImg} alt={contactsImg} />
                </div>
            ) : (
                <ul>
                    {contacts.map(contact => {
                        return <li key={contact.id}>{contact.name}: {contact.number} <button id={contact.id} onClick={() => dispatch(removeContact(contact.id))}>Delete</button></li>
                    })}
                </ul>
            )}
        </div>
    )
}