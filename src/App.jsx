import Painting from "./components/Painting/Painting";
import data from "./components/Painting/data";

import ColorPicker from "./components/ColorPicker/ColorPicker";
import colorOptions from './components/ColorPicker/Color.json'

export default function App() {
    return (
        <>
            {data.map(data => (<Painting
                key={data.id}
                url={data.url}
                title={data.title}
                price={data.price}
                tag={data.author.tag}
                name={data.author.name}
                profileUrl={data.author.url}
            />))}
            <ColorPicker options={colorOptions} />

        </>
    );
};

