import { useState, useEffect } from 'react'
import TechItem from './TechItem';

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
    }, [])

    const getTechs = () => {
        setLoading(true);
        fetch('/techs')
            .then((res) => res.json())
            .then((data) => {
                setTechs(data);
                setLoading(false);
            })
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technicial List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => (
                        <TechItem tech={tech} key={tech.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal
