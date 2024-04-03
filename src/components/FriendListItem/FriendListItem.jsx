import css from "./FriendListItem.module.css"
import clsx from "clsx"
export default function FriendListItem({ friend: {
    avatar, name, isOnline
},}) {
    return (
    <div className={css.content}>
        <img className={css.image} src={avatar} alt="Avatar" width="48" />
        <p className={css.title}>{name}</p>
        <p className={clsx(isOnline?css.online:css.ofline)}>{isOnline?"Online":"Offline"}</p>
    </div>
    );
}