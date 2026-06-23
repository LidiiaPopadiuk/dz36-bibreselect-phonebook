import { getFind } from '../redux/find/findSelectors'
import contactsImg from '../img/noContactsYet.jpg'
import { useSelector, useDispatch } from 'react-redux'
// import { removeContact } from '../redux/contacts/contactsSlice'
import { deleteContact } from '../redux/contacts/contactsOperation'
import styled from 'styled-components'

const Button = styled.button`
background-color: "rgb(255, 214, 220)"
`

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
                        return <li key={contact.id}>{contact.name}<span style={{ marginRight: "20px" }}>:</span>{contact.number} <Button id={contact.id} onClick={() => dispatch(deleteContact(contact.id))}>Delete</Button></li>
                    })}
                </ul>
            )}
        </div>
    )
}