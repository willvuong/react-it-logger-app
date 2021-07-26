import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ deleteTech, tech: {id, firstName, lastName} }) => {
    const onDeleteTech = () => {
        deleteTech(id)
        M.toast({ html: `Tech: '${firstName} ${lastName}' has been deleted`});
    }
    
    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                <a href="#!" className="secondary-content" onClick={onDeleteTech}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
            
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null, { deleteTech })(TechItem)
