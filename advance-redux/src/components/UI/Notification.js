import styles from './Notification.module.css'
import {useSelector,useDispatch} from 'react-redux'

const Notification = (props) => {
    let specialclasses=''
    
    if(props.status==='error'){
        specialclasses=styles.error
    }

    if(props.status==='success'){
        specialclasses=styles.success

    }


    const cssclass=`${styles.notification} ${specialclasses}`
    return (
        <section className={cssclass}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}

export default Notification
