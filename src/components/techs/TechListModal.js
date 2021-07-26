import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions'

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
    // const [techs, setTechs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
    }, [])

    // const getTechs = () => {
    //     setLoading(true);
    //     fetch('/techs')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setTechs(data);
    //             setLoading(false);
    //         })
    // }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technicial List</h4>
                <ul className="collection">
                    {!loading && techs !== null && techs.map(tech => (
                        <TechItem tech={tech} key={tech.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStatetoProps = state => ({
    tech: state.tech
})

export default connect(mapStatetoProps, { getTechs })(TechListModal)
