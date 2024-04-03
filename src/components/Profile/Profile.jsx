import css from "./Profile.module.css"

export default function Profile({ profile:{username, tag, location, avatar, stats} }) {
    return (
        <div className={css.container}>
          <div className={css.containerProfile}>
                <img className={css.image}
              src={avatar}
              alt="User avatar"
            />
                <p className={css.title}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
          </div>

          <ul className={css.list}>
            <li className={css.item}>
              <span>Followers</span>
              <span className={css.itemSpan}> {stats.followers}</span>
            </li>
            <li className={css.item}>
              <span>Views</span>
              <span className={css.itemSpan}> {stats.views}</span>
            </li>
            <li className={css.item}>
              <span>Likes</span>
              <span className={css.itemSpan}> {stats.likes}</span>
            </li>
          </ul>
        </div>
    );
}