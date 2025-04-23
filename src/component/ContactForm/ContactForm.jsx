import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
    const onSubmit = (event) => {
        event.preventDefault();

       console.log("name",event.target[0].value);
       console.log("email",event.target[1].value); 
       console.log("text",event.target[2].value);
       
      
        
    };
  return (
    <section className={styles.container}>
        <div className={styles.Contact_form}>
         <div className={styles.top_btn}>
         <Button text="VIA SUPPORT CHAT" icon={<MdMessage  fontSize="25px"/>}/>
         <Button text="VIA CALL" icon={<IoMdCall  fontSize="25px"/>}/> 
         </div>
         <Button isOutline={true}
          text="VIA EMAIL FORM" icon={< MdEmail  fontSize="25px"/>}/>
          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
                <label htmlfor="text"> Name </label>
                <input type="text" name="name"/>

            </div>
            <div className={styles.form_control}>
                <label htmlfor="email"> Email </label>
                <input type="email" name="email"/>

            </div>
            <div className={styles.form_control}>
                <label htmlfor="text"> Text </label>
                <textarea name="text" rows="8"/>

            </div>
            <div style={{display:"flex",justifyContent:"end"}}>
            <Button text="SUBMIT"/>
            </div>
          </form>
        </div>
          <div className={styles.Contact_image}>
            <img src="/images/contact.svg" alt="contact image"/>
          </div>
          
        </section>

  );
};

export default ContactForm;
