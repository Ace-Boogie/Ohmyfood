import styles from "./Menu.module.css"
import MenuItem from "@/components/MenuItem/MenuItem";

export default function Menu({menu, type}) {
    return (
        <div className={styles.menu}>
            <h2 className={styles.sectionTitle}>{type}</h2>
            <ul>
                {menu[`${type}`].map((item, index) => (
                    <MenuItem item={item} index={index} key={index}/>
                ))}
            </ul>
        </div>
    )
}