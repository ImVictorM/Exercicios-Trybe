import React, { useEffect, useState } from 'react';
import messageList from '../data/messageList';

function EmailList() {
  const [emails, setEmails] = useState(messageList);

  const shouldAlert = () => {
    const emailsHaveBeenRead =  emails.every(({status}) => status === 1);
    if (emailsHaveBeenRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    };
  };

  const handleEmailStatus = ({target}) => {
    const { id } = target;
    const status = target.getAttribute('status');
    const emailsCopy = [...emails];
    const emailToChangeStatusIndex = emailsCopy.findIndex((email) => {
      const { id: emailId } = email;
      return Number(emailId) === Number(id);
    });
    emailsCopy[emailToChangeStatusIndex].status = Number(status);
    setEmails(emailsCopy);
  };

  const setEmailsAsRead = (option = true) => {
    const emailsRead = emails.map((email) => {
      email.status = option ? 1 : 0;
      return email;
    });
    setEmails(emailsRead);
  };

  useEffect(shouldAlert, [emails]);
  
  return (
    <section>
      <button type="button" onClick={ setEmailsAsRead }>Marcar todos como lido</button>
      <button type="button" onClick={ () => setEmailsAsRead(false)}>Marcar todos como não lido</button>
      <ul>
        {
          emails.map((email) => {
            const { id, title } = email;
            return (
              <li key={ id }>
                <p>{title}</p>
                <button 
                  onClick={ handleEmailStatus }
                  type="button"
                  id={ id }
                  status={ 1 }
                >
                  Marcar como lido
                </button>
                <button 
                  onClick={ handleEmailStatus } 
                  type="button"
                  id={ id }
                  status={ 0 }
                >
                  Marcar como não lido
                </button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default EmailList;
