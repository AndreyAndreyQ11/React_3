import PropType from "prop-types";
import imgError from "./Error.jpg";
import s from "./Painting.module.css";

const Painting = function ({ id, url = imgError, title, name, profileUrl, price, }) {
    return (
        <div className={s.Painting_container} key={id}>
            <img src={url} alt={title} width="480" />
            <h2 className={s.Painting_text}>{title}</h2>
            <p>
                Автор: <a href={profileUrl}>{name}</a>
            </p>
            <p>Цена: {price} грн</p>
            <p>Описание</p>
            <button type="button">Добавить в корзину</button>
        </div>
    );
};

Painting.PropType = {
    key: PropType.string.isRequired, // обязательно получить
    title: PropType.number
}

export default Painting;


// const Painting = function ({ data }) {

//     return (
//         <ul>
//             {data.map(item => {
//                 const { id, url = imgError, title, price, author: { name: name }, author: { url: profileUrl, } } = item;

//                 return (
//                     <li key={id}>
//                         <img src={url} alt={title} width="480" />
//                         <h2>{title}</h2>
//                         <p>
//                             Автор: <a href={profileUrl}>{name}</a>
//                         </p>
//                         <p>Цена: {price} грн</p>
//                         <p>Описание</p>
//                         <button type="button">Добавить в корзину</button>
//                     </li>
//                 )
//             })}
//         </ul>
//     );
// };



