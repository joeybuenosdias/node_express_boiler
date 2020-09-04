import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** components */

/** styles */

/** actions */

/** selectors */

export const Dashboard = () => {
    useEffect(() => {
        const token = window.localStorage.getItem('access-token')
        fetch('http://localhost:3000/api/workouts', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }, [])
    return (
        <div className={'style-me'}>
            Hello Dashboard
        </div>
    );
};

// Dashboard.propTypes = {
// }

//const mapStateToProps = state => ({
//});

//const mapDispatchToProps = {
//};

export default connect()(Dashboard);
